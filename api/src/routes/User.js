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
const {htmlMail} = require('../Utils/EmailTemplate.js')
const nodemailer = require('nodemailer')


const router = Router();


router.post("/register", checkSingupBody, uploadNewUserPhoto, async (req, res) => {
	let { password, newUser } = req.body;
	try {
		const hashedPassword = await bcrypt.hash(password, 10);
	  const user = await User.create({
			...newUser,
			password: hashedPassword,
		});
		
		await sendConfirmationEmail({id : user.id, mail: user.mail})
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
			const { findedUser, password } = req.body;
			if (bcrypt.compareSync(password, findedUser.password)) {
				const { id, user, mail, profilePhoto, cartShop, favorite, isAdmin } = findedUser;
				const logedUser = {
					id,
					user,
					mail,
					profilePhoto,
					cartShop,
					favorite,
					isAdmin,
				};
				const accessToken = jwt.sign(logedUser, process.env.SECRET);
				return res.status(200).json({
					mssage: "usuario autenticado",
					token: accessToken,
				});
			} else return res.json({ message: "contraseña incorrecta" });
		} catch (error) {
			res.json({ message: error });
		}
	}
);

router.put("/shoppingHistory/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		
		await User.update(
			{
				shoppingHistory: shoppingHistory.push(req.body),
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
				userVerificate:true
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
		
		console.log(req.body,"Cartshop back")
		await User.update(
			{
				cartShop:req.body
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

router.get("userCart/:id", async (req, res) => {
	try {
		const { id } = req.params;
		let uuser = await User.findByPk(id);
		let carshop = uuser.cartShop
		console.log(carshop)
		return res.status(201).json(carshop);
	} catch (error) {
		res.send("No se encontro el Product del  Id");
	}
});

module.exports = router;
