"use client";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function page() {
	const images = [
		{ src: "/gallery/kiyan.jpg", thumbnail: "/gallery/kiyan_thumb.jpg" },
		{
			src: "/gallery/septa.jpg",
			thumbnail: "/gallery/septa_thumb.jpg",
		},
		{
			src: "/gallery/gala_pic_2.jpg",
			thumbnail: "/gallery/gala_pic_2_thumb.jpg",
		},
		{
			src: "gallery/gala_pic_7.jpg",
			thumbnail: "/gallery/gala_pic_7_thumb.jpg",
		},
		{ src: "/gallery/aashrith.jpg", thumbnail: "/gallery/aashrith_thumb.jpg" },
		{ src: "/gallery/burj.jpg", thumbnail: "/gallery/burj_thumb.jpg" },
		{ src: "/gallery/nikolay.jpg", thumbnail: "/gallery/nikolay_thumb.jpg" },
		{ src: "/gallery/nick.jpg", thumbnail: "/gallery/nick_thumb.jpg" },
		{ src: "/gallery/ilhom.jpg", thumbnail: "/gallery/ilhom_thumb.jpg" },
		{
			src: "/gallery/grad_caps.jpg",
			thumbnail: "/gallery/grad_caps_thumb.jpg",
		},

		{
			src: "/gallery/gala_pic_1.jpg",
			thumbnail: "/gallery/gala_pic_1_thumb.jpg",
		},
		{
			src: "/gallery/nick_prof.jpg",
			thumbnail: "/gallery/nick_prof_thumb.jpg",
		},
		{ src: "/gallery/3_suits.jpg", thumbnail: "/gallery/3_suits_thumb.jpg" },
		// { src: "/gallery/wheaton.jpg", thumbnail: "/gallery/wheaton_thumb.jpg" },
		{
			src: "/gallery/char_minar.jpg",
			thumbnail: "/gallery/char_minar_thumb.jpg",
		},
	];

	return (
		<div>
			<h1 className="pt-5 text-4xl text-center">Gallery</h1>
			<div className="px-5 lg:px-30 pt-4">
				<LightGallery
					speed={200}
					plugins={[lgThumbnail, lgZoom]}
					thumbnail={true}
					zoom={true}
					download={false}
					fullScreen={true}
					selector=".gallery-item"
					closable={true}
				>
					<div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
						{images.map((image, index) => (
							<a
								key={index}
								href={image.src}
								className="gallery-item break-inside-avoid mb-4"
								data-thumb={image.thumbnail}
							>
								<img
									alt={`Gallery Image ${index + 1}`}
									src={image.thumbnail || image.src}
									className="w-full hover:scale-102 transition-all duration-300 pb-4"
								/>
							</a>
						))}
					</div>
				</LightGallery>
			</div>
		</div>
	);
}
