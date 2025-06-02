import Link from "next/link";

interface CardProps {
	name: string;
	description: string;
	imageUrl: string;
}

export default function Card(props: CardProps) {
	return (
		<div className="border-2 w-full md:w-75">
			<img
				src={props.imageUrl}
				alt={props.name}
				className="w-full h-56 object-cover"
			/>
			<div className="p-4">
				<h2 className="text-xl font-bold">{props.name}</h2>
				<p className="text-gray-600">{props.description}</p>
			</div>
			<Link
				href="/contact"
				className="block text-center bg-black text-white py-2 hover:bg-green-600 transition-colors duration-200"
			>
				Book Today!
			</Link>
		</div>
	);
}
