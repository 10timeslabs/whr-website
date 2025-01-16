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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between ">
        <div className="flex-shrink-0 flex items-center space-x-2">
          <Link
            href="/"
            className="text-xl font-bold text-primary flex items-center gap-2"
          >
            <Image width="42" height="50" src={Logo} alt="nav-logo" />
            <Image src={WhrAIText} alt="nav-logo" className="h-6 w-auto" />
          </Link>
        </div>

        <div className="hidden md:flex space-x-8 bg-white px-8 py-2 rounded-3xl">
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
            className="px-8 py-2 text-white bg-primary rounded hover:bg-violet-400"
          >
            Sign Up
          </Link>
          <Link
            href="/demo"
            className="px-8 py-2 text-primary border border-primary rounded hover:bg-violet-900 hover:text-white"
          >
            Demo
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
