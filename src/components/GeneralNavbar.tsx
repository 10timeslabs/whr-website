"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./navbar.style.module.css";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo/croppedlogo.png";
import WhrAIText from "/public/logo/Whr.ai.png";
import DownArrowIcon from "/public/DownSVG.svg";
import { MagnifyingGlass, ChartBarRandom, LineChart } from "geist-icons";
import { CoordinateIcon, Geo_Soln_1, Geo_Soln_2, Geo_Soln_3, Geo_Soln_4, Geo_Soln_5, Geo_Soln_6, Geo_Soln_7, Geo_Soln_8, Geo_UseCase_1, Geo_UseCase_10, Geo_UseCase_11, Geo_UseCase_12, Geo_UseCase_13, Geo_UseCase_14, Geo_UseCase_15, Geo_UseCase_2, Geo_UseCase_3, Geo_UseCase_4, Geo_UseCase_5, Geo_UseCase_6, Geo_UseCase_7, Geo_UseCase_8, Geo_UseCase_9, GTM_Soln_1, GTM_Soln_2, GTM_Soln_3, GTM_Soln_4, GTM_Soln_5, GTM_Soln_6, GTM_Soln_7, GTM_UseCase_1, GTM_UseCase_10, GTM_UseCase_11, GTM_UseCase_12, GTM_UseCase_13, GTM_UseCase_14, GTM_UseCase_15, GTM_UseCase_2, GTM_UseCase_3, GTM_UseCase_4, GTM_UseCase_5, GTM_UseCase_6, GTM_UseCase_7, GTM_UseCase_8, GTM_UseCase_9 } from "../../svgions/icons";
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

  const dropdownValues: any = {
    gtm: {
      "Use Cases": [
        {
          label: "Human Resource (Recruitment)",
          href: "/gtm/usecases/humanresource",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_1 color="currentColor" />,
        },
        {
          label: "Sales & Biz Dev",
          href: "/gtm/usecases/sales&bizdev",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_2 color="currentColor" />,
        },
        {
          label: "Marketing",
          href: "/gtm/usecases/marketing",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_3 color="currentColor" />,
        },
        {
          label: "CSR",
          href: "/gtm/usecases/CSR",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_4 color="currentColor" />,
        },
        {
          label: "Tech team",
          href: "/gtm/usecases/techteam",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_5 color="currentColor" />,
        },
        {
          label: "Procurement",
          href: "/gtm/usecases/procurement",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_6 color="currentColor" />,
        },
        {
          label: "Brand Agency",
          href: "/gtm/usecases/brandagency",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_7 color="currentColor" />,
        },
        {
          label: "Event Suppliers",
          href: "/gtm/usecases/eventsuppliers",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_8 color="currentColor" />,
        },
        {
          label: "Venue",
          href: "/gtm/usecases/venue",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_9 color="currentColor" />,
        },
        {
          label: "Research & Consultancy",
          href: "/gtm/usecases/research&consultancy",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_10 color="currentColor" />,
        },
        {
          label: "Influencers",
          href: "/gtm/usecases/influencers",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_11 color="currentColor" />,
        },
        {
          label: "Media & News",
          href: "/gtm/usecases/media&news",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_12 color="currentColor" />,
        },
        {
          label: "Event Planners and M&A",
          href: "/gtm/usecases/eventplannersandM&A",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_13 color="currentColor" />,
        },
        {
          label: "Manpower Agency",
          href: "/gtm/usecases/manpoweragency",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_14 color="currentColor" />,
        },
        {
          label: "Community & Groups",
          href: "/gtm/usecases/community&groups",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_15 color="currentColor" />,
        },
      ],
      Solutions: [
        {
          label: "Competitor Tracking",
          href: "/gtm/solution/competitortracking",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_Soln_1 color="currentColor" />,
        },
        {
          label: "Prospects Mapping",
          href: "/gtm/solution/prospectsmapping",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_Soln_2 color="currentColor" />,
        },
        {
          label: "Recruitement & DevRel",
          href: "/gtm/solution/recruitement&devRel",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_Soln_3 color="currentColor" />,
        },
        {
          label: "Brand Building",
          href: "/gtm/solution/brandbuilding",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_Soln_4 color="currentColor" />,
        },
        {
          label: "Speaking Opportunity",
          href: "/gtm/solution/speakingopportunity",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_Soln_5 color="currentColor" />,
        },
        {
          label: "Product Matching",
          href: "/gtm/solution/productmatching",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_Soln_6 color="currentColor" />,
        },
        {
          label: "Exhibit & Sponsor",
          href: "/gtm/solution/exhibit&sponsor",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_Soln_7 color="currentColor" />,
        },
      ],
      Product: [
        {
          label: "Event Search",
          href: "/gtm/product/eventsearch",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_1 color="currentColor" />,
        },
        {
          label: "AI Assistant",
          href: "/gtm/product/aiassistant",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_1 color="currentColor" />,
        },
        {
          label: "Smart Tracker",
          href: "/gtm/product/smarttracker",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_1 color="currentColor" />,
        },
        {
          label: "Coordinate",
          href: "/gtm/product/coordinate",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_1 color="currentColor" />,
        },
        {
          label: "Outreach",
          href: "/gtm/product/outreach",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_1 color="currentColor" />,
        },
        {
          label: "Prospect",
          href: "/gtm/product/prospect",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_1 color="currentColor" />,
        },
        {
          label: "Trends Monitor",
          href: "/gtm/product/trendsmonitor",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_1 color="currentColor" />,
        },
      ],
    },
    geo: {
      "Use Cases": [
        {
          label: "Hotel & Lodging",
          href: "/geo/usecases/hotel&lodging",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_UseCase_1 color="currentColor" />,
        },
        {
          label: "Restaurants",
          href: "/geo/usecases/restaurants",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_UseCase_2 color="currentColor" />,
        },
        {
          label: "Activity Planners",
          href: "/geo/usecases/activityplanners",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_UseCase_3 color="currentColor" />,
        },
        {
          label: "Aviation & Airport",
          href: "/geo/usecases/aviation&airport",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_UseCase_4 color="currentColor" />,
        },
        {
          label: "Transportation",
          href: "/geo/usecases/transportation",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_UseCase_5 color="currentColor" />,
        },
        {
          label: "OOH Marketing",
          href: "/geo/usecases/oohmarketing",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_UseCase_6 color="currentColor" />,
        },
        {
          label: "Retail Commerce",
          href: "/geo/usecases/retailcommerce",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_UseCase_7 color="currentColor" />,
        },
        {
          label: "Parking",
          href: "/geo/usecases/parking",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_UseCase_8 color="currentColor" />,
        },
        {
          label: "DMO & DMC",
          href: "/geo/usecases/DMO&DMC",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_UseCase_9 color="currentColor" />,
        },
        {
          label: "Event Planners",
          href: "/geo/usecases/eventplanners",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_UseCase_10 color="currentColor" />,
        },
        {
          label: "Venue Operators",
          href: "/geo/usecases/venueoperators",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_UseCase_11 color="currentColor" />,
        },
        {
          label: "Hyperlocal & Quick Commerce",
          href: "/geo/usecases/hyperlocal&quickcommerce",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_UseCase_12 color="currentColor" />,
        },
        {
          label: "Local Government",
          href: "/geo/usecases/localgovernment",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_UseCase_13 color="currentColor" />,
        },
        {
          label: "Enterprise",
          href: "/geo/usecases/enterprise",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_UseCase_14 color="currentColor" />,
        },
        {
          label: "Manpower Agency",
          href: "/geo/usecases/manpoweragency",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_UseCase_15 color="currentColor" />,
        },
      ],
      Solutions: [
        {
          label: "Demand Forecasting",
          href: "/geo/solutions/DemandForecasting",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_Soln_1 color="currentColor" />,
        },
        {
          label: "Risk Identification",
          href: "/geo/solutions/RiskIdentification",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_Soln_2 color="currentColor" />,
        },
        {
          label: "Geo Marketing",
          href: "/geo/solutions/GeoMarketing",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_Soln_3 color="currentColor" />,
        },
        {
          label: "Event Prospecting",
          href: "/geo/solutions/EventProspecting",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_Soln_4 color="currentColor" />,
        },
        {
          label: "Dynamic Pricing",
          href: "/geo/solutions/DynamicPricing",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_Soln_5 color="currentColor" />,
        },
        {
          label: "Workforce Management",
          href: "/geo/solutions/WorkforceManagement",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_Soln_6 color="currentColor" />,
        },
        {
          label: "Inventory Planning",
          href: "/geo/solutions/InventoryPlanning",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_Soln_7 color="currentColor" />,
        },
        {
          label: "Travel Advisory",
          href: "/geo/solutions/TravelAdvisory",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_Soln_8 color="currentColor" />,
        },
      ],
      Product: [
        {
          label: "Event Search",
          href: "/geo/product1",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <MagnifyingGlass />,
        },
        {
          label: "Smart Tracker",
          href: "/geo/product2",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <LineChart />,
        },
        {
          label: "AI Assistant",
          href: "/geo/product2",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_1 />,
        },
        {
          label: "Trends Monitor",
          href: "/geo/product2",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <ChartBarRandom />,
        },
        {
          label: "Coordinate",
          href: "/geo/product2",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <CoordinateIcon />,
        },
        {
          label: "API & Model Training",
          href: "/geo/product2",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_1 />,
        },
      ],
    },
    geni: {
      "Use Cases": [
        {
          label: "Geni UseCase 1",
          href: "/geni/usecase1",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_1 />,
        },
        {
          label: "Geni UseCase 2",
          href: "/geni/usecase2",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_1 />,
        },
      ],
      Solutions: [
        {
          label: "Geni Solution 1",
          href: "/geni/solution1",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_1 />,
        },
        {
          label: "Geni Solution 2",
          href: "/geni/solution2",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_1 />,
        },
      ],
      Product: [
        {
          label: "Geni Product 1",
          href: "/geni/product1",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_1 />,
        },
        {
          label: "Geni Product 2",
          href: "/geni/product2",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_UseCase_1 />,
        },
      ],
    },
  };

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

          {/* <div className="hidden md:flex space-x-8 bg-white rounded-3xl">
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
                    className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg z-50 text-nowrap pb-2"
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
                      {Array.from({
                        length: Math.min(
                          Math.ceil(options[item].length / 5),
                          3 // Max 3 columns
                        ),
                      }).map((_, colIndex) => {
                        // Determine the slice range for the current column
                        let start = colIndex * 5;
                        let end =
                          colIndex === 1 &&
                          (options[item].length === 7 ||
                            options[item].length === 8)
                            ? options[item].length // Handle the special case for 7 or 8 items
                            : start + 5; // Default: Next 5 items

                        // Ensure no overflow of items
                        end = Math.min(end, options[item].length);

                        return (
                          <div
                            key={colIndex}
                            className="grid grid-cols-1 gap-2"
                          >
                            {options[item]
                              .slice(start, end)
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
                                    <span className="truncate">
                                      {link.label}
                                    </span>
                                  </div>
                                  {link.subText && (
                                    <div className="text-gray-500 text-xs mt-1 ml-6">
                                      {link.subText.includes(
                                        "in forecast accuracy"
                                      ) ? (
                                        <>
                                          Quickly achieve a minimum 10%
                                          improvement <br />
                                          in forecast accuracy
                                        </>
                                      ) : (
                                        link.subText
                                      )}
                                    </div>
                                  )}
                                </Link>
                              ))}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="text-black hover:text-primary text-lg px-4 py-2 cursor-pointer">
              About
            </div>
          </div> */}

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



