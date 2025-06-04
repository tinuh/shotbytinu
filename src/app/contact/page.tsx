"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";

interface formData {
	name: string;
	email: string;
	message: string;
}

export default function Page() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<formData>();

	const onSubmit = async (data: formData) => {
		await console.log(data);

		//Make a post request to cloudflare worker to submit form response
		const submitPromise = fetch("https://contact.tinu-personal.workers.dev", {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
				"Access-Control-Max-Age": "86400",
			},
			referrerPolicy: "no-referrer",
			body: JSON.stringify(data),
		});

		toast.promise(submitPromise, {
			loading: "Sending...",
			success: "Message sent successfully!",
			error: "Error Sending! Please Email",
		});

		await submitPromise.then((res) => {
			if (res.ok) {
				reset();
			}
		});
	};

	return (
		<div className="flex flex-col items-center">
			<h1 className="pt-5 text-4xl text-center pb-3">Contact</h1>
			<Toaster
				position="top-right"
				reverseOrder={false}
				gutter={8}
				containerClassName=""
				containerStyle={{}}
				toastOptions={{
					// Define default options
					className: "no-serif",
					duration: 5000,
					removeDelay: 1000,
					style: {
						background: "#000000",
						color: "#fff",
					},

					// Default options for specific types
					success: {
						duration: 3000,
						iconTheme: {
							primary: "green",
							secondary: "black",
						},
					},
				}}
			/>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col items-center"
			>
				<div className="w-full px-5 md:w-200 no-serif">
					<p className="pb-5 text-center text-gray-600">
						Interested in booking a photoshoot? Feel free to reach out via the
						form below.
					</p>
					<p className="flex gap-2 items-center">
						<FaLocationDot className="inline text-black" />{" "}
						<span className="text-gray-600">Based in Burtonsville, MD</span>
					</p>
					<p className="flex gap-2 items-center pb-5">
						<HiOutlineMail className="inline text-black" />{" "}
						<span className="text-gray-600">Email me at</span>
						<a
							className="text-black underline-link -ml-1"
							href="mailto:contact@shotbytinu.com"
						>
							contact@shotbytinu.com
						</a>
					</p>
					<div className="flex flex-col md:flex-row gap-5 pb-5">
						<input
							{...register("name", {
								required: "Name is required!",
								minLength: {
									value: 2,
									message: "Name must be at least 2 characters long!",
								},
							})}
							type="text"
							id="name"
							placeholder="Name"
							className="mt-0.5 w-full border-gray-500 border-2 focus:border-black sm:text-sm pl-2 h-10 focus:outline-none placeholder:text-gray-700"
						/>
						<input
							{...register("email", {
								required: "Email is required!",
								pattern: {
									value: /\S+@\S+\.\S+/,
									message: "Please enter a valid email address!",
								},
							})}
							type="email"
							id="email"
							placeholder="Email"
							className="mt-0.5 w-full border-gray-500 border-2 focus:border-black sm:text-sm pl-2 h-10 focus:outline-none placeholder:text-gray-700"
						/>
					</div>
					<textarea
						{...register("message", { required: "Message is required!" })}
						id="message"
						placeholder="Message"
						className="w-full border-gray-500 border-2 focus:border-black sm:text-sm pt-2 pl-2 h-40 focus:outline-none placeholder:text-gray-700"
					></textarea>
				</div>
				{errors.message && (
					<p className="text-red-500 text-sm mt-2">{errors.message.message}</p>
				)}
				<button
					type="submit"
					disabled={isSubmitting}
					className="mt-5 no-serif bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
				>
					Send Message
				</button>
			</form>
		</div>
	);
}
