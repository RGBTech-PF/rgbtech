import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-dibujo-2.png";
import {
	getAllProducts,
	limpiarProductos,
} from "../../store/slices/products/thunks";

function HamburguerMenu() {
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();
	// 	"Wireless",
	// "Gaming",
	// "Wired",
	// "Mouse",
	// "Keyboard",
	// "Monitor",
	// "Optical",
	// "Furniture",
	// "Laptops",
	// "Mobile",
	// "Audio",
	// "Microphone",
	// "RGB",
	// "Curveds"

	const url = "http://127.0.0.1:5173/products";

	let tags = [
		{ name: "All products", tag: "" },
		{ name: "Monitors", tag: "?tag=Monitor" },
		{ name: "Laptops", tag: "?tag=Laptops" },
		{ name: "Keyboards", tag: "?tag=Keyboard" },
		{ name: "Mouses", tag: "?tag=Mouse" },
		{ name: "Chairs and gaming desk", tag: "?tag=Furniture" },
		{ name: "Audio, speakers, etc.", tag: "?tag=Audio" },
	];

	const quickFilters = (tag) => {
		dispatch(limpiarProductos());
		dispatch(getAllProducts(1, tag));
	};

	return (
		<div className="z-50 flex flex-row mb-7 gap-5 sm:absolute left-0">
			{!open ? (
				<button
					className="absolute flex cursor-pointer ml-6"
					onClick={() => setOpen(!open)}
				>
					<svg fill="#ff127e" viewBox="0 0 100 80" width="40" height="40">
						<rect width="100" height="10"></rect>
						<rect y="30" width="100" height="10"></rect>
						<rect y="60" width="100" height="10"></rect>
					</svg>
				</button>
			) : (
				<div className="absolute top-0 w-100 pt-0 h-[500px] shadow-md bg-white px-8 rounded-br-[40px] shadow-l shadow-gray-400/100 dark:bg-gray-600 dark:shadow-none">
					<button
						className="text-[30px] text-pink-600 font-bold mt-4"
						onClick={() => setOpen(!open)}
					>
						X
					</button>
					<Link to="/about">
						<h1 className="dark:text-pink-600 text-pink-600 text-xl pb-2 pt-6 font-bold hover:text-blue-600/100 ">
							About Team
						</h1>
					</Link>
					<ul className="dark:text-white text-black font-bold relative pr-3">
						<h1 className="dark:text-white text-black text-xl pb-2 pt-6 font-bold">
							Categories
						</h1>
						{tags.map((tag, i) => (
							<li key={i} className="dark:text-white text-black p-2 ml-1 ">
								<Link
									to="/products"
									onClick={() => quickFilters(tag.tag)}
									className="flex items-center dark:text-white
								text-black  
								overflow-hidden 
								text-ellipsis whitespace-nowrap 
								rounded hover:text-blue-600/100 hover:bg-gray-100 
								transition duration-300 ease-in-out"
								>
									{tag.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
			{/* <Link to="/about">
				<button className="mt-3 bg-pink-400 rounded-full w-20 font-bold text-white hover:scale-105">
					About Team
				</button>
			</Link> */}
		</div>
	);
}

export default HamburguerMenu;
