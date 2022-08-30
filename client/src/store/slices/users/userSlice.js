import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	users:[],
};

const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		getLoggedUser: (state, action) => {
			console.log(action.payload)
			state.users = action.payload;
		},
		clearUser: (state) => {
			state.users = {};
		},
	},
});

export const { getLoggedUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
