import React from "react";
import logo from "../assets/logo-dibujo2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const imagnaryProducts = [
	logo,
	"https://res.cloudinary.com/ddroxn7iv/image/upload/v1662562002/RGBtech/ImageProduct/ps5_gv7pog.png",
	"https://res.cloudinary.com/ddroxn7iv/image/upload/v1662576325/RGBtech/ImageProduct/img_5_qy9lcv.png",
	"https://res.cloudinary.com/ddroxn7iv/image/upload/v1662555612/RGBtech/ImageProduct/img_1_u2c0bb.png",
	"https://res.cloudinary.com/ddroxn7iv/image/upload/v1662520667/RGBtech/ImageProduct/img_3_cbleko.png",
	"https://res.cloudinary.com/ddroxn7iv/image/upload/v1662521855/RGBtech/ImageProduct/img_4_im15ur.png",
	"https://res.cloudinary.com/ddroxn7iv/image/upload/v1662520668/RGBtech/ImageProduct/img_2_ktemmd.png",
	"https://res.cloudinary.com/ddroxn7iv/image/upload/v1662556899/RGBtech/RGBpoint/Baner_rgbPoint_l2vqpa.png",
];

const responsiveImgs = [
	"https://res.cloudinary.com/ddroxn7iv/image/upload/v1662591195/RGBtech/ImageProduct/logo_rsponsive_ma5vis.png",
	"https://res.cloudinary.com/ddroxn7iv/image/upload/v1662590613/RGBtech/ImageProduct/ps5_responsive_zhxzoj.png",
	"https://res.cloudinary.com/ddroxn7iv/image/upload/v1662590923/RGBtech/ImageProduct/img_5_resposive_ywzcug.png",
	"https://res.cloudinary.com/ddroxn7iv/image/upload/v1662589911/RGBtech/ImageProduct/img_1_responsive_pcwdla.png",
	"https://res.cloudinary.com/ddroxn7iv/image/upload/v1662588114/RGBtech/ImageProduct/img_responsiv_prueba_dojj7n.png",
	"https://res.cloudinary.com/ddroxn7iv/image/upload/v1662588999/RGBtech/ImageProduct/img_4_responsive_rnoqbp.png",
	"https://res.cloudinary.com/ddroxn7iv/image/upload/v1662603727/RGBtech/ImageProduct/img_2_responsive_rc5tx4.png",
	"https://res.cloudinary.com/ddroxn7iv/image/upload/v1662603424/RGBtech/RGBpoint/baner_responsive_fr62yf.png",
];

