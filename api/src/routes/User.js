const { Router, application } = require('express');
const { User } = require('../db');
const bcrypt  = require('bcrypt')
const jwt = require("jsonwebtoken")
const router = Router();
const nodemailer = require('nodemailer')
const _ = require('lodash')


function checkSingup (req, res, next) {
    const {
        user,
        password,
        mail,
        profilePhoto
    } = req.body
    if(user && password && mail){
        req.body.newUser = {
            user,
            mail,
            profilePhoto,
            isAdmin: false
        }
        return next()
    } else {
        res.status(404).send('Faltan datos obligatorios')
    }
}

router.post("/register", checkSingup,  async (req, res) => {
    let {password, newUser} = req.body;
    try {
        password = await bcrypt.hash(password, 10);
        const user = await User.create({
            ...newUser,
            password
        })
        const emailToken = jwt.sign(
            {
                user: _.pick(user, 'id')
            },
            'hello',
            {
                expiresIn: '1d'
            }
        )
        const url = `${req.protocol}://${req.get('host')}/users/confirmation/${emailToken}`
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'rgbtechPF@gmail.com',
                pass: 'qqilqandbimpiaxu'
            }
        })
        await transporter.sendMail({
            from: "rgbtech@tech.com",
            to: newUser.mail,
            subject: "Confirmation",
            html: `Click this link to confirm your email <a>${url}</a>`
        })
        return res.send("Usuario creado con exito")
    } catch (error) {
        console.error(error)
        return res.status(404).send("Algo salió mal, intente de nuevo")
    }
});

router.get('/confirmation/:token', async(req, res) => {
    try {
        console.log(req.params.token)
        const prueba = jwt.verify(req.params.token, 'hello')
        console.log(prueba)
        res.send(prueba)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
})


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
