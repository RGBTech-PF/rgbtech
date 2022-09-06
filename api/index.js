//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const createAllProducts = require('./src/Utils/createProducts.js')
const addBrands = require('./src/Utils/createBrands.js')
const addTags = require('./src/Utils/createTags.js')
const createUsers = require('./src/Utils/createUsers.js')
const createAllProductsOfAwards  = require("./src/Utils/createAwards")
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  addTags()
  addBrands()
  createAllProducts();
  createUsers();
  createAllProductsOfAwards()
  server.listen(3003, () => {
    console.log('%s listening at 3003'); // eslint-disable-line no-console
  });
});