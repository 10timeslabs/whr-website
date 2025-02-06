import type { Metadata } from "next";
import "../globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "whr.ai/geo - Geo Event Intelligence Solutions",
  description: "whr.ai/geo - Geo Event Intelligence Solutions",
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
