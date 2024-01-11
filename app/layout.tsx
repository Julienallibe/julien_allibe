import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import StarsCanvas from "./components/Main/StarsCanvas";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-julien-allibe.vercel.app"),
  title: "Julien Allibe Portfolio",
  description: "Developer Portfolio By Julien Allibe",
  keywords: ["Developer", "Portfolio", "Developer Portflio", "Julien Allibe"],
  openGraph: {
    title: "Julien Allibe",
    description: "Developpeur Front-End",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
