import axios from "axios";
import { getProducts, getDetailsProductById, searchName, getProductsFilters, getTags, getBrands } from "./productSlice";

export const searchNameAction = (input) => {
	return async (dispatch) => {
		try {
			const products = await axios.get(`products/search?name=${input}`);
			dispatch(searchName(products.data));
		} catch (error) {
			console.error(e);
		}
	};
};

export const searchTagAction = (input) => {
	return async (dispatch) => {
		try {
			const products =  await axios.get(`products?tag=${input}`);
			dispatch(getProductsFilters(products.data));
			console.log(products);
		} catch (error) {
			console.error(e);
		}
	};
};

export const getAllProducts = (num, search) => {
	if(!search){
		search = '?'
		console.log(search);
	} else {
		search = search + '&'
		console.log(search,'&');
	}
	return async (dispatch) => {
		try {
			const products = await axios.get(`products${search}pageNumber=${num || 1}`);
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
