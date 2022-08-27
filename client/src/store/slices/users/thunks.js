import axios from "axios";
import { setErrorLogin } from "../components/componentSlice";
import jwt from "jwt-decode";

export const AuthUserLogin = (user) => {
	return async (dispatch) => {
		try {
			const response = await axios.post("/users/login", user);
			console.log(response);
			const token = response.data.token;
			window.localStorage.setItem("token", token);
			setAuthToken(token);
		} catch (e) {
			console.log("estoy entrando al error de Auth");
			dispatch(setErrorLogin(true));
			console.error(e);
		}
	};
};

export const setAuthToken = (token) => {
	if (token) {
		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	} else {
		delete axios.defaults.headers.common["Authorization"];
	}
};

export const postUser = (userCreated) => {
	return async () => {
		try {
			await axios.post("users/register", userCreated);
		} catch (e) {
			console.error(e);
		}
	};
};

export const confirmationEmail = (user) => {
	return async () => {
		try {
			await axios.put(`users/confirmation/${user.id}`);
		} catch (error) {
			console.log(error);
		}
	};
};

export const setShoppingHistory = (shoppings) => {
	const token = window.localStorage.getItem("token");
	const perfil = jwt(token);
	return async () => {
		try {
			await axios.put(`users/shoppingHistory/${perfil.id}`, shoppings);
		} catch (e) {
			console.error(e);
		}
	};
};

export const setCartShop = (cartShop) => {
	const token = window.localStorage.getItem("token");
	const perfil = jwt(token);
	return async () => {
		try {
			console.log(perfil.id);
			await axios.put(`users/setCart/${perfil.id}`, cartShop);
		} catch (e) {
			console.error(e);
		}
	};
};
