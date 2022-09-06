const { Router } = require("express");

const { Award } = require("../db.js")
const { Op } = require("sequelize");

const router = Router();

router.post("/", async (req, res) => {

  try {
    const { name, stock, points, description, specifications, img, freeShipping } = req.body
    if (!name || !stock || !points || !description || !specifications || !img || !freeShipping) {
      return res.send("mandatory information is missing to continue")
    }
    let newAward = await Award.create({
      name,
      description,
      stock,
      points,
      img,
      specifications,
      freeShipping
    })
    res.send("creating correctly")
  } catch (error) {
    res.sendStatus(500)
  }
})

router.get("/", async (req, res) => {
  try {
    const findAwards = await Award.findAll({where : {
      stock : {[Op.gt]: 0}
    }})
    res.json(findAwards)
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }  
})
module.exports = router;