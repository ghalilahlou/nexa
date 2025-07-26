import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/700.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Nexa Partners",
  description: "Premium executive search & consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={
          "font-sans bg-[#fefcf8] text-[#0a1f33] antialiased min-h-screen navbar-fixed" // Manrope par défaut, fond ivoire, texte bleu nuit
        }
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
