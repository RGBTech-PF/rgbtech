import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { searchNameAction } from "../../store/slices/products/thunks";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
	const [value, setValue] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { productsName } = useSelector((state) => state.products);
	const largo = Object.keys(productsName).length;

	const onChange = (e) => {
		setValue(e.target.value);
		dispatch(searchNameAction(e.target.value));
	};

	const onSearch = () => {
		dispatch(searchNameAction(""));
		setValue("");
	};

	const onClickHandler = (e) => {
		e.preventDefault();
		navigate("/Search");
		setValue("");
	};

	useEffect(() => {
		console.log(largo);
	}, [largo]);

	return (
		<div>
			<div className="flex justify-center">
				<input
					className="bg-pink-500 w-80 text-blue-800 pl-4 pt-2 pb-1 mr-4 font-bold "
					value={value}
					type="text"
					onChange={onChange}
				/>
				<button
					className="btn inline-block pr-4 pl-4 pt-2.5 pb-2.5 bg-pink-500 hover:bg-blue-400 hover:scale-110 shadow-xl text-white rounded-r-xl"
					onClick={(e) => onClickHandler(e)}
				>
					<BsSearch />
				</button>
			</div>

			<div>
				{productsName?.map((item) => (
					<div
						className="flex justify-center overflow-y-scroll h-60"
						key={item.value}
						onClick={onChange}
					>
						<ul className="z-40 bg-blue-400 mt-1 w-96 text-gray-900">
							<li className="px-6 py-2 text-black cursor-pointer w-full overflow-y-scroll h-60">
								{item.label}
								onClick={onChange}
							</li>
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
