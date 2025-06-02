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
						description="From professional headshots to senior portraits, I can capture the essence of individuals with stunning clarity and emotion."
						imageUrl="/gallery/kiyan_thumb.jpg"
					/>
					<Card
						name="Events"
						description="From graduation parties to formal events, I specialize in capturing the emotion in your special moments with stunning clarity."
						imageUrl="/gallery/gala_pic_4_thumb.jpg"
					/>
				</div>
			</div>
		</div>
	);
}
