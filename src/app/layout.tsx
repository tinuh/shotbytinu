import type { Metadata } from "next";
import { DM_Serif_Text, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const dmSerif = DM_Serif_Text({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-dm-serif",
});

const dmSans = DM_Sans({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	variable: "--font-dm-sans",
});

export const metadata: Metadata = {
	title: "Professional Photography Services - shotbytinu",
	description: "Photography Portfolio Website of Tinu Vanapamula",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script
					defer
					data-domain="shotbytinu.com"
					src="https://stats.tinu.tech/js/plausible.js"
				></script>
				<meta property="og:image" content="/gallery/kiyan_thumb.jpg"></meta>
			</head>
			<body
				className={`${dmSerif.variable} ${dmSans.variable} antialiased h-screen flex flex-col`}
			>
				<Navbar />
				<main className="flex-grow">{children}</main>
			</body>
		</html>
	);
}
