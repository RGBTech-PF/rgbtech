import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../Product.jsx";
import {
	getProductsBestSeller,
	getProductDiscount,
	getProductFreeShep,
} from "../../store/slices/products/thunks.js";
// import css from "./CategoriesCarousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const CategoriesCarousel = () => {
	const { products } = useSelector((state) => state.products);
	const dispatch = useDispatch();
	const { productosFilt } = useSelector((state) => state.products);
	// const [filtrados, setFiltrados] = useState()
	// const [section, setSection] = useState({
	// 	activeSection: "null",
	// });

	// const toggleActive = (i) => {
	// 	setSection({
	// 		...section,
	// 		activeSection: section.objects[i],
	// 	});
	// };

	const HandleClickDiscount = () => {
		dispatch(getProductDiscount());
	};
	const HandleClickFreeShep = () => {
		dispatch(getProductFreeShep());
	};

	// const toggleActiveStyle = (i) => {
	// 	if (section.objects[i] === section.activeSection) {
	// 		return `text-pink-100 text-lg font-medium text-white p-2 rounded-xl hover:cursor-pointer ${css.active}`;
	// 	} else {
	// 		return `text-white text-lg font-medium p-2 rounded-xl hover:cursor-pointer ${css.inactive}`;
	// 	}
	// };

	return (
		<div className="bg-gray-200 dark:bg-gray-600 rounded-3xl mb-10">
			<div className="flex flex-col pt-4">
				<ul className="flex flex-row gap-5 mb-4 justify-center items-center text-xl">
					<li>
						<button
							className="hover:underline decoration-pink-700 font-bold "
							onClick={() => {
								HandleClickDiscount();
							}}
						>
							On Discount
						</button>
					</li>
					<li>
						<button
							className="pr-2 border-r-blue-500 hover:underline decoration-pink-700 font-bold"
							onClick={() => {
								HandleClickFreeShep();
							}}
						>
							Free Shipping
						</button>
					</li>
					<li>
						<button
							className="hover:underline decoration-pink-700 font-bold"
							onClick={() => {
								HandleClickFreeShep();
							}}
						>
							High Rating
						</button>
					</li>
				</ul>
				<div className="flex flex-center items-center mb-5">
					<Swiper
						spaceBetween={30}
						slidesPerView={3}
						// autoplay={{
						// 	delay: 2500,
						// 	disableOnInteraction: false,
						// }}
						pagination={{ clickable: true }}
						navigation={true}
						modules={[Autoplay, Pagination, Navigation]}
					>
						{productosFilt.length !== 0
							? productosFilt.map((product, i) => (
									<SwiperSlide key={i}>
										<Product
											key={product.id}
											id={product.id}
											name={product.name}
											description={product.description}
											img={product.img}
											price={product.price}
											stock={product.stock}
											onDiscount={product.onDiscount}
											freeShipping={product.freeShipping}
											discountPercentage={product.discountPercentage}
										></Product>
									</SwiperSlide>
							  ))
							: products.map((product, i) => (
									<SwiperSlide key={i}>
										<Product
											key={product.id}
											id={product.id}
											name={product.name}
											description={product.description}
											img={product.img}
											price={product.price}
											stock={product.stock}
											onDiscount={product.onDiscount}
											freeShipping={product.freeShipping}
											discountPercentage={product.discountPercentage}
										></Product>
									</SwiperSlide>
							  ))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default CategoriesCarousel;
