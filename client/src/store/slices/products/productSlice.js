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
	favorito:[],
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
		addFavorite: (state, action) => {
			state.favorito.push({
				...action.payload,
				amount: 1,
			});
		},
		delProductfav: (state, action) => {
			// const productFinded = state.favorito.find((p) => p.id === action.payload);
			// state.favorito.findIndex(p => p == productFinded)
			// console.log(state.favorito.IndexOf(productFinded))
			state.favorito.splice(action.payload, 1);
		},
		addUserfav: (state, action) => {
			state.favorito = [];
			state.favorito= action.payload
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
	addFavorite,
	delProductfav,
	addUserfav,
} = productSlice.actions;

export default productSlice.reducer;