function Carousel() {
	return (
		<div className="flex justify-center items-center w-[100%]">
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				navigation={true}
				pagination={{
					clickable: true,
					type: "bullets",
				}}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Pagination, Navigation]}
			>
				<div className="l-20">
					<SwiperSlide className="flex justify-center items-center h-screen">
						<img
							className="w-auto h-[500px] mb-8 sm:hidden"
							src={imagnaryProducts[0]}
						/>
						<img
							className="hidden w-auto h-[300px] sm:flex"
							src={responsiveImgs[0]}
							alt="responsive1"
						/>
					</SwiperSlide>
					<SwiperSlide className="flex justify-center items-center">
						<img
							className="w-auto h-[500px] sm:hidden"
							src={imagnaryProducts[1]}
						/>
						<img
							className="hidden w-screen h-[300px] sm:flex"
							src={responsiveImgs[1]}
							alt="responsive2"
						/>
					</SwiperSlide>
					<SwiperSlide className="flex justify-center items-center">
						<img
							className="w-auto h-[500px] sm:hidden"
							src={imagnaryProducts[2]}
						/>
						<img
							className="hidden w-screen h-[300px] sm:flex"
							src={responsiveImgs[2]}
							alt="responsive3"
						/>
					</SwiperSlide>
					<SwiperSlide className="flex justify-center items-center">
						<img
							className="w-auto h-[500px] sm:hidden"
							src={imagnaryProducts[3]}
						/>
						<img
							className="hidden w-screen h-[300px] sm:flex"
							src={responsiveImgs[3]}
							alt="responsive3"
						/>
					</SwiperSlide>

					<SwiperSlide className="flex justify-center items-center">
						<img
							className="w-auto h-[500px] sm:hidden"
							src={imagnaryProducts[4]}
						/>
						<img
							className="hidden w-screen h-[300px] sm:flex"
							src={responsiveImgs[4]}
							alt="responsive3"
						/>
					</SwiperSlide>
					<SwiperSlide className="flex justify-center items-center sm:hidden">
						<img
							className="w-auto h-[500px] sm:hidden"
							src={imagnaryProducts[5]}
						/>
						<img
							className="hidden w-screen h-[300px] sm:flex"
							src={responsiveImgs[5]}
							alt="responsive3"
						/>
					</SwiperSlide>
					<SwiperSlide className="flex justify-center items-center sm:hidden">
						<img
							className="w-auto h-[500px] sm:hidden"
							src={imagnaryProducts[6]}
						/>
						<img
							className="hidden w-screen h-[300px] sm:flex"
							src={responsiveImgs[6]}
							alt="responsive3"
						/>
					</SwiperSlide>
					<SwiperSlide className="flex justify-center items-center sm:hidden">
						<img
							className="w-auto h-[500px] sm:hidden"
							src={imagnaryProducts[7]}
						/>
						<img
							className="hidden w-screen h-[300px] sm:flex"
							src={responsiveImgs[7]}
							alt="responsive3"
						/>
					</SwiperSlide>
				</div>
			</Swiper>
		</div>
	);
}

export default Carousel;

// let count = 0;
// let slideInterval;

// function Carousel() {
// 	const [currentIndex, setCurrentIndex] = useState(0);

// 	const slideRef = useRef();

// 	const removeAnimation = () => {
// 		slideRef.current.classList.remove("fade-anim");
// 	};

// 	useEffect(() => {
// 		slideRef.current.addEventListener("animationend", removeAnimation);
// 		slideRef.current.addEventListener("mouseenter", pauseSlider);
// 		slideRef.current.addEventListener("mouseleave", startSlider);

// 		startSlider();
// 		return () => {
// 			pauseSlider();
// 		};
// 	}, []);

// 	const pauseSlider = () => {
// 		clearInterval(slideInterval);
// 	};

// 	const handleOnNextClick = () => {
// 		count = (count + 1) % imagnaryProducts.length;
// 		setCurrentIndex(count);
// 		slideRef.current.classList.add("fade-anim");
// 	};
// 	const startSlider = () => {
// 		slideInterval = setInterval(() => {
// 			handleOnNextClick();
// 		}, 3000);
// 	};
// 	const handleOnPrevClick = () => {
// 		const imgsLength = imagnaryProducts.length;
// 		count = (currentIndex + imgsLength - 1) % imgsLength;
// 		setCurrentIndex(count);
// 		slideRef.current.classList.add("fade-anim");
// 	};

// 	return (
// 		<div ref={slideRef} className="w-auto select-none">
// 			<div className="flex flex-wrap justify-center">
// 				<img
// 					className="pt-5 pb-15 mr-10 transition duration-300 ease-in-out"
// 					src={imagnaryProducts[currentIndex]}
// 					alt=""
// 				/>
// 			</div>

// 			<div className="flex flex-wrap justify-center">
// 				<button
// 					className="absolute bottom-60 flex items-center justify-center text-center hover:scale-110 left-20"
// 					onClick={handleOnPrevClick}
// 				>
// 					<IoMdArrowDropleft size={50} />
// 				</button>
// 				<button
// 					className="absolute bottom-60 flex items-center justify-center text-center hover:scale-110 right-20"
// 					onClick={handleOnNextClick}
// 				>
// 					<IoMdArrowDropright size={50} />
// 				</button>
// 			</div>
// 		</div>
// 	);
// }

// export default Carousel;
