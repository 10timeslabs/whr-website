import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
  title: "About Us - whr.ai",
  description:
    "Learn about whr.ai, the leading event intelligence platform empowering businesses with real-time event data, forecasting, and actionable insights.",
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
