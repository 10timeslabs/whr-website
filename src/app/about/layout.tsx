import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "About - whr.ai",
    description: "Discover how WHR.AI's Event Intelligence Platform empowers you with real-time forecasting, demand planning, and data-driven insights to maximize event impact.",
    alternates: {
      canonical: "https://whr.ai/about",
    },
    openGraph: {
      title: "About - whr.ai",
      description: "Discover how WHR.AI's Event Intelligence Platform empowers you with real-time forecasting, demand planning, and data-driven insights to maximize event impact.",
      images: [
        {
          url: "https://c1.10times.com/whr/home/static/image/contact_legal.png",
          width: 1200,
          height: 630,
          alt: "About page",
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