// function GTM_UseCase_1({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <circle cx="10.793" cy="10.5" r="7.5" stroke={color} strokeWidth="1.5" />
//       <path
//         d="M20.0007 17.895L17.293 15C16.4697 15.8233 15.7678 16.4445 15.1665 16.8047C14.9895 16.9108 14.9397 17.158 15.0802 17.3092L17.6303 20.0553C17.9987 20.4521 18.616 20.4835 19.0229 20.1262L19.9302 19.3295C20.3545 18.9569 20.3864 18.3073 20.0007 17.895Z"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <circle cx="11" cy="7.5" r="1.5" fill="currentColor" />
//       <path
//         d="M8.10557 12.5284C8.65374 11.432 9.77427 10.7395 11 10.7395C12.2257 10.7395 13.3463 11.432 13.8944 12.5284L14.2764 13.2923C14.6088 13.9572 14.1253 14.7395 13.382 14.7395H8.61803C7.87465 14.7395 7.39116 13.9572 7.72361 13.2923L8.10557 12.5284Z"
//         fill="currentColor"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//     </svg>
//   );
// }

// function GTM_UseCase_2({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M12 6.26316H9.16735C8.61507 6.26316 8.16735 6.71087 8.16735 7.26316V8.21053C8.16735 8.76281 8.61507 9.21053 9.16735 9.21053H11C11.5523 9.21053 12 9.65824 12 10.2105V10.7368C12 11.2891 11.5523 11.7368 11 11.7368H8M10.0325 5V13"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M4 3V20.7C4 20.8657 4.13431 21 4.3 21H20"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M6 18.5C11.3333 19.3333 19.5 18.5 19.5 5.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }
// function GTM_UseCase_3({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g clipPath="url(#clip0_7342_298)">
//         <path
//           d="M9.09278 21.2368L7.16736 17.9019L9.93272 16.3053L11.8581 19.6402C12.299 20.4038 12.0374 21.3803 11.2738 21.8212C10.5101 22.2621 9.53366 22.0004 9.09278 21.2368Z"
//           fill="currentColor"
//         />
//         <path
//           d="M17.5585 10.5711C17.8315 10.4135 18.0707 10.2037 18.2626 9.95362C18.4545 9.70358 18.5952 9.4182 18.6768 9.11376C18.7583 8.80933 18.7791 8.49181 18.738 8.17933C18.6969 7.86686 18.5946 7.56554 18.437 7.2926C18.2794 7.01965 18.0696 6.78041 17.8196 6.58855C17.5695 6.39668 17.2841 6.25595 16.9797 6.17437C16.6753 6.0928 16.3578 6.07199 16.0453 6.11313C15.7328 6.15427 15.4315 6.25655 15.1585 6.41414L16.3585 8.4926L17.5585 10.5711Z"
//           fill="currentColor"
//         />
//         <mask id="path-3-inside-1_7342_298" fill="currentColor">
//           <path d="M17.5585 10.5711C18.1098 10.2528 18.512 9.72859 18.6768 9.11376C18.8415 8.49893 18.7553 7.84384 18.437 7.2926C18.1187 6.74135 17.5945 6.33912 16.9797 6.17437C16.3649 6.00963 15.7098 6.09588 15.1585 6.41414L15.7531 7.44399C16.0312 7.28342 16.3617 7.23991 16.6719 7.32302C16.9821 7.40614 17.2466 7.60907 17.4071 7.88718C17.5677 8.16529 17.6112 8.49579 17.5281 8.80598C17.445 9.11617 17.2421 9.38064 16.964 9.54121L17.5585 10.5711Z" />
//         </mask>
//         <path
//           d="M17.5585 10.5711C18.1098 10.2528 18.512 9.72859 18.6768 9.11376C18.8415 8.49893 18.7553 7.84384 18.437 7.2926C18.1187 6.74135 17.5945 6.33912 16.9797 6.17437C16.3649 6.00963 15.7098 6.09588 15.1585 6.41414L15.7531 7.44399C16.0312 7.28342 16.3617 7.23991 16.6719 7.32302C16.9821 7.40614 17.2466 7.60907 17.4071 7.88718C17.5677 8.16529 17.6112 8.49579 17.5281 8.80598C17.445 9.11617 17.2421 9.38064 16.964 9.54121L17.5585 10.5711Z"
//           stroke={color}
//           strokeWidth="3"
//           mask="url(#path-3-inside-1_7342_298)"
//         />
//         <path
//           d="M3.37036 15.9918V15.9918C2.64417 14.734 3.12877 13.1341 4.29931 12.2743C7.61481 9.83906 9.80572 6.48248 10.992 3.9858C11.3665 3.19775 12.5493 3.09013 12.9855 3.84573L15.8411 8.7918"
//           stroke={color}
//           strokeWidth="1.5"
//         />
//         <path
//           d="M3.37036 15.9918V15.9918C4.09655 17.2496 5.72441 17.6299 7.05427 17.0461C10.821 15.3924 14.8234 15.1733 17.5787 15.3943C18.4484 15.4641 19.133 14.4935 18.6967 13.7379L15.8411 8.79184"
//           stroke={color}
//           strokeWidth="1.5"
//         />
//         <path
//           d="M7.198 17.6215L9.78539 22.103C9.92346 22.3421 10.2293 22.424 10.4684 22.286L12.2005 21.286C12.4396 21.1479 12.5215 20.8421 12.3835 20.603L10.0015 16.4772"
//           stroke={color}
//           strokeWidth="1.5"
//         />
//         <path
//           d="M16.3323 5.04413L16.6983 3.6781"
//           stroke={color}
//           strokeWidth="1.5"
//           strokeLinecap="round"
//         />
//         <path
//           d="M19.2054 6.84898L20.4302 6.14188"
//           stroke={color}
//           strokeWidth="1.5"
//           strokeLinecap="round"
//         />
//         <path
//           d="M20.6984 10.6063L19.3323 10.2402"
//           stroke={color}
//           strokeWidth="1.5"
//           strokeLinecap="round"
//         />
//       </g>
//       <defs>
//         <clipPath id="clip0_7342_298">
//           <rect width="24" height="24" fill="currentColor" />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// }
// function GTM_UseCase_4({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <circle cx="12" cy="11" r="9" stroke={color} strokeWidth="1.5" />
//       <path
//         d="M12 20V22"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M16 19V8C16 7.44772 15.5523 7 15 7H9C8.44772 7 8 7.44772 8 8V19"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <circle cx="10.5363" cy="9" r="1" fill="currentColor" />
//       <circle cx="10.5363" cy="11.6257" r="1" fill="currentColor" />
//     </svg>
//   );
// }
// function GTM_UseCase_5({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M19.0711 4.92896C20.4904 6.34824 21.4497 8.16179 21.8243 10.1337C22.1989 12.1056 21.9714 14.1446 21.1715 15.9855C20.3715 17.8264 19.0361 19.3839 17.339 20.4555C15.6418 21.5272 13.6614 22.0633 11.6554 21.9941C9.64945 21.9249 7.7107 21.2537 6.09137 20.0677C4.47204 18.8818 3.24707 17.236 2.5758 15.3444C1.90454 13.4528 1.81805 11.4029 2.32757 9.4615C2.8371 7.52007 3.91907 5.77691 5.43273 4.45874"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M3 9C3.66667 10.1667 4.6 12.1 7 12.5C9.26133 12.8769 9.92466 12.5436 9.15727 15.4315C9.06401 15.7825 9.15927 16.1593 9.41606 16.4161L9.49035 16.4903C9.79471 16.7947 9.86075 17.2573 9.70256 17.6576C8.60344 20.4391 11.7959 18.5349 12.799 17.6864C12.937 17.5697 13.0948 17.4753 13.2659 17.4173C16.2896 16.3933 12.5537 14.4732 14.5 13.5C14.8578 13.3211 17.0337 12.7121 15.5 11.5L14.5 10.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M19.7312 7C18.8979 7.66667 17.4312 9.2 18.2312 10C19.2312 11 19.7313 14 21.7313 12"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M8.18442 2.96608C7.40337 3.74713 7.40337 5.01346 8.18442 5.79451L11.9886 9.59871C11.9907 9.6008 11.9941 9.6008 11.9962 9.59871C11.9983 9.59663 12.0017 9.59663 12.0037 9.59871C12.0058 9.6008 12.0092 9.6008 12.0113 9.59871L15.8155 5.79451C16.5966 5.01346 16.5966 3.74713 15.8155 2.96608L15.6598 2.8104C14.8788 2.02935 13.6124 2.02935 12.8314 2.8104L12.7071 2.93472C12.3165 3.32525 11.6834 3.32525 11.2929 2.93472L11.1685 2.8104C10.3875 2.02935 9.12115 2.02935 8.34011 2.8104L8.18442 2.96608Z"
//         fill="currentColor"
//       />
//       <path
//         d="M8.18442 5.79451L8.71475 5.26418L8.18442 5.79451ZM8.18442 2.96608L7.65409 2.43575L8.18442 2.96608ZM15.8155 5.79451L15.2852 5.26418L15.8155 5.79451ZM15.8155 2.96608L15.2852 3.49641L15.2852 3.49641L15.8155 2.96608ZM15.6598 2.8104L16.1902 2.28007L16.1902 2.28007L15.6598 2.8104ZM12.8314 2.8104L13.3617 3.34073L12.8314 2.8104ZM11.1685 2.8104L11.6989 2.28007V2.28007L11.1685 2.8104ZM8.34011 2.8104L7.80978 2.28007L8.34011 2.8104ZM12.7071 2.93472L12.1767 2.40439L12.7071 2.93472ZM11.2929 2.93472L10.7625 3.46505L11.2929 2.93472ZM12.0113 9.59871L12.5416 10.129L12.0113 9.59871ZM11.9886 9.59871L12.519 9.06838L11.9886 9.59871ZM8.71475 5.26418C8.22659 4.77602 8.22659 3.98457 8.71475 3.49641L7.65409 2.43575C6.58015 3.50969 6.58015 5.2509 7.65409 6.32484L8.71475 5.26418ZM12.519 9.06838L8.71475 5.26418L7.65409 6.32484L11.4583 10.129L12.519 9.06838ZM12.5416 10.129L16.3458 6.32484L15.2852 5.26418L11.481 9.06838L12.5416 10.129ZM16.3458 6.32484C17.4198 5.2509 17.4198 3.50969 16.3458 2.43575L15.2852 3.49641C15.7733 3.98457 15.7733 4.77603 15.2852 5.26418L16.3458 6.32484ZM16.3458 2.43575L16.1902 2.28007L15.1295 3.34072L15.2852 3.49641L16.3458 2.43575ZM16.1902 2.28007C15.1162 1.20612 13.375 1.20612 12.3011 2.28007L13.3617 3.34073C13.8499 2.85257 14.6413 2.85257 15.1295 3.34073L16.1902 2.28007ZM12.3011 2.28007L12.1767 2.40439L13.2374 3.46505L13.3617 3.34073L12.3011 2.28007ZM10.6382 3.34073L10.7625 3.46505L11.8232 2.40439L11.6989 2.28007L10.6382 3.34073ZM8.87044 3.34073C9.35859 2.85257 10.15 2.85257 10.6382 3.34073L11.6989 2.28007C10.6249 1.20612 8.88372 1.20612 7.80978 2.28007L8.87044 3.34073ZM8.71475 3.49641L8.87044 3.34073L7.80978 2.28007L7.65409 2.43575L8.71475 3.49641ZM12.1767 2.40439C12.0791 2.50202 11.9208 2.50202 11.8232 2.40439L10.7625 3.46505C11.4459 4.14847 12.554 4.14847 13.2374 3.46505L12.1767 2.40439ZM11.4734 10.129C11.7684 10.424 12.2467 10.424 12.5416 10.129L11.481 9.06838C11.7718 8.77757 12.2433 8.77758 12.5341 9.0684L11.4734 10.129ZM12.5265 10.129C12.2357 10.4198 11.7642 10.4199 11.4734 10.129L12.5341 9.0684C12.2391 8.77339 11.7608 8.77341 11.4659 9.06838L12.5265 10.129ZM11.4583 10.129C11.7533 10.424 12.2315 10.424 12.5265 10.129L11.4659 9.06838C11.7566 8.7776 12.2281 8.77756 12.519 9.06838L11.4583 10.129Z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// }
// function GTM_UseCase_6({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M7.5 8L2.94595 11.726C2.45693 12.1261 2.45693 12.8739 2.94595 13.274L7.5 17"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M16 8L20.5541 11.726C21.0431 12.1261 21.0431 12.8739 20.5541 13.274L16 17"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M13.794 5L10 19.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }
// function GTM_UseCase_7({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M10.3615 3.34077C11.1577 2.2033 12.8423 2.2033 13.6385 3.34077L14.1316 4.0452C14.5774 4.68214 15.352 5.00299 16.1177 4.86786L16.9644 4.71842C18.3317 4.4771 19.5229 5.66827 19.2816 7.03558L19.1321 7.88235C18.997 8.648 19.3179 9.42258 19.9548 9.86843L20.6592 10.3615C21.7967 11.1577 21.7967 12.8423 20.6592 13.6385L19.9548 14.1316C19.3179 14.5774 18.997 15.352 19.1321 16.1177L19.2816 16.9644C19.5229 18.3317 18.3317 19.5229 16.9644 19.2816L16.1177 19.1321C15.352 18.997 14.5774 19.3179 14.1316 19.9548L13.6385 20.6592C12.8423 21.7967 11.1577 21.7967 10.3615 20.6592L9.86843 19.9548C9.42258 19.3179 8.648 18.997 7.88235 19.1321L7.03558 19.2816C5.66827 19.5229 4.4771 18.3317 4.71842 16.9644L4.86786 16.1177C5.00299 15.352 4.68215 14.5774 4.0452 14.1316L3.34077 13.6385C2.2033 12.8423 2.2033 11.1577 3.34077 10.3615L4.0452 9.86843C4.68214 9.42258 5.00299 8.648 4.86786 7.88235L4.71842 7.03558C4.4771 5.66827 5.66827 4.4771 7.03558 4.71842L7.88235 4.86786C8.648 5.00299 9.42258 4.68215 9.86843 4.0452L10.3615 3.34077Z"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M8.5 12.5L10.2257 14.2257C10.6415 14.6415 11.3246 14.6105 11.701 14.1588L16 9"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }
// function GTM_UseCase_8({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <circle
//         cx="12"
//         cy="10"
//         r="7"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M7 15L4.90392 19.6114C4.73528 19.9824 5.05753 20.3885 5.45716 20.3086L6.7376 20.0525C6.90153 20.0197 7.071 20.071 7.18922 20.1892L7.98522 20.9852C8.23333 21.2333 8.65317 21.1554 8.79567 20.8347L10.5 17"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M17.2446 15L19.3407 19.6114C19.5094 19.9824 19.1871 20.3885 18.7875 20.3086L17.507 20.0525C17.3431 20.0197 17.1736 20.071 17.0554 20.1892L16.2594 20.9852C16.0113 21.2333 15.5915 21.1554 15.449 20.8347L13.7446 17"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M11.3342 7.04893C11.5438 6.40402 12.4562 6.40402 12.6657 7.04894L12.9081 7.79483C13.0018 8.08325 13.2705 8.27852 13.5738 8.27852H14.3581C15.0362 8.27852 15.3181 9.14625 14.7695 9.54483L14.135 10.0058C13.8897 10.1841 13.787 10.5 13.8807 10.7884L14.1231 11.5343C14.3327 12.1793 13.5945 12.7155 13.0459 12.317L12.4114 11.856C12.1661 11.6777 11.8339 11.6777 11.5885 11.856L10.954 12.317C10.4054 12.7155 9.66729 12.1793 9.87683 11.5343L10.1192 10.7884C10.2129 10.5 10.1102 10.1841 9.8649 10.0058L9.2304 9.54483C8.6818 9.14625 8.96374 8.27852 9.64185 8.27852H10.4261C10.7294 8.27852 10.9982 8.08325 11.0919 7.79483L11.3342 7.04893Z"
//         fill="currentColor"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//     </svg>
//   );
// }

