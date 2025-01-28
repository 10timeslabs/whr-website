"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HomeNavbar from "@/components/HomeNavbar";
import GeneralNavbar from "@/components/GeneralNavbar";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// List of static general pages
const generalPages = ["/geo", "/gtm", "/geni", "/about"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Check if the current path is part of the static general pages
  const isGeneralPage = generalPages.some((page) => pathname.startsWith(page));

  console.log("path_name", isGeneralPage);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {isGeneralPage ? <GeneralNavbar /> : <HomeNavbar />}
        {children}
        <GetInTouch />
        <Footer />
      </body>
    </html>
  );
}
