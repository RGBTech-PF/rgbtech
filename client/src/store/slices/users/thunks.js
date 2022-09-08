import axios from "axios";
import jwt from "jwt-decode";
import { getLoggedUser } from "../users/userSlice";

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

export const postUserGoogle = (userCreated) => {
	return async () => {
		try {
			await axios.post("users/registerGoogle", userCreated);
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
			if (!id) {
				const token_jwt = window.localStorage.getItem("token");
				const perfil = jwt(token_jwt);
				id = perfil.id;
			}
			const response = await axios.get(`users/profile/${id}`);
			console.log("response.data", response.data);
			dispatch(getLoggedUser(response.data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const getShoppingHistory = () => {
	const token = window.localStorage.getItem("token");
	const perfil = jwt(token);
	return async () => {
		try {
			await axios.put(`users/shoppingHistory/${perfil.id}`);
		} catch (e) {
			console.error(e);
		}
	};
};

export const setUserPoint = (RGBpoint) => {
	const token = window.localStorage.getItem("token");
	const perfil = jwt(token);
	return async () => {
		try {
			await axios.put(`users/puntuacion/${perfil.id}`, RGBpoint);
		} catch (e) {
			console.log(e);
		}
	};
};

export const setCartShop = (cartShop) => {
	const token = window.localStorage.getItem("token");
	const perfil = jwt(token);
	return async (dispatch) => {
		try {
			await axios.put(`users/setCart/${perfil.id}`, cartShop);
			dispatch(getUserProfile(perfil.id));
		} catch (e) {
			console.error(e);
		}
	};
};

export const updateFavoriteUser = (newfavorite) => {
	const token = window.localStorage.getItem("token");
	const perfil = jwt(token);
	return async (dispatch) => {
		try {
			await axios.put(`users/favourites/${perfil.id}`, {
				newfavorite: newfavorite,
			});
			dispatch(getUserProfile(perfil.id));
		} catch (e) {
			console.error(e);
		}
	};
};

export const deleteFavoriteUser = (deletefavorite) => {
	const token = window.localStorage.getItem("token");
	const perfil = jwt(token);
	return async (dispatch) => {
		try {
			console.log(deletefavorite, "id thunk");
			await axios.put(`users/deletefavorite/${perfil.id}`, {
				deletefavorite: deletefavorite,
			});
			dispatch(getUserProfile(perfil.id));
		} catch (e) {
			console.error(e);
		}
	};
};

export const updateProductCart = (newproductcart) => {
	const token = window.localStorage.getItem("token");
	const perfil = jwt(token);
	return async (dispatch) => {
		try {
			await axios.put(`users/newproductcart/${perfil.id}`, {
				newproductcart: newproductcart,
			});
			dispatch(getUserProfile(perfil.id));
		} catch (e) {
			console.error(e);
		}
	};
};

export const deleteProductCart = (deleteproductcart) => {
	const token = window.localStorage.getItem("token");
	const perfil = jwt(token);
	return async (dispatch) => {
		try {
			console.log(deleteproductcart, "id thunk");
			await axios.put(`users/deleteproductcart/${perfil.id}`, {
				deleteproductcart: deleteproductcart,
			});
			dispatch(getUserProfile(perfil.id));
		} catch (e) {
			console.error(e);
		}
	};
};

export const clearCartShop = () => {
	const token = window.localStorage.getItem("token");
	const perfil = jwt(token);
	return async (dispatch) => {
		try {
			await axios.put(`users/clearCart/${perfil.id}`, { clearCart: [] });
			dispatch(getUserProfile(perfil.id));
		} catch (e) {
			console.error(e);
		}
	};
};
export const updateLastVisited = (idp) => {
	const token = window.localStorage.getItem("token");
	const perfil = jwt(token);
	return async (dispatch) => {
		try {
			await axios.put(`users/updateLastVisited/${perfil.id}`, { idp: idp });
			dispatch(getUserProfile(perfil.id));
		} catch (e) {
			console.error(e);
		}
	};
};

export const sendPassword = (perfil, password) => {
	return async (dispatch) => {
		try {
			const response = await axios.put(`recoverPassword/${perfil.id}`, {
				password,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const sendEmail = (email) => {
	console.log(email, "action");
	return async (dispatch) => {
		try {
			const response = await axios.post("/recoverPassword", email);
			return response;
		} catch (error) {
			console.log(error);
		}
	};
};
