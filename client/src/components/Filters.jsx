import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
	getAllProducts,
	limpiarProductos,
} from "../store/slices/products/thunks";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Filters({ setPage, page }) {
	const { tags } = useSelector((state) => state.products);
	const { brands } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	const [state, setState] = useState({
		brand: "",
		tag: "",
		price: "",
		column: "",
	});

	const handleSelect = (e) => {
		const { value, name } = e.target;
		setState({
			...state,
			[name]: value,
		});
		console.log(value, name);
	};

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(limpiarProductos());
		let string = "?";
		const entries = Object.entries(state);
		const busqueda = entries.filter((entrie) => {
			return entrie[1] !== "";
		});
		busqueda.map((filtro, index) => {
			if (index === 0) {
				string = `${string}${filtro[0]}=${filtro[1]}`;
			} else {
				string = `${string}&${filtro[0]}=${filtro[1]}`;
			}
		});
		setPage(1);
		console.log(string);
		dispatch(limpiarProductos());
		dispatch(getAllProducts(1, string));
	}

	return (
		<div className="flex justify-center  w- ml-4 mt-11 dark:text-black">
			<form className="shadow-md">
				<div className="dark:text-black font-medium">
					<div className="sm:flex-row">
						<h1 className="mb-1 text-xl dark:text-white">Brands:</h1>
						<div className="form-check">
							<select
								className="h-52 w-44 cursor-pointer dark:bg-gray-400 rounded-lg"
								multiple
								name="brand"
								onChange={handleSelect}
							>
								<option
									className="hover:text-blue-400 hover:font-bold"
									value=""
								>
									All brands
								</option>
								{brands &&
									brands.map((item) => {
										return (
											<option
												className="hover:text-blue-400 hover:font-bold"
												key={item.id}
												value={item.id}
											>
												{item.name}
											</option>
										);
									})}
							</select>
						</div>
						<div className="mt-4">
							<h1 className="mb-1 text-xl dark:text-white">Tags:</h1>
							<div className="form-check ">
								<select
									className="h-52 w-44 cursor-pointer dark:bg-gray-400 rounded-lg"
									multiple
									name="tag"
									onChange={handleSelect}
								>
									<option
										className="hover:text-pink-400 hover:font-bold"
										value=""
									>
										All tags
									</option>
									{tags &&
										tags.map((item) => {
											return (
												<option
													className="hover:text-pink-400 hover:font-bold"
													key={item.name}
													value={item.name}
												>
													{item.name}
												</option>
											);
										})}
								</select>
							</div>
						</div>
					</div>
					<div className="mt-4 mb-1 text-xl dark:text-white">
						<label>Filtra Precio:</label>
					</div>
					<div className="flex flex-end dark:bg-gray-400 rounded-lg items-center">
						<input
							className="p-1 w-32 placeholder:pl-3 font-semibold dark:bg-gray-400 rounded-lg"
							type="text"
							placeholder="Precio"
						/>
						<RiMoneyDollarCircleLine size={26} />
					</div>
					<div className="mt-4 ">
						<h1 className=" mb-1 text-xl dark:text-white">Orden productos:</h1>
						<div>
							<select
								className="h-24 w-44 cursor-pointer dark:bg-gray-400 rounded-lg"
								name="column"
								multiple
								onChange={handleSelect}
							>
								<option
									className="hover:text-blue-400 hover:font-bold"
									value="price&order=ASC"
								>
									Precio ascendente
								</option>
								<option
									className="hover:text-pink-400 hover:font-bold"
									value="price&order=DESC"
								>
									Precio descendente
								</option>
								<option
									className="hover:text-blue-400 hover:font-bold"
									value="=rating&order=ASC"
								>
									Rating ascendente
								</option>
								<option
									className="hover:text-pink-400 hover:font-bold"
									value="=rating&order=DESC"
								>
									Rating descendente
								</option>
							</select>
						</div>
					</div>
				</div>
				<button
					className="mt-4 ml-14 mb-4 bg-transparent hover:bg-blue-200 text-pink-700 font-semibold hover:text-white py-1 px-4 border border-pink-500 hover:border-transparent rounded dark:hover:bg-pink-300"
					onClick={handleSubmit}
				>
					Filtrar
				</button>
				<br />
			</form>
		</div>
	);
}