// function GTM_UseCase_9({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect
//         x="2"
//         y="4"
//         width="14"
//         height="14"
//         rx="2"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <circle
//         cx="6.5"
//         cy="17.5"
//         r="2.5"
//         fill="currentColor"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M22 11.5L20.2879 8.50386C20.1099 8.19229 19.7785 8 19.4197 8H17.5C16.9477 8 16.5 8.44772 16.5 9V11.5M22 11.5V17C22 17.5523 21.5523 18 21 18H16.5V11.5M22 11.5H16.5M21.2503 14.5H19.6116"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <circle
//         cx="14.5"
//         cy="17.5"
//         r="2.5"
//         fill="currentColor"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//     </svg>
//   );
// }
// function GTM_UseCase_10({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M14.5 16.8155V8.59363C14.5 8.22769 14.3001 7.89097 13.9789 7.71574L10.4789 5.80665C9.81248 5.44317 9 5.92548 9 6.68454V14.9064C9 15.2723 9.19989 15.609 9.52115 15.7843L13.0211 17.6934C13.6875 18.0568 14.5 17.5745 14.5 16.8155Z"
//         fill="currentColor"
//       />
//       <path
//         d="M14.5 8.5V18.5M9 15.5V5.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M4 9.03514V16.9983C4 17.7856 4.86766 18.2642 5.53355 17.8441L8.71581 15.8365C9.04175 15.6309 9.45685 15.6309 9.78281 15.8365L13.9501 18.4647C14.2845 18.6756 14.7117 18.6697 15.0401 18.4496L19.7454 15.2971C20.0225 15.1114 20.1888 14.7998 20.1888 14.4663V6.78935C20.1888 6.00708 19.3311 5.52772 18.6648 5.93764L15.0456 8.16431C14.7131 8.36891 14.2918 8.36125 13.967 8.14469L9.80402 5.36977C9.4681 5.14585 9.0305 5.14588 8.69462 5.36983L4.44525 8.20313C4.16708 8.3886 4 8.70081 4 9.03514Z"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }
// function GTM_UseCase_11({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M19.7387 18.2619L17.293 15C16.4208 15.8722 15.5486 16.364 15.0082 16.8072C14.8834 16.9096 14.8799 17.0936 14.9897 17.2118L17.6281 20.053C17.9974 20.4507 18.6166 20.4812 19.0232 20.1217L19.6009 19.611C19.9913 19.2659 20.0513 18.6788 19.7387 18.2619Z"
//         fill="currentColor"
//       />
//       <circle cx="10.793" cy="10.5" r="7.5" stroke={color} strokeWidth="1.5" />
//       <path
//         d="M20.0007 17.895L17.293 15C16.4697 15.8233 15.7678 16.4445 15.1665 16.8047C14.9895 16.9108 14.9397 17.158 15.0802 17.3092L17.6303 20.0553C17.9987 20.4521 18.616 20.4835 19.0229 20.1262L19.9302 19.3295C20.3545 18.9569 20.3864 18.3073 20.0007 17.895Z"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M6.97359 10.1812C8.58004 9.55709 9.41766 8.629 10.2019 6.75993C10.3099 6.50256 10.6862 6.50431 10.7884 6.76403C11.5071 8.58972 12.1376 9.47208 13.9423 10.1563C14.2288 10.2649 14.2241 10.7182 13.9357 10.8216C12.2083 11.4409 11.4163 12.3135 10.857 13.8402C10.7493 14.1342 10.2712 14.1288 10.1641 13.8345C9.58993 12.2561 8.6826 11.473 6.97005 10.8278C6.68965 10.7222 6.69429 10.2897 6.97359 10.1812Z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// }
// function GTM_UseCase_12({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M3.01953 9H5C5.55228 9 6 9.44772 6 10V18.7527C6 18.8893 5.88927 19 5.75268 19C4.23242 19 3 17.7676 3 16.2473V9.01953C3 9.00874 3.00874 9 3.01953 9Z"
//         fill="currentColor"
//       />
//       <path
//         d="M6 5C6 4.44772 6.44772 4 7 4H19C19.5523 4 20 4.44772 20 5V18C20 18.5523 19.5523 19 19 19H6V5Z"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M5.72945 9H3.01953C3.00874 9 3 9.00874 3 9.01953V16.4956C3 17.8787 4.12127 19 5.50443 19V19"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <rect
//         x="8"
//         y="6.43848"
//         width="4"
//         height="4"
//         rx="1"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M8 13H17.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M14 6.87036H17.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M14 10.1996H17.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M8 15.8457H17.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }
// function GTM_UseCase_13({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M15 10V15.1428H9V10H15Z"
//         fill="currentColor"
//       />
//       <rect
//         x="4"
//         y="4"
//         width="11"
//         height="11"
//         rx="1"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <rect
//         x="9"
//         y="10"
//         width="11"
//         height="10"
//         rx="1"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//     </svg>
//   );
// }
// function GTM_UseCase_14({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M8 10.25H17C17 12.7353 14.9853 14.75 12.5 14.75C10.0147 14.75 8 12.7353 8 10.25Z"
//         fill="currentColor"
//       />
//       <path
//         d="M4 20.25C4 18.0409 5.79086 16.25 8 16.25H9.81504C9.93439 16.25 10.0498 16.2927 10.1404 16.3704L11.8492 17.835C12.2237 18.156 12.7763 18.156 13.1508 17.835L14.8596 16.3704C14.9502 16.2927 15.0656 16.25 15.185 16.25H16C18.2091 16.25 20 18.0409 20 20.25V20.25C20 20.8023 19.5523 21.25 19 21.25H5C4.44772 21.25 4 20.8023 4 20.25V20.25Z"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M8 10.25V10.25C8 12.7353 10.0147 14.75 12.5 14.75V14.75C14.9853 14.75 17 12.7353 17 10.25V10.25"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <rect
//         x="7"
//         y="8.25"
//         width="11"
//         height="2"
//         rx="1"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M17 7.75046C17 6.80015 16.6992 5.87424 16.1406 5.10542C15.582 4.33661 14.7944 3.76436 13.8906 3.4707"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M7.99995 7.75046C7.99995 6.80015 8.3008 5.87424 8.85938 5.10542C9.41795 4.33661 10.2056 3.76436 11.1094 3.4707"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M14 5.55473V3.25C14 2.97386 13.7761 2.75 13.5 2.75H11.5C11.2239 2.75 11 2.97386 11 3.25L11 5.55473"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//     </svg>
//   );
// }
// function GTM_UseCase_15({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M21.5801 15.3167C22.3354 12.7456 22.6803 11.3399 21.789 10.6751C21.6593 10.5784 21.4956 10.5446 21.3338 10.5446H3.80811C3.25582 10.5446 2.80811 10.9923 2.80811 11.5446V15"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <circle cx="7.5636" cy="12.9307" r="1" fill="currentColor" />
//       <circle cx="12.5636" cy="12.9307" r="1" fill="currentColor" />
//       <circle cx="17.5636" cy="12.9307" r="1" fill="currentColor" />
//       <rect
//         x="4.41858"
//         y="3.54456"
//         width="8"
//         height="7"
//         rx="1"
//         fill="currentColor"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <rect
//         x="12.4186"
//         y="6.54456"
//         width="5"
//         height="4"
//         rx="1"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M7.25 6.90259C7.25 7.3168 7.58579 7.65259 8 7.65259C8.41421 7.65259 8.75 7.3168 8.75 6.90259H7.25ZM7.25 3.90259V6.90259H8.75V3.90259H7.25Z"
//         fill="currentColor"
//       />
//       <path
//         d="M14.1686 8.04456C14.1686 8.45878 14.5044 8.79456 14.9186 8.79456C15.3328 8.79456 15.6686 8.45878 15.6686 8.04456H14.1686ZM14.1686 6.39539V8.04456H15.6686V6.39539H14.1686Z"
//         fill="currentColor"
//       />
//       <path
//         d="M2.56531 17.571C3.54356 16.7377 5.03049 15.571 7.84785 17.571C10.6652 19.571 13.5904 17.6433 15.4782 16.5712C16.6521 15.9046 19.5868 15.2712 21.9346 18.0712"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M2.56531 20.571C3.54356 19.7377 5.03049 18.571 7.84785 20.571C10.6652 22.571 13.5904 20.6433 15.4782 19.5712C16.6521 18.9046 19.5868 18.2712 21.9346 21.0712"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// // gtm solution icons
// function GTM_Soln_1({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M9.31262 14C9.31262 13.4477 9.76034 13 10.3126 13H13.6874C14.2397 13 14.6874 13.4477 14.6874 14V22H9.31262V14Z"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M3.93787 17.917C3.93787 17.3647 4.38558 16.917 4.93787 16.917H8.31264C8.86492 16.917 9.31264 17.3647 9.31264 17.917V22.0001H4.93787C4.38558 22.0001 3.93787 21.5524 3.93787 21.0001V17.917Z"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M14.6874 18.392C14.6874 17.8397 15.1351 17.392 15.6874 17.392H19.0621C19.6144 17.392 20.0621 17.8397 20.0621 18.392V21C20.0621 21.5523 19.6144 22 19.0621 22H14.6874V18.392Z"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <circle
//         cx="11.2738"
//         cy="6.06357"
//         r="3.5759"
//         fill="currentColor"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M15.944 9.96788L14.3729 8.20911C14.0581 8.52384 13.7806 8.77665 13.5352 8.95302C13.3698 9.07188 13.3196 9.31872 13.4549 9.47094L14.799 10.983C14.9817 11.1885 15.296 11.2079 15.5027 11.0265L15.901 10.6767C16.1098 10.4934 16.1291 10.1751 15.944 9.96788Z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// }

