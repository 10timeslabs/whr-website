import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Demo - whr.ai",
  description:
    "Get hands-on with our interactive demo and experience real-time event insights, AI-powered forecasting, and smart trend analysis firsthand.",
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
