const { Router } = require("express");
const { User, Sale, Product, Brand, Tag, conn } = require("../db");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const { validateToken } = require("../middlewares/userMiddleware.js");

const router = Router();

router.post("/sale", async (req, res) => {
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

		console.log("tagsId", tagsId);
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
});

router.get("/dashboard", async (req, res) => {
	const { year } = req.query;
	const conditions = {};
	year ? (conditions.year = year) : null;
	let stock = await Product.findAll({
		attributes: [[conn.fn("SUM", conn.col("stock")), "totalStock"]],
	});
	let totalSales = await Sale.findAll({
		attributes: [[conn.fn("SUM", conn.col("totalPrice")), "totalSales"]],
	});
	stock = stock[0];
	totalSales = totalSales[0];

	const users = await User.findAndCountAll({
		attributes: { exclude: ["password"] },
	});
	let sales = await Sale.findAll({
		include: [
			{
				model: Tag,
				through: { attributes: [] },
			},
		],
	});

	const monthSales = {};
	sales.forEach((sale) => {
		const month = sale.month;
		if (!monthSales.hasOwnProperty(month)) {
			monthSales[month] = sale.totalPrice;
		} else {
			monthSales[month] = monthSales[month] + sale.totalPrice;
		}
	});

	const monthProducts = {};
	sales.forEach((sale) => {
		const month = sale.month;
		if (!monthProducts.hasOwnProperty(month)) {
			monthProducts[month] = sale.amount;
		} else {
			monthProducts[month] = monthProducts[month] + sale.amount;
		}
	});

	const ventasMes = [];
	for (const mes in monthSales) {
		ventasMes.push({ month: mes, amount: monthSales[mes] });
	}

	const productosMes = [];
	for (const mes in monthProducts) {
		productosMes.push({ month: mes, amount: monthProducts[mes] });
	}

	res.json({
		monthSales: ventasMes,
		monthProducts: productosMes,
		sales: sales.length,
		totalSales: totalSales.dataValues.totalSales,
		stock: stock.dataValues.totalStock,
		users: users.count,
	});
});

router.get('/products', async (req, res) => {
  try {
    const condition = {
      where: {
        disabled: false
      },
      include: {
                model: Tag,
                through: { attributes: [] },
            }
    }
    const products = await Product.findAll(condition)
    if(products.length === 0) return res.status(200).send(products)
    const final = {response: []}
    products.map(async (product, index) => {
      const brandName = await Brand.findByPk(product.dataValues.brandId)
      const objeto = {
        ...product.dataValues,
        brand: {
          name: brandName.dataValues.name,
          id: product.dataValues.brandId
        }
      }
      final.response.push(objeto)
      if(products.length == index + 1 ) {
        res.status(200).send(final)
      }
    })
  } catch (error) {
    res.sendStatus(500)
  }
});

router.get('/tags-brands', async (req, res)=>{
  try {
    const tags = await Tag.findAll({
      attributes: ['id', 'name'],
      where : {
        disabled: false
      }
    })
    const brands = await Brand.findAll({
      attributes: ['id', 'name'],
      where : {
        disabled: false
      }
    })
    const response = {
      brands, tags
    }
    res.status(200).send(response)
  } catch (error) {
    res.status(500).send('Internal error server')
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.findAndCountAll({attributes: {exclude:['password', 'cartShop', 'favorite', 'shoppingHistory']} })
    res.json(users)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.put("/users/roles", async (req, res) => {
  try {
    const {id, isAdmin} = req.body
    await User.update({
      isAdmin: !isAdmin
    }, 
    {
      where: {
        id: id
      }
    })
    res.sendStatus(201)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.put("/products/state", async (req, res) => {
  try {
      const { id, disabled } = req.body;
      await Product.update({
    disabled: !disabled
  },
  {
    where: {
              id: id,
          },
  });
      res.send("State updated");
  } catch (error) {
      res.sendStatus(500)
  }
});

router.put('/tags/update', async(req, res) => {
  const {id, disabled} = req.body
  try {
    await Tag.update({
      disabled: !disabled
    },
    {
      where: {
                id: id,
            },
    })
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.put('/brands/update', async(req, res) => {
  const {id, disabled} = req.body
  try {
    await Brand.update({
      disabled: !disabled
    },
    {
      where: {
                id: id,
            },
    })
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
});

router.put('tags/admin-update', async (req, res) => {
  const {id, name} = req.body
  try {
    await Tag.update({
      name: name
    },
    {
      where: {
                id: id,
            },
    })
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.put('/brands/admin-update', async (req, res) => {
  const {id, name} = req.body
  try {
    await Brand.update({
      name: name
    },
    {
      where: {
                id: id,
            },
    })
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
});

router.post('/products/admin-update', async (req, res)=>{
  console.log('entro')
  try {
    console.log(req.body)
    const {id, name, price, stock, description, onDiscount, discountPercentage, specifications, img, freeShipping} = req.body
    Product.update({
      id,
      name,
      price,
      stock,
      description,
      onDiscount,
      discountPercentage,
      specifications,
      img,
      freeShipping
    }, {
      where: {
        id: id
      }
    })
  } catch (error) {
    console.log(error)
  }
});





module.exports = router;
