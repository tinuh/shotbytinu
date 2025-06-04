import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

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
				<div className="py-2">
					<p className="flex items-center gap-2 text-green-600">
						<IoMdCheckmarkCircleOutline className="inline" />
						<span>Expert Editing</span>
					</p>
					<p className="flex items-center gap-2 text-green-600">
						<IoMdCheckmarkCircleOutline className="inline" />
						<span>7-day turnaround time</span>
					</p>
					<p className="flex items-center gap-2 text-green-600">
						<IoMdCheckmarkCircleOutline className="inline" />
						<span>Flexible Timings & Locations</span>
					</p>
				</div>
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
