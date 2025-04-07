import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
  title: "Demo - whr.ai",
  description: "Explore WHR.AI's demo page to experience our platform's features firsthand. Get insights into how our solutions work, understand key functionalities, and see how they can benefit you. Try it now and discover the possibilities!",
  alternates: {
    canonical: "https://whr.ai/demo",
  },
  openGraph: {
    title: "Demo - whr.ai",
    description: "Explore WHR.AI's demo page to experience our platform's features firsthand. Get insights into how our solutions work, understand key functionalities, and see how they can benefit you. Try it now and discover the possibilities!",
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
