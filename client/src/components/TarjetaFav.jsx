import React from "react";
import { GiTechnoHeart } from "react-icons/gi";

const FavoriteCard = ({
	name,
	img,
	price,
}) => {
	return (
		<div className="flex justify-center  p-2">
			<div className="flex flex-col md:flex-row md:max-w-6xl rounded-lg bg-white shadow-lg">
				<img
					className="bg-pink-700 w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
					src={img}
					alt=""
				/>
				<div className="p-6 flex flex-col justify-start">
					<h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
					<p className="text-gray-700 text-base mb-4">
						This is a special product of our RGBtech page for all our customers
					</p>
					<div className="flex justify-between items-center">
						<p className="text-gray-600 text-xl font-bold">
							{price}
						</p>
					</div>
                    <div className="pt-4">
                    <button
						className="px-4 h-8 rounded font-semibold border border-blue-400 hover:scale-95 text-slate-900"
						type="button"
						>
						Add to card
						</button>
                        <button className="ml-12"><GiTechnoHeart/></button>
                    </div>
                    
				</div>
			</div>
		</div>
	);
};

export default FavoriteCard;