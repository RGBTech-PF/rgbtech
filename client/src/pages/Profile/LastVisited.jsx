import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardProduct from "./CardProduct";
import jwt from "jwt-decode";
import axios from "axios";

const LastVisited = () => {
	const [products, setProducts] = useState([]);
	const user = useSelector((state) => state.user);

	useEffect(() => {
		const token = window.localStorage.getItem("token");
		const perfil = jwt(token);
		axios.get(`/products/lastVisited/${perfil.id}`).then((response) => {
			console.log(response.data);
			const respuesta = response.data;
			setProducts(respuesta);
		});
		return;
	}, [user]);

	return (
		<div className="flex flex-col justify-start items-center ml-14 h-screen overflow-auto mt-10">
			<h1 className="text-5xl font-extrabold text-white-600 drop-shadow-lg shadow-black text-center mb-6 sm:mt-4">
				Last visited:
			</h1>
			<div className="flex flex-col">
				{products?.map((p, i) => (
					<CardProduct
						key={i}
						id={p.id}
						name={p.name}
						img={p.img}
						description={p.description?.substring(0, 35) + "..."}
						rating={p.rating}
						stock={p.stock}
					/>
				))}
			</div>
		</div>
	);
};

export default LastVisited;
