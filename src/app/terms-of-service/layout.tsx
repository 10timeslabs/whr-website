import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Terms of Service - whr.ai",
  description:
    "Review our Terms of Service to understand the guidelines for using WHR.AI. Learn about your rights, responsibilities, and the terms governing our platform.",
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
