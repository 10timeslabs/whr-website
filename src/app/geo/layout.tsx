import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "whr.ai/geo - Geo Event Intelligence Solutions",
  description: "whr.ai/geo - Geo Event Intelligence Solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <div>{children}</div>
    </>
  );
}
