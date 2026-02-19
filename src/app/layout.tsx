import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "INDIAN ARCH | Luxury Architecture & Construction",
    description: "Redefining the skyline of India with ultra-modern design and luxury construction services.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={`${inter.variable} antialiased bg-[#0E0E0E] text-white selection:bg-[#00D1FF] selection:text-black`}>
                <GlobalBackground />
                <Navbar />
                <main className="min-h-screen relative z-10">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
