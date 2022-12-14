import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { getUserProfile, setCartShop } from "../../store/slices/users/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFavorite } from "../../store/slices/products/productSlice";
import axios from "axios";
// import {
// 	setConfirmYourEmailError,
// 	setErrorLoginBadData,
// 	setErrorLoginNotFound,
// 	setLoginIncomplete,
// 	setLogin,
// 	setWelcomeUser,
// } from "../../store/slices/admin/adminSlice";
import { setAuthToken } from "../../store/slices/users/thunks";
import { welcomeUserNotification } from "../Notifications";

function LoguinGoogle({ closeModal }) {
	const navigate = useNavigate();
	const { cart } = useSelector((state) => state.guestShoppingCart);
	// const { user }= useSelector((state) => state.user);
	const carts = cart.map((product) => product);
	const dispatch = useDispatch();

	function handleCallbackResponse(response) {
		const token = response.credential;
		// console.log(" Encoded JWT ID token : " + token);
		const { email, picture, given_name, family_name, sub } = jwt_decode(token);
		document.getElementById("signInDiv").hidden = true;
		const bodyPost = {
			user: `${given_name} ${family_name}`,
			mail: email,
			profilePhoto: picture,
			password: sub,
		};
		axios
			.post("/users/registerGoogle", bodyPost)
			.then((response) => {
				const token = response.data.token;
				window.localStorage.setItem("token", token);
				setAuthToken(token);
				const user = jwt_decode(token);
				if (cart.length) {
					dispatch(setCartShop(carts));
				}
				dispatch(getUserProfile(user.id));
				let product = user.cartShop;
				// for (let i = 0; i < product.length; i++) {dispatch(addProduct(product[i]))}
				console.log(cart);
				if (user.favorite) {
					dispatch(setFavorite(user.favorite));
				}
				navigate("/");
				welcomeUserNotification();
				closeModal();
			})
			.catch((error) => {
				console.log(error);
				// error.response.status === 400
				// 	? dispatch(setLoginIncomplete(true))
				// 	: null;

				// // est?? creado, pero no verific?? el correo
				// error.response.status === 401
				// 	? dispatch(setConfirmYourEmailError(true))
				// 	: null;

				// // no se encontr?? el usuario porque no existe
				// error.response.status === 404
				// 	? dispatch(setErrorLoginNotFound(true))
				// 	: null;

				// // se est?? enviando mal la info del usuario
				// error.response.status === 403
				// 	? dispatch(setErrorLoginBadData(true))
				// 	: null;
			});

		// dispatch(postUserGoogle(bodyPost));
		// LoguinG(userObj)
		// if(cart.length) {
		// 	dispatch(setCartShop( cartsId))
		// 	// dispatch(clearCart())
		// }
		// const token_jwt = window.localStorage.getItem("token");
		// const perfil = jwt_decode(token_jwt);
		// console.log(perfil.id,"id user")
		// dispatch(getUserProfile(perfil.id));
		// if(user.favorite){
		// dispatch(setFavorite(user.favorite))
		// }
		// navigate("/");
	}

	function handleSignOut(event) {
		setUser({});
		document.getElementById("signInDiv").hidden = false;
	}

	function onSignIn(googleUser) {
		var id_token = googleUser.getAuthResponse().id_token;
		console.log(id_token);
	}

	useEffect(() => {
		/*global google*/
		google.accounts.id.initialize({
			client_id:
				"319669614492-i7e6o766ctapimibesbnj4g2c9fkvk80.apps.googleusercontent.com",
			callback: handleCallbackResponse,
		});
		google.accounts.id.renderButton(document.getElementById("signInDiv"), {
			theme: "outline",
			size: "large",
		});
		google.accounts.id.prompt();
	}, []);

	return (
		<div>
			<div id="signInDiv"></div>
		</div>
	);
}

export default LoguinGoogle;
