"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./navbar.style.module.css";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo/croppedlogo.png";
import WhrAIText from "/public/logo/Whr.ai.png";
import DownArrowIcon from "/public/DownSVG.svg";
// import { MagnifyingGlass, ChartBarRandom, LineChart } from 'geist-icons';
import { AIAssistantIcon, APIModelIcon, CoordinateIcon, Geo_Soln_1, Geo_Soln_2, Geo_Soln_3, Geo_Soln_4, Geo_Soln_5, Geo_Soln_6, Geo_Soln_7, Geo_Soln_8, Geo_UseCase_1, Geo_UseCase_10, Geo_UseCase_11, Geo_UseCase_12, Geo_UseCase_13, Geo_UseCase_14, Geo_UseCase_15, Geo_UseCase_2, Geo_UseCase_3, Geo_UseCase_4, Geo_UseCase_5, Geo_UseCase_6, Geo_UseCase_7, Geo_UseCase_8, Geo_UseCase_9, GTM_Soln_1, GTM_Soln_2, GTM_Soln_3, GTM_Soln_4, GTM_Soln_5, GTM_Soln_6, GTM_Soln_7, GTM_UseCase_1, GTM_UseCase_10, GTM_UseCase_11, GTM_UseCase_12, GTM_UseCase_13, GTM_UseCase_14, GTM_UseCase_15, GTM_UseCase_2, GTM_UseCase_3, GTM_UseCase_4, GTM_UseCase_5, GTM_UseCase_6, GTM_UseCase_7, GTM_UseCase_8, GTM_UseCase_9 } from "../../svgicons/icons";
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
          href: "/gtm/solutions/competitor_tracking",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_Soln_1 color="currentColor" />,
        },
        {
          label: "Prospects Mapping",
          href: "/gtm/solutions/prospects_mapping",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_Soln_2 color="currentColor" />,
        },
        {
          label: "Recruitement & DevRel",
          href: "/gtm/solutions/recruitement&devRel",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_Soln_3 color="currentColor" />,
        },
        {
          label: "Brand Building",
          href: "/gtm/solutions/brand_building",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_Soln_4 color="currentColor" />,
        },
        {
          label: "Speaking Opportunity",
          href: "/gtm/solutions/speaking_opportunity",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_Soln_5 color="currentColor" />,
        },
        {
          label: "Product Matching",
          href: "/gtm/solutions/product_matching",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <GTM_Soln_6 color="currentColor" />,
        },
        {
          label: "Exhibit & Sponsor",
          href: "/gtm/solutions/exhibit&sponsor",
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
          href: "/geo/solutions/demand_forecasting",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_Soln_1 color="currentColor" />,
        },
        {
          label: "Risk Identification",
          href: "/geo/solutions/risk_identification",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_Soln_2 color="currentColor" />,
        },
        {
          label: "Geo Marketing",
          href: "/geo/solutions/geo_marketing",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_Soln_3 color="currentColor" />,
        },
        {
          label: "Event Prospecting",
          href: "/geo/solutions/event_prospecting",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_Soln_4 color="currentColor" />,
        },
        {
          label: "Dynamic Pricing",
          href: "/geo/solutions/dynamic_pricing",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_Soln_5 color="currentColor" />,
        },
        {
          label: "Workforce Management",
          href: "/geo/solutions/workforce_management",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_Soln_6 color="currentColor" />,
        },
        {
          label: "Inventory Planning",
          href: "/geo/solutions/inventory_planning",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <Geo_Soln_7 color="currentColor" />,
        },
        {
          label: "Travel Advisory",
          href: "/geo/solutions/travel_advisory",
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
          // icon: <MagnifyingGlass />,
        },
        {
          label: "Smart Tracker",
          href: "/geo/product2",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          // icon: <LineChart />,
        },
        {
          label: "AI Assistant",
          href: "/geo/product2",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          icon: <AIAssistantIcon color="currentColor"/>,
        },
        {
          label: "Trends Monitor",
          href: "/geo/product2",
          subText:
            "Quickly achieve a minimum 10% improvement in forecast accuracy",
          // icon: <ChartBarRandom />,
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
          icon: <APIModelIcon color="currentColor"/>,
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

