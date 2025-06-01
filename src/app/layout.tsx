import type { Metadata } from "next";
import { DM_Serif_Text } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const dmSerif = DM_Serif_Text({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-dm-serif",
});

export const metadata: Metadata = {
	title: "shotbytinu",
	description: "Photography Portfolio Website of Tinu Vanapamula",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${dmSerif.variable} antialiased h-screen flex flex-col`}
			>
				<Navbar />
				<main className="flex-grow">{children}</main>
			</body>
		</html>
	);
}
