import { createSlice } from "@reduxjs/toolkit";

const userLogged = JSON.parse(window.localStorage.getItem("user"));

const initialState = {
	user: userLogged || {},
};

const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		getLoggedUser: (state, action) => {
			state.user = action.payload;
			window.localStorage.setItem("user", JSON.stringify(action.payload));
		},

		clearUser: (state) => {
			state.user = {};
		},
	},
});

export const { getLoggedUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
