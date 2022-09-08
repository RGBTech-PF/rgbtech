import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardProduct from "./CardProduct";
import jwt from "jwt-decode";
import axios from "axios";
import TarjetaShopping from "../../components/TarjetaShopping";

const ShoppingHistory = () => {
	const [products, setProducts] = useState([]);
	const { user } = useSelector((state) => state.user);

	useEffect(() => {
		const token = window.localStorage.getItem("token");
		const perfil = jwt(token);
		axios.get(`users/getShoppingHistory/${perfil.id}`).then((response) => {
			console.log(response);
			console.log(response.data);
			const respuesta = response.data;
			setProducts(respuesta);
			console.log(respuesta);
		});
		return;
	}, [user]);

	return (
		<div className="ml-14">
			<h1 className="text-5xl font-extrabold text-white-600 drop-shadow-lg shadow-black text-center mb-6">
				Shopping history:
			</h1>
			{products?.map((p, i) => (
				<TarjetaShopping
					id={p.id}
					user={user.user}
					profilePhoto={user.profilePhoto}
					key={i}
					name={p.name}
					totalPrice={p.totalPrice}
					month={p.month}
					year={p.year}
					amount={p.amount}
					commented={p.commented}
				/>
			))}
		</div>
	);
};

export default ShoppingHistory;
