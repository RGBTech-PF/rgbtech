const { Router } = require("express");
const { User, Product } = require("../db");
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

router.put("/favorite/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		
		console.log(req.body,"favorite back")
		await User.update(
			{
				favorite:req.body
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
		
		// console.log(req.body,"Cartshop back")
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

router.put("/shoppingHistory/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
        const shopping = req.body
		
	const Shop =await User.findByPk(id)
		// console.log(Shop.user.dataValues,"Shop")
		// let totalProdusct = Shop.dataValues.shoppingHistory.push(shopping)
		console.log(Shop.dataValues.shoppingHistory,"Shoppinggg")
		console.log(req.body,"body")

		
		await User.update(
			{
				shoppingHistory: totalProdusct
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

router.get("userShopHistory/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const Shop =	await User.findByPk(id,{
			attributes: [['shoppingHistory']]
		})
		const produsctShop = await Product.findAll(Shop)
		
		console.log(produsctShop)
		return res.status(201).json(produsctShop);
	} catch (error) {
		res.send("No se encontro el Product del  Id");
	}
});

module.exports = router;
