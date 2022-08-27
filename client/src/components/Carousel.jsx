import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import logo from "../assets/logo-dibujo2.png"

const imagnaryProducts = [
	 logo,
    "https://cdn.shopify.com/s/files/1/2227/7667/products/CA-9011204-AP-Gallery-VOID-RGB-ELITE-USB-WHITE-01_large.png?v=1581667224",
    "https://res.cloudinary.com/ddroxn7iv/image/upload/v1661042263/RGBtech/ImageProduct/SK622_Wireless_pojnja.png",
    "https://res.cloudinary.com/ddroxn7iv/image/upload/v1661399855/RGBtech/ImageProduct/C8_aebd3c.png",
	"https://th.bing.com/th/id/R.d960b4953015ded2ff60230a1dfc4d1c?rik=JvUe4hCiXK1qow&pid=ImgRaw&r=0",
	"https://th.bing.com/th/id/R.2d00452fc652930250bbfdd346a7402c?rik=nluTqm16LanhkQ&pid=ImgRaw&r=0",
];
// MEDIDAS IMG 480x480

let count = 0;
let slideInterval;

function Carousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const slideRef = useRef();

	const removeAnimation = () => {
		slideRef.current.classList.remove("fade-anim");
	};

	useEffect(() => {
		slideRef.current.addEventListener("animationend", removeAnimation);
		slideRef.current.addEventListener("mouseenter", pauseSlider);
		slideRef.current.addEventListener("mouseleave", startSlider);

		startSlider();
		return () => {
			pauseSlider();
		};
	}, []);

	const startSlider = () => {
		slideInterval = setInterval(() => {
			handleOnNextClick();
		}, 3000);
	};

	const pauseSlider = () => {
		clearInterval(slideInterval);
	};

	const handleOnNextClick = () => {
		count = (count + 1) % imagnaryProducts.length;
		setCurrentIndex(count);
		slideRef.current.classList.add("fade-anim");
	};
	const handleOnPrevClick = () => {
		const imgsLength = imagnaryProducts.length;
		count = (currentIndex + imgsLength - 1) % imgsLength;
		setCurrentIndex(count);
		slideRef.current.classList.add("fade-anim");
	};

	return (
		<div ref={slideRef} className="w-auto select-none">
			<div className="flex flex-wrap justify-center">
				<img
					className="pt-5 pb-15 mr-10 transition duration-300 ease-in-out"
					src={imagnaryProducts[currentIndex]}
					alt=""
				/>
			</div>

			<div className="flex flex-wrap justify-center">
				<button
					className="absolute bottom-60 flex items-center justify-center text-center hover:scale-110 left-20"
					onClick={handleOnPrevClick}
				>
					<IoMdArrowDropleft size={50} />
				</button>
				<button
					className="absolute bottom-60 flex items-center justify-center text-center hover:scale-110 right-20"
					onClick={handleOnNextClick}
				>
					<IoMdArrowDropright size={50} />
				</button>
			</div>
		</div>
	);
}

export default Carousel;