// function GTM_Soln_2({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <circle cx="18.1494" cy="2.5" r="1.5" fill="currentColor" />
//       <circle cx="6" cy="2.5" r="1.5" fill="currentColor" />
//       <circle cx="6" cy="14.5" r="1.5" fill="currentColor" />
//       <circle cx="18.1494" cy="14.5" r="1.5" fill="currentColor" />
//       <path
//         d="M15.2549 7.28885C15.8031 6.19253 16.9236 5.5 18.1494 5.5V5.5C19.3751 5.5 20.4956 6.19253 21.0438 7.28885L21.4257 8.05279C21.7582 8.71769 21.2747 9.5 20.5313 9.5H15.7674C15.024 9.5 14.5405 8.71769 14.873 8.05279L15.2549 7.28885Z"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M3.10557 7.28885C3.65374 6.19253 4.77427 5.5 6 5.5V5.5C7.22573 5.5 8.34626 6.19253 8.89443 7.28885L9.27639 8.05279C9.60884 8.71769 9.12535 9.5 8.38197 9.5H3.61803C2.87465 9.5 2.39116 8.71769 2.72361 8.05279L3.10557 7.28885Z"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M3.10557 19.5284C3.65374 18.432 4.77427 17.7395 6 17.7395V17.7395C7.22573 17.7395 8.34626 18.432 8.89443 19.5284L9.27639 20.2923C9.60884 20.9572 9.12535 21.7395 8.38197 21.7395H3.61803C2.87465 21.7395 2.39116 20.9572 2.72361 20.2923L3.10557 19.5284Z"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M15.2549 19.5284C15.8031 18.432 16.9236 17.7395 18.1494 17.7395V17.7395C19.3751 17.7395 20.4956 18.432 21.0438 19.5284L21.4257 20.2923C21.7582 20.9572 21.2747 21.7395 20.5313 21.7395H15.7674C15.024 21.7395 14.5405 20.9572 14.873 20.2923L15.2549 19.5284Z"
//         fill="currentColor"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//     </svg>
//   );
// }

// function GTM_Soln_3({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <circle cx="12" cy="12.0425" r="8" stroke={color} strokeWidth="1.5" />
//       <path
//         d="M12 4.54248V2.04248"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M19.25 11.7925L21.75 11.7925"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M12 21.5425V19.0425"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M2.25 11.7925L4.75 11.7925"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <circle cx="12" cy="8.54248" r="1.5" fill="currentColor" />
//       <path
//         d="M9.10557 13.5708C9.65374 12.4745 10.7743 11.782 12 11.782V11.782C13.2257 11.782 14.3463 12.4745 14.8944 13.5708L15.2764 14.3348C15.6088 14.9997 15.1253 15.782 14.382 15.782H9.61803C8.87465 15.782 8.39116 14.9997 8.72361 14.3348L9.10557 13.5708Z"
//         fill="currentColor"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//     </svg>
//   );
// }

// function GTM_Soln_4({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M3 18H21"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M5 15H19"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M7 12H17"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M9 9H15"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M11 6H13"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function GTM_Soln_5({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect
//         x="2"
//         y="14.8978"
//         width="20"
//         height="3"
//         rx="1"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <circle cx="12" cy="5" r="2" stroke={color} strokeWidth="1.5" />
//       <path
//         d="M6.20837 18.447V21.3521"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M18.9181 18.447V21.3521"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M16.2916 7.5C20.7916 8 19.9695 11.7643 19.9695 14.7643"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M16.6353 14.8978C17.1875 14.8978 17.6445 14.4465 17.5444 13.9033C17.4747 13.5251 17.3653 13.1544 17.2175 12.7974C16.9416 12.1315 16.5373 11.5264 16.0277 11.0168C15.518 10.5071 14.9129 10.1028 14.247 9.82698C13.5811 9.55115 12.8674 9.40918 12.1466 9.40918C11.4258 9.40918 10.7121 9.55115 10.0462 9.82698C9.38028 10.1028 8.77521 10.5071 8.26555 11.0168C7.75588 11.5264 7.35159 12.1315 7.07576 12.7974C6.92788 13.1544 6.81848 13.5251 6.74881 13.9033C6.64874 14.4465 7.10567 14.8978 7.65796 14.8978L12.1466 14.8978H16.6353Z"
//         fill="currentColor"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//     </svg>
//   );
// }

// function GTM_Soln_6({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <circle cx="6" cy="2.96716" r="1.5" fill="currentColor" />
//       <path
//         d="M3.10557 7.99552C3.65374 6.89919 4.77427 6.20667 6 6.20667V6.20667C7.22573 6.20667 8.34626 6.89919 8.89443 7.99552L9.27639 8.75945C9.60884 9.42435 9.12535 10.2067 8.38197 10.2067H3.61803C2.87465 10.2067 2.39116 9.42435 2.72361 8.75945L3.10557 7.99552Z"
//         fill="currentColor"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M14 16.4672C14 15.9149 14.4477 15.4672 15 15.4672H21C21.5523 15.4672 22 15.9149 22 16.4672V20.4672C22 21.0194 21.5523 21.4672 21 21.4672H15C14.4477 21.4672 14 21.0194 14 20.4672V16.4672Z"
//         fill="#D9D9D9"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M2 16.4672C2 15.9149 2.44772 15.4672 3 15.4672H9C9.55228 15.4672 10 15.9149 10 16.4672V20.4672C10 21.0194 9.55228 21.4672 9 21.4672H3C2.44772 21.4672 2 21.0194 2 20.4672V16.4672Z"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M14 4.46716C14 3.91488 14.4477 3.46716 15 3.46716H21C21.5523 3.46716 22 3.91488 22 4.46716V8.46716C22 9.01945 21.5523 9.46716 21 9.46716H15C14.4477 9.46716 14 9.01945 14 8.46716V4.46716Z"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M18 15.4672V17.4672"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M6 15.4672V17.4672"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M18 3.46716V5.46716"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M10.75 11.2172L13.25 13.7172"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function GTM_Soln_7({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M16.5665 6.91595V5.55508C16.5665 5.13085 16.8342 4.7528 17.2343 4.61187L19.2343 3.90745C19.8848 3.67833 20.5665 4.16098 20.5665 4.85066V6.60571C20.5665 7.35199 19.7787 7.83532 19.1134 7.49716L18.8535 7.36507C18.5484 7.20996 18.1786 7.26417 17.9308 7.50034C17.4169 7.99011 16.5665 7.62585 16.5665 6.91595Z"
//         fill="currentColor"
//       />
//       <path
//         d="M8 6.91603V5.5359C8 5.12116 7.744 4.74947 7.35652 4.60161L5.35652 3.83843C4.7019 3.58863 4 4.07206 4 4.77272V6.6058C4 7.35208 4.78786 7.8354 5.45313 7.49724L5.71298 7.36516C6.01814 7.21005 6.38795 7.26425 6.63575 7.50042C7.14964 7.9902 8 7.62594 8 6.91603Z"
//         fill="currentColor"
//       />
//       <path
//         d="M2 1.80066C4.85714 4.81915 12.8571 9.04504 22 1.80066"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M10 6.03998V8.34593C10 9.05597 10.8625 9.40705 11.3584 8.89888V8.89888C11.6063 8.64477 11.9932 8.58681 12.3047 8.75709L12.5204 8.87497C13.1868 9.23919 14 8.75691 14 7.99748V5.80066"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M16.5665 5V6.91597C16.5665 7.62588 17.4169 7.99014 17.9308 7.50037V7.50037C18.1786 7.2642 18.5484 7.20999 18.8535 7.3651L19.1134 7.49719C19.7787 7.83535 20.5665 7.35202 20.5665 6.60574V2.98279"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M7.5459 5.43353L7.5459 7.02032C7.5459 7.73241 6.71869 8.1248 6.16721 7.67429V7.67429C5.92217 7.4741 5.58577 7.42771 5.29568 7.5541L4.94533 7.70675C4.2848 7.99454 3.5459 7.51048 3.5459 6.78998V3.21399"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M14.5 14.2632H10.7092C10.1569 14.2632 9.70919 14.7109 9.70919 15.2632V16.2105C9.70919 16.7628 10.1569 17.2105 10.7092 17.2105H13.5C14.0523 17.2105 14.5 17.6582 14.5 18.2105V18.7368C14.5 19.2891 14.0523 19.7368 13.5 19.7368H9.5M12.0406 13V21"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// // Geo "Use Cases"

