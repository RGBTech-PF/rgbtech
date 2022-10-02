import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header/Header";
import FavoriteCard from "../components/TarjetaFav";
import { MdFavorite } from "react-icons/md";
import jwt from "jwt-decode";
import axios from "axios";

const Favorites = () => {
	const [products, setProducts] = useState([]);
	const user = useSelector((state) => state.user);
	const disptach = useDispatch();

	useEffect(() => {
		const token = window.localStorage.getItem("token");
		const perfil = jwt(token);
		axios.get(`/products/favourites/${perfil.id}`).then((response) => {
			console.log(response.data);
			const respuesta = response.data;
			setProducts(respuesta);
		});
		return;
	}, [user]);

	return (
		<div className="flex flex-col min-h-screen h-full dark:bg-[#1f2937]">
			<Header />
			<div className="flex justify-around items-center rounded-3xl text-white shadow-2xl mx-20">
				<div className="flex flex-col justify-center items-center rounded-3xl  p-4 text-xl text-black">
					<h1 className="flex gap-2 text-4xl dark:text-white">
						<MdFavorite />
						My Favorites:
					</h1>
					<div className="flex flex-col gap-4 mt-2">
						{products?.length === 0 && (
							<h2 className="text-2xl mt-6">Your favorites its empty! 😥</h2>
						)}
					</div>
					<div className="h-screen overflow-scroll">
						{products?.map((item, i) => {
							return (
								<FavoriteCard
									key={i}
									id={item.id}
									name={item.name}
									description={item.description}
									img={item.img}
									price={item.price}
									onDiscount={item.onDiscount}
									freeShipping={item.freeShipping}
									discountPercentage={item.discountPercentage}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Favorites;
