const dotenv = require("dotenv");
dotenv.config();

const { PAYPAL_API_ClientID, PAYPAL_API_SECRET, PAYPAL_API_URL } = process.env;

module.exports = { PAYPAL_API_ClientID, PAYPAL_API_SECRET, PAYPAL_API_URL };