// function Geo_UseCase_1({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect
//         x="10"
//         y="15.5"
//         width="4"
//         height="6"
//         rx="0.5"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M6 5.5C6 4.94772 6.44772 4.5 7 4.5H17C17.5523 4.5 18 4.94772 18 5.5V20.5C18 21.0523 17.5523 21.5 17 21.5H7C6.44772 21.5 6 21.0523 6 20.5V5.5Z"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M9 8H11"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M9 10.5H11"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M9 13H11"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M13.5 8H15.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M13.5 10.5H15.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M13.5 13H15.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <rect
//         x="4"
//         y="2.5"
//         width="16"
//         height="3"
//         rx="1"
//         fill="#D9D9D9"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function Geo_UseCase_2({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M8.35279 7.36364V4C8.35279 3.44772 8.80051 3 9.35279 3H9.91204C10.4406 3 10.879 3.41506 10.9056 3.94299C11.1302 8.41031 10.8113 9.98467 9.82861 10.4582C9.33108 10.6979 8.85279 11.0841 8.85279 11.6364V20C8.85279 20.5523 8.40507 21 7.85279 21H7.35282C6.80054 21 6.35282 20.5523 6.35282 20V11.6364C6.35282 11.0841 5.87937 10.6733 5.37983 10.4378C3.60427 9.60064 3.93878 6.29103 4.24212 3.87759C4.30515 3.37617 4.73267 3 5.23804 3H5.35282C5.9051 3 6.35282 3.44772 6.35282 4V7.36364"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M6.34888 6.81824V4.00818C6.34888 3.45589 6.79851 3.00818 7.3508 3.00818V3.00818C7.90308 3.00818 8.35272 3.45589 8.35272 4.00818V6.81824"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M19.6838 20V3.5C19.6838 3.22386 19.4594 2.99802 19.1838 3.01522C14.3488 3.31685 14.1877 8.03686 14.1838 11.2286C14.1835 11.5047 14.4077 11.7273 14.6838 11.7273H15.6838C16.2361 11.7273 16.6838 12.175 16.6838 12.7273V20C16.6838 20.5523 17.1315 21 17.6838 21H18.6838C19.2361 21 19.6838 20.5523 19.6838 20Z"
//         fill="#D9D9D9"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function Geo_UseCase_3({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M4.83663 19.1337L17.9482 13.3933C18.4471 13.1748 19.0291 13.3958 19.2573 13.8904L19.5694 14.5668C19.8053 15.078 19.5728 15.6831 19.0553 15.9049L5.8329 21.572C5.29529 21.8024 4.67555 21.5243 4.49039 20.9694L4.28911 20.3663C4.12538 19.8757 4.36281 19.3412 4.83663 19.1337Z"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M19.1634 19.1337L6.05178 13.3933C5.55286 13.1748 4.9709 13.3958 4.74271 13.8904L4.4306 14.5668C4.19472 15.078 4.42718 15.6831 4.94466 15.9049L18.1671 21.572C18.7047 21.8024 19.3245 21.5243 19.5096 20.9694L19.7109 20.3663C19.8746 19.8757 19.6372 19.3412 19.1634 19.1337Z"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <circle cx="12.1172" cy="7.79357" r="2.20641" fill="#D9D9D9" />
//       <path
//         d="M12.1172 2.89648V1.89648"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M15.4726 4.75008L16.1797 4.04297"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M8.52742 4.75008L7.82031 4.04297"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M13.5007 10.0826L13.0851 9.45829L12.8262 9.6306L12.7652 9.93554L13.5007 10.0826ZM10.7337 10.0826L11.4691 9.93554L11.4082 9.6306L11.1493 9.45829L10.7337 10.0826ZM11.0368 11.5981L11.7722 11.451V11.451L11.0368 11.5981ZM13.1976 11.5981L12.4621 11.451L13.1976 11.5981ZM13.8672 8C13.8672 8.60766 13.5581 9.14344 13.0851 9.45829L13.9162 10.707C14.7893 10.1259 15.3672 9.13058 15.3672 8H13.8672ZM12.1172 6.25C13.0837 6.25 13.8672 7.0335 13.8672 8H15.3672C15.3672 6.20507 13.9121 4.75 12.1172 4.75V6.25ZM10.3672 8C10.3672 7.0335 11.1507 6.25 12.1172 6.25V4.75C10.3223 4.75 8.86719 6.20507 8.86719 8H10.3672ZM11.1493 9.45829C10.6763 9.14344 10.3672 8.60766 10.3672 8H8.86719C8.86719 9.13058 9.4451 10.1259 10.3181 10.707L11.1493 9.45829ZM11.7722 11.451L11.4691 9.93554L9.99828 10.2297L10.3014 11.7451L11.7722 11.451ZM11.5271 11.25C11.6463 11.25 11.7489 11.3341 11.7722 11.451L10.3014 11.7451C10.4182 12.3294 10.9312 12.75 11.5271 12.75V11.25ZM12.7073 11.25H11.5271V12.75H12.7073V11.25ZM12.4621 11.451C12.4855 11.3341 12.5881 11.25 12.7073 11.25V12.75C13.3031 12.75 13.8162 12.3294 13.933 11.7451L12.4621 11.451ZM12.7652 9.93554L12.4621 11.451L13.933 11.7451L14.2361 10.2297L12.7652 9.93554Z"
//         fill="black"
//       />
//       <path d="M11.1172 9.75H13.1172" stroke={color} strokeLinecap="round" />
//     </svg>
//   );
// }

// function Geo_UseCase_4({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M11.0444 5.3415L12.9002 7.46241C13.448 8.08846 13.0364 9.07067 12.206 9.11921L10.3568 9.22729C9.98171 9.24922 9.62596 9.059 9.43588 8.73486L8.12871 6.50587C7.73776 5.83923 8.2185 5 8.99132 5H10.2918C10.5802 5 10.8545 5.12448 11.0444 5.3415Z"
//         fill="#D9D9D9"
//       />
//       <path
//         d="M9.5 14.5H6.63701C6.38539 14.5 6.14302 14.4051 5.95824 14.2343L3.34538 11.8192C3.12662 11.617 3.0094 11.3278 3.02564 11.0304L3.19136 7.99441C3.21378 7.58376 3.69477 7.37427 4.01071 7.63756L5.96751 9.26822C6.14723 9.41798 6.37376 9.5 6.60769 9.5H18.5096C18.6648 9.5 18.818 9.5353 18.9553 9.60772C20.9098 10.6384 23.699 12.8462 20.9568 14.3881C20.8215 14.4642 20.6648 14.5 20.5096 14.5H15.1228"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M14.2456 9L11.0444 5.3415C10.8545 5.12448 10.5802 5 10.2918 5H8.99132C8.2185 5 7.73776 5.83923 8.12871 6.50587L9.74561 9.26302"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M16.2456 13L11.0411 18.462C10.8524 18.6601 10.5908 18.7722 10.3172 18.7722H8.89233C8.14209 18.7722 7.65903 17.9768 8.00502 17.3111L10.2456 13"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M21.2456 12H18.2456"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function Geo_UseCase_5({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M21.5801 15.3167C22.3354 12.7456 22.6803 11.3399 21.789 10.6751C21.6593 10.5784 21.4956 10.5446 21.3338 10.5446H3.80811C3.25582 10.5446 2.80811 10.9923 2.80811 11.5446V15"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <circle cx="7.5636" cy="12.9307" r="1" fill="black" />
//       <circle cx="12.5636" cy="12.9307" r="1" fill="black" />
//       <circle cx="17.5636" cy="12.9307" r="1" fill="black" />
//       <rect
//         x="4.41858"
//         y="3.54456"
//         width="8"
//         height="7"
//         rx="1"
//         fill="#D9D9D9"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <rect
//         x="12.4186"
//         y="6.54456"
//         width="5"
//         height="4"
//         rx="1"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M7.25 6.90259C7.25 7.3168 7.58579 7.65259 8 7.65259C8.41421 7.65259 8.75 7.3168 8.75 6.90259H7.25ZM7.25 3.90259V6.90259H8.75V3.90259H7.25Z"
//         fill="black"
//       />
//       <path
//         d="M14.1686 8.04456C14.1686 8.45878 14.5044 8.79456 14.9186 8.79456C15.3328 8.79456 15.6686 8.45878 15.6686 8.04456H14.1686ZM14.1686 6.39539V8.04456H15.6686V6.39539H14.1686Z"
//         fill="black"
//       />
//       <path
//         d="M2.56531 17.571C3.54356 16.7377 5.03049 15.571 7.84785 17.571C10.6652 19.571 13.5904 17.6433 15.4782 16.5712C16.6521 15.9046 19.5868 15.2712 21.9346 18.0712"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M2.56531 20.571C3.54356 19.7377 5.03049 18.571 7.84785 20.571C10.6652 22.571 13.5904 20.6433 15.4782 19.5712C16.6521 18.9046 19.5868 18.2712 21.9346 21.0712"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function Geo_UseCase_6({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect x="16" y="12" width="3" height="7" fill="#D9D9D9" />
//       <rect x="5" y="12" width="3" height="7" fill="#D9D9D9" />
//       <path
//         d="M16 12.5V21.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M5 12.5V21.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M19 12.5V21.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M8 12.5V21.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <rect
//         x="2"
//         y="3"
//         width="20"
//         height="9"
//         rx="1"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M19 13.2783L16.5 15.4999L18.5 17.9999L16 20.9999"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M8 13.2783L5.5 15.4999L7.5 17.9999L5 20.9999"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function Geo_UseCase_7({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M4 9.5V19.5C4 20.0523 4.44772 20.5 5 20.5H9.5M9.5 20.5V14.5C9.5 13.9477 9.94772 13.5 10.5 13.5H13.5C14.0523 13.5 14.5 13.9477 14.5 14.5V20.5M9.5 20.5H14.5M14.5 20.5H18.5C19.0523 20.5 19.5 20.0523 19.5 19.5V9"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M2.19312 8.38662L3.5313 3.72413C3.65435 3.2954 4.04646 3 4.49249 3H19.6221C20.0756 3 20.4723 3.30513 20.5887 3.7434L21.7909 8.27174C21.9126 8.73038 21.6971 9.2204 21.2551 9.39313C19.2352 10.1825 18.443 9.43714 17.6213 8.27437C17.3963 7.95607 16.9101 7.99913 16.7093 8.3332C15.2565 10.7505 13.6231 9.55862 12.5108 8.18693C12.2698 7.88964 11.7888 7.92776 11.585 8.25174C10.0585 10.6784 8.39981 9.76836 7.34274 8.40109C7.08776 8.07127 6.53138 8.10161 6.30502 8.45169C5.15641 10.2281 3.65982 9.99197 2.59302 9.43003C2.22115 9.23415 2.07717 8.79062 2.19312 8.38662Z"
//         fill="#D9D9D9"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function Geo_UseCase_8({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M9.94409 5.52734H13.2774C14.382 5.52734 15.2774 6.42277 15.2774 7.52734C15.2774 8.63191 14.382 9.52734 13.2774 9.52734H9.94409V5.52734Z"
//         fill="#D9D9D9"
//       />
//       <path
//         d="M9.94409 12.5273V6.06068C9.94409 5.76613 10.1829 5.52734 10.4774 5.52734H13.3644C14.4209 5.52734 15.2774 6.38384 15.2774 7.44039V7.44039C15.2774 8.49693 14.4209 9.35343 13.3644 9.35343H10.2996"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <rect
//         x="4.5"
//         y="2"
//         width="15"
//         height="20"
//         rx="1"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M7.5 16H16"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M9.5 19H14"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function Geo_UseCase_9({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M16.8124 12.2111L14.8289 8.24418C13.9432 6.47275 13.8242 4.19851 15.3346 2.91743C17.0428 1.46861 18.7042 1.92581 20.007 2.97842C21.5474 4.22316 21.4704 6.47275 20.5847 8.24418L18.6012 12.2111C18.2327 12.9482 17.1809 12.9482 16.8124 12.2111Z"
//         fill="#D9D9D9"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <circle cx="17.7067" cy="5.67572" r="1.38739" fill="black" />
//       <path
//         d="M18.1221 14.6824C18.3925 15.9524 16.1172 21.0322 11.1301 15.3018C6.51594 9.99994 2.45599 19.8799 2.62497 21.9999"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeDasharray="2.5 2.5"
//       />
//     </svg>
//   );
// }

