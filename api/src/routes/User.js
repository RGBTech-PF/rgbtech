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
	checkUserRegistrationGoogle,
	uploadExistingUserPhoto,
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

router.post("/registerGoogle", async (req, res) => {
	try {
		let { user, mail, profilePhoto, password } = req.body;
		const findedUser = await User.findOne({
			where: {
				mail: mail,
			},
		});
		if (!findedUser) {
			const hashedPassword = await bcrypt.hash(password, 10);
			const newUser = await User.create({
				user,
				profilePhoto,
				mail,
				password: hashedPassword,
				userVerificate: true,
				LogGoogle: true,
			});
			const { id, cartShop, favorite } = newUser;
			const infoFront = { id: id, cartShop: cartShop, favorite: favorite };
			const accessToken = jwt.sign(infoFront, process.env.SECRET);
			console.log(accessToken);
			return res.status(200).json({
				mssage: "usuario autenticado",
				token: accessToken,
			});
		} else {
			const { id, cartShop, favorite } = findedUser.dataValues;
			const infoFront = { id: id, cartShop: cartShop, favorite: favorite };
			const accessToken = jwt.sign(infoFront, process.env.SECRET);
			console.log(accessToken);
			return res.status(200).json({
				mssage: "usuario autenticado",
				token: accessToken,
			});
		}
	} catch (error) {
		return res.send(error);
	}
});

