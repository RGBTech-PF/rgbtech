import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import Comment from "./Comment.jsx";
import defaultImg from "../assets/defaultImage.png";
import { ImGift } from "react-icons/im";

const testComments = [
	{
		id: 1,
		rating: 4.3,
		profilePhoto:
			"https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
		user: "Pablo",
		comment: "tienen que mejorar",
	},
	{
		id: 2,
		rating: 3.4,
		profilePhoto:
			"https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
		user: "Carlos",
		comment: "Muy bonito me parecio todo",
	},
	{
		id: 3,
		rating: 5,
		profilePhoto:
			"https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
		user: "Luis",
		comment: "Que buen pf",
	},
	{
		id: 4,
		rating: 1,
		profilePhoto:
			"https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
		user: "Marciana",
		comment: "Inolvidable",
	},
];

function CarruselComments({ comments }) {
	return (
		<div className="">
			<Swiper
				slidesPerView={3}
				spaceBetween={0}
				loop={true}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Pagination]}
			>
				<div className="">
					{testComments.map((c, i) => (
						<SwiperSlide key={i}>
							<Comment
								user={c.user}
								profilePhoto={c.profilePhoto}
								comment={c.comment}
								rating={c.rating}
							></Comment>
						</SwiperSlide>
					))}
					{comments.map((c, i) => (
						<SwiperSlide key={i}>
							<Comment
								user={c.user}
								profilePhoto={c.profilePhoto ? c.profilePhoto : defaultImg}
								comment={c.comment}
								rating={c.rating}
							></Comment>
						</SwiperSlide>
					))}
				</div>
			</Swiper>
		</div>
	);
}

export default CarruselComments;

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

// import React from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import {Pagination, Navigation } from "swiper";
// import Comment from "./Comment.jsx";

// const testComments = [
// 	{
//         id: 1,
// 		rating: 4.3,
// 		profilePhoto:
// 			"https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
// 		user: "Pablo",
// 		comment: "tienen que mejorar",
// 	},
// 	{
//         id: 2,
// 		rating: 3.4,
// 		profilePhoto:
// 			"https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
// 		user: "Carlos",
// 		comment: "Muy bonito me parecio todo",
// 	},
// 	{
//         id: 3,
// 		rating: 5,
// 		profilePhoto:
// 			"https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
// 		user: "Luis",
// 		comment: "Que buen pf",
// 	},
// 	{
//         id: 4,
// 		rating: 1,
// 		profilePhoto:
// 			"https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg",
// 		user: "Marciana",
// 		comment: "Inolvidable",
// 	},
// ];

// const CarruselComments = () => {

// 	return (
// 		<div className="bg-gray-200 rounded-3xl mb-10">
// 			<div className="flex flex-col pt-4">
// 				<div className="flex flex-center items-center mb-5">
// 					<Swiper
// 						spaceBetween={30}
// 						slidesPerView={3}
// 						pagination={{ clickable: true }}
// 						navigation={true}
// 						modules={[Pagination, Navigation]}
// 					>
// 						{testComments.map((c, i) => (
// 									<SwiperSlide key={i}>
// 										<Comment
// 											key={c.id}
// 											id={c.id}
// 											user={c.user}
// 											profilePhoto={c.profilePhoto}
//                                             comment={c.comment}
//                                             rating={c.rating}
// 										/>
// 									</SwiperSlide>
// 							))}
// 					</Swiper>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default CarruselComments;
