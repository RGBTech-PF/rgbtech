const { User } = require("../db.js");
const { cloudinary } = require("../Utils/cloudinary.js");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const {
	htmlMail,
	htmlMailSuccessfulPayment,
} = require("../Utils/EmailTemplate.js");
const bcrypt = require("bcrypt");

module.exports = {
	checkSingupBody: async (req, res, next) => {
		const { user, password, mail } = req.body;

		if (user && password && mail) {
			req.body.newUser = {
				user,
				mail,
				password,
			};

			const coincidenceUser = await User.findAll({
				where: {
					user: user,
				},
			});

			console.log("coincidenceUser", coincidenceUser);

			if (coincidenceUser.length) {
				return res.status(401).send({ msg: "user" });
			}

			const coincidenceMail = await User.findAll({
				where: {
					mail: mail,
				},
			});

			console.log("coincidenceMail", coincidenceMail);

			if (coincidenceMail.length) {
				return res.status(401).send({ msg: "mail" });
			}

			next();
		} else {
			return res.status(400).send("Mandatory data missing");
		}
	},

	uploadNewUserPhoto: async (req, res, next) => {
		const { profilePhoto } = req.body;
		if (profilePhoto) {
			const uploadedResponse = await cloudinary.uploader.upload(profilePhoto, {
				upload_preset: "RGBtech",
			});
			req.body.newUser.profilePhoto = uploadedResponse.secure_url;
			return next();
		} else {
			req.body.newUser.profilePhoto = null;
			return next();
		}
	},
	uploadExistingUserPhoto: async (req, res, next) => {
		const { profilePhoto } = req.body;
		if (profilePhoto) {
			const uploadedResponse = await cloudinary.uploader.upload(profilePhoto, {
				upload_preset: "RGBtech",
			});
			req.body.profilePhoto = uploadedResponse.secure_url;
			return next();
		} else {
			req.body.profilePhoto = null;
			return next();
		}
	},
	sendConfirmationEmail: async (newUser) => {
		let emailToken = jwt.sign(newUser, process.env.SECRET, { expiresIn: "1d" });
		emailToken = emailToken.replaceAll(".", "'");
		let url = `https://rgbtech.vercel.app/confirmation/${emailToken}`;
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "rgbtechPF@gmail.com",
				pass: "qqilqandbimpiaxu",
			},
		});
		const html = htmlMail(url);
		await transporter.sendMail({
			from: "rgbtech@tech.com",
			to: newUser.mail,
			subject: "Confirmation",
			html,
		});
	},

	sendConfirmationBuyEmail: async (newUser) => {
		console.log("newUser", newUser);
		let emailToken = jwt.sign(newUser, process.env.SECRET);
		emailToken = emailToken.replaceAll(".", "'");
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "rgbtechPF@gmail.com",
				pass: "qqilqandbimpiaxu",
			},
		});
		const html = htmlMailSuccessfulPayment(newUser.nombre, newUser.products);
		await transporter.sendMail({
			from: "rgbtech@tech.com",
			to: newUser.products.mail,
			subject: "successful order confirmation",
			html,
		});
	},

	checkLoginBody: (req, res, next) => {
		const { user, password } = req.body;
		if (!user || !password) {
			return res.status(400).send("Mandatory data missing");
		} else return next();
	},

	checkUserRegistration: async (req, res, next) => {
		const { user, password } = req.body;
		try {
			const findedUser = await User.findOne({
				where: {
					user: user,
				},
			});

			if (findedUser === null) return res.sendStatus(404);
			if (!bcrypt.compareSync(password, findedUser.password)) {
				return res.sendStatus(403);
			}

			req.body.logged = true;

			if (!findedUser?.userVerificate) {
				return res.sendStatus(401);
			}
			req.body.findedUser = findedUser;
			return Object.keys(findedUser).length ? next() : res.sendStatus(404);
		} catch {
			return res.sendStatus(500);
		}
	},

	checkUserRegistrationGoogle: async (req, res, next) => {
		const { mail } = req.body;
		try {
			const findedUser = await User.findOne({
				where: {
					email: mail,
				},
			});

			if (findedUser === null) return res.sendStatus(404);
			console.log(findedUser, "encontré el usuario");

			req.body.logged = true;

			if (!findedUser?.userVerificate) {
				return res.sendStatus(401);
			}
			req.body.findedUser = findedUser;
			return Object.keys(findedUser).length ? next() : res.sendStatus(404);
		} catch {
			return res.sendStatus(500);
		}
	},

	validateToken: (req, res, next) => {
		const authHeader = req.headers["authorization"];
		const token = authHeader && authHeader.split(" ")[1];
		if (token === null) return res.sendStatus(401);
		else {
			jwt.verify(token, process.env.SECRET, (err, user) => {
				if (err) {
					return res.status(403).send("Access denied");
				} else {
					return next();
				}
			});
		}
	},
};
