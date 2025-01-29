"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./navbar.style.module.css";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo/croppedlogo.png";
import WhrAIText from "/public/logo/Whr.ai.png";
import DownArrowIcon from "/public/DownSVG.svg";
import { dropdownValues } from "../../data/dropdownData";
// import { MagnifyingGlass, ChartBarRandom, LineChart } from "geist-icons";

const GeneralNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdowns, setDropdowns] = useState<any>({});
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
  return (
    <div>
      <nav
        // className="fixed top-0 left-0 w-full z-50 "
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="px-32 py-8 flex items-center justify-between">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-primary flex items-center gap-3"
            >
              {/* <Image width="42" height="50" src={Logo} alt="nav-logo"/> */}
              <div className="w-[43px] h-[43px] rounded-md border flex justify-center items-center">
                <Image width="32" height="40" src={Logo} alt="nav-logo" />
              </div>
              <Image src={WhrAIText} alt="nav-logo" className="h-6 w-auto" />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 bg-white rounded-3xl">
            {["Use Cases", "Solutions", "Product"].map((item) => (
              <div key={item} className="relative">
                <div
                  className="text-black hover:text-primary text-lg px-3 py-2 font-normal cursor-pointer flex items-center gap-2"
                  onClick={() => toggleDropdown(item)}
                >
                  {item}
                  <Image src={DownArrowIcon} alt="" />
                </div>

                {dropdowns[item] && options[item] && (
                  <div
                    className="fixed top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg z-50 text-nowrap pb-2"
                    onMouseLeave={closeDropdowns}
                    style={{
                      width: `${Math.min(
                        Math.ceil(options[item].length / 5) * 300,
                        900
                      )}px`, // Dynamically set width based on columns
                    }}
                  >
                    <div className="text-black font-normal px-6 py-2 border-b mb-2">
                      {item}
                    </div>

                    <div
                      className={`grid ${
                        options[item].length <= 5
                          ? "grid-cols-1"
                          : options[item].length <= 10
                          ? "grid-cols-2"
                          : "grid-cols-3"
                      } gap-2 p-2`}
                    >
                      {/* First Column */}
                      <div className="flex flex-col gap-2">
                        {options[item]
                          .slice(0, 5) // Always display the first 5 items in the first column
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

                      {/* Second Column */}
                      <div className="flex flex-col gap-2">
                        {options[item]
                          .slice(5, 10) // Always display 5 items in the second column (up to 10 items)
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

                      {/* Third Column */}
                      <div className="flex flex-col gap-2">
                        {options[item]
                          .slice(10, 15) // Always display the remaining items in the third column
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

          <div className="flex">
            <Link
              href="/demo"
              className="px-8 py-2 text-primary border border-primary rounded hover:bg-violet-900 hover:text-white"
            >
              Demo
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default GeneralNavbar;
