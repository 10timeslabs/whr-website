import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import RootLayoutClient from "./RootLayoutClient"; // Import the client component

export const metadata: Metadata = {
  title: "Whr.ai",
  description: "Your website description here",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
