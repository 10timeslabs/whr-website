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
import TickIcon from "/public/tick.svg";

const GeneralNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdowns, setDropdowns] = useState<any>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activePage, setActivePage] = useState("GEO");
  const [pageDropdown, setPagedropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
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
    if (pathname.includes("/geo")) {
      setActivePage("GEO");
    } else setActivePage("GTM");
  }, [pathname]);

  const handleClick = () => {
    if (pathname.split("/")[1] === "geo") {
      window.open("https://geo.whr.ai/signup", "_blank");
    } else if (pathname.split("/")[1] === "gtm") {
      window.open("https://gtm.whr.ai/signup", "_blank");
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setPagedropdown(false);
      }
    }

    if (pageDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pageDropdown]);

  const handlePageSelect = (page: string) => {
    setActivePage(page);
    setPagedropdown(false);
  };

  const handleRoute = (type : string) => {
    if(type === "about"){
      if (pathname.includes("/geo")) {
        router.push("/geo/about");
      } else router.push("/gtm/about");
    }

    else router.push("/pricing")
    setMobileMenuOpen(false);
  };

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
            width: isScrolled ? "90%" : "87%",
            margin: "0 auto",
          }}
        >
          <div className="flex-shrink-0 flex items-center relative">
            <Link
              href="/"
              className="text-xl font-bold text-primary flex items-center gap-3"
            >
              {/* <div className="w-[43px] h-[43px] rounded-md border flex justify-center items-center"> */}
                <Image width="32" height="40" src={Logo} alt="nav-logo" />
              {/* </div> */}
              {/* <div
                className={`${isScrolled ? "hidden" : ""} max-[768px]:hidden`}
              >
                <Image src={WhrAIText} alt="nav-logo" className="h-6 w-auto" />
              </div> */}
            </Link>
            <div
              className="text-[12px] w-[63px] py-1 ml-3 text-[#A35200] bg-[#FFF4D6] rounded flex gap-1 items-center justify-center cursor-pointer"
              onClick={() => setPagedropdown(!pageDropdown)}
            >
              {activePage}
              <DownArrowIconTwo />
            </div>
            {pageDropdown && (
              <div
                ref={dropdownRef}
                className={`bg-white shadow-md rounded-xl p-3 absolute right-[10px] ${isScrolled ? "top-[50px]" : "top-[40px]"
                  } flex flex-col items-center gap-2 text-[14px]`}
              >
                <Link
                  href={"/geo"}
                  className="cursor-pointer w-[90px] hover:bg-[var(--accent-color)] p-1 rounded-[2px] flex items-center"
                  onClick={() => handlePageSelect("GEO")}
                >
                  {activePage === "GEO" && (
                    <Image src={TickIcon} alt="selected" />
                  )}
                  <span className={activePage === "GEO" ? "ml-1" : "ml-3"}>
                    GEO
                  </span>
                </Link>
                <Link
                  href={"/gtm"}
                  className="cursor-pointer w-[90px] hover:bg-[var(--accent-color)] p-1 rounded-[2px] flex items-center"
                  onClick={() => handlePageSelect("GTM")}
                >
                  {activePage === "GTM" && (
                    <Image src={TickIcon} alt="selected" />
                  )}
                  <span className={activePage === "GTM" ? "ml-1" : "ml-3"}>
                    GTM
                  </span>
                </Link>
              </div>
            )}

            <div
              className={`${isScrolled ? "border-r border" : ""} h-[30px] ml-3`}
            ></div>
          </div>

          <div className="hidden lg:flex px-3 bg-white rounded-3xl relative">
            {["Use Cases", "Solutions", "Product"].map((item) => (
              <div key={item} className="">
                <div
                  className="text-black hover:text-primary text-[16px] px-3 py-2 font-normal cursor-pointer flex items-center gap-2"
                  onClick={() => toggleDropdown(item)}
                >
                  {item}
                  <Image src={DownArrowIcon} alt="" />
                </div>

                {/* {dropdowns[item] && options[item] && (
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
                )} */}

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
                      {Array.from({
                        length: Math.ceil(options[item].length / 5),
                      }).map((_, colIndex) => (
                        <div key={colIndex} className="flex flex-col gap-2">
                          {options[item]
                            .slice(colIndex * 5, (colIndex + 1) * 5)
                            .map((link: any, i: number) => {
                              const uniqueIndex = `${item}-${colIndex * 5 + i}`;
                              return (
                                <Link
                                  key={uniqueIndex}
                                  href={link.href}
                                  className="block px-2 py-2 text-black hover:bg-[#F7F7F7] hover:text-primary text-sm rounded-md"
                                  onClick={closeDropdowns}
                                  onMouseEnter={() =>
                                    setHoveredIndex(uniqueIndex)
                                  }
                                  onMouseLeave={() => setHoveredIndex(null)}
                                >
                                  <div className="flex items-center text-left">
                                    {link.icon && (
                                      <span
                                        className="mr-2"
                                        style={{ color: "inherit" }}
                                      >
                                        {React.cloneElement(link.icon, {
                                          color: "currentColor",
                                          color2:
                                            hoveredIndex === uniqueIndex
                                              ? "#FFF6E6"
                                              : "#D9D9D9",
                                        })}
                                      </span>
                                    )}
                                    <span className="truncate">
                                      {link.label}
                                    </span>
                                  </div>
                                  {link.subText && (
                                    <div className="text-gray-500 text-xs mt-1 ml-8 max-w-[250px] break-words whitespace-normal">
                                      {link.subText}
                                    </div>
                                  )}
                                </Link>
                              );
                            })}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div
              className="text-black hover:text-primary text-[16px] px-4 py-2 cursor-pointer"
              onClick={()=>handleRoute("about")}
            >
              About
            </div>
            <div
              className="text-black hover:text-primary text-[16px] px-4 py-2 cursor-pointer"
              onClick={()=>handleRoute("price")}
            >
              Pricing
            </div>
          </div>

          <div className=" hidden lg:flex items-center space-x-4">
            <div
              // href="/signup"
              onClick={() => {
                handleClick();
              }}
              className="bg-primary text-[14px] px-[12px] py-[8px] rounded-[10px] text-white cursor-pointer"
            >
              Sign Up
            </div>
            <Link
              href={pathname.includes("/geo") ? "/geo/demo" : "/gtm/demo"}
              className="px-[15px] text-[14px] py-[8px] rounded-[10px] border border-primary text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out"
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
                    // <div className="bg-white shadow-lg rounded-lg mt-2">
                    <div className="bg-white shadow-lg rounded-lg mt-2 max-h-60 overflow-y-auto">
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
              <div
                className="text-black bg-muted px-4 py-4 rounded-md text-lg font-semibold cursor-pointer flex justify-between items-center gap-2"
                onClick={()=>handleRoute("about")}
              >
                About
              </div>
              <div
                className="text-black bg-muted px-4 py-4 rounded-md text-lg font-semibold cursor-pointer flex justify-between items-center gap-2 mt-4"
                onClick={()=>handleRoute("price")}
              >
                Pricing
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneralNavbar;

const DownArrowIconTwo = () => {
  return (
    <svg
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.2115 1.39095L4.0865 4.51595C4.05748 4.545 4.02301 4.56805 3.98508 4.58378C3.94714 4.5995 3.90648 4.6076 3.86541 4.6076C3.82434 4.6076 3.78368 4.5995 3.74574 4.58378C3.7078 4.56805 3.67334 4.545 3.64431 4.51595L0.519314 1.39095C0.460677 1.33231 0.427734 1.25278 0.427734 1.16985C0.427734 1.08693 0.460677 1.0074 0.519314 0.948758C0.577952 0.89012 0.657482 0.857178 0.740408 0.857178C0.823334 0.857178 0.902864 0.89012 0.961502 0.948758L3.86541 3.85305L6.76931 0.948758C6.79835 0.919723 6.83282 0.896692 6.87075 0.880978C6.90869 0.865265 6.94935 0.857178 6.99041 0.857178C7.03147 0.857178 7.07213 0.865265 7.11006 0.880978C7.148 0.896692 7.18247 0.919723 7.2115 0.948758C7.24054 0.977792 7.26357 1.01226 7.27928 1.0502C7.29499 1.08813 7.30308 1.12879 7.30308 1.16985C7.30308 1.21091 7.29499 1.25157 7.27928 1.28951C7.26357 1.32744 7.24054 1.36191 7.2115 1.39095Z"
        fill="#A35200"
      />
    </svg>
  );
};
