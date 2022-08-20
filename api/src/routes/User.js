const { Router } = require('express');
const { User } = require('../db.js');
const bcrypt  = require('bcrypt')
const { cloudinary } =require('../Utils/cloudinary.js')

const router = Router();
router.post("/", async (req, res) => {
    
    try {
        let { user,password, mail ,profilePhoto} = req.body;
        password = await bcrypt.hash(password, 10);
        const uploadedResponse = await cloudinary.uploader.
        upload(profilePhoto,{
            upload_preset:'RGBtech'})
        await User.create({
            user,
            password,
            mail,
            profilePhoto:uploadedResponse.secure_url,
            isAdmin:false,
        })

        return res.send("User created successfully")
    } catch (error) {
        return res.status(400).send("Error in any of the data provided")
    }
});

module.exports = router;
