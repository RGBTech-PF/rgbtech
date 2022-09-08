const nodemailer = require("nodemailer");
const { htmlMailRecoverPassword } = require("../Utils/EmailTemplate.js");
const jwt = require("jsonwebtoken");
module.exports = {
  sendConfirmationEmailRecoverPassword: async (newUser) => {
		let emailToken = jwt.sign(newUser, process.env.SECRET, { expiresIn: "1d" });
		emailToken = emailToken.replaceAll(".", "'");
		let url = `http://127.0.0.1:5173/recoverPassword/${emailToken}`;
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "rgbtechPF@gmail.com",
				pass: "qqilqandbimpiaxu",
			},
		});
		const html = htmlMailRecoverPassword(url);
		await transporter.sendMail({
			from: "rgbtech@tech.com",
			to: newUser.mail,
			subject: "Recover password",
			html,
		});
  }
}