import axios from "axios";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import {
	setConfirmYourEmailError,
	setErrorLoginBadData,
	setErrorLoginNotFound,
	setLoginIncomplete,
	setLogin,
	setWelcomeUser,
} from "../store/slices/components/componentSlice";
import { getUserProfile } from "../store/slices/users/thunks"
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken } from "../store/slices/users/thunks";
import { useNavigate } from "react-router-dom";
// import { addProduct } from "../store/slices/guestShoppingCart/guestShoppingCartSlice"
// import { setCartShop } from "../store/slices/users/thunks"

export const useForm = (initalForm) => {
	const { cart } = useSelector((state) => state.guestShoppingCart);
	const { favorito } = useSelector((state) => state.products);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [form, setForm] = useState(initalForm);
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState(null);


	const handleChange = (event) => {
		const { name, value } = event.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setLoading(true);
		const requestBody = {
			user: form.user,
			password: form.password,
		};
		axios
			.post("/users/login", requestBody)
			.then((response) => {
				setResponse({ status: "success" });
				const token = response.data.token;
				window.localStorage.setItem("token", token);
				setAuthToken(token);
				const user = jwt_decode(token);
				console.log(user, "form user")
				dispatch(getUserProfile(user.id));
				// let prod = user.cartShop
				// console.log(prod, "user.carshop")
				// let prodArray = Object.keys(prod)
				// console.log(prodArray,"array de user")
				// dispatch(addProduct(prodArray))
				// console.log(cart,"cart estado")
				// let cartshop = Object.assign({}, cart)
				// dispatch(setCartShop(cartshop))
				dispatch(setLogin(false));
				dispatch(setWelcomeUser(true));
				setForm(initalForm);
				navigate("/");
			})
			.catch((error) => {
				// no envian toda la información. User pero no la pass
				error.response.status === 400
					? dispatch(setLoginIncomplete(true))
					: null;

				// está creado, pero no verificó el correo
				error.response.status === 401
					? dispatch(setConfirmYourEmailError(true))
					: null;

				// no se encontró el usuario porque no existe
				error.response.status === 404
					? dispatch(setErrorLoginNotFound(true))
					: null;

				// se está enviando mal la info del usuario
				error.response.status === 403
					? dispatch(setErrorLoginBadData(true))
					: null;
			});
	};
	return {
		form,
		loading,
		response,
		handleChange,
		handleSubmit,
	};
};
