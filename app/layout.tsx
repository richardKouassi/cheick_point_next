import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Image from "next/image";
import { Footer } from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mon Portfolio",
  description:
    "Portfolio d'ingénieur en télécommunication : développement web full stack, réseaux informatiques et sécurité électronique.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <Image src="/Images/avatar.jfif" alt="Photo de profil" width={100} height={50} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
