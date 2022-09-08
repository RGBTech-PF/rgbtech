import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dashboardAction } from "../../store/slices/admin/thunk";
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

function LeftSizeAdmin() {

	// const [infoAdmin, setInfoAdmin] = useState()
	const { dashboard }  = useSelector((state) => state.admin)
	const dispatch = useDispatch()


	useEffect(() => {
		dispatch(dashboardAction());
	}, []);


	return (

		<div className=" col-span-2 min-h-[90vh] border-r border-gray-300 items-start justify-start flex flex-col w-full ">
			<div className="w-full text-white items-start justify-start flex flex-col px-12 pt-2 pb-6">
				<div className="items-start font-bold shadow-xl justify-start flex flex-col px-6 pt-8 pb-4 bg-[#87CEFA] rounded-md mt-9 w-full ">
					<h1> The total sales : </h1>
					<h1 className=" text-3xl text-white xl:text-5xl font-bold py-1 rounded-md">
						${Math.round(dashboard?.totalSales)}
					</h1>
				</div>
			</div>
			<h1> Month Sales </h1>
			<ResponsiveContainer width="90%">
				<BarChart data={dashboard?.monthProducts}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" />
					<YAxis
						label={{ value: "amount", angle: -90, position: "insideLeft" }}
						padding={{ left: 10 }}
					/>
					<Tooltip />
					<Legend />
					<Bar dataKey="amount" fill="#87CEFA" />
				</BarChart>
			</ResponsiveContainer>
      
		</div>
	);
}

export default LeftSizeAdmin;
