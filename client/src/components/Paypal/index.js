import axios from "axios";

export const checkoutPaypal = async (cartBuy) => {
	const response = await axios.post("/create-order", cartBuy);
	return response;
};
