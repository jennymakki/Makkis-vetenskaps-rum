import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import Header from "./components/Header";

import Footer from "./components/Footer";
import FloatingScienceBg from "./components/FloatingScienceBg";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Makkis Vetenskapsrum",

  description: "Lär dig mer om världen runt dig!",

  openGraph: {
    title: "Makkis Vetenskapsrum",

    description: "Lär dig mer om världen runt dig!",

    url: "https://makkis-vetenskapsrum.vercel.app",

    siteName: "Makkis Vetenskapsrum",

    images: [
      {
        url: "/images/Preview.png",

        width: 1200,

        height: 630,

        alt: "Makkis Vetenskapsrum",
      },
    ],

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${poppins.className} bg-gradient-to-r from-[#14281D] via-[#203A2B] to-[#2F4F3E]`}
      >
        {" "}
        <Header />
        <FloatingScienceBg/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
