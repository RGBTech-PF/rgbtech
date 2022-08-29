import axios from "axios";
import {
	getProducts,
	getDetailsProductById,
	searchName,
	getProductsFilters,
	getTags,
	getBrands,
	limpiarFiltros,
	getFilt,
} from "./productSlice";

export const searchNameAction = (input) => {
	return async (dispatch) => {
		try {
			const products = await axios.get(`products/name-list?name=${input}`);
			dispatch(searchName(products.data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const searchTagAction = (input) => {
	return async (dispatch) => {
		try {
			const products = await axios.get(`products?tag=${input}`);
			dispatch(getProductsFilters(products.data));
			console.log(products);
		} catch (error) {
			console.error(e);
		}
	};
};

export const getAllProducts = (num, search) => {
	if (!search) {
		search = "?";
	} else {
		search = search + "&";
		console.log(search, "&");
	}
	return async (dispatch) => {
		try {
			const products = await axios.get(
				`products${search}pageNumber=${num || 1}`
			);
			dispatch(getProducts(products.data));
		} catch (e) {
			console.error(e);
		}
	};
};

export const getProductById = (id) => {
	return async (dispatch) => {
		try {
			const product = await axios.get(`products/${id}`);
			dispatch(getDetailsProductById(product.data));
		} catch (e) {
			console.error(e);
		}
	};
};

export const getProductsBestSeller = () => {
	return async (dispatch) => {
		try {
			const products = await axios.get("products/BestSeller");
			console.log(products);
			dispatch(getFilt(products.data));
		} catch (e) {
			console.error(e);
		}
	};
};
export const getProductDiscount = () => {
	return async (dispatch) => {
		try {
			const products = await axios.get("products/Discount");
			dispatch(getFilt(products.data));
		} catch (e) {
			console.error(e);
		}
	};
};

export const getProductFreeShep = () => {
	return async (dispatch) => {
		try {
			const products = await axios.get("products/FreeShipping");
			dispatch(getFilt(products.data));
		} catch (e) {
			console.error(e);
		}
	};
};

export const setProduct = () => {
	try {
		const products = [""];
		dispatch(getFilt(products.data));
	} catch (e) {
		console.error(e);
	}
};

export const getEtiquetas = () => {
	return async (dispatch) => {
		try {
			const tag =  await axios.get(`tags`);
			dispatch(getTags(tag.data));
			console.log(tag);
		} catch (error) {
			console.error(e);
		}
	};
};

export const getMarcas = () => {
	return async (dispatch) => {
		try {
			const brand =  await axios.get(`brands`);
			dispatch(getBrands(brand.data));
			console.log(brand);
		} catch (error) {
			console.error(e);
		}
	};
};

export const limpiarProductos = () => {
	return (dispatch) => {
		try {
			dispatch(limpiarFiltros());
		} catch (e) {
			console.error(e);
		}
	};
};

export const updateStock = (productStock) => {
	return async () => {
		try {
			console.log(productStock,"ajecutando")
			let {id} = productStock
			console.log(id)
		   await	axios.put(`products/updateStock/${id}`, productStock);
		} catch (e) {
			console.error(e);
		}
	};
};
