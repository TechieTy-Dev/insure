import React, { useState } from "react";
import { hamburger, close } from "../images";

const MobileMenu = ({ className }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen);
	}
	return (
		<div>
			<button onClick={toggleMenu} className="lg:hidden">
				<img
					src={hamburger}
					alt="hamburger"
					className={`${isMenuOpen ? "block" : "hidden"} h-10 w-10`}
				/>
				<img
					src={close}
					alt="close"
					className={`${isMenuOpen ? "hidden" : "block"} h-10 w-10`}
				/>
			</button>
			<div
				className={`${
					isMenuOpen
						? "hidden"
						: "mobile-menu-bg  absolute w-[100%] h-[90vh] top-[100px] right-0 z-50 pt-12"
				}`}
			>
				<ul className="flex flex-col gap-10">
					<li className="text-white uppercase font-semibold text-xl tracking-wide hover:cursor-pointer hover:underline">
						How We Work
					</li>
					<li className="text-white uppercase font-semibold text-xl tracking-wide hover:cursor-pointer hover:underline">
						Blog
					</li>
					<li className="text-white uppercase font-semibold text-xl tracking-wide hover:cursor-pointer hover:underline">
						Account
					</li>
					<button className="border-2 border-white uppercase border-solid text-white p-2 font-semibold tracking-wide text-xl w-[85%] mx-auto">
						View Plans
					</button>
				</ul>
			</div>
		</div>
	);
};

export default MobileMenu;
