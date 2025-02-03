"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./navbar.style.module.css";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo/croppedlogo.png";
import WhrAIText from "/public/Whr.ai.svg";
import DownArrowIcon from "/public/DownSVG.svg";
import { dropdownValues } from "../../data/dropdownData";
import HambergurMenuIcon from "/public/hamburger.svg";
import CrossIcon from "/public/cross.svg";

const GeneralNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdowns, setDropdowns] = useState<any>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const router = useRouter();
  const pathname = usePathname();
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
  }, [pathname]);

  // Function to toggle dropdown state
  const toggleDropdown = (item: any) => {
    setDropdowns((prevState: any) => {
      const newDropdowns = Object.keys(prevState).reduce(
        (acc: any, key: any) => {
          acc[key] = false;
          return acc;
        },
        {}
      );

      return {
        ...newDropdowns,
        [item]: !prevState[item],
      };
    });
  };

  const closeDropdowns = () => setDropdowns({});

  const currentPage = pathname.split("/")[1];
  const options = dropdownValues[currentPage] || [];
  const toggleAccordian = (item: any) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };
  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);
  return (
    <div>
      <nav
        className={`fixed top-2 left-0 w-full z-50 transition-colors duration-1000 ease-in-out`}
      >
        <div
          className={` py-4 flex items-center transition-all duration-1000 ease-in-out ${isScrolled
            ? "bg-white px-6 shadow-md justify-between space-x-8 transform scale-95 rounded-full"
            : "bg-transparent py-2 justify-between"
            }`}
          style={{
            width: isScrolled ? "80%" : "87%",
            margin: "0 auto",
          }}
        >
          <div className="flex-shrink-0 flex items-center">
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
              <div
                className={`${isScrolled ? "hidden" : ""} max-[768px]:hidden`}
              >
                <Image src={WhrAIText} alt="nav-logo" className="h-6 w-auto" />
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex space-x-4 bg-white rounded-3xl relative">
            {["Use Cases", "Solutions", "Product"].map((item) => (
              <div key={item} className="">
                <div
                  className="text-black hover:text-primary text-lg px-3 py-2 font-normal cursor-pointer flex items-center gap-2"
                  onClick={() => toggleDropdown(item)}
                >
                  {item}
                  <Image src={DownArrowIcon} alt="" />
                </div>

                {dropdowns[item] && options[item] && (
                  <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg z-50 text-nowrap pb-2"
                    onMouseLeave={closeDropdowns}
                    style={{
                      width: `${Math.min(
                        Math.ceil(options[item].length / 5) * 300,
                        900
                      )}px`,
                    }}
                  >
                    <div className="text-black font-normal px-6 py-2 border-b mb-2">
                      {item}
                    </div>

                    <div
                      className={`grid ${options[item].length <= 5
                        ? "grid-cols-1"
                        : options[item].length <= 10
                          ? "grid-cols-2"
                          : "grid-cols-3"
                        } gap-2 p-2`}
                    >
                      <div className="flex flex-col gap-2">
                        {options[item].slice(0, 5).map((link: any, i: any) => (
                          <Link
                            key={i}
                            href={link.href}
                            className="block px-2 py-2 text-black hover:bg-[#F7F7F7] hover:text-primary text-sm rounded-md"
                            onClick={closeDropdowns}
                          >
                            <div className="flex items-center text-left">
                              {link.icon && (
                                <span
                                  className="mr-2"
                                  style={{ color: "inherit" }}
                                >
                                  {React.cloneElement(link.icon, {
                                    style: { fill: "currentColor" },
                                  })}
                                </span>
                              )}
                              <span className="truncate">{link.label}</span>
                            </div>
                            {link.subText && (
                              <div className="text-gray-500 text-xs mt-1 ml-8 max-w-[250px] break-words whitespace-normal !important">
                                {link.subText}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>

                      <div className="flex flex-col gap-2">
                        {options[item].slice(5, 10).map((link: any, i: any) => (
                          <Link
                            key={i}
                            href={link.href}
                            className="block px-2 py-2 text-black hover:bg-[#F7F7F7] hover:text-primary text-sm rounded-md"
                            onClick={closeDropdowns}
                          >
                            <div className="flex items-center text-left">
                              {link.icon && (
                                <span
                                  className="mr-2"
                                  style={{ color: "inherit" }}
                                >
                                  {React.cloneElement(link.icon, {
                                    style: { fill: "currentColor" },
                                  })}
                                </span>
                              )}
                              <span className="truncate">{link.label}</span>
                            </div>
                            {link.subText && (
                              <div className="text-gray-500 text-xs mt-1 ml-8 max-w-[250px] break-words whitespace-normal !important">
                                {link.subText}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>

                      <div className="flex flex-col gap-2">
                        {options[item]
                          .slice(10, 15)
                          .map((link: any, i: any) => (
                            <Link
                              key={i}
                              href={link.href}
                              className="block px-2 py-2 text-black hover:bg-[#F7F7F7] hover:text-primary text-sm rounded-md"
                              onClick={closeDropdowns}
                            >
                              <div className="flex items-center text-left">
                                {link.icon && (
                                  <span
                                    className="mr-2"
                                    style={{ color: "inherit" }}
                                  >
                                    {React.cloneElement(link.icon, {
                                      style: { fill: "currentColor" },
                                    })}
                                  </span>
                                )}
                                <span className="truncate">{link.label}</span>
                              </div>
                              {link.subText && (
                                <div className="text-gray-500 text-xs mt-1 ml-8 max-w-[250px] break-words whitespace-normal !important">
                                  {link.subText}
                                </div>
                              )}
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="text-black hover:text-primary text-lg px-4 py-2 cursor-pointer">
              About
            </div>
          </div>

          <div className=" hidden lg:flex items-center space-x-4">
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
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md  text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <Image width={40} src={CrossIcon} alt="cross icon" />
              ) : (
                <Image
                  width={40}
                  src={HambergurMenuIcon}
                  alt="hambergur menu"
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="w-full h-full flex flex-col items-center bg-white">
            <div className="flex justify-end w-full p-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-white"
                aria-label="Close Menu"
              >
                <Image width={40} src={CrossIcon} alt="cross icon" />
              </button>
            </div>
            <div className="w-full px-6 py-8">
              {Object.keys(options).map((item) => (
                <div key={item} className="mb-4">
                  <div
                    className="text-black bg-muted px-4 py-4 rounded-md text-lg font-semibold cursor-pointer flex justify-between items-center gap-2"
                    onClick={() => toggleAccordian(item)}
                  >
                    {item}
                    <Image src={DownArrowIcon} alt="" />
                  </div>

                  {openDropdown === item && (
                    <div className="bg-white shadow-lg rounded-lg mt-2">
                      <div
                        className="grid grid-cols-1 gap-2 p-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {options[item].map((link: any, i: any) => (
                          <Link
                            key={i}
                            href={link.href}
                            className="block px-2 py-2 text-black hover:bg-gray-100 text-sm rounded-md"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="text-black bg-muted px-4 py-4 rounded-md text-lg font-semibold cursor-pointer flex justify-between items-center gap-2">
                About
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneralNavbar;
