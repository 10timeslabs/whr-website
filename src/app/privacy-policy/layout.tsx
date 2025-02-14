import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Privacy Policy - whr.ai",
  description:
    "Your privacy matters to us. Read WHR.AI’s Privacy Policy to learn how we collect, use, and protect your data while ensuring a secure experience.",
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
