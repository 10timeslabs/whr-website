import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "whr.ai/gtm - GTM Event Intelligence Solutions",
  description: "Discover whr.ai's GTM solutions for industry-specific event intelligence, prospecting, and strategic event planning.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <div>{children}</div>
    </>
  );
}
