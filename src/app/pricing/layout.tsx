import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Pricing - whr.ai",
  description:
    "Whr's pricing plans are designed to fit your needs. Leverage demand forecasting, integrate real-time event data into your workflows, manage calendars seamlessly, and unlock powerful market insights.",
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
