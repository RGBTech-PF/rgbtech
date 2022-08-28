const { Router } = require("express");
const { User, Comment } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
	validateToken,
	checkSingupBody,
	uploadNewUserPhoto,
	sendConfirmationEmail,
	checkLoginBody,
	checkUserRegistration,
} = require("../middlewares/userMiddleware.js");
const { htmlMail } = require("../Utils/EmailTemplate.js");
const nodemailer = require("nodemailer");

const router = Router();

router.post(
	"/register",
	checkSingupBody,
	uploadNewUserPhoto,
	async (req, res) => {
		let { password, newUser } = req.body;
		try {
			const hashedPassword = await bcrypt.hash(password, 10);
			const user = await User.create({
				...newUser,
				password: hashedPassword,
			});

			await sendConfirmationEmail({ id: user.id, mail: user.mail });
			return res.status(201).send("User created successfully");
		} catch (error) {
			console.log(error);
			return res.status(500).send("Internal Server Error");
		}
	}
);

router.post(
	"/login",
	checkLoginBody,
	checkUserRegistration,
	async (req, res) => {
		try {
			const { findedUser, logged } = req.body;
			console.log("logged", logged);
			if (logged) {
				const { id, user, mail, profilePhoto, cartShop, favorite, isAdmin } =
					findedUser;
				const logedUser = {
					id
				};
				const accessToken = jwt.sign(logedUser, process.env.SECRET);
				return res.status(200).json({
					mssage: "usuario autenticado",
					token: accessToken,
				});
			}
		} catch (error) {
			res.json({ message: error });
		}
	}
);

router.get("/profile/:id", validateToken, async (req, res) => {
	try {
		const { id } = req.params;

		const user = await User.findByPk({ id })
		if (!Object.keys(user).length) {
			res.sendStatus(404)
		}
		const profile = {
			user: user.user,
			mail: user.mail,
			profilePhoto: user.profilePhoto,
			cartShop: user.cartShop,
			favorite: user.favorite,
			isAdmin: user.isAdmin,
		}
		res.json(profile)
	} catch (error) {
		res.send(error)
	}

});

router.post("/addComment", async (req, res) => {
	try {
		const { comment, rating, user, profilePhoto, product } = req.body;
		console.log(product)
		if (!comment || !rating || !user || !profilePhoto) {
			res.send("informacion insuficiente para agregar un comentario")
		}
		const newComment = await Comment.create({
			comment,
			rating,
			user,
			profilePhoto
		})
		await newComment.addProduct(product)
		res.send("Comentario agregado correctamente")
	} catch (error) {
		res.send(error)
	}
});

router.put("/shoppingHistory/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const { shopping } = req.body;
		await User.update(
			{
				shoppingHistory: shoppingHistory.push(shopping),
			},
			{
				where: {
					id: id,
				},
			}
		);
		res.send("updated shopping History");
	} catch (error) {
		next(error);
	}
});

router.put("/favorite", async (req, res, next) => {
	try {
		//Asegurarse de vaciar esta propiedad al ejecutar esta compra
		const { id } = req.params;
		const { favorite } = req.body;
		await User.update(
			{
				favorite: favorite,
			},
			{
				where: {
					id: id,
				},
			}
		);
		res.send("Favoritos de usuario actualizado");
	} catch (error) {
		next(error);
	}
});

router.put("/confirmation/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		await User.update(
			{
				userVerificate: true,
			},
			{
				where: {
					id: id,
				},
			}
		);
		res.send("User Confirmations");
	} catch (error) {
		next(error);
	}
});

router.put("/setCart/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const { cartShop } = req.body;
		await User.update(
			{
				cartShop: cartShop,
			},
			{
				where: {
					id: id,
				},
			}
		);
		res.send("User Confirmations");
	} catch (error) {
		next(error);
	}
});

module.exports = router;
