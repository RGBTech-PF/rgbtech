const {User} = require('../db')
const users = require("./users");
const bcrypt = require("bcrypt");



const createUsers = async () => {
  try {
    users.map(async (user) => {
      User.create({
        ...user,
        password: await bcrypt.hash(user.password, 10)
      })
    })
    console.log('users added to db')
  } catch (error) {
   console.error(error)
    
  }
}
module.exports = createUsers