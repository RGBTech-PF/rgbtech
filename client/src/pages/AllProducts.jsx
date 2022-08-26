import React, { useEffect, useRef } from "react";
import { useCallback } from "react";
// import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getAllProducts } from "../store/slices/products/thunks";
import  useProducts  from "../components/useProducts"
import Header from "../components/Header/Header.jsx";
import { useLocation } from "react-router-dom";
import { getAllProducts, getEtiquetas, getMarcas } from "../store/slices/products/thunks";
import Filters from "../components/Filters";



function AllProducts() {

	// const { search } =  useLocation();
	const dispatch = useDispatch()


	useEffect(() => {
		dispatch(getEtiquetas())
		dispatch(getMarcas())
	}, [])


	// const dispatch = useDispatch();
	const { products } = useSelector((state) => state.products);
	const [page, setPage] = useState(1)
	const response = useSelector(state => state.response);
	const observer = useRef();
	const {loading, error} = useProducts(page)
	console.log(response?.pageNumbers);
	response ? console.log(response) : undefined
	const lastProduct = useCallback(node => {
		if(loading)return 
		if(observer.current) observer.current.disconnect()
		observer.current = new IntersectionObserver(entries => {
		  if(entries[0].isIntersecting) {
			console.log("VISIBLE")
			if(5 > page){
			  setPage(page + 1)
			  console.log(page)
			}
		  }
		},{
		  threshold : 0
		}, [loading, response?.nextPage])
		if(node) observer.current.observe(node)
	  })



	// useEffect(() => {
	// 	dispatch(getAllProducts(page));
	// }, []);

	return (
		<div>
			<Header/>
			{/* <h1>
			All our products here
			</h1> */}
			<div className="">
				<Filters/>
			</div>
			{products &&
				products.map((elem, i) => {
					if(products.length === i+1){
						return (
							<div key={i} ref={lastProduct} className="flex p-6 font-mono">
								<div className="flex rounded-xl justify-center shadow-2xl bg-pink-600 w-48 h-[230px] relative z-10  before:h-full ">
									<img
										src={elem.img}
										alt=""
										className="absolute z-10 inset-0 pt-5 w-full h-full object-cover rounded-lg"
										loading="lazy"
									/>
								</div>
								<form className="flex-auto pl-6">
								<div className="relative flex flex-wrap items-baseline pb-6 before:bg-white shadow-xl before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
										<h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-pink-600">
										{elem.name}
										</h1>
										<div className="relative text-lg text-black shadow-xl rounded-2xl">${elem.price}</div>
										<div className="relative uppercase text-pink-600 ml-10 shadow-xl">
											In stock
										</div>
									</div>
									<div className="flex space-x-2 mb-4 text-sm font-medium">
										<div className="flex space-x-4">
											<button
												className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-blue-400 hover:bg-pink-600 text-black"
												type="submit"
											>
												Buy now
											</button>
											<button
												className="px-6 h-12 uppercase font-semibold tracking-wider border border-slate-200 text-slate-900"
												type="button"
											>
												Add to cart
											</button>
										</div>
										<button
											className="flex-none flex items-center justify-center w-12 h-12 text-black"
											type="button"
											aria-label="Like"
										>
											<svg
												width="20"
												height="20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
												/>
											</svg>
										</button>
									</div>
									<p className="text-xs leading-6 text-slate-500">
									Earn points by shopping at RGBtech
									</p>
								</form>
							</div>
						);
						}
						// 	<div key={i} ref={lastProduct} className="flex justify-start p-2">
						// 	<div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
						// 		<img
						// 			className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
						// 			src={elem.img}
						// 			alt=""
						// 		/>
						// 		<div className="p-6 flex flex-col justify-start">
						// 			<h5 className="text-gray-900 text-xl font-medium mb-2">
						// 				{elem.name}
						// 			</h5>
						// 			<p className="text-gray-700 text-base mb-4">
						//             This is a special product of our RGBtech page for all our customers
						// 			</p>
						// 			<p className="text-gray-600 text-x">${elem.price}</p>
						// 		</div>
						// 	</div>
						// </div>
					return (
						
						<div key={i} className=" flex p-12 font-mono ">
								<div className="flex rounded-xl justify-center shadow-2xl bg-pink-600 w-48 h-[230px] relative z-10 w-full before:h-full ">
									<img
										src={elem.img}
										alt=""
										className="absolute z-10 inset-0 p-3 w-full object-center rounded-lg"
										loading="lazy"
									/>
								</div>
								<form className="flex-auto pl-6">
									<div className="relative flex flex-wrap items-baseline pb-6 before:bg-white shadow-xl before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
										<h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-pink-600">
										{elem.name}
										</h1>
										<div className="relative text-lg text-black shadow-xl rounded-2xl">${elem.price}</div>
										<div className="relative uppercase text-pink-600 ml-10 shadow-xl">
											In stock
										</div>
									</div>
									<div className="flex space-x-2 mb-4 text-sm font-medium">
										<div className="flex space-x-4 p-2">
											<button
												className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-blue-400 hover:bg-pink-600 text-black "
												type="submit"
											>
												Buy now
											</button>
											<button
												className="px-6 h-12 uppercase font-semibold tracking-wider border border-slate-300 text-slate-900"
												type="button"
											>
												Add to cart
											</button>
										</div>
										<button
											className="flex-none flex items-center justify-center w-12 h-12 text-black"
											type="button"
											aria-label="Like"
										>
											<svg
												width="20"
												height="20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
												/>
											</svg>
										</button>
									</div>
									<p className="text-s leading-6 text-slate-500">
									    Earn points by shopping at RGBtech
									</p>
								</form>
							</div>
						);
					})}
		</div>
	);
}
// <div key={i} className="flex justify-start p-2">
// 	<div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
// 		<img
// 			className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
// 			src={elem.img}
// 			alt=""
// 		/>
// 		<div className="p-6 flex flex-col justify-start">
// 			<h5 className="text-gray-900 text-xl font-medium mb-2">
// 				{elem.name}
// 			</h5>
// 			<p className="text-gray-700 text-base mb-4">
//             This is a special product of our RGBtech page for all our customers
// 			</p>
// 			<p className="text-gray-600 text-x">${elem.price}</p>
// 		</div>
// 	</div>
// </div>

export default AllProducts;

