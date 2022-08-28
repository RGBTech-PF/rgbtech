import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userCart:[""],
};

const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		setCartUser: (state, action) => {
			state.userCart = action.payload.data;
		},
	},
});

export const {
	userCart
} = userSlice.actions;

export default userSlice.reducer;
