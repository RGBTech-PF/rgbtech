import React from "react";
import HamburguerMenu from "./HamburguerMenu";
import SearchBar2 from "./SearchBar2";
import UserSection from "./UserSection";
import logo from "../../assets/logo-dibujo-2.png";
import { Link } from "react-router-dom";

export default function Index() {
	return (
		<div className="flex bg-white dark:bg-gray-600 sticky top-0 right-0 left-0 justify-between flex-row items-center shadow-md z-40 mb-5 sm:flex-col">
			<div className="flex justify-center items-center">
				<HamburguerMenu />
				<div>
					<Link to="/">
						<img
							className="w-20 ml-20 sm:ml-0 hover:scale-105 duration-150"
							src={logo}
							alt="logo-rgbtech"
						/>
					</Link>
				</div>
			</div>
			<SearchBar2 />
			<UserSection />
		</div>
	);
}
