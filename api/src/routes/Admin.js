const { Router } = require("express");
const { User, Sale, Product, Brand, Tag, conn } = require("../db");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const {validateToken} = require("../middlewares/userMiddleware.js");


const router = Router();

/* 
users
sales
stock

*/
const dashboardMiddleware = (req, res, next) => {
  const { order, column, tag, brand, price} = req.query;
}


router.get('/', async(req, res) => {

  let stock = await Product.findAll({attributes: [[conn.fn('SUM', conn.col('stock')), "totalStock"]]})
  let totalSales = await Sale.findAll({attributes: [[conn.fn('SUM', conn.col('price')), "totalSales"]]})
  stock = stock[0]
  totalSales = totalSales[0]
  
  const users = await User.findAndCountAll()

  //Para el historial de compras
  let sales = await Sale.findAll({
    include: [
      {
        model: Tag,
        through: { attributes: [] },
      },
      {
        model: Product,
        through: { attributes: [] },
      }
    ],
  });
  res.json({
    sales,
    totalSales,
    stock,
    users
  })
})


module.exports = router;