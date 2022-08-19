const { Router } = require('express');
const { User } = require('../db');
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const router = Router();

require("dotenv").config();

router.post("/singup", async (req, res) => {
    let { user, password, mail, profilePhoto } = req.body;

    if (!user || !password || !mail) return res.status(404).send("Falta enviar datos obligatorios")
    password = await bcrypt.hash(password, 10);
    try {
        let userCreate = await User.create({
            user,
            password,
            mail,
            profilePhoto,
            isAdmin: false,
        })
        return res.send("Usuario creado con exito")
    } catch (error) {
        return res.status(404).send("Error en alguno de los datos provistos")
    }
});

router.post("/login", async (req, res) => {
    try {
        const { user, password } = req.body;
        if (!user) {
            res.sendStatus(404)
        };

        const authUser = await User.findAll({
            where: {
                user: user
            }
        })

        if (authUser.length === 0) {
            return res.json({ message: "usuario no encontrado, intente denuevo" })
        }

        const findUser = authUser.find(user => user.user)
        
        if (!bcrypt.compareSync(password, findUser.password)) {
            return res.json({ message: "contraseña incorrecta" })
        }

        const accessToken = generateAccessToken(user);
        return res.header("authorized", accessToken).json({
            mssage: "usuario autenticado",
            token: accessToken
        })
    } catch (error) {
        res.json({ message: error })
    }

});

function generateAccessToken(user) {
    return jwt.sign(user, process.env.SECRET)
}

// function validateToken(req, res, next) {
//     const accessToken = req.headers["authorized"] || req.query.accessToken;
//     if (!accessToken) {
//         res.send("Access denied")
//     }
//     jwt.verify(accessToken, process.env.SECRET, (err, user) => {
//         if (err) {
//             res.send("access denied")
//         }
//         else {
//             req.user = user;
//             next()
//         }
//     })
// }

module.exports = router;
