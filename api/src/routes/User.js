const { Router } = require("express");
const { User } = require("../db");
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
const {filtrado} = require ("../controllers/prueba")

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

		const user = await User.findByPk( id )
		if (!Object.keys(user).length) {
			res.sendStatus(404)
		}
		const profile = {
			user: user.dataValues.user,
			mail: user.dataValues.mail,
			profilePhoto: user.dataValues.profilePhoto,
			cartShop: user.dataValues.cartShop,
			favorite: user.dataValues.favorite,
			isAdmin: user.dataValues.isAdmin,
		}
		res.json(profile)
	} catch (error) {
		res.send(error)
	}

});
router.put("/setCart/:id", validateToken, async(req, res)=>{
	try {
		console.log('entro al body')
		const {id} = req.params
		const user = await User.findByPk(id)
		user.cartShop = [...user.cartShop, ...req.params] 
		res.sendStatus(201)
	} catch (error) {
		res.send(error)
	}
})

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

router.put("/favorite/:id", async (req, res, next) => {
	try {
		//Asegurarse de vaciar esta propiedad al ejecutar esta compra
		const { id } = req.params;
		console.log(id,"id user")
		const { newfavorite } = req.body;
		console.log(req.body,"body")
		console.log(newfavorite,"favortis¿")
		const user = await User.findByPk(id) 
		let fav = user.favorite;
		console.log(fav,"fav")
		if(fav){fav = [fav,newfavorite].flat()}
		else{fav = newfavorite}
		
		console.log(fav,"fav");

		await User.update(
			{
				favorite: fav
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
router.put("/deletefavorite/:id", async (req, res, next) => {
	try {
		//Asegurarse de vaciar esta propiedad al ejecutar esta compra
		const { id } = req.params;
		const { deletefavorite } = req.body;
		console.log(req.body,"body delete");
		console.log(deletefavorite,"favorite delete")
		await User.update(
			{
				favorite: deletefavorite
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
