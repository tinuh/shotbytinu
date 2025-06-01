import Link from "next/link";

export default function Navbar() {
	return (
		<div className="p-5 border-black border-b-2 flex items-center justify-between">
			<h1 className="text-3xl">shotbytinu</h1>
			<div className="flex gap-3">
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
			</div>
		</div>
	);
}