// function Geo_UseCase_10({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <circle cx="17" cy="16.5" r="2.5" fill="#D9D9D9" />
//       <path
//         d="M12.25 21.25C12.6642 21.25 13 20.9142 13 20.5C13 20.0858 12.6642 19.75 12.25 19.75V21.25ZM8.25 4.75H6.25V6.25H8.25V4.75ZM4.5 6.5V19.5H6V6.5H4.5ZM6.25 21.25H12.25V19.75H6.25V21.25ZM4.5 19.5C4.5 20.4665 5.2835 21.25 6.25 21.25V19.75C6.11193 19.75 6 19.6381 6 19.5H4.5ZM6.25 4.75C5.2835 4.75 4.5 5.5335 4.5 6.5H6C6 6.36193 6.11193 6.25 6.25 6.25V4.75Z"
//         fill="black"
//       />
//       <rect
//         x="8"
//         y="4"
//         width="7"
//         height="3"
//         rx="1.5"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M17 7.67294C17 8.08715 17.3358 8.42294 17.75 8.42294C18.1642 8.42294 18.5 8.08715 18.5 7.67294H17ZM14.793 6.25H16.75V4.75H14.793V6.25ZM17 6.5V7.67294H18.5V6.5H17ZM16.75 6.25C16.8881 6.25 17 6.36193 17 6.5H18.5C18.5 5.5335 17.7165 4.75 16.75 4.75V6.25Z"
//         fill="black"
//       />
//       <path
//         d="M18.3835 18.5826L17.9679 17.9583L17.709 18.1306L17.648 18.4355L18.3835 18.5826ZM15.6165 18.5826L16.352 18.4355L16.291 18.1306L16.0321 17.9583L15.6165 18.5826ZM15.9196 20.0981L16.655 19.951V19.951L15.9196 20.0981ZM18.0804 20.0981L17.345 19.951L18.0804 20.0981ZM18.75 16.5C18.75 17.1077 18.4409 17.6434 17.9679 17.9583L18.799 19.207C19.6721 18.6259 20.25 17.6306 20.25 16.5H18.75ZM17 14.75C17.9665 14.75 18.75 15.5335 18.75 16.5H20.25C20.25 14.7051 18.7949 13.25 17 13.25V14.75ZM15.25 16.5C15.25 15.5335 16.0335 14.75 17 14.75V13.25C15.2051 13.25 13.75 14.7051 13.75 16.5H15.25ZM16.0321 17.9583C15.5591 17.6434 15.25 17.1077 15.25 16.5H13.75C13.75 17.6306 14.3279 18.6259 15.201 19.207L16.0321 17.9583ZM16.655 19.951L16.352 18.4355L14.8811 18.7297L15.1842 20.2451L16.655 19.951ZM16.4099 19.75C16.5291 19.75 16.6317 19.8341 16.655 19.951L15.1842 20.2451C15.301 20.8294 15.8141 21.25 16.4099 21.25V19.75ZM17.5901 19.75H16.4099V21.25H17.5901V19.75ZM17.345 19.951C17.3683 19.8341 17.4709 19.75 17.5901 19.75V21.25C18.1859 21.25 18.699 20.8294 18.8158 20.2451L17.345 19.951ZM17.648 18.4355L17.345 19.951L18.8158 20.2451L19.1189 18.7297L17.648 18.4355Z"
//         fill="black"
//       />
//       <path d="M15.75 18.5H17.75" stroke={color} strokeLinecap="round" />
//       <path
//         d="M14 13.5L13 12.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M20.25 13.5L21.25 12.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M17 12V11"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function Geo_UseCase_11({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M9.52147 15.5304L12 10L14.5 15.5783C14.6707 15.8836 14.4263 16.2544 14.0785 16.2179L12.0797 16.0083C12.0266 16.0028 11.9733 16.0015 11.92 16.0044L9.69834 16.1277C9.42415 16.1429 9.27328 15.8142 9.46356 15.6162C9.48766 15.5911 9.50725 15.5621 9.52147 15.5304Z"
//         fill="#D9D9D9"
//       />
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M11.9187 2.91406C11.8308 2.91398 11.7462 2.92917 11.6674 2.95722C11.454 3.03297 11.2868 3.20197 11.2118 3.41281C11.1873 3.48164 11.1726 3.55492 11.1693 3.63088C11.1284 4.35528 11.1225 5.20663 11.1677 6.13783C11.0695 8.04811 10.7436 10.3097 10.0381 12.4509C8.99472 15.618 7.17354 18.3775 4.18607 19.4996C3.86287 19.621 3.6727 19.9417 3.70267 20.2696C3.70076 20.2914 3.69979 20.3135 3.69979 20.3358C3.69979 20.7501 4.03557 21.0858 4.44979 21.0858H8.62212C8.97439 21.0858 9.31846 20.9795 9.60932 20.7808L11.2825 19.6377C11.3618 19.5835 11.4651 19.5795 11.5483 19.6274L13.677 20.8526C13.9426 21.0054 14.2436 21.0858 14.55 21.0858H19.8796C20.2938 21.0858 20.6296 20.7501 20.6296 20.3358C20.6296 19.9216 20.2938 19.5858 19.8796 19.5858H19.8158C19.7658 19.5511 19.7108 19.522 19.6512 19.4996C16.6638 18.3775 14.8426 15.618 13.7992 12.4509C13.0937 10.3097 12.7678 8.04811 12.6696 6.13782C12.7148 5.20664 12.7089 4.3553 12.668 3.6309C12.6647 3.55494 12.65 3.48164 12.6255 3.41281C12.5498 3.19943 12.3808 3.03228 12.1699 2.95722C12.0911 2.92917 12.0065 2.91398 11.9187 2.91406ZM16.7415 19.5858C14.5761 17.9385 13.21 15.4561 12.3745 12.9202C12.2018 12.3961 12.0505 11.8661 11.9187 11.3362C11.7868 11.8661 11.6355 12.3961 11.4628 12.9202C10.6273 15.4561 9.26124 17.9385 7.09583 19.5858H8.62212C8.67244 19.5858 8.7216 19.5707 8.76315 19.5423L10.4364 18.3991C10.9912 18.02 11.7141 17.9922 12.2965 18.3273L14.4253 19.5525C14.4632 19.5743 14.5062 19.5858 14.55 19.5858H16.7415Z"
//         fill="currentColor"
//       />
//       <path
//         d="M10.3174 10.3508H13.4549"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M11.1393 4.66406H12.6331"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M7.05359 15.6641H16.7188"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function Geo_UseCase_12({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M9.75 19.9952C11.1922 20.8279 12.8705 21.1568 14.5204 20.9303C16.1702 20.7037 17.6977 19.9345 18.8621 18.7439C20.0264 17.5532 20.7614 16.009 20.9512 14.3545C21.1409 12.7 20.7746 11.0294 19.91 9.60615C19.0454 8.18285 17.7317 7.0878 16.1759 6.49362C14.6202 5.89945 12.911 5.83995 11.3177 6.32451C9.72447 6.80906 8.33778 7.81011 7.3763 9.16984C6.41482 10.5296 5.93323 12.1706 6.00745 13.8343"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path d="M13 6V3.5" stroke={color} strokeWidth="1.5" />
//       <path
//         d="M11 3L15 3"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M4 16H11.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M6.5 18L11.5 18"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M13 10.5V13.5C13 14.0523 13.4477 14.5 14 14.5H16.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function Geo_UseCase_13({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M5 6.3375C5 6.11759 5.11153 5.90993 5.29468 5.78821C10.8161 2.11872 13.8626 2.02547 18.7363 5.78037C18.9021 5.90806 19 6.10794 19 6.31715C19 6.69428 18.6943 7 18.3171 7H5.6625C5.29661 7 5 6.70339 5 6.3375Z"
//         fill="#D9D9D9"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M7 13V22.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M10.5 13V22.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M14 13V22.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M17.5 13V22.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M4.5 10H19.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function Geo_UseCase_14({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect
//         x="10"
//         y="15"
//         width="4"
//         height="6"
//         rx="0.5"
//         fill="#D9D9D9"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M6 5C6 4.44772 6.44772 4 7 4H17C17.5523 4 18 4.44772 18 5V21H6V5Z"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M9 7.5H11"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M9 10H11"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M9 12.5H11"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M13.5 7.5H15.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M13.5 10H15.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M13.5 12.5H15.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M18 9C18 8.44772 18.4477 8 19 8H20C20.5523 8 21 8.44772 21 9V20.0142C21 20.5664 20.5523 21.0142 20 21.0142H18V9Z"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M3 12.6177C3 12.0654 3.44772 11.6177 4 11.6177H5C5.55228 11.6177 6 12.0654 6 12.6177V21.0142H4C3.44772 21.0142 3 20.5665 3 20.0142V12.6177Z"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//     </svg>
//   );
// }

// function Geo_UseCase_15({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M8 10.25H17C17 12.7353 14.9853 14.75 12.5 14.75C10.0147 14.75 8 12.7353 8 10.25Z"
//         fill="#D9D9D9"
//       />
//       <path
//         d="M4 20.25C4 18.0409 5.79086 16.25 8 16.25H9.81504C9.93439 16.25 10.0498 16.2927 10.1404 16.3704L11.8492 17.835C12.2237 18.156 12.7763 18.156 13.1508 17.835L14.8596 16.3704C14.9502 16.2927 15.0656 16.25 15.185 16.25H16C18.2091 16.25 20 18.0409 20 20.25V20.25C20 20.8023 19.5523 21.25 19 21.25H5C4.44772 21.25 4 20.8023 4 20.25V20.25Z"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M8 10.25V10.25C8 12.7353 10.0147 14.75 12.5 14.75V14.75C14.9853 14.75 17 12.7353 17 10.25V10.25"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <rect
//         x="7"
//         y="8.25"
//         width="11"
//         height="2"
//         rx="1"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M17 7.75046C17 6.80015 16.6992 5.87424 16.1406 5.10542C15.582 4.33661 14.7944 3.76436 13.8906 3.4707"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M7.99995 7.75046C7.99995 6.80015 8.3008 5.87424 8.85938 5.10542C9.41795 4.33661 10.2056 3.76436 11.1094 3.4707"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M14 5.55473V3.25C14 2.97386 13.7761 2.75 13.5 2.75H11.5C11.2239 2.75 11 2.97386 11 3.25L11 5.55473"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//     </svg>
//   );
// }

