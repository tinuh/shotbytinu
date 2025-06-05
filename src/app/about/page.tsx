import React from "react";

export default function Page() {
	return (
		<div>
			<div className="flex flex-col items-center">
				<h1 className="pt-5 text-4xl text-center">About</h1>
				<div>
					<div className="p-8 flex flex-wrap gap-10 items-center justify-center">
						<img
							src="/gallery/tinu_thumb.jpg"
							alt="Picture of Tinu"
							className="w-60 h-60 rounded-full"
						/>
						<p className="no-serif max-w-150">
							Hey! I&apos;m{" "}
							<a
								className="underline-link"
								href="https://tinu.tech"
								target="_blank"
							>
								Tinu Vanapamula
							</a>
							, a photographer based in Maryland. Photography has been a
							lifelong passion of mine and I have spent the last couple of years
							perfecting my craft. I specialize in capturing moments that tell a
							story, whether a graduation, a formal event, or a simple portrait.
							My goal is to create images that not only look great but also
							evoke the emotions of the moment. Beyond Photography, I'm a rising
							junior at the University of Maryland, College Park studying
							Computer Science & Economics. I love technology, playing ultimate
							frisbee, weightlifting, rock climbing, and of course, photography.
						</p>
					</div>
					{/* <div className="no-serif p-5 md:p-10">
						<h2>My Gear</h2>
						<ul className="list-disc pl-5">
							<li>Canon EOS R8</li>
							<li>Canon EOS Rebel T3i</li>
							<li>Canon RF 50mm f/1.8 STM Lens</li>
							<li>Tamron SP 24-70mm F/2.8 Di VC A007 Lens (EF Mount)</li>
							<li>Canon EF-S 18-55mm f/3.5-5.6 IS II Lens</li>
							<li>Canon EF-S 55-250mm f/4-5.6 IS STM Lens</li>
							<li>Canon 430EX II Speedlite Flash</li>
							<li>Canon Mount Adapter EF to RF</li>
							<li>110mm 5-in-1 Circular Light Reflector</li>
						</ul>
					</div> */}
				</div>
			</div>
		</div>
	);
}
