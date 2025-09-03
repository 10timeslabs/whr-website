"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "/public/logo/croppedlogo.png";
import Image from "next/image";
import WhrAIText from "/public/Whr.ai.svg";
import HambergurMenuIcon from "/public/hamburger.svg";
import CrossIon from "/public/cross.svg";
import { usePathname } from "next/navigation";
import UserProfiles from "./ProfileCard";
import { useAccounts } from "@/context/auth";
import PlatformSelectionModal from "./PlatformSelection/platformSelectionModal";
import whrLogo from "/public/logo/croppedlogo.png";
import { GAEvent } from "../../utils/gaEvents";
const Navbar = () => {
  const { gtmUser, geoUser } = useAccounts();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const pathName = usePathname()
  useEffect(() => {
    if (modalRef.current) {
      if (mobileMenuOpen) {
        modalRef.current.classList.remove("opacity-0", "-translate-y-full");
        modalRef.current.classList.add("opacity-100", "translate-y-0");
      } else {
        modalRef.current.classList.add("opacity-0", "-translate-y-full");
        modalRef.current.classList.remove("opacity-100", "translate-y-0");
      }
    }
  }, [mobileMenuOpen]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = () =>{
    setIsModalOpen(true);
  }
  return (
    <nav className="fixed top-2 left-0 w-full z-50 transition-colors duration-1000 ease-in-out">
      <div
        className={` py-4 flex items-center transition-all duration-1000 ease-in-out ${
          isScrolled
            ? "bg-white px-6 shadow-md justify-between space-x-8 transform scale-95 rounded-full"
            : "bg-transparent py-2 justify-between"
        }`}
        style={{
          width: isScrolled ? "75%" : "87%",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center space-x-2">
          <Link
            href="/"
            className="text-xl font-bold text-primary flex items-center gap-3"
          >
            {/* <div className="w-[43px] h-[43px] flex justify-center items-center"> */}
              <Image width="32" height="40" src={Logo} alt="nav-logo" />
            {/* </div> */}
            <div
              className={`${isScrolled ? "border-r border" : ""} h-[30px]`}
            ></div>
            <div className={`${isScrolled ? "hidden" : ""} max-[1023px]:hidden`}>
              <Image src={WhrAIText} alt="nav-logo" className="h-6 w-auto" />
            </div>
          </Link>
        </div>

        {/* ----------------Mobile Menu Button -----------------*/}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <Image width={40} src={CrossIon} alt="Close Menu" />
            ) : (
              <Image width={40} src={HambergurMenuIcon} alt="Open Menu" />
            )}
          </button>
          <UserProfiles />
        </div>

        {/* ------------------Desktop Links-------------- */}
        <div className="hidden lg:flex space-x-6 py-2 ml-6 px-8 rounded-3xl transition-all duration-500 ease-in-out bg-white">
          <Link href="/geo" className="text-black hover:text-primary text-lg">
            Geo
          </Link>
          <Link href="/gtm" className="text-black hover:text-primary text-lg">
            Gtm
          </Link>
          {/* <Link href="/geni" className="text-black hover:text-primary text-lg">
            Geni
          </Link> */}
          <Link
            href="/about"
            className="text-black hover:text-primary text-lg"
          >
            About
          </Link>
          <Link
            href="https://whr.ai/blog/"
            className="text-black hover:text-primary text-lg"
            target="_blank"
          >
            Blog
          </Link>
          <Link
            href="/pricing"
            className="text-black hover:text-primary text-lg"
          >
            Pricing
          </Link>
        </div>

        {/*-------------- Desktop Buttons------------------- */}
        <div className="hidden lg:flex space-x-4">
          {!(gtmUser || geoUser) &&
            <div className="bg-primary px-[15px] py-[8px] rounded-[10px] text-white cursor-pointer"
            onClick={handleClick}>
              Sign Up
            </div>
          }
          <Link
            href="/demo"
            className="px-[15px] py-[8px] rounded-[10px]  border border-primary text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out"
          >
            Demo
          </Link>
          {/* User Logo */}
          <UserProfiles />
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white shadow-lg z-50 flex flex-col items-center justify-center transform transition-transform duration-500 ease-in-out ${
          mobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
        style={{
          transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
        }}
        ref={modalRef}
      >
        {/* Close Button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-full text-gray-600 hover:bg-gray-200 transition-all"
          aria-label="Close Menu"
        >
          <Image width={40} src={CrossIon} alt="Close icon" />
        </button>

        {/* Navigation Links */}
        <ul className="text-center space-y-8 text-2xl font-semibold">
          <li>
            <Link href="/geo" className="text-gray-800 hover:text-primary">
              Geo
            </Link>
          </li>
          <li>
            <Link href="/gtm" className="text-gray-800 hover:text-primary">
              Gtm
            </Link>
          </li>
          {/* <li>
            <Link href="/geni" className="text-gray-800 hover:text-primary">
              Geni
            </Link>
          </li> */}
          <li>
            <Link href="/about" className="text-gray-800 hover:text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              About
            </Link>
          </li>
          <li>
            <Link
              href="https://whr.ai/blog/"
              target="_blank"
              className="text-gray-800 hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="text-gray-800 hover:text-primary">
              Pricing
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="mt-10 space-y-6"  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {!(gtmUser || geoUser) &&
            <div
              // href="/signup"
              className="block w-48 px-6 py-3 text-white bg-primary rounded-lg text-center text-xl hover:bg-primary transition-all duration-300 ease-in-out"
              onClick={handleClick}
            >
              Sign Up
            </div>
          }
          <Link
            href="/demo"
            className="block w-48 px-6 py-3 text-primary border border-primary rounded-lg text-center text-xl hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
          >
            Demo
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500 ease-in-out"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      <PlatformSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 sm:gap-6 mt-6 max-h-[70vh] sm:max-h-none overflow-y-auto p-2">
          <div className="bg-[#59478C] rounded-xl p-4 sm:p-5 flex flex-col gap-3 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.25)] col-span-1 sm:col-span-6 lg:col-span-2 min-h-[160px] sm:h-[20vh] lg:h-[50vh] justify-between">
            <div className="flex flex-col gap-3">
              {/* <div className="text-base text-white font-semibold">
                Save More
                <div className="text-lg text-white font-bold">
                  With Good Plans.
                </div>
              </div> */}
              <div className="text-sm text-white">
              Choose the platform that fits your business needs, complete a quick signup, and begin your journey.
              </div>
              <div className="text-white font-bold">{"->"}</div>
            </div>
            <div className="items-center gap-2 flex sm:hidden lg:flex">
              <div className="bg-white rounded-xl p-1 h-9 w-9 flex items-center justify-center shadow-lg">
                <Image src={whrLogo} alt="tick" height={26} width={24} />
              </div>
              <span className="text-white font-bold text-lg">WHR.ai</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 sm:p-5 flex flex-col gap-3 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.25)] col-span-1 sm:col-span-3 lg:col-span-2 min-h-[280px] sm:h-[50vh] justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-xl p-1 h-9 w-9 flex items-center justify-center shadow-lg">
                  <Image src={whrLogo} alt="tick" height={26} width={24} />
                </div>
                <div className="font-bold text-2xl">GEO</div>
              </div>
              <div className="text-muted-foreground text-sm">
                What You'll Get
              </div>
              <div className="overflow-y-auto h-auto sm:h-[120px] flex-1">
                <div className="flex gap-2 items-baseline text-sm">
                  Unlock comprehensive geographic insights and spatial intelligence to make data-driven decisions for your business.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <button
                className="bg-[var(--primary-color)] rounded-md text-white text-center py-2"
                onClick={() => {
                  GAEvent('whr_landing_page', 'Platform Selection', 'Click', 'Choose GEO Button');
                  window.open("https://geo.whr.ai/signup", "_blank");
                  setIsModalOpen(false);
                }}
              >
                Choose GEO
              </button>
              <div className="text-center pb-3 text-sm">
                Already have an account?
                <Link
                  href="https://geo.whr.ai/signin"
                  className="text-[#6750a4] cursor-pointer font-medium"
                >
                  {" "}
                  Log In
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 sm:p-5 flex flex-col gap-3 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.25)] col-span-1 sm:col-span-3 lg:col-span-2 min-h-[280px] sm:h-[50vh] justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-xl p-1 h-9 w-9 flex items-center justify-center shadow-lg">
                  <Image src={whrLogo} alt="tick" height={26} width={24} />
                </div>
                <div className="font-bold text-2xl">GTM</div>
              </div>
              <div className="text-muted-foreground text-sm">
                What You'll Get
              </div>
              <div className="overflow-y-auto h-auto sm:h-[120px] flex-1">
                <div className="flex gap-2 items-baseline text-sm">
                  Focused insights into business events, delivering industry-specific intelligence to drive informed go-to-market decisions.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <button
                className="bg-[var(--primary-color)] rounded-md text-white text-center py-2"
                onClick={() => {
                  GAEvent('whr_landing_page', 'Platform Selection', 'Click', 'Choose GTM Button');
                  window.open("https://gtm.whr.ai/signup", "_blank");
                  setIsModalOpen(false);
                }}
              >
                Choose GTM
              </button>
              <div className="text-center pb-3 text-sm">
                Already have an account?
                <Link
                  href="https://gtm.whr.ai/signin"
                  className="text-[#6750a4] cursor-pointer font-medium"
                >
                  {" "}
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PlatformSelectionModal>
    </nav>
  );
};

export default Navbar;