// // Geo solution

// function Geo_Soln_1({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <circle cx="12" cy="8.48535" r="6" stroke={color} strokeWidth="1.5" />
//       <path
//         d="M6.3698 17.9599C6.55527 17.6817 6.8675 17.5146 7.20185 17.5146H16.7981C17.1325 17.5146 17.4447 17.6817 17.6302 17.9599L18.9635 19.9599C19.4066 20.6245 18.9302 21.5146 18.1315 21.5146H5.86852C5.06982 21.5146 4.59343 20.6245 5.03647 19.9599L6.3698 17.9599Z"
//         fill="currentColor"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M8.76965 9.96401L10.8634 8.26602L12.9061 9.55543L15.3063 6.88718M15.3063 6.88718L13.2252 6.55526M15.3063 6.88718L15.5105 9.09586"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function Geo_Soln_2({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M15 13.3456C13.777 9.8294 10.4224 3.50849 6.17111 4.03041C5.54646 4.1071 5.32396 4.8336 5.61126 5.39353C6.77617 7.66397 7.72456 11.3022 5 13.3456"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M4 16.571C4.83333 15.7377 6.1 14.571 8.5 16.571C10.9 18.571 13.3918 16.6433 15 15.5712C16 14.9046 18.5 14.2712 20.5 17.0712"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M4 19.571C4.83333 18.7377 6.1 17.571 8.5 19.571C10.9 21.571 13.3918 19.6433 15 18.5712C16 17.9046 18.5 17.2712 20.5 20.0712"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function Geo_Soln_3({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M14.5 10.5V20.5M9 17.5V7.5"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M4 11.0351V18.9983C4 19.7856 4.86766 20.2642 5.53355 19.8441L8.71581 17.8365C9.04175 17.6309 9.45685 17.6309 9.78281 17.8365L13.9501 20.4647C14.2845 20.6756 14.7117 20.6697 15.0401 20.4496L19.7454 17.2971C20.0225 17.1114 20.1888 16.7998 20.1888 16.4663V8.78935C20.1888 8.00708 19.3311 7.52772 18.6648 7.93764L15.0456 10.1643C14.7131 10.3689 14.2918 10.3612 13.967 10.1447L9.80402 7.36977C9.4681 7.14585 9.0305 7.14588 8.69462 7.36983L4.44525 10.2031C4.16708 10.3886 4 10.7008 4 11.0351Z"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M9.9332 10.4236L7.16208 5.12034C6.80452 4.43605 6.86441 3.59457 7.38117 3.02093C11.5439 -1.60008 15.6826 0.519437 17.4126 3.31275C17.7119 3.796 17.6954 4.39726 17.4611 4.91515L15.0342 10.2791C14.5626 11.3215 13.5112 11.9787 12.3676 11.9461C11.3403 11.9168 10.4091 11.3344 9.9332 10.4236Z"
//         fill="white"
//       />
//       <path
//         d="M11.4915 9.21119L10.2351 6.69821C9.64457 5.51725 9.57967 4.02034 10.5494 3.12426C11.8831 1.89184 13.1865 2.30405 14.175 3.16608C15.1701 4.03387 15.1274 5.51725 14.5369 6.69821L13.2804 9.21119C12.9119 9.94824 11.8601 9.94824 11.4915 9.21119Z"
//         fill="#D9D9D9"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <circle cx="12.386" cy="5" r="1" fill="currentColor" />
//     </svg>
//   );
// }

// function Geo_Soln_4({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M22 10V10.75H22.75V10H22ZM22 14H22.75V13.25H22V14ZM2 14V13.25H1.25V14H2ZM2 10H1.25V10.75H2V10ZM3 5.25C2.0335 5.25 1.25 6.0335 1.25 7H2.75C2.75 6.86193 2.86193 6.75 3 6.75V5.25ZM21 5.25H3V6.75H21V5.25ZM22.75 7C22.75 6.0335 21.9665 5.25 21 5.25V6.75C21.1381 6.75 21.25 6.86193 21.25 7H22.75ZM22.75 10V7H21.25V10H22.75ZM20.75 12C20.75 11.3096 21.3096 10.75 22 10.75V9.25C20.4812 9.25 19.25 10.4812 19.25 12H20.75ZM22 13.25C21.3096 13.25 20.75 12.6904 20.75 12H19.25C19.25 13.5188 20.4812 14.75 22 14.75V13.25ZM22.75 17V14H21.25V17H22.75ZM21 18.75C21.9665 18.75 22.75 17.9665 22.75 17H21.25C21.25 17.1381 21.1381 17.25 21 17.25V18.75ZM3 18.75H21V17.25H3V18.75ZM1.25 17C1.25 17.9665 2.0335 18.75 3 18.75V17.25C2.86193 17.25 2.75 17.1381 2.75 17H1.25ZM1.25 14V17H2.75V14H1.25ZM3.25 12C3.25 12.6904 2.69036 13.25 2 13.25V14.75C3.51878 14.75 4.75 13.5188 4.75 12H3.25ZM2 10.75C2.69036 10.75 3.25 11.3096 3.25 12H4.75C4.75 10.4812 3.51878 9.25 2 9.25V10.75ZM1.25 7V10H2.75V7H1.25Z"
//         fill="currentColor"
//       />
//       <path
//         d="M11.3343 9.04894C11.5438 8.40402 12.4562 8.40402 12.6657 9.04894L12.9654 9.97123C13.0591 10.2596 13.3279 10.4549 13.6311 10.4549H14.6009C15.279 10.4549 15.561 11.3226 15.0124 11.7212L14.2278 12.2912C13.9825 12.4695 13.8798 12.7854 13.9735 13.0739L14.2732 13.9962C14.4827 14.6411 13.7446 15.1774 13.196 14.7788L12.4114 14.2088C12.1661 14.0305 11.8339 14.0305 11.5886 14.2088L10.804 14.7788C10.2554 15.1774 9.51727 14.6411 9.72681 13.9961L10.0265 13.0739C10.1202 12.7854 10.0175 12.4695 9.77219 12.2912L8.98765 11.7212C8.43905 11.3226 8.72099 10.4549 9.3991 10.4549H10.3689C10.6721 10.4549 10.9409 10.2596 11.0346 9.97123L11.3343 9.04894Z"
//         fill="#D9D9D9"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//     </svg>
//   );
// }

// function Geo_Soln_5({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M20.7054 12C20.7054 9.98596 20.0071 8.03422 18.7294 6.47734C17.4517 4.92046 15.6737 3.85476 13.6983 3.46184C11.723 3.06892 9.67252 3.37308 7.89628 4.3225C6.12005 5.27191 4.72796 6.80784 3.95722 8.66858C3.18648 10.5293 3.08476 12.5997 3.66941 14.5271C4.25406 16.4544 5.48889 18.1194 7.16352 19.2383C8.83814 20.3573 10.8489 20.8609 12.8533 20.6635C14.8576 20.4661 16.7315 19.5798 18.1557 18.1557M20.7054 12L18.5606 10.5389M20.7054 12L22.2236 9.9711"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M14.3333 9.26316H10.5425C9.99022 9.26316 9.5425 9.71087 9.5425 10.2632V11.2105C9.5425 11.7628 9.99022 12.2105 10.5425 12.2105H13.3333C13.8856 12.2105 14.3333 12.6582 14.3333 13.2105V13.7368C14.3333 14.2891 13.8856 14.7368 13.3333 14.7368H9.33331M11.8739 8V16"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function Geo_Soln_6({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M6.98438 10.1064C6.1484 10.28 5.36067 10.6615 4.68282 11.2212C4.00496 11.7808 3.45534 12.5034 3.07696 13.3325C2.83545 13.8616 2.66788 14.4249 2.57825 15.0039C2.49376 15.5497 2.94941 16 3.50169 16H5.00338"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <circle cx="12" cy="10" r="2" stroke={color} strokeWidth="1.5" />
//       <circle cx="7.5" cy="6" r="2" stroke={color} strokeWidth="1.5" />
//       <circle
//         cx="2"
//         cy="2"
//         r="2"
//         transform="matrix(-1 0 0 1 18.5 4)"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M17.1681 9.37213C16.7625 9.28793 16.3655 9.54845 16.2813 9.95402C16.1971 10.3596 16.4576 10.7566 16.8632 10.8408C17.5761 10.9888 18.253 11.3152 18.8397 11.7996C18.9792 11.9147 19.1127 12.0381 19.2397 12.1691C20.3408 12.4614 21.2945 13.1154 21.966 13.9963C21.8698 13.6628 21.7494 13.3367 21.6054 13.0211C21.1816 12.0926 20.5634 11.2775 19.7947 10.6428C19.0257 10.0079 18.1271 9.57123 17.1681 9.37213Z"
//         fill="currentColor"
//       />
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M13.7365 14.2363C13.1722 14.0798 12.5881 14 12 14C11.1464 14 10.3012 14.1681 9.51254 14.4948C8.72393 14.8214 8.00737 15.3002 7.40379 15.9038C6.80021 16.5074 6.32142 17.2239 5.99477 18.0126C5.79603 18.4923 5.65598 18.9931 5.57676 19.5039C5.49212 20.0497 5.9477 20.5 6.49999 20.5L12 20.5H14.2206C13.3853 19.5972 12.8747 18.3895 12.8747 17.0626C12.8747 16.0159 13.1924 15.0434 13.7365 14.2363Z"
//         fill="#D9D9D9"
//       />
//       <path
//         d="M13.7365 14.2363L14.3584 14.6555L14.9406 13.7918L13.9369 13.5135L13.7365 14.2363ZM9.51254 14.4948L9.22553 13.8019L9.22553 13.8019L9.51254 14.4948ZM7.40379 15.9038L6.87346 15.3735L6.87346 15.3735L7.40379 15.9038ZM5.99477 18.0126L5.30186 17.7255L5.30186 17.7255L5.99477 18.0126ZM5.57676 19.5039L4.83562 19.389L4.83562 19.389L5.57676 19.5039ZM6.49999 20.5L6.49999 21.25L6.49999 21.25L6.49999 20.5ZM12 20.5L12 19.75L12 19.75L12 20.5ZM14.2206 20.5V21.25H15.9364L14.7711 19.9906L14.2206 20.5ZM13.9369 13.5135C13.3074 13.339 12.6559 13.25 12 13.25V14.75C12.5202 14.75 13.0369 14.8206 13.5361 14.959L13.9369 13.5135ZM12 13.25C11.0479 13.25 10.1051 13.4375 9.22553 13.8019L9.79956 15.1877C10.4972 14.8987 11.2449 14.75 12 14.75V13.25ZM9.22553 13.8019C8.34592 14.1662 7.54669 14.7003 6.87346 15.3735L7.93412 16.4341C8.46806 15.9002 9.10193 15.4767 9.79956 15.1877L9.22553 13.8019ZM6.87346 15.3735C6.20024 16.0467 5.66621 16.8459 5.30186 17.7255L6.68768 18.2996C6.97664 17.6019 7.40018 16.9681 7.93412 16.4341L6.87346 15.3735ZM5.30186 17.7255C5.08019 18.2607 4.92397 18.8192 4.83562 19.389L6.3179 19.6189C6.38798 19.167 6.51187 18.724 6.68768 18.2996L5.30186 17.7255ZM4.83562 19.389C4.66829 20.468 5.57096 21.25 6.49999 21.25V19.75C6.42708 19.75 6.37189 19.7201 6.34239 19.6891C6.32848 19.6745 6.32226 19.662 6.31954 19.6538C6.31728 19.647 6.31512 19.6368 6.3179 19.6189L4.83562 19.389ZM6.49999 21.25L12 21.25L12 19.75L6.49999 19.75L6.49999 21.25ZM12 21.25H14.2206V19.75H12V21.25ZM14.7711 19.9906C14.0589 19.221 13.6247 18.1933 13.6247 17.0626H12.1247C12.1247 18.5857 12.7116 19.9735 13.6701 21.0094L14.7711 19.9906ZM13.6247 17.0626C13.6247 16.1699 13.8951 15.3427 14.3584 14.6555L13.1146 13.817C12.4896 14.7442 12.1247 15.8619 12.1247 17.0626H13.6247Z"
//         fill="currentColor"
//       />
//       <path
//         d="M17.9374 14.1504V19.9747"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M19.9967 15.0033L15.8783 19.1217"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M20.8496 17.0626H15.0253"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M19.9966 19.1218L15.8782 15.0034"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <circle cx="17.9066" cy="17.0626" r="2.2579" fill="currentColor" />
//       <circle cx="17.9066" cy="17.0626" r="0.833958" fill="white" />
//     </svg>
//   );
// }

