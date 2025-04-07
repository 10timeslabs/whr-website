import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "Contact us - whr.ai",
    description: "Connect with us to learn how WHR.AI's Event Intelligence Platform can help you with real-time forecasting, demand planning, and maximizing event impact. Our team is here to assist you—reach out today!",
    alternates: {
      canonical: "https://whr.ai/contact-us",
    },
    openGraph: {
      title: "Contact us - whr.ai",
      description: "Connect with us to learn how WHR.AI's Event Intelligence Platform can help you with real-time forecasting, demand planning, and maximizing event impact. Our team is here to assist you—reach out today!",
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
