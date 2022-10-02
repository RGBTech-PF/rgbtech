import React from "react";
import { BsTrash2 } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const ShoppingCard = ({
	name,
	img,
	units,
	description,
	addUnits,
	subUnits,
	delProduct,
	totalProductPrice,
	discountPercentage,
	onDiscount,
	freeShipping,
}) => {
	return (
		<div className="flex p-4 rounded-2xl w-4/5 md:flex-col">
			<div className="flex flex-row rounded-lg md:max-w-4xl bg-white shadow-lg md:flex-col">
				<img
					className="bg-pink-700 w-72 h-72 object-cover md:w-full"
					src={img}
					alt=""
				/>
				<div className="p-3 flex flex-col justify-center items-start dark:bg-gray-600">
					<h5 className="text-gray-900 dark:text-black text-xl font-medium mb-2">
						{name.slice(0, 20)}...
					</h5>
					<p className="text-gray-700 dark:text-black text-base mb-4">
						{description}
					</p>
					<div className="flex items-center mt-3 mb-5">
						{onDiscount ? (
							<span className="flex text-xl text-gray-900 dark:text-white justify-between">
								<p className="line-through text-gray-400 mr-1 text-2xl">
									${totalProductPrice}
								</p>
								<p className="text-black font-semibold text-2xl ml-4">
									$
									{Math.round(
										totalProductPrice -
											(totalProductPrice * discountPercentage) / 100
									)}
								</p>
							</span>
						) : (
							<span className="flex text-xl text-gray-900 dark:text-white justify-between">
								<p className="text-black text-2xl ml-4">${totalProductPrice}</p>
							</span>
						)}
						{freeShipping ? (
							<p className="text-green-500 ml-2">( Free Shipping )</p>
						) : null}
					</div>
					<p className="flex mt-4 gap-2 text-2xl">
						<AiOutlinePlus
							className="cursor-pointer hover:scale-110"
							onClick={addUnits}
						/>
						<AiOutlineMinus
							className="cursor-pointer hover:scale-110 "
							onClick={subUnits}
						/>
						<BsTrash2
							className="cursor-pointer hover:scale-110 duration-300"
							onClick={delProduct}
						/>
						<p className="text-lg font-bold ml-20">Units: {units}</p>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ShoppingCard;
