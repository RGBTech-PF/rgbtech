import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardProduct from "./CardProduct";
import jwt from "jwt-decode";
import axios from "axios";
import TarjetaShopping from "../../components/TarjetaShopping";

const ShoppingHistory = () => {
	const [products, setProducts] = useState([]);
	const { user } = useSelector((state) => state.user);
	console.log("products", products);

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
		<div className="flex flex-col mx-4">
			<h1 className="text-5xl font-extrabold text-white-600 drop-shadow-lg shadow-black text-center mb-6 sm:mt-4">
				Shopping history:
			</h1>
			{products?.length === 0 && (
				<div className="flex justify-center items-center">
					<h1 className="bg-blue-500 rounded-xl p-1 font-semibold text-white">
						You haven't bought anything yet!
					</h1>
				</div>
			)}
			{products?.map((p, i) => (
				<div className="flex flex-col my-2">
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
				</div>
			))}
		</div>
	);
};

export default ShoppingHistory;
