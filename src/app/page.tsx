"use client";

import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<div className="relative flex flex-col md:flex-row">
			<motion.div
				initial={{ opacity: 0, y: 0 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}
				className="absolute w-full flex justify-center left-0 right-0 top-20 z-100"
			>
				<div className="text-center text-white flex flex-col items-center">
					<h1 className="text-6xl md:text-7xl pb-4">shotbytinu</h1>
					<h2 className="pb-6 text-xl">
						Let&apos;s Make Your Memories Last Forever
					</h2>
					<Link
						href="/gallery"
						className="block max-w-max bg-white rounded text-black p-2 px-4 no-serif font-bold"
					>
						View Gallery
					</Link>
				</div>
			</motion.div>
			<div className="basis-1/2 w-full">
				<motion.div
					initial={{ opacity: 0, y: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="w-full h-auto"
				>
					<img
						src="/gallery/ilhom_2_thumb.jpg"
						alt="Ilhom"
						className="w-full h-auto"
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="w-full h-auto"
				>
					<img
						src="/gallery/nikolay_point_thumb.jpg"
						alt="Nikolay Pointing"
						className="w-full h-auto"
					/>
				</motion.div>
			</div>

			<div className="basis-1/2 w-full">
				<motion.div
					initial={{ opacity: 0, y: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="w-full h-auto"
				>
					<img
						src="/gallery/gala_pic_1_thumb.jpg"
						alt="BSE Gala Picture 1"
						className="w-full h-auto"
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="w-full h-auto"
				>
					<img
						src="/gallery/grad_caps_thumb.jpg"
						alt="Graduation Caps Picture"
						className="w-full h-auto transition-transform"
					/>
				</motion.div>
			</div>
		</div>
	);
}
