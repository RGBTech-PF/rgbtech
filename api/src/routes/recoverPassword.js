const { Router } = require("express");
const { User } = require("../db");
const {
	sendConfirmationEmailRecoverPassword,
} = require("../middlewares/recoverPaswordMiddleware");
const { validateToken } = require("../middlewares/userMiddleware");
const bcrypt = require("bcrypt");
const router = Router();

router.post("/", async (req, res) => {
	try {
		const { email } = req.body;
		console.log(req.body, "req.body");
		if (!email) {
		return	res.send("Information not received");
		}
		const findUser = await User.findAll({
			where: {
				mail: email,
			},
		});
		if (!findUser) {
			res.send("User not found");
		}
		const { id, mail } = findUser[0];
		sendConfirmationEmailRecoverPassword({ id, mail });
		res.send("found user");
	} catch (error) {
		res.sendStatus(500);
	}
});

router.put("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { password } = req.body;
		const hashedPassword = await bcrypt.hash(password.nuevaContraseña, 10);
		await User.update(
			{
				password: hashedPassword,
			},
			{
				where: {
					id: id,
				},
			}
		);
		res.send("successful password change");
	} catch (error) {}
});

module.exports = router;
