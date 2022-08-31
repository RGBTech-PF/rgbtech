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
					id,
					cartShop,
					favorite,
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
	});

router.get("/profile/:id", validateToken, async (req, res) => {
	try {
		const { id } = req.params;

		const user = await User.findByPk(id)
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
			shoppingHistory: user.shoppingHistory,
			lastVisited: user.lastVisited,
		}
		res.json(profile)
	} catch (error) {
		res.send(error)
	}

});

router.put("/setCart/:id", validateToken, async (req, res) => {
	try {
		console.log('entro al body')
		const { id } = req.params
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
		const { shoppings } = req.body;
		const user = await User.findByPk(id)
		let history = user.shoppingHistory
		if (history) { history = history, shoppings }
		else { history = shoppings }

		await User.update(
			{
				shoppingHistory: history
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

// router.put("/favorite", async (req, res, next) => {
// 	try {
// 		//Asegurarse de vaciar esta propiedad al ejecutar esta compra
// 		const { id } = req.params;
// 		const { favorite } = req.body;
// 		await User.update(
// 			{
// 				favorite: favorite,
// 			},
// 			{
// 				where: {
// 					id: id,
// 				},
// 			}
// 		);
// 		res.send("Favoritos de usuario actualizado");
// 	} catch (error) {
// 		next(error);
// 	}
// });

router.put("/favorite/:id", async (req, res, next) => {
	try {
		//Asegurarse de vaciar esta propiedad al ejecutar esta compra
		const { id } = req.params;
		const { newfavorite } = req.body;
		const user = await User.findByPk(id)
		let fav = user.favorite
		console.log(fav, "fav")
		if (fav) { fav = [fav, newfavorite].flat() }
		else { fav = newfavorite }

		console.log(fav, "fav");

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
		console.log(req.body, "body delete");
		console.log(deletefavorite, "favorite delete")
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

router.put("/newproductcart/:id", async (req, res, next) => {
	try {
		//Asegurarse de vaciar esta propiedad al ejecutar esta compra
		const { id } = req.params;
		console.log(id, "id user")
		const { newproductcart } = req.body;
		console.log(req.body, "body")
		console.log(newproductcart, "favortis¿")
		const user = await User.findByPk(id)
		let fav = user.cartShop
		console.log(fav, "fav")
		if (fav) { fav = [fav, newproductcart].flat() }
		else { fav = newproductcart }

		console.log(fav, "fav");

		await User.update(
			{
				cartShop: fav
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
router.put("/deleteproductcart/:id", async (req, res, next) => {
	try {
		//Asegurarse de vaciar esta propiedad al ejecutar esta compra
		const { id } = req.params;
		const { deleteproductcart } = req.body;
		console.log(req.body, "body delete");
		console.log(deleteproductcart, "favorite delete")
		await User.update(
			{
				cartShop: deleteproductcart
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

router.put("/clearCart/:id", async (req, res, next) => {
	try {
		//Asegurarse de vaciar esta propiedad al ejecutar esta compra
		const { id } = req.params;
		const { clearCart } = req.body;
		console.log(req.body, "body delete");
		console.log(clearCart, "favorite delete")
		await User.update(
			{
				cartShop: clearCart
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
				where: { id: id },
			}
		);
		res.send("User Confirmations");
	} catch (error) {
		next(error);
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

router.put("/updateLastVisited/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const { lastvisited } = req.body;
		await User.update(
			{
				lastVisited: lastvisited,
			},
			{
				where: {id: id}
			}
		);
		res.send("User Confirmations");
	} catch (error) {
		next(error);
	}
});

// router.get("/cartShop", async (req, res) => {
// 	try {
// 		const { cartShop } = req.body
// 		console.log(cartShop)
// 		const products = await Product.findAll({
// 			where: { id: cartShop },
// 			attributes: { exclude: ['specifications', 'sales'] }
// 		})
// 		res.send(products)
// 	} catch (error) {
// 		res.sendStatus(500)
// 	}
// })

module.exports = router;
