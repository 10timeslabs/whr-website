import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Privacy Policy - whr.ai",
  description:
    "Your privacy matters to us. Read WHR.AI’s Privacy Policy to learn how we collect, use, and protect your data while ensuring a secure experience.",
    alternates: {
      canonical: "https://whr.ai/privacy-policy",
    },
  openGraph: {
    title: "Privacy Policy - whr.ai",
    description:
      "Your privacy matters to us. Read WHR.AI’s Privacy Policy to learn how we collect, use, and protect your data while ensuring a secure experience.",
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
