const { Router } = require("express");
const { User, Sale, Product, Brand, Tag } = require("../db");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const {validateToken} = require("../middlewares/userMiddleware.js");

const router = Router();

/* 
users
sales
stock

*/



router.get('/dashboard', validateToken, async(req, res) => {
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
      },
      {
        model: User,
        through: { attributes: [] },
      },
      {
        model: Brand,
        through: { attributes: [] },
      },
    ],
  });
})


module.exports = router;