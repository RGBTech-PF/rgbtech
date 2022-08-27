import React from "react";
import HamburguerMenu from "./HamburguerMenu";
import SearchBar2 from "./SearchBar2";
import UserSection from "./UserSection";

export default function Index() {
	return (
		<div className="flex bg-white sticky top-0 right-0 left-0 justify-between flex-row items-center shadow-md z-50 mb-5 mx-0.5">
			<HamburguerMenu />

			<SearchBar2 />
			<UserSection />
		</div>
	);
}
