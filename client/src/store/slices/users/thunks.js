import axios from "axios";
import jwt from "jwt-decode";
import { getLoggedUser } from "../users/userSlice"

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
			const response = await axios.get(`users/profile/${id}`)
			console.log(response.data)
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
			await axios.put(`users/shoppingHistory/${perfil.id}`, {shoppings:shoppings});
		} catch (e) {
			console.error(e);
		}
	};
};

export const setCartShop = ( cartShop) => {
		const token = window.localStorage.getItem("token");
		const perfil = jwt(token);
	return async (dispatch) => {
		try {
			await axios.put(`users/setCart/${perfil.id}`, cartShop);
			dispatch(getUserProfile(perfil.id))
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
			console.log(perfil.id);
			await axios.put(`users/favorite/${perfil.id}`, { newfavorite: newfavorite });
			dispatch(getUserProfile(perfil.id))
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
			console.log(deletefavorite, "id thunk")
			await axios.put(`users/deletefavorite/${perfil.id}`, { deletefavorite: deletefavorite });
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
			console.log(perfil.id);
			await axios.put(`users/newproductcart/${perfil.id}`, { newproductcart: newproductcart });
			dispatch(getUserProfile(perfil.id))
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
			console.log(deleteproductcart, "id thunk")
			await axios.put(`users/deleteproductcart/${perfil.id}`, {deleteproductcart: deleteproductcart});
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
			await axios.put(`users/clearCart/${perfil.id}`,  {clearCart: [] });
			dispatch(getUserProfile(perfil.id));
		} catch (e) {
			console.error(e);
		}
	};
};
export const updateLastVisited= (lastvisited) => {
	const token = window.localStorage.getItem("token");
	const perfil = jwt(token);
	return async (dispatch) => {
		try {
			await axios.put(`users/updateLastVisited/${perfil.id}`,  {lastvisited:lastvisited });
			dispatch(getUserProfile(perfil.id));
		} catch (e) {
			console.error(e);
		}
	};
};





