import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "whr.ai/geo - Geo Event Intelligence Solutions",
  description: "Explore whr.ai's GEO solutions for location-based event intelligence, accurate forecasting, and operational optimization.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <div>{children}</div>
    </>
  );
}
