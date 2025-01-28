"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.style.module.css";
import Link from "next/link";
import Logo from "/public/logo/croppedlogo.png";
import Image from "next/image";
import WhrAIText from "/public/logo/Whr.ai.png";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        className={`max-w-7xl mx-auto px-4 py-2 flex items-center transition-all duration-1000 ease-in-out ${
          isScrolled
            ? "bg-white shadow-md justify-between space-x-8 transform scale-95 max-w-3xl rounded-lg"
            : "bg-transparent justify-evenly py-2"
        }`}
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

        <div className="flex space-x-4">
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
    </nav>
  );
};

export default Navbar;
