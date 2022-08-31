import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineInventory } from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ mes: "enero", ventas: 100 },
	{ mes: "febrero", ventas: 500 },
	{ mes: "marzo", ventas: 75 },
	{ mes: "abril", ventas: 167 },
	{ mes: "Mayo", ventas: 300 },
	{ mes: "Junio", ventas: 100 },
	{ mes: "Julio", ventas: 500 },
	{ mes: "Agosto", ventas: 75 },
];

function RightSizeAdmin() {
	return (
		<div className="col-span-3 items-start justify-start flex flex-col w-full pt-12 pb-6">
			<div className="md:flex items-center justify-center w-full lg:space-y-0 space-y-4  lg:space-x-4  px-12">
				<div className="bg-white shadow-xl pt-6 items-center justify-between flex flex-col w-full">
					<span className="items-center text-black text-base justify-center flex flex-col w-full py-6">
						<AiOutlineUser className="text-black" size={30} />
						<h3> Users </h3>
						<h1 className="text-black font-bold text-xl 2xl:text-3xl">
							30
						</h1>
					</span>
				</div>
				<div className="bg-white shadow-xl pt-6 items-center justify-between flex flex-col w-full">
					<span className="items-center text-black text-base justify-center flex flex-col w-full py-6">
						<MdOutlineInventory className="text-black" size={30} />
						<h3> Stock </h3>
						<h1 className="text-black font-bold text-xl 2xl:text-3xl">
							6000
						</h1>
					</span>
				</div>
				<div className="bg-white shadow-xl pt-6 items-center justify-between flex flex-col w-full">
					<span className="items-center text-black text-base justify-center flex flex-col w-full py-6">
						<FcSalesPerformance className="text-black" size={30} />
						<h3> Products sold </h3>
						<h1 className="text-black font-bold text-xl 2xl:text-3xl">
							3000
						</h1>
					</span>
				</div>
			</div>
			<div className="border-t border-gray-300 w-full my-4" />

			<div className="w-full items-start justify-start flex flex-col px-12 py-2 ">
				<h1 className="text-xl font-bold xl:text-3xl"> </h1>

			</div>
			
				<ResponsiveContainer width="100%">
					<LineChart data={data}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="mes" />
						<YAxis
							label={{ value: "price", angle: -90, position: "insideLeft" }}
							padding={{ left: 10 }}
						/>
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="ventas" stroke="#FF69B4" />
					</LineChart>
				</ResponsiveContainer>
		</div>
	);
}

export default RightSizeAdmin;
