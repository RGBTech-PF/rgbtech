import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMarcas } from "../../store/slices/products/thunks";
import {
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Bar,
	BarChart,
	ResponsiveContainer,
} from "recharts";



// const brands = [
// 	{ marca: "razer", total: 8108, cantidad: 14 },
// 	{ marca: "logitech", total: 1089, cantidad: 29 },
// 	{ marca: "lg", total: 4002, cantidad: 5 },
// 	{ marca: "samsung", total: 9831, cantidad: 7 },
// ];

function LeftSizeAdmin() {

	// const tags = useSelector(state=> state.tags)
	const brands = useSelector(state=> state.brands)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getMarcas());
	}, [dispatch]);


	return (
		<div className=" col-span-2 min-h-[90vh] border-r border-gray-300 items-start justify-start flex flex-col w-full ">
			<div className="w-full text-white items-start justify-start flex flex-col px-12 pt-2 pb-6">
				<div className="items-start font-bold shadow-xl justify-start flex flex-col px-6 pt-8 pb-4 bg-[#87CEFA] rounded-md mt-9 w-full ">
					<h1> The total sales : </h1>
					<h1 className=" text-3xl text-white xl:text-5xl font-bold py-1 rounded-md">
						$ 920,434.00
					</h1>
				</div>
			</div>
			<h1> Month Sales </h1>
			<ResponsiveContainer width="90%">
				<BarChart data={brands}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="marca" />
					<YAxis
						label={{ value: "price", angle: -90, position: "insideLeft" }}
						padding={{ left: 10 }}
					/>
					<Tooltip />
					<Legend />
					<Bar dataKey="total" fill="#87CEFA" />
				</BarChart>
			</ResponsiveContainer>
      
		</div>
	);
}

export default LeftSizeAdmin;
