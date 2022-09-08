import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="text-center w-full bg-gray-100 dark:bg-gray-800 text-gray-600">
			<div className=" py-2 text-center md:text-left">
				<div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					<div className="ml-32">
						<h6
							className="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          "
						>
							Contacto
						</h6>

						{/* <p className="mb-4">
          <a href="#!" className="text-gray-600">Servicioalcliente@rgbtech.com</a>
        </p> */}
						<p className="mb-4">
							<Link to="/about" className="text-gray-600">
								About team
							</Link>
						</p>
					</div>
					<div className="ml-32">
						<h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
							Ayuda
						</h6>
						<p className="mb-4">
							<a href="#!" className="text-gray-600">
								Medios de pago
							</a>
						</p>
					</div>
					<div className="ml-32">
						<h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
							Te puede interesar
						</h6>
						<p className="mb-4">
							<a
								target="_blank"
								href="https://www.soyhenry.com/"
								className="text-gray-600"
							>
								Henry Bootcamp
							</a>
						</p>
					</div>
				</div>
			</div>
			<div className="text-center p-4 bg-gray-200 dark:bg-black flex justify-between">
				<span className=" text-gray-700">Terminos y condiciones</span>
				<span className=" text-gray-700">Politica de privacidad</span>
				<span className="text-gray-700">© 2022 Copyright: RGBTech</span>
			</div>
		</footer>
	);
}
