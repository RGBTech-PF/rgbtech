import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		getLoggedUser: (state, action) => {
			console.log(action.payload)
			state.user = action.payload;
		},
		clearUser: (state) => {
			state.user = {};
		},
	},
});

export const { getLoggedUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
