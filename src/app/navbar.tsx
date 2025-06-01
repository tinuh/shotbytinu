import Link from "next/link";
import { BsInstagram } from "react-icons/bs";

export default function Navbar() {
	return (
		<div className="p-5 border-black border-b-2 flex items-center justify-between">
			<h1 className="text-3xl">shotbytinu</h1>
			<div className="hidden md:flex gap-5 items-center">
				<Link href="/" className="text-xl underline-link">
					Home
				</Link>
				<Link href="/gallery" className="text-xl underline-link">
					Gallery
				</Link>
				<Link href="/services" className="text-xl underline-link">
					Services
				</Link>
				<Link href="/about" className="text-xl underline-link">
					About
				</Link>
				<Link href="/contact" className="text-xl underline-link">
					Contact
				</Link>
				<a href="https://www.instagram.com/shotbytinu/" target="_blank">
					<BsInstagram className="text-2xl hover:text-purple-600 transition-colors duration-100" />
				</a>
			</div>
		</div>
	);
}
