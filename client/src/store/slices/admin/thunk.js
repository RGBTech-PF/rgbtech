import axios from "axios";

import {
	dashboardInfo,
	usersTable,
	productsTable,
	tagsAndBrandsTable,
} from "./adminSlice";

export const dashboardAction = () => {
	return async (dispatch) => {
		try {
			const info = await axios.get("admin/dashboard");
			dispatch(dashboardInfo(info.data));
			console.log("INFO", info);
		} catch (error) {
			console.error(e);
		}
	};
};

export const usersTableAction = () => {
	return async (dispatch) => {
		try {
			const info = await axios.get("admin/users");
            dispatch(usersTable(info.data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const productsAction = () => {
	return async (dispatch) => {
		try {
			const info = await axios.get("admin/products");
            dispatch(productsTable(info.data.response));
		} catch (error) {
			console.log(error);
		}
	};
};
export const tagsAndBrandsAction = () => {
	return async (dispatch) => {
		try {
			const info = await axios.get("admin/tags-brands");
            dispatch(tagsAndBrandsTable(info.data));
		} catch (error) {
			console.log(error);
		}
	};
};
export const changeRoleAction = (payload) => {
	return async (dispatch) => {
		try {
			await axios.put("admin/users/roles", payload);
            dispatch(usersTableAction());
		} catch (error) {
			console.log(error);
		}
	};
};
export const changeProductStateAction = (payload) => {
	return async (dispatch) => {
		try {
			await axios.put("admin/products/state", payload);
            dispatch(productsAction());
		} catch (error) {
			console.log(error);
		}
	};
};
export const changeTagStateAction = (payload) => {
	return async (dispatch) => {
		try {
			await axios.put("admin/tags/update", payload);
            dispatch(tagsAndBrandsAction());
		} catch (error) {
			console.log(error);
		}
	};
};
export const changeBrandStateAction = (payload) => {
	return async (dispatch) => {
		try {
			await axios.put("admin/brands/update", payload);
            dispatch(tagsAndBrandsAction());
		} catch (error) {
			console.log(error);
		}
	};
};
export const editTagAction = (payload) => {
	return async (dispatch) => {
		try {
			await axios.put("admin/tags/admin-update", payload);
            dispatch(tagsAndBrandsAction());
		} catch (error) {
			console.log(error);
		}
	};
};
export const editBrandAction = (payload) => {
	return async (dispatch) => {
		try {
			await axios.put("admin/brands/admin-update", payload);
            dispatch(tagsAndBrandsAction());
		} catch (error) {
			console.log(error);
		}
	};
};

export const setShoppingUserHistory = (userId, products) => {
	return async () => {
		try {
			await axios.post("admin/sale", { userId, products });
		} catch (e) {
			console.error(e);
		}
	};
};

export const editProductAction = (payload) => {
	return async (dispatch) => {
		try {
			console.log(payload)
			await axios.put("products/update", {payload});
            dispatch(productsAction());
		} catch (error) {
			console.error(error);
		}
	};
};