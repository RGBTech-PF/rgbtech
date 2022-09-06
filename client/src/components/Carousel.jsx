import React from "react";
import logo from "../assets/logo-dibujo2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const imagnaryProducts = [
	logo,
	"https://th.bing.com/th/id/R.44f2d5d7c7d0b1ab754fda0f41ac5e42?rik=ZV%2bo60ANzXQFEQ&pid=ImgRaw&r=0",
	"https://storage-asset.msi.com/global/picture/image/feature/AIO/Monitor/Optix-G24C/AIO-Optix_G24C_overview.png",
	"https://th.bing.com/th/id/R.35c1c1b691e969eef6d654698152a554?rik=B7Nd%2fbUdvdIyaQ&pid=ImgRaw&r=0",
	"https://th.bing.com/th/id/R.76424bc99afbac876aeedea611646ed2?rik=4EIIY8RoGkPEFg&pid=ImgRaw&r=0",
	"https://th.bing.com/th/id/R.053e075f355388e9ff28e0794bb2d239?rik=ZB1hwpHkMMPg1g&pid=ImgRaw&r=0",
	"https://th.bing.com/th/id/R.f5098e66f9669d51523abfd422c9a187?rik=GONnNmM%2b26fbeg&pid=ImgRaw&r=0",
	"https://th.bing.com/th/id/R.bae0e7961a9a3b41f71de54dd0a4263d?rik=WDgnFptVrKWIEQ&riu=http%3a%2f%2fwww.asus.com%2fus%2fROG-Republic-Of-Gamers%2fROG-STRIX-GL502VY%2fwebsites%2fglobal%2fproducts%2fsZ9xG0iTQQoxELva%2fimg%2f08%2ffg01.png&ehk=BFvcXX%2fzJ0NQFmdPbrqWMtru7%2b4FGjyWLLZCnTLlJFo%3d&risl=&pid=ImgRaw&r=0",
	"https://th.bing.com/th/id/R.8ec76cdd286fd8f9f4b717a442f9726e?rik=AjKMvoo4o0ChDw&pid=ImgRaw&r=0",
	"https://th.bing.com/th/id/R.3795606de5127a32cbb246a9fc7c03c3?rik=gqOpXoAwkLiKnQ&pid=ImgRaw&r=0",
	"https://th.bing.com/th/id/R.f565036a6316a52feb89bb17fc5c1dae?rik=cls3GeO9zLGo8w&pid=ImgRaw&r=0",
	"https://res.cloudinary.com/ddroxn7iv/image/upload/v1662348710/RGBtech/RGBpoint/Baner_rgbPoint_yl075k.png",
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
							className="w-[1400px] h-[500px] mb-8"
							src={imagnaryProducts[0]}
						/>
					</SwiperSlide>
					<SwiperSlide className="flex justify-center items-center">
						<img className="w-[1400px] h-[500px]" src={imagnaryProducts[1]} />
					</SwiperSlide>
					<SwiperSlide className="flex justify-center items-center">
						<img className="w-[1400px] h-[500px]" src={imagnaryProducts[2]} />
					</SwiperSlide>
					<SwiperSlide className="flex justify-center items-center">
						<img className="w-[1400px] h-[500px]" src={imagnaryProducts[3]} />
					</SwiperSlide>
					<SwiperSlide className="flex justify-center items-center">
						<img className="w-[1400px] h-[500px]" src={imagnaryProducts[4]} />
					</SwiperSlide>
					<SwiperSlide className="flex justify-center items-center">
						<img
							className=" ml-10 w-[1300px] h-[500px]"
							src={imagnaryProducts[5]}
						/>
					</SwiperSlide>
					<SwiperSlide className="flex justify-center items-center">
						<img
							className="ml-12 w-[1300px] h-[500px]"
							src={imagnaryProducts[6]}
						/>
					</SwiperSlide>
					<SwiperSlide className="flex justify-center items-center">
						<img
							className="ml-10 w-[1400px] h-[500px]"
							src={imagnaryProducts[7]}
						/>
					</SwiperSlide>
					<SwiperSlide className="flex justify-center items-center">
						<img className="w-[1400px] h-[500px]" src={imagnaryProducts[8]} />
					</SwiperSlide>
					<SwiperSlide className="flex justify-center items-center">
						<img className="w-[1200px] h-[500px]" src={imagnaryProducts[9]} />
					</SwiperSlide>
					<SwiperSlide className="flex justify-center items-center">
						<img
							className="ml-12 w-[1200px] h-[500px]"
							src={imagnaryProducts[10]}
						/>
					</SwiperSlide>
					<SwiperSlide className="flex justify-center items-center">
						<img
							className="ml-12 w-full h-[500px]"
							src={imagnaryProducts[11]}
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
