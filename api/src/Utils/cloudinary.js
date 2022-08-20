require('dotenv').config();
const cloudinary=require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
module.exports={cloudinary};


// CLOUDINARY_CLOUD_NAME=ddroxn7iv
// CLOUDINARY_API_KEY=362217275633452
// CLOUDINARY_API_SECRET=m_XFi6cxtUrMXviZad_lPdaH1KE