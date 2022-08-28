import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../Product.jsx";
import {hasJWT} from "../../store/thunks.js"
import {
	getProductsBestSeller,
	getProductDiscount,
	getProductFreeShep,
} from "../../store/slices/products/thunks.js";
import { useEffect } from "react";
import { setCartShop } from "../../store/slices/users/thunks.js";

const CategoriesCarousel = () => {
	const { products } = useSelector((state) => state.products);
	const dispatch = useDispatch();
	const { productosFilt } = useSelector((state) => state.products);
	const { cart } = useSelector((state) => state.guestShoppingCart);
	const HandleClickBestSeller = () => {
		dispatch(getProductsBestSeller());
	};
	const HandleClickDiscount = () => {
		dispatch(getProductDiscount());
	};
	const HandleClickFreeShep = () => {
		dispatch(getProductFreeShep());
	};

	useEffect(() => {
	
		if(hasJWT()){
			return () => {
				if(cart.length!== 0){
					const productss = cart.map(p=> p)
					console.log(productss,"Categori")
					dispatch(setCartShop(productss))
				}else{
					const productss= [""]
					dispatch(setCartShop(productss))
				}
			}}
		}, [])
	return (
		<div className="bg-gray-200 rounded-3xl mb-10">
			<div className="flex flex-col pt-4">
				<ul className="flex flex-row gap-5 mb-4 justify-center items-center">
					<li>
						<button
							onClick={() => {
								HandleClickBestSeller();
							}}
						>
							BestSeller
						</button>
					</li>
					<li>
						<button
							onClick={() => {
								HandleClickDiscount();
							}}
						>
							OnDiscount
						</button>
					</li>
					<li>
						<button
							onClick={() => {
								HandleClickFreeShep();
							}}
						>
							FreeShep
						</button>
					</li>
					<li>
						<button
							onClick={() => {
								HandleClickFreeShep();
							}}
						>
							High Riting
						</button>
					</li>
				</ul>
				{/* grid-cols-5 o grid-cols-4 */}
				<div className="grid grid-cols-4 rounded-2xl m-2">
					{productosFilt.length !== 0
						? productosFilt.map((p, i) => (
								<Product
									key={i}
									id={p.id}
									name={p.name}
									img={p.img}
									price={p.price}
								></Product>
						  ))
						: products.map((p, i) => (
								<Product
									key={i}
									id={p.id}
									name={p.name}
									img={p.img}
									price={p.price}
								></Product>
						  ))}
				</div>
			</div>
		</div>
	);
};

export default CategoriesCarousel;
