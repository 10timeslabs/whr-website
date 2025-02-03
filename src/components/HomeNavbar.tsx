"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "/public/logo/croppedlogo.png";
import Image from "next/image";
import WhrAIText from "/public/Whr.ai.svg";
import HambergurMenuIcon from "/public/hamburger.svg";
import CrossIon from "/public/cross.svg";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
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
            <div className="w-[43px] h-[43px] rounded-md border flex justify-center items-center">
              <Image width="32" height="40" src={Logo} alt="nav-logo" />
            </div>
            <div
              className={`${isScrolled ? "border-r border" : ""} h-[30px]`}
            ></div>
            <div className={`${isScrolled ? "hidden" : ""} max-[1023px]:hidden`}>
              <Image src={WhrAIText} alt="nav-logo" className="h-6 w-auto" />
            </div>
          </Link>
        </div>

        {/* ----------------Mobile Menu Button -----------------*/}
        <div className="lg:hidden flex items-center">
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
            href="https://docs.google.com/document/d/1gwqPfP18N2PuokVuXQhKjNDTr_UyHknw7umGhwekBq8/edit?usp=sharing"
            target="_blank"
            className="text-black hover:text-primary text-lg"
          >
            About
          </Link>
        </div>

        {/*-------------- Desktop Buttons------------------- */}
        <div className="hidden lg:flex space-x-4">
          <Link
            href="/signup"
            className="bg-primary px-[15px] py-[8px] rounded-[10px] text-white cursor-pointer"
          >
            Sign Up
          </Link>
          <Link
            href="/demo"
            className="px-[15px] py-[8px] rounded-[10px]  border border-primary text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out"
          >
            Demo
          </Link>
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
          <li>
            <Link href="/geni" className="text-gray-800 hover:text-primary">
              Geni
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-800 hover:text-primary">
              About
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="mt-10 space-y-6">
          <Link
            href="/signup"
            className="block w-48 px-6 py-3 text-white bg-primary rounded-lg text-center text-xl hover:bg-primary transition-all duration-300 ease-in-out"
          >
            Sign Up
          </Link>
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
    </nav>
  );
};

export default Navbar;
