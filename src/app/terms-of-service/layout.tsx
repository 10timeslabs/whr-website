import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Terms of Service - whr.ai",
  description:
    "Review our Terms of Service to understand the guidelines for using WHR.AI. Learn about your rights, responsibilities, and the terms governing our platform.",
    alternates: {
      canonical: "https://whr.ai/terms-of-service",
    },
  openGraph: {
    title: "Terms of Service - whr.ai",
    description:
      "Review our Terms of Service to understand the guidelines for using WHR.AI. Learn about your rights, responsibilities, and the terms governing our platform.",
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
