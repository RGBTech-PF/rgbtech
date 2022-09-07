const { Router } = require("express");
const { Brand, Tag} = require("../db");

const router = Router();

router.put('/tags', async (req, res) => {
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
  
  router.put('/brands', async (req, res) => {
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


module.exports = router;