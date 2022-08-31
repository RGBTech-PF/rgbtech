import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import FavoriteCard from "../components/TarjetaFav";
import { MdFavorite} from 'react-icons/md';

const Favorites = () => {
	const { favorito } = useSelector((state) => state.products);


	return (
		<div>
			<Header />
			<div className="flex justify-around  items-center rounded-3xl text-white font-semibold">
				<div className="flex flex-col justify-center items-center rounded-3xl  p-4 text-xl text-black">
					<h1 className="flex gap-2 text-4xl">
						<MdFavorite/>
						My Favorites:
					</h1>
					<div className="flex flex-col gap-4 mt-2">
						{favorito.length === 0 && (
					<h2 className="text-2xl mt-6">Your favorites its empty! 😥</h2>
				)}
					</div>
					<div>
					{
						favorito?.map((item,i) => {
							return(
								<FavoriteCard
								key={i}
								name= {item.name}
								img={item.img}
								price= {item.price}
								/>
							)
						})
					}
				</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Favorites;
