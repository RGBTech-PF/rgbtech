
const { Products } = require("./awards")

const { Award } = require("../db")


const createAllProductsOfAwards = () => {
  Products.map(async (product, index) => {
    const { name, description, specifications, points, img, stock, freeShipping, } = product
    const newProduct = await Award.create({
      name,
      description,
      points,
      specifications,
      img,
      stock,
      freeShipping,
    })

  })
  console.log("Awards added to db")
}

module.exports = createAllProductsOfAwards;