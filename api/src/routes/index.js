const { Router } = require("express");
const productsRoute = require("./Product");
const usersRoute = require("./User.js");
const brandsRoute = require("./Brand.js");
const tagsRoute = require("./Tag.js");
const adminRoute = require("./Admin.js");
const { cancel, create, capture } = require("../controllers/paypal");
// const dogmiddleware = require('./middlewares/dogs.js')
// const temperamentmiddleware = require('./middlewares/temperaments.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.use("/products", productsRoute);
router.use("/users", usersRoute);
router.use("/brands", brandsRoute);
router.use("/tags", tagsRoute);
router.use("/admin", adminRoute)

router.post("/create-order", create);
router.get("/capture-order", capture);
router.get("/cancel-order", cancel);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.use('/dogs', dogmiddleware);
// router.use('/temperaments', temperamentmiddleware);

module.exports = router;