// function Geo_Soln_7({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <circle cx="17.9375" cy="7.79357" r="2.20641" fill="currentColor" />
//       <path
//         d="M2.28503 10C2.28503 9.44771 2.73275 9 3.28503 9H11C11.5523 9 12 9.44772 12 10V22.2188H3.28503C2.73275 22.2188 2.28503 21.771 2.28503 21.2187V10Z"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M12 14H20.715C21.2673 14 21.715 14.4477 21.715 15V21.2187C21.715 21.771 21.2673 22.2187 20.715 22.2187H12V14Z"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M7.14252 9V12"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M16.8575 14V16.7396"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M17.9375 2.89648V1.89648"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M21.2929 4.75008L22 4.04297"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M14.3477 4.75008L13.6406 4.04297"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M19.321 10.0826L18.9054 9.45829L18.6465 9.6306L18.5855 9.93554L19.321 10.0826ZM16.554 10.0826L17.2895 9.93554L17.2285 9.6306L16.9696 9.45829L16.554 10.0826ZM16.8571 11.5981L17.5925 11.451L17.5925 11.451L16.8571 11.5981ZM19.0179 11.5981L18.2825 11.451L18.2825 11.451L19.0179 11.5981ZM19.6875 8C19.6875 8.60765 19.3784 9.14344 18.9054 9.45829L19.7365 10.707C20.6096 10.1259 21.1875 9.13058 21.1875 8H19.6875ZM17.9375 6.25C18.904 6.25 19.6875 7.0335 19.6875 8H21.1875C21.1875 6.20507 19.7324 4.75 17.9375 4.75V6.25ZM16.1875 8C16.1875 7.0335 16.971 6.25 17.9375 6.25V4.75C16.1426 4.75 14.6875 6.20507 14.6875 8H16.1875ZM16.9696 9.45829C16.4966 9.14344 16.1875 8.60766 16.1875 8H14.6875C14.6875 9.13058 15.2654 10.1259 16.1385 10.707L16.9696 9.45829ZM17.5925 11.451L17.2895 9.93554L15.8186 10.2297L16.1217 11.7451L17.5925 11.451ZM17.3474 11.25C17.4666 11.25 17.5692 11.3341 17.5925 11.451L16.1217 11.7451C16.2385 12.3294 16.7516 12.75 17.3474 12.75V11.25ZM18.5276 11.25H17.3474V12.75H18.5276V11.25ZM18.2825 11.451C18.3058 11.3341 18.4084 11.25 18.5276 11.25V12.75C19.1234 12.75 19.6365 12.3294 19.7533 11.7451L18.2825 11.451ZM18.5855 9.93554L18.2825 11.451L19.7533 11.7451L20.0564 10.2297L18.5855 9.93554Z"
//         fill="currentColor"
//       />
//       <path d="M16.9375 9.75H18.9375" stroke={color} strokeLinecap="round" />
//     </svg>
//   );
// }

// function Geo_Soln_8({ color = "black" }) {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M14 7V3C14 2.44772 13.5523 2 13 2H10C9.44772 2 9 2.44772 9 3V7"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <rect
//         x="5"
//         y="7"
//         width="13"
//         height="14"
//         rx="1"
//         stroke={color}
//         strokeWidth="1.5"
//       />
//       <path
//         d="M7 21V22M16 21V22"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <path
//         d="M7.74542 15.3629V11.3629C7.74542 10.8106 8.19314 10.3629 8.74542 10.3629H14.2545C14.8068 10.3629 15.2545 10.8106 15.2545 11.3629V15.5204C15.2545 15.9857 14.8773 16.3629 14.412 16.3629C14.0653 16.3629 13.754 16.5753 13.6276 16.8981L13.3062 17.7183C13.168 18.0711 12.7029 18.148 12.4586 17.8584L11.3463 16.5404C11.2513 16.4279 11.1115 16.3629 10.9642 16.3629H8.74542C8.19314 16.3629 7.74542 15.9152 7.74542 15.3629Z"
//         fill="currentColor"
//         stroke={color}
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />
//       <circle cx="9.5" cy="13.3629" r="0.5" fill="currentColor" />
//       <circle cx="11.5" cy="13.3629" r="0.5" fill="currentColor" />
//       <circle cx="13.5" cy="13.3629" r="0.5" fill="currentColor" />
//     </svg>
//   );
// }

// // cordinate icon
// function CoordinateIcon() {
//   return (
//     <svg
//       className="flex-shrink-0"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M3.5 14.75V14H2V14.75C2 16.1424 2.55312 17.4777 3.53769 18.4623C4.52226 19.4469 5.85761 20 7.25 20H9.5V18.5H7.25C6.25544 18.5 5.30161 18.1049 4.59835 17.4017C3.89509 16.6984 3.5 15.7446 3.5 14.75ZM17 7.25V8H18.5V7.25C18.5 5.85761 17.9469 4.52226 16.9623 3.53769C15.9777 2.55312 14.6424 2 13.25 2H11V3.5H13.25C13.7425 3.5 14.2301 3.597 14.6851 3.78545C15.14 3.97391 15.5534 4.25013 15.9017 4.59835C16.2499 4.94657 16.5261 5.35997 16.7145 5.81494C16.903 6.26991 17 6.75754 17 7.25ZM7.25 7.25H2.75C2.15326 7.25 1.58097 7.48705 1.15901 7.90901C0.737053 8.33097 0.5 8.90326 0.5 9.5V11H2V9.5C2 9.30109 2.07902 9.11032 2.21967 8.96967C2.36032 8.82902 2.55109 8.75 2.75 8.75H7.25C7.44891 8.75 7.63968 8.82902 7.78033 8.96967C7.92098 9.11032 8 9.30109 8 9.5V11H9.5V9.5C9.5 8.90326 9.26295 8.33097 8.84099 7.90901C8.41903 7.48705 7.84674 7.25 7.25 7.25ZM5 6.5C5.59334 6.5 6.17336 6.32405 6.66671 5.99441C7.16006 5.66477 7.54458 5.19623 7.77164 4.64805C7.9987 4.09987 8.05811 3.49667 7.94236 2.91473C7.8266 2.33279 7.54088 1.79824 7.12132 1.37868C6.70176 0.959123 6.16721 0.673401 5.58527 0.557646C5.00333 0.44189 4.40013 0.5013 3.85195 0.728363C3.30377 0.955426 2.83524 1.33994 2.50559 1.83329C2.17595 2.32664 2 2.90666 2 3.5C2 4.29565 2.31607 5.05871 2.87868 5.62132C3.44129 6.18393 4.20435 6.5 5 6.5ZM5 2C5.29667 2 5.58668 2.08797 5.83335 2.2528C6.08003 2.41762 6.27229 2.65189 6.38582 2.92598C6.49935 3.20007 6.52906 3.50167 6.47118 3.79264C6.4133 4.08361 6.27044 4.35088 6.06066 4.56066C5.85088 4.77044 5.58361 4.9133 5.29264 4.97118C5.00166 5.02906 4.70006 4.99935 4.42597 4.88582C4.15189 4.77229 3.91762 4.58003 3.7528 4.33336C3.58797 4.08668 3.5 3.79667 3.5 3.5C3.5 3.10218 3.65804 2.72065 3.93934 2.43934C4.22064 2.15804 4.60218 2 5 2ZM19.25 17.75H14.75C14.1533 17.75 13.581 17.9871 13.159 18.409C12.7371 18.831 12.5 19.4033 12.5 20V21.5H14V20C14 19.8011 14.079 19.6103 14.2197 19.4697C14.3603 19.329 14.5511 19.25 14.75 19.25H19.25C19.4489 19.25 19.6397 19.329 19.7803 19.4697C19.921 19.6103 20 19.8011 20 20V21.5H21.5V20C21.5 19.4033 21.2629 18.831 20.841 18.409C20.419 17.9871 19.8467 17.75 19.25 17.75ZM14 14C14 14.5933 14.1759 15.1734 14.5056 15.6667C14.8352 16.1601 15.3038 16.5446 15.8519 16.7716C16.4001 16.9987 17.0033 17.0581 17.5853 16.9424C18.1672 16.8266 18.7018 16.5409 19.1213 16.1213C19.5409 15.7018 19.8266 15.1672 19.9424 14.5853C20.0581 14.0033 19.9987 13.4001 19.7716 12.852C19.5446 12.3038 19.1601 11.8352 18.6667 11.5056C18.1734 11.1759 17.5933 11 17 11C16.2044 11 15.4413 11.3161 14.8787 11.8787C14.3161 12.4413 14 13.2044 14 14ZM18.5 14C18.5 14.2967 18.412 14.5867 18.2472 14.8334C18.0824 15.08 17.8481 15.2723 17.574 15.3858C17.2999 15.4994 16.9983 15.5291 16.7074 15.4712C16.4164 15.4133 16.1491 15.2704 15.9393 15.0607C15.7296 14.8509 15.5867 14.5836 15.5288 14.2926C15.4709 14.0017 15.5006 13.7001 15.6142 13.426C15.7277 13.1519 15.92 12.9176 16.1666 12.7528C16.4133 12.588 16.7033 12.5 17 12.5C17.3978 12.5 17.7794 12.658 18.0607 12.9393C18.342 13.2206 18.5 13.6022 18.5 14Z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// }
