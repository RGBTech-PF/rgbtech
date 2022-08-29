const { User } = require("../db.js");
const { cloudinary } = require("../Utils/cloudinary.js");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { htmlMail } = require("../Utils/EmailTemplate.js");
const bcrypt = require("bcrypt");

module.exports = {
	checkSingupBody: (req, res, next) => {
		const { user, password, mail } = req.body;
		if (user && password && mail) {
			req.body.newUser = {
				user,
				mail,
				password,
			};
			const coincidences = User.findAll({
				where: {
					user: user,
				},
			});
			return coincidences.length
				? res.status(400).send("Already registered user")
				: next();
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
			req.body.newUser.profilePhoto = "Image_Default";
			return next();
		}
	},
	sendConfirmationEmail: async (newUser) => {
		let emailToken = jwt.sign(newUser, process.env.SECRET, { expiresIn: "1d" });
		emailToken = emailToken.replaceAll(".", "'");
		let url = `http://localhost:5174/confirmation/${emailToken}`;
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
			console.log("findedUser linea 84", Boolean(findedUser));

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
		const token = authHeader && authHeader.split(' ')[1]
		if (token === null) return res.sendStatus(401)
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
