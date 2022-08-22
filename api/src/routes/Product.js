const { Router } = require('express');
const { Product , Tag, Comment } = require('../db.js');
const {setQueryConditions, setPagination, checkPost} = require('../middlewares/productMiddleware.js')

const router = Router();

router.get("/", setQueryConditions, setPagination, async(req,res)=>{
  try {
    const {count, nextPage, limit, offset, queryConditions, paginationPages} = req.body
    const products = await Product.findAll({...queryConditions, limit, offset})
    const response = {
      count,
      data: products,
      nextPage,
      pageNumbers: paginationPages
    }
    res.status(200).send(response)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let productEspecific = await Product.findByPk(id, {
      include : [
        {
          model: Tag,
          through : {attributes: []}
        },
        {
          model: Comment,
          through : {attributes: []}
        }
      ]
    })
    return res.status(201).json(productEspecific)
  } catch (error) {
    res.send("No se encontro el Product del  Id")
  }
})

router.post("/", checkPost, async (req, res) => {
  try{
    const newProduct = await Product.create(req.body.product)
    await newProduct.setBrand(brand)
    await newProduct.addTags(tag)
    return res.status(201).send({msg: 'Product created successfully', statusCode : 201})
  } catch (error) {
    return res.status(400).send({msg: 'Ops! Something went wrong', statusCode : 400})
  }
});


router.put('/:id', async(req,res,next)=>{
    try {
        const {id}=req.params
        const{name, price,description, specifications,img,stock, onDiscount,discountPercentage,freeShipping}=req.body
        await Product.update({
            name:name,
            price:price,
            description:description,
            specifications:specifications,
            img:img,
            stock:stock,
            onDiscount:onDiscount,
            discountPercentage:discountPercentage,
            freeShipping:freeShipping,
        },
        {
            where:{
                id:id
            }
        })
        res.send("updated product")

    } catch (error) {
        next(error)  
    }
} )

router.delete('/:id', async (req,res,next)=>{
    try {
        const {id}= req.params;
        await Product.destroy({
            where:{
                id:id
            }
        })
        res.send("Delete product")
    } catch (error) {
        next(error)
    }
})

module.exports = router;