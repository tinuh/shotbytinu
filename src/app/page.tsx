import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
	return (
		<div className="p-10 flex flex-col lg:flex-row lg:gap-10">
			<div className="basis-1/3 xl:basis-2/5">
				<h1 className="text-5xl">shotbytinu</h1>
				<h2 className="pt-5 text-2xl text-left">
					Let&apos;s Make Your Memories Last Forever
				</h2>
				<div className="lg:pt-10 w-full flex flex-col lg:gap-5 items-left">
					<Link
						href="/gallery"
						className="flex font-bold text-2xl gap-2 hover:gap-5 max-w-max items-center mt-5 no-serif py-2 duration-200 cursor-pointer"
					>
						<span>Gallery</span> <FaArrowRight />
					</Link>
					<Link
						href="/services"
						className="flex font-bold text-2xl gap-2 hover:gap-5 max-w-max items-center mt-5 no-serif py-2 duration-200 cursor-pointer"
					>
						Services <FaArrowRight />
					</Link>
				</div>
			</div>
			<div className="basis-2/3 xl:basis-3/5 h-full flex justify-center w-full">
				<div className="relative">
					<img
						src="/gallery/ilhom_2_thumb.jpg"
						alt="Ilhom"
						className="w-full lg:w-100 h-auto mt-5 lg:absolute left-0 bottom-20 z-20 lg:hover:scale-102 duration-300 transition-transform"
					/>
					<img
						src="/gallery/gala_pic_5_thumb.jpg"
						alt="Gala Picture"
						className="w-full lg:w-100 h-auto z-0 pt-5 lg:mt-10 lg:mb-10 lg:ml-40 mr-24 lg:hover:scale-102 duration-300 transition-transform"
					/>
					<img
						src="/gallery/nikolay_point_thumb.jpg"
						alt="Nikolay Pointing"
						className="w-full lg:w-100 h-auto mt-5 lg:absolute right-0 bottom-0 z-10 lg:hover:scale-102 duration-300 transition-transform"
					/>
					<img
						src="/gallery/gala_pic_6_thumb.jpg"
						alt="Nikolay Pointing"
						className="w-full lg:w-60 h-auto mt-5 lg:absolute right-0 top-0 z-40 lg:hover:scale-102 duration-300 transition-transform"
					/>
				</div>
			</div>
		</div>
	);
}
