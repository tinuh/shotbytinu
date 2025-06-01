import React from "react";

export default function Page() {
	return (
		<div className="flex flex-col items-center">
			<h1 className="pt-5 text-4xl text-center pb-5">Contact</h1>
			<div className="w-200 contact-form">
				<div className="flex gap-5 pb-5">
					<input
						type="text"
						id="name"
						placeholder="Name"
						className="mt-0.5 w-full border-gray-500 border-2 focus:border-black sm:text-sm pl-2 h-10 focus:outline-none placeholder:text-gray-700"
					/>
					<input
						type="email"
						id="email"
						placeholder="Email"
						className="mt-0.5 w-full border-gray-500 border-2 focus:border-black sm:text-sm pl-2 h-10 focus:outline-none placeholder:text-gray-700"
					/>
				</div>
				<textarea
					id="message"
					placeholder="Message"
					className="w-full border-gray-500 border-2 focus:border-black sm:text-sm pt-2 pl-2 h-40 focus:outline-none placeholder:text-gray-700"
				></textarea>
			</div>
		</div>
	);
}
