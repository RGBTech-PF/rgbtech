import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: JSON.parse(window.sessionStorage.getItem("carrito")) || [],
};

const guestShoppingCartSlice = createSlice({
	name: "shoppingCart",
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.cart.push({
				...action.payload,
				amount: 1,
			});
		},

		addUnitToCart: (state, action) => {
			const productFinded = state.cart.find((p) => p.id === action.payload);
			productFinded.amount += 1;
		},

		delUnitFromCart: (state, action) => {
			const productFinded = state.cart.find((p) => p.id === action.payload);
			if (productFinded.amount === 1) return;
			productFinded.amount -= 1;
		},

		delProduct: (state, action) => {
			state.cart.splice(action.payload, 1);
		},

		emptyCart: (state) => {
			state.cart = [];
		},
		cartUser: (state,action) => {
			state.cart = [];
			state.cart.push(action.payload)
		},
	},
});

export const {
	addProduct,
	addUnitToCart,
	delUnitFromCart,
	emptyCart,
	delProduct,
	cartUser,
} = guestShoppingCartSlice.actions;

export default guestShoppingCartSlice.reducer;
