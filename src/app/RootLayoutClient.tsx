"use client";
import { usePathname } from "next/navigation";
import HomeNavbar from "@/components/HomeNavbar";
import GeneralNavbar from "@/components/GeneralNavbar";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";

const generalPages = ["/geo", "/gtm", "/geni", "/about"];

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isGeneralPage = generalPages.some((page) => pathname.startsWith(page));

  return (
    <>
      {isGeneralPage ? <GeneralNavbar /> : <HomeNavbar />}
      {children}
      <GetInTouch />
      <Footer />
    </>
  );
}
