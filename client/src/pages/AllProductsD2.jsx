import React from "react";
import AllProducts from "./AllProducts";
import Header from "../components/Header/Header";
import Filters from "../components/Filters";
import { useState } from "react";

export default function AllProductsD2() {
	const [page, setPage] = useState(1);
	return (
		<div>
			<Header />
			<div className="flex flex-row min-h-screen h-full overflow-scroll sm:flex-col">
				<Filters setPage={setPage} page={page} />
				<AllProducts setPage={setPage} page={page} />
			</div>
		</div>
	);
}
