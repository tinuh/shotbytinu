import React from "react";
import Card from "@/components/card";

export default function Page() {
	return (
		<div>
			<h1 className="pt-5 text-4xl text-center">Services</h1>
			<div className="px-5 lg:px-30 pb-10 pt-4 no-serif flex justify-center">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
					<Card
						name="Potraits"
						description="Whether you need a standout headshot or a timeless senior portrait, I specialize in capturing your unique personality with sharp detail and natural emotion."
						imageUrl="/gallery/kiyan_thumb.jpg"
					/>
					<Card
						name="Events"
						description="From graduation parties to formals, I focus on documenting the energy and emotion of your events with crisp, vibrant imagery that tells your story."
						imageUrl="/gallery/gala_pic_4_thumb.jpg"
					/>
				</div>
			</div>
		</div>
	);
}
