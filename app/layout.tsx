import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Alana Motta",
    default: "Alana Motta | Desenvolvedora Front-End",
  },
  description:
    "Portfólio de Alana Motta — desenvolvedora front-end especializada em React, Next.js e TypeScript. Interfaces modernas, responsivas e orientadas à experiência do usuário.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
