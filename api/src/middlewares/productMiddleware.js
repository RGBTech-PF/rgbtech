const { Product, Tag } = require("../db.js");
const { Op } = require("sequelize");

module.exports = {
	setQueryConditions: (req, res, next) => {
		const { order, column, name, tag, brand, price} = req.query;
		const sorting = [];
		column && order ? sorting.push([column, order]) : null;
		//Search by name || brand
		const whereConditions = {};
		name ? (whereConditions.name = { [Op.iLike]: `%${name}%` }) : null;
		brand ? (whereConditions.brandId = { [Op.eq]: brand }) : null;
		price ? (whereConditions.price = {[Op.gte]: price}): null
		whereConditions.stock = {[Op.gt]: 0}
		console.log(whereConditions)
		//Search by tag
		const tagQuery = {};
		tag ? (tagQuery.name = { [Op.iLike]: `%${tag}%` }) : null;
		// searchConditions
		const queryConditions = {
			order: sorting,
			where: whereConditions,
			include: {
				model: Tag,
				through: { attributes: [] },
				where: tagQuery,
			},
		};
		req.body.queryConditions = queryConditions;
		//query pagination
		req.body.limit = 10;
		req.body.offset =
			req.body.limit * req.query.pageNumber - req.body.limit || 0;
		return next();
	},
	setPagination: async (req, res, next) => {
		try {
			const { limit } = req.body;
			const { pageNumber } = req.query;
			//count = total de productos que coinciden con el query)
			let queryProducts = await Product.findAll(req.body.queryConditions);
			req.body.count = queryProducts.length;
			//totalPages = determina el número de paginas - 10 productos por pagina
			req.body.totalPages = Math.ceil(req.body.count/ limit);	

			if (req.body.totalPages > req.query.pageNumber) {
				let prueba = req.originalUrl.slice(9, req.originalUrl.length)
				const nextUrl = prueba.replace(
					`pageNumber=${req.query.pageNumber}`,
					`pageNumber=${Number(req.query.pageNumber) + 1}`
				);
				req.body.nextPage = nextUrl;
			} else if (req.body.totalPages == pageNumber) {
				req.body.nextPage = null;}
				return next();
		} catch (error) {
			res.status(501).send({ msg: "middleware setPagination failed" });
		}
	},
	checkPost: (req, res, next) => {
		const {
			name,
			price,
			description,
			specifications,
			img,
			stock,
			onDiscount,
			discountPercentage,
			freeShipping,
			tags,
			brand,
		} = req.body;

		if (
			name &&
			price &&
			description &&
			stock &&
			brand &&
			tags
		) {
			let productCreate = {
				name,
				price,
				description,
				specifications: specifications || "No specifications", 
				stock,
				tags,
				brand,
				img,
			};
			onDiscount
				? (productCreate = { ...productCreate, onDiscount, discountPercentage })
				: null;
			freeShipping
				? (productCreate = { ...productCreate, freeShipping })
				: null;
			req.body.product = productCreate;
			return next();
		} else {
			res.status(404).send("Falta enviar datos obligatorios");
		}
	},
};
