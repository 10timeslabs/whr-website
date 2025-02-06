import type { Metadata } from "next";
import "../globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "whr.ai/gtm - GTM Event Intelligence Solutions",
  description: "Discover whr.ai's GTM solutions for industry-specific event intelligence, prospecting, and strategic event planning.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
