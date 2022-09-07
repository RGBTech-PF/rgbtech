const { Router } = require("express");

const { Award, User } = require("../db.js")
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


router.put('/claim-award', async(req, res) => {
  const {id, points, userId} = req.body
  try {
    const user =  await User.findByPk(userId)
    const RGBpoints = user.dataValues.RGBpoint - points
    await User.update({
      RGBpoint: RGBpoints
    }, {
      where: {
        id: userId
      }
    })
    const award = await Award.findByPk(id)
    const newStock = award.dataValues.stock - 1
    await Award.update({
      stock:newStock
    }, {
      where: {
        id: id
      }
    })
    res.send(201)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})
module.exports = router;