router.post(
	"/login",
	checkLoginBody,
	checkUserRegistration,
	async (req, res) => {
		try {
			const { findedUser, logged } = req.body;
			if (logged) {
				const { id, cartShop, favorite } = findedUser;
				const infoFront = { id: id, cartShop: cartShop, favorite: favorite };
				const accessToken = jwt.sign(infoFront, process.env.SECRET);
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

// router.post("/loginGoogle", findOrCreate,async (req, res) => {
// 		try {
// 			const { mail } = req.body;
// 			console.log(req.body,"ee")
// 			const user = await User.findOne({
// 				where: {
// 					mail: mail,
// 				},
// 			});
// 			if (user) {
// 				const { id } = user.dataValues
// 				const logedUser = {id
// 					// id,
// 					// user,
// 					// mail,
// 					// profilePhoto,

// 					// isAdmin,
// 				}
// 				const accessToken = jwt.sign(logedUser, process.env.SECRET);
// 				console.log(accessToken)
// 				return res.status(200).json({
// 					mssage: "usuario autenticado",
// 					token: accessToken,
// 				});
// 			}
// 		} catch (error) {
// 			res.json({ message: error });
// 		}
// 	}
// );

router.put("/modifyUser", uploadExistingUserPhoto, async (req, res) => {
	try {
		const { id, user, mail, profilePhoto } = req.body;
		if (!id || !user || !mail || !profilePhoto) {
			return res.send("insufficient information to continue");
		}
		await User.update(
			{
				user: user,
				mail: mail,
				profilePhoto: profilePhoto,
			},
			{
				where: {
					id: id,
				},
			}
		);
		res.json({ msg: "User updated successfully" });
	} catch (error) {
		console.log("error", error);
		res.json({ error: error });
	}
});

router.get("/profile/:id", validateToken, async (req, res) => {
	try {
		const { id } = req.params;

		const user = await User.findByPk(id);
		console.log("user", user);
		if (!Object.keys(user).length) {
			res.sendStatus(404);
		}
		const profile = {
			id: user.id,
			user: user.user,
			mail: user.mail,
			profilePhoto: user.profilePhoto,
			cartShop: user.cartShop,
			favorite: user.favorite,
			isAdmin: user.isAdmin,
			RGBpoint: user.RGBpoint,
			LogGoogle: user.LogGoogle,
			lastVisited: user.lastVisited,
			shoppingHistory: user.shoppingHistory,
		};
		res.json(profile);
	} catch (error) {
		res.send(error);
	}
});

router.put("/setCart/:id", validateToken, async (req, res) => {
	try {
		console.log("entro al body");
		const { id } = req.params;
		const user = await User.findByPk(id);
		user.cartShop = [...user.cartShop, ...req.params];
		res.sendStatus(201);
	} catch (error) {
		res.send(error);
	}
});

router.put("/shoppingHistory/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const { shoppings } = req.body;
		const user = await User.findByPk(id);
		let history = user.shoppingHistory;
		console.log(history, "fav");
		if (history) {
			(history = history), shoppings;
			console.log(history);
		} else {
			history = shoppings;
		}

		await User.update(
			{
				shoppingHistory: history,
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

// router.put("/favourites/:id", async (req, res, next) => {
// 	try {
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

router.put("/favourites/:id", async (req, res) => {
	try {
		const { id } = req.params;
		console.log(id);
		const { newfavorite } = req.body;
		const user = await User.findByPk(id);
		let favorite = user.dataValues.favorite;
		favorite == null ? (favorite = []) : null;
		if (!favorite?.length) {
			favorite = newfavorite;
		} else {
			favorite = [...favorite, newfavorite].flat();
		}
		await User.update(
			{
				favorite,
			},
			{
				where: {
					id: id,
				},
			}
		);
		res.send("Favoritos de usuario actualizado");
	} catch (error) {
		res.send(error);
	}
});

router.put("/deletefavorite/:id", async (req, res, next) => {
	try {
		//Asegurarse de vaciar esta propiedad al ejecutar esta compra
		const { id } = req.params;
		const { deletefavorite } = req.body;
		console.log(req.body, "body delete");
		console.log(deletefavorite, "favorite delete");
		await User.update(
			{
				favorite: deletefavorite,
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

router.put("/puntuacion/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		let user = await User.findByPk(id);
		console.log(req.body);
		valor = req.body.RGBpoint;
		const newpuntuacion = user.RGBpoint + valor;
		await User.update(
			{
				RGBpoint: newpuntuacion,
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

router.put("/newproductcart/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const { newproductcart } = req.body;
		const user = await User.findByPk(id);
		let cartShop = user.dataValues.cartShop;
		cartShop == null ? (cartShop = []) : null;
		if (!cartShop?.length) {
			cartShop = newproductcart;
		} else {
			cartShop = [...cartShop, newproductcart].flat();
		}
		await User.update(
			{
				cartShop,
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
		await User.update(
			{
				cartShop: deleteproductcart,
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
		console.log(clearCart, "favorite delete");
		await User.update(
			{
				cartShop: clearCart,
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

// router.put("/setCart/:id", async (req, res, next) => {
// 	try {
// 		const { id } = req.params;
// 		const { cartShop } = req.body;
// 		await User.update(
// 			{
// 				cartShop: cartShop,
// 			},
// 			{
// 				where: {
// 					id: id,
// 				},
// 			}
// 		);
// 		res.send("User Confirmations");
// 	} catch (error) {
// 		next(error);
// 	}
// });

router.post("/addComment", async (req, res) => {
	try {
		const { comment, rating, user, profilePhoto, product } = req.body;
		console.log(product);
		if (!comment || !rating || !user || !profilePhoto) {
			res.send("informacion insuficiente para agregar un comentario");
		}
		const newComment = await Comment.create({
			comment,
			rating,
			user,
			profilePhoto,
		});
		await newComment.addProduct(product);
		res.send("Comentario agregado correctamente");
	} catch (error) {
		res.send(error);
	}
});

router.put("/updateLastVisited/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const { idp } = req.body;
		console.log(id);
		const user = await User.findByPk(id);
		let lastVisited = user.dataValues.lastVisited;
		if (lastVisited && lastVisited.length > 13) {
			lastVisited.splice(-1, 1);
		}
		await User.update(
			{
				lastVisited: [idp, ...lastVisited],
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

module.exports = router;
