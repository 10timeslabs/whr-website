import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Cookie Policy - whr.ai",
  description: "Find out how WHR.AI uses cookies to enhance your experience. Read our Cookie Policy to understand data tracking, preferences, and control options.",
 
  openGraph: {
    title: "Cookie Policy - whr.ai",
    description: "Find out how WHR.AI uses cookies to enhance your experience. Read our Cookie Policy to understand data tracking, preferences, and control options.",
    images: [
      {
        url: "https://c1.10times.com/whr/home/static/image/contact_legal.png",
        width: 1200,
        height: 630,
        alt: "GTM Event Intelligence Solutions",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
