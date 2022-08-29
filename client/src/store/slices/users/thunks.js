import axios from "axios";
import jwt from "jwt-decode";
import {getLoggedUser} from "../users/userSlice"

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

export const getUserProfile = (id) => {
    return async (dispatch) => {
        try {
			console.log("entre al thunk")
            const response = await axios.get(`users/profile/${id}`)
            dispatch(getLoggedUser(response.data))
        } catch (error) {
            console.log(error)
        }
    }
}

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

export const setCartShop = (id, cartShop) => {
	// const token = window.localStorage.getItem("token");
	// const perfil = jwt(token);
	return async () => {
		try {
			await axios.put(`users/setCart/${id}`, cartShop);
		} catch (e) {
			console.error(e);
		}
	};
};
