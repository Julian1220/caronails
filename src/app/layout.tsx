// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { DM_Sans, Playfair_Display } from "next/font/google";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

// General Sans ist nicht in next/font/google -> lokal einbinden
const generalSans = localFont({
  src: [
    {
      path: "../fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    // Optional, falls du die Dateien auch ablegst:
    // { path: "../fonts/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    // { path: "../fonts/GeneralSans-Semibold.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  variable: "--font-general-sans",
});

export const metadata: Metadata = {
  title: "Caroline Damon",
  description: "Nagelstudio – Manicure & Pedicure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${dmSans.variable} ${playfair.variable} antialiased min-h-screen flex flex-col font-sans`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
