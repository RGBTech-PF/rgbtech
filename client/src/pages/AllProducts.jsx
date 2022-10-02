import React, { useEffect, useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getAllProducts,
	getEtiquetas,
	getMarcas,
} from "../store/slices/products/thunks";
import Tarjeta from "../components/Tarjeta";

export default function AllProducts({ setPage, page }) {
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(false);
	const { products } = useSelector((state) => state.products);
	const { response } = useSelector((state) => state.products);
	const observer = useRef();
	const lastProduct = useCallback((node) => {
		if (loading) return;
		if (observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver(
			(entries) => {
				console.log(entries);
				if (entries[0].isIntersecting) {
					if (response.pageNumbers > page) {
						setTimeout(() => {
							console.log("visible");
							setPage(page + 1);
						}, 1000);
					}
				}
			},
			{
				threshold: 0,
			},
			[loading, response]
		);
		if (node) observer.current.observe(node);
	});

	useEffect(() => {
		dispatch(getEtiquetas());
		dispatch(getMarcas());
	}, []);

	useEffect(() => {
		setLoading(true);
		console.log(response?.nextPage);
		if (!response?.nextPage) {
			return;
			setLoading(false);
		} else {
			dispatch(getAllProducts(page, response?.nextPage));
			setLoading(false);
		}
	}, [page, response]);

	return (
		<div className="ml-10 flex flex-col h-screen overflow-scroll sm:ml-0 sm:items-center">
			{products &&
				products.map((elem, i) => {
					if (products.length === i + 1) {
						return (
							<Tarjeta
								id={elem.id}
								key={elem.id}
								img={elem.img}
								name={elem.name}
								price={elem.price}
								tags={elem.tags.name}
								lastProduct={lastProduct}
							/>
						);
					} else {
						return (
							<Tarjeta
								id={elem.id}
								key={elem.id}
								img={elem.img}
								name={elem.name}
								tags={elem.tags.name}
								price={elem.price}
							/>
						);
					}
				})}
		</div>
	);
}
