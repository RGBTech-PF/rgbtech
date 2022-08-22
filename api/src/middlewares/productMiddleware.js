const {Product, Tag} = require('../db.js')
const {Op} = require('sequelize')

module.exports = {
  setQueryConditions : (req, res, next) => {
    const {order, column, name, tag, brand} = req.query;
    const sorting = [];
    column && order ? sorting.push([column, order]) : null
    //Search by name || brand
    const whereConditions = {}
    name ? whereConditions.name = {[Op.iLike] : `%${name}%`} : null
    brand ? whereConditions.brandId = {[Op.eq] : brand} : null
    //Search by tag
    const tagQuery = {}
    tag ? tagQuery.name = {[Op.iLike] : `%${tag}%`} : null
    // searchConditions
    const queryConditions = {
      order: sorting,
      where: whereConditions,
      include: {
          model: Tag,
          through : {attributes: []},
          where: tagQuery
      }
    }
    req.body.queryConditions = queryConditions
    //query pagination
    req.body.limit = 10;
    req.body.offset = (req.body.limit * req.query.pageNumber) - req.body.limit || 0;
    return next()
  },
  setPagination: async (req, res, next) => {
    try{
      const {limit} = req.body
      const {pageNumber} = req.query
      let count = await Product.findAll(req.body.queryConditions);
      req.body.count = count.length;
      req.body.paginationPages = Math.ceil((req.body.count/limit));
      if(!pageNumber){
        req.originalUrl.includes('?') 
        ? req.originalUrl = `${req.originalUrl}&pageNumber=1`
        : req.originalUrl = `${req.originalUrl}?pageNumber=1`
        req.query.pageNumber = 1
      }
      if (req.body.paginationPages > req.query.pageNumber) {
        const nextUrl = req.originalUrl.replace(`pageNumber=${req.query.pageNumber}`, `pageNumber=${Number(req.query.pageNumber)+ 1}`)
        req.body.nextPage = `${req.protocol}://${req.get('host')}${nextUrl}`
      } else if (req.body.paginationPages == pageNumber) req.body.nextPage = null
      return next();
    } catch (error) {
      res.status(500).send({msg: 'middleware setPagination failed'})
    }
  },
  checkPost : (req, res, next) => {
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
      brand
    } = req.body;
  
    if(name && price && description && specifications && stock && brand && tags) {
      let productCreate = {
        name,
        price,
        description,
        specifications,
        stock,
        tags,
        brand,
        img
      }
      onDiscount ? productCreate = {...productCreate, onDiscount, discountPercentage}: null;
      freeShipping ? productCreate = {...productCreate, freeShipping} : null;
      req.body.product = productCreate
      return next()
    } else {
      res.status(404).send('Falta enviar datos obligatorios')
    }
  }
}