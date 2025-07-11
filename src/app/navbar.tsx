"use client";

import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { motion } from "framer-motion";

const elements = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Gallery",
		link: "/gallery",
	},
	{
		name: "Services",
		link: "/services",
	},
	{
		name: "About",
		link: "/about",
	},
	{
		name: "Contact",
		link: "/contact",
	},
];

const menuVariants = {
	open: {
		height: "100vh",
		backgroundColor: `rgba(${"255, 255, 255"}, 1)`,
		transitionBegin: {
			zIndex: 100,
		},
	},
	closed: {
		height: "100vh",
		backgroundColor: `rgba(${"255, 255, 255"}, 0)`,
		transitionEnd: {
			zIndex: -1,
		},
	},
};

const linkVariants = {
	open: {
		opacity: 1,
	},
	closed: {
		opacity: 0,
	},
};

const innerVariants = {
	open: {
		marginTop: 0,
	},
	closed: {
		marginTop: 0,
	},
};

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="p-5 border-black border-b-2 flex items-center justify-between">
			<Link href="/" className="text-3xl z-200">
				shotbytinu
			</Link>
			<div className="flex md:hidden gap-5 items-center">
				<div className="z-200">
					<Hamburger
						toggled={isOpen}
						toggle={setIsOpen}
						size={28}
						rounded
						label="Open Menu"
						aria-controls="mobile-menu"
						aria-expanded={isOpen}
					/>
				</div>
				<div className="absolute left-0 pb-[7.5vh]">
					<motion.nav
						initial={false}
						variants={menuVariants}
						animate={isOpen ? "open" : "closed"}
						transition={{ duration: 0.5 }}
						style={{
							zIndex: 100,
							position: "fixed",
							width: "100%",
							textAlign: "center",
						}}
					>
						<div className="z-20">
							<div className="flex px-3 py-2"></div>
						</div>
						<motion.div
							initial={false}
							variants={innerVariants}
							animate={isOpen ? "open" : "closed"}
							transition={{ duration: 0.5 }}
							style={{ height: "100vh" }}
						>
							<div className="pt-20">
								{elements.map((element, i) => (
									<motion.div
										key={i}
										initial={false}
										variants={linkVariants}
										transition={
											isOpen
												? {
														delay: 0.3 + 0.1 * i,
														default: { ease: "linear" },
														duration: 0.1,
												  }
												: {}
										}
										animate={isOpen ? "open" : "closed"}
									>
										<div className="py-8">
											<Link
												href={element.link}
												className="no-serif text-xl font-bold"
												onClick={() => setIsOpen(false)}
											>
												{element.name}
											</Link>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					</motion.nav>
				</div>
			</div>
			<div className="hidden md:flex gap-5 items-center">
				{elements.map((element, i) => (
					<Link key={i} href={element.link} className="text-xl underline-link">
						{element.name}
					</Link>
				))}
				<a href="https://www.instagram.com/shotbytinu/" target="_blank">
					<BsInstagram className="text-2xl hover:text-purple-600 transition-colors duration-100" />
				</a>
			</div>
		</div>
	);
}
