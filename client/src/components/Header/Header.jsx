import React from "react";
import HamburguerMenu from "./HamburguerMenu";
import SearchBar2 from "./SearchBar2";
import UserSection from "./UserSection";

export default function Index() {
	return (
		<div className="flex bg-white dark:bg-gray-600 sticky top-0 right-0 left-0 justify-between flex-row items-center shadow-md z-40 mb-5">
			<HamburguerMenu />

			<SearchBar2 />
			<UserSection />
		</div>
	);
}
