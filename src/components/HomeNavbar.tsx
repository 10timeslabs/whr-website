"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./navbar.style.module.css";
import Link from "next/link";
import Logo from "/public/logo/croppedlogo.png";
import Image from "next/image";
import WhrAIText from "/public/logo/Whr.ai.png";
import { Cross, Menu } from "geist-icons";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (modalRef.current) {
      if (mobileMenuOpen) {
        // Animate modal to be visible
        modalRef.current.classList.remove('opacity-0', '-translate-y-full');
        modalRef.current.classList.add('opacity-100', 'translate-y-0');
      } else {
        // Animate modal to be hidden
        modalRef.current.classList.add('opacity-0', '-translate-y-full');
        modalRef.current.classList.remove('opacity-100', 'translate-y-0');
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    // <nav
    //   className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
    //     isScrolled ? "bg-white shadow-md" : "bg-transparent"
    //   }`}
    // >
    //   <div className="px-32 py-8 flex items-center justify-between ">
    //     <div className="flex-shrink-0 flex items-center space-x-2">
    //       <Link
    //         href="/"
    //         className="text-xl font-bold text-primary flex items-center gap-3"
    //       >
    //          <div className="w-[43px] h-[43px] rounded-md border flex justify-center items-center">
    //             <Image width="32" height="40" src={Logo} alt="nav-logo" />
    //           </div>
    //         <Image src={WhrAIText} alt="nav-logo" className="h-6 w-auto" />
    //       </Link>
    //     </div>

    //     <div className="hidden md:flex space-x-8 bg-white px-8 py-2 rounded-3xl">
    //       <Link href="/geo" className="text-black hover:text-primary text-lg">
    //         Geo
    //       </Link>
    //       <Link href="/gtm" className="text-black hover:text-primary text-lg">
    //         Gtm
    //       </Link>
    //       <Link href="/geni" className="text-black hover:text-primary text-lg">
    //         Geni
    //       </Link>
    //       <Link href="/about" className="text-black hover:text-primary text-lg">
    //         About
    //       </Link>
    //     </div>

    //     <div className="flex space-x-4">
    //       <Link
    //         href="/signup"
    //         className="px-8 py-2 text-white bg-primary rounded hover:bg-violet-400"
    //       >
    //         Sign Up
    //       </Link>
    //       <Link
    //         href="/demo"
    //         className="px-8 py-2 text-primary border border-primary rounded hover:bg-violet-900 hover:text-white"
    //       >
    //         Demo
    //       </Link>
    //     </div>
    //   </div>
    // </nav>

    // <nav
    //   className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300`}
    // >
    //   <div
    //     className={`px-32 py-8 flex items-center transition-all duration-300 ${
    //       isScrolled
    //         ? "justify-center space-x-4 transform scale-95"
    //         : "justify-between space-x-8"
    //     }`}
    //   >
    //     <div className="flex-shrink-0 flex items-center space-x-2">
    //       <Link
    //         href="/"
    //         className="text-xl font-bold text-primary flex items-center gap-3"
    //       >
    //         <div className="w-[43px] h-[43px] rounded-md border flex justify-center items-center">
    //           <Image width="32" height="40" src={Logo} alt="nav-logo" />
    //         </div>
    //         <div className={isScrolled ? "hidden" : ""}>
    //           <Image src={WhrAIText} alt="nav-logo" className="h-6 w-auto" />
    //         </div>
    //       </Link>
    //     </div>

    //     <div
    //       className={`hidden md:flex space-x-8 bg-white px-8 py-2 rounded-3xl transition-all duration-300 ${
    //         isScrolled ? "space-x-4" : "space-x-8"
    //       }`}
    //     >
    //       <Link href="/geo" className="text-black hover:text-primary text-lg">
    //         Geo
    //       </Link>
    //       <Link href="/gtm" className="text-black hover:text-primary text-lg">
    //         Gtm
    //       </Link>
    //       <Link href="/geni" className="text-black hover:text-primary text-lg">
    //         Geni
    //       </Link>
    //       <Link href="/about" className="text-black hover:text-primary text-lg">
    //         About
    //       </Link>
    //     </div>

    //     <div className="flex space-x-4">
    //       <Link
    //         href="/signup"
    //         className="px-8 py-2 text-white bg-primary rounded hover:bg-violet-400"
    //       >
    //         Sign Up
    //       </Link>
    //       <Link
    //         href="/demo"
    //         className="px-8 py-2 text-primary border border-primary rounded hover:bg-violet-900 hover:text-white"
    //       >
    //         Demo
    //       </Link>
    //     </div>
    //   </div>
    // </nav>

    <nav
      className={`fixed top-2 left-0 w-full z-50 transition-colors duration-1000 ease-in-out`}
    >
      <div
        className={`mx-auto px-6 py-4 flex items-center transition-all duration-1000 ease-in-out ${
          isScrolled
            ? "bg-white shadow-md justify-between space-x-8 transform scale-95 rounded-full"
            : "bg-transparent justify-around py-2"
        }`}
        style={{
          maxWidth: isScrolled ? "48rem" : "80rem",
        }}
      >
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
            <div className={isScrolled ? "hidden" : ""}>
              <Image src={WhrAIText} alt="nav-logo" className="h-6 w-auto" />
            </div>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md bg-primary text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <Cross /> : <Menu />}
          </button>
        </div>

        <div
          className={`hidden md:flex space-x-4 px-4 py-2 rounded-3xl transition-all duration-500 ease-in-out bg-white`}
        >
          <Link href="/geo" className="text-black hover:text-primary text-lg">
            Geo
          </Link>
          <Link href="/gtm" className="text-black hover:text-primary text-lg">
            Gtm
          </Link>
          <Link href="/geni" className="text-black hover:text-primary text-lg">
            Geni
          </Link>
          <Link href="/about" className="text-black hover:text-primary text-lg">
            About
          </Link>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link
            href="/signup"
            className="px-6 py-2 text-white bg-primary rounded hover:bg-violet-400 transition-colors duration-300 ease-in-out"
          >
            Sign Up
          </Link>
          <Link
            href="/demo"
            className="px-6 py-2 text-primary border border-primary rounded hover:bg-violet-900 hover:text-white transition-colors duration-300 ease-in-out"
          >
            Demo
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
  <div
    className="fixed top-0 left-0 w-full h-screen bg-white shadow-lg z-40 flex flex-col items-center justify-center opacity-0 transform -translate-y-full transition-all duration-500 ease-out"
    style={{ transition: 'opacity 0.5s ease-out, transform 0.5s ease-out' }}
    ref={modalRef} // If you're using refs
  >
    <button
      onClick={() => setMobileMenuOpen(false)}
      className="absolute top-4 right-4 p-2 rounded-full bg-primary text-white"
      aria-label="Close Menu"
    >
      <Cross />
    </button>
    <ul  className="text-left space-y-6  text-2xl font-medium">
      <li>
        <Link href="/geo" className="text-black hover:text-primary">
          Geo
        </Link>
      </li>
      <li>
        <Link href="/gtm" className="text-black hover:text-primary">
          Gtm
        </Link>
      </li>
      <li>
        <Link href="/geni" className="text-black hover:text-primary">
          Geni
        </Link>
      </li>
      <li>
        <Link href="/about" className="text-black hover:text-primary">
          About
        </Link>
      </li>
      {/* Mobile Action Buttons */}
      <li>
        <Link
          href="/signup"
          className="flex items-center justify-center w-[250px] px-4 py-2 text-white bg-primary rounded hover:bg-violet-400 transition-colors duration-300 ease-in-out"
        >
          Sign Up
        </Link>
      </li>
      <li>
        <Link
          href="/demo"
          className="flex items-center justify-center w-[250px] px-6 py-2 text-primary border border-primary rounded hover:bg-violet-900 hover:text-white transition-colors duration-300 ease-in-out"
        >
          Demo
        </Link>
      </li>
    </ul>
  </div>
)}


    </nav>
  );
};

export default Navbar;
