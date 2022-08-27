import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../Product.jsx";
import css from "./CategoriesSection.module.css";
import {
	getProductsBestSeller,
	getProductDiscount,
	getProductFreeShep,
} from "../../store/slices/products/thunks.js";

const CategoriesCarousel = () => {
	const { products } = useSelector((state) => state.products);
	const dispatch = useDispatch();
	const { productosFilt } = useSelector((state) => state.products);
	// const [filtrados, setFiltrados] = useState()
	// const [section, setSection] = useState({
	// 	activeSection: "null",
	// });

	// const toggleActive = (i) => {
	// 	setSection({
	// 		...section,
	// 		activeSection: section.objects[i],
	// 	});
	// };

	const HandleClickBestSeller = () => {
		dispatch(getProductsBestSeller());
	};
	const HandleClickDiscount = () => {
		dispatch(getProductDiscount());
	};
	const HandleClickFreeShep = () => {
		dispatch(getProductFreeShep());
	};

	// const toggleActiveStyle = (i) => {
	// 	if (section.objects[i] === section.activeSection) {
	// 		return `text-pink-100 text-lg font-medium text-white p-2 rounded-xl hover:cursor-pointer ${css.active}`;
	// 	} else {
	// 		return `text-white text-lg font-medium p-2 rounded-xl hover:cursor-pointer ${css.inactive}`;
	// 	}
	// };
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
