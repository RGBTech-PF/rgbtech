import { createSlice } from "@reduxjs/toolkit";

const cartUser = JSON.parse(window.localStorage.getItem("user"));

const initialState = {
	cart: [],
	buying: false,
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
			if (productFinded.amount >= productFinded.stock) return;
			productFinded.amount += 1;
			productFinded.stock -= 1;
		},

		delUnitFromCart: (state, action) => {
			const productFinded = state.cart.find((p) => p.id === action.payload);
			if (productFinded.amount === 1) return;
			productFinded.amount -= 1;
			productFinded.stock += 1;
		},

		delProduct: (state, action) => {
			state.cart.splice(action.payload, 1);
		},

		emptyCart: (state) => {
			state.cart = [];
		},

		setBuying: (state, action) => {
			state.buying = action.payload;
		},
	},
});

export const {
	addProduct,
	addUnitToCart,
	delUnitFromCart,
	emptyCart,
	delProduct,
	setBuying,
} = guestShoppingCartSlice.actions;

export default guestShoppingCartSlice.reducer;
