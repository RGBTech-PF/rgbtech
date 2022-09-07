const { Router } = require("express");
const { User, Sale, Product, Brand, Tag, Comment, conn } = require("../db");
const router = Router();
const { sendConfirmationBuyEmail } = require("../middlewares/userMiddleware")
router.post("/new-sale", async (req, res) => {
	try {
		const { userId, products } = req.body;

		products.map(async (product) => {
			const { productId, name, productPrice, month, year, amount } = product;

			const productDetails = await Product.findByPk(productId, {
				include: {
					model: Tag,
					through: { attributes: [] },
				},
			});
			const { brandId, tags } = productDetails.dataValues;
			const tagsId = [];
			tags.map((t) => tagsId.push(t.dataValues.id));
			const newSale = await Sale.create({
				productId,
				name,
				productPrice,
				month,
				year,
				amount,
				totalPrice: productPrice * amount,
			});

			const user = await User.findAll({
				where: {
					id: userId
				}
			})
			
			const info = {
				nombre: user[0].dataValues.user,
				products: {
					mail: user[0].dataValues.mail,
					name: name,
					totalPrice: newSale.dataValues.totalPrice,
					month : month
				}
			}
			sendConfirmationBuyEmail(info)
			await newSale.addTags(tagsId);
			await newSale.setBrand(brandId);
			await newSale.setUser(userId);

			const stockProduct = await Product.findByPk(productId);
			const updatedStock = stockProduct.stock - amount;
			await Product.update(
				{
					stock: updatedStock,
				},
				{
					where: { id: productId },
				}
			);
		});
		res.send("producto comprado");
	} catch (error) {
		console.log(error);
	}
});

router.put("/comments", async (req, res) => {
	try {
		const { id, post } = req.body;
		const { comment, rating, user, profilePhoto } = post;
		const sale = await Sale.findByPk(id);
		const productId = sale.dataValues.productId;
		const newComment = await Comment.create({
			comment,
			rating,
			user,
			profilePhoto,
		});
		await newComment.addProduct(productId);
		await Sale.update(
			{
				commented: true,
			},
			{
				where: {
					id: id,
				},
			}
		);
	} catch (error) {
		res.sendStatus(500);
	}
});

module.exports = router;
