import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Contact us - whr.ai",
  description:
    "Find out how WHR.AI uses cookies to enhance your experience. Read our Cookie Policy to understand data tracking, preferences, and control options.",
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
