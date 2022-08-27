import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	filters: [],
	productDetails: {},
	response: {},
	productsName: [],
	productosFilt: [],
	tags: [],
	brands: [],
};

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		getProducts: (state, action) => {
			const { data, nextPage, pageNumbers } = action.payload;
			state.products.push(...data);
			state.response = { nextPage, pageNumbers };
		},

		getProductsName: (state, action) => {
			state.products = action.payload.data;
		},

		getDetailsProductById: (state, action) => {
			state.productDetails = action.payload;
		},

		clearDetails: (state) => {
			state.productDetails = {};
		},

		searchName: (state, action) => {
			state.productsName = action.payload;
		},

		getFilt: (state, action) => {
			state.productosFilt = action.payload;
		},

		getProductsFilters: (state, action) => {
			state.filters = action.payload.data;
		},

		getBrands: (state, action) => {
			state.brands = action.payload;
		},

		getTags: (state, action) => {
			state.tags = action.payload;
		},

		limpiarFiltros: (state) => {
			state.products = [];
			state.response = {};
		},
	},
});

export const {
	getProducts,
	getDetailsProductById,
	clearDetails,
	searchName,
	getProductsFilters,
	getFilt,
	getBrands,
	getTags,
	limpiarFiltros,
} = productSlice.actions;

export default productSlice.reducer;
