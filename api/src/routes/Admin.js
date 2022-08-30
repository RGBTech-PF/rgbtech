const { Router } = require("express");
const { User, Venta, Products, Brand, Tag } = require("../db");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const {validateToken} = require("../middlewares/userMiddleware.js");

const router = Router();


router.get('/dashboard', validateToken, async(req, res) => {

})


module.exports = router;




