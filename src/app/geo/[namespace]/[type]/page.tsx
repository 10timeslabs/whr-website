"use client";
import React from "react";
import BannerImage from "/public/GeoUsecasesBanners/geo_usecase_hotel&lodging_cropped.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { geoUsecasesjsonData } from "../../../../../data/geoUsecasesData";
import ProblemSolution from "@/components/problemSolution/ProblemSolution";
import Scroll from "@/components/scrollAnimation/Scroll";
import VerticalScroll from "@/components/verticalScrollAnimation/VerticalScroll";
import UsecaseScroll from "@/components/usecaseScrollAnimation/UsecaseScroll";
import HeroBanner from "@/components/solutionHeroBanner/HeroBanner";
import Section from "@/components/solutionHeroBanner/Section";
import LandingComponent from "@/components/scrollAnimation/LandingComponent";
import AutoScroll from "@/components/AutoScroll";
import { geoSolutionsjsonData } from "../../../../../data/geoSolutionsData";
import { gtmUsecasesjsonData } from "../../../../../data/gtmUsecasesData";
import { gtmSolutionsjsonData } from "../../../../../data/gtmSolutionsdata";
import CircleAnimation from "@/components/circleAnimation/CircleAnimation";
import CircleContainer from "@/components/circleAnimation/CircleContainer";
import ProductsCarousel from "@/components/ProductSection/ProductsCarousel";
import { companyLogos } from "../../../../../data/companyLogoData";
import GridImage from "/public/herosection_grid.png";
import HelpfulContainer from "@/components/ProductSection/HelpfulContainer";
import BeniftsSection from "@/components/ProductSection/BeniftsSection";
import Conclusion from "@/components/ProductSection/Conclusion";

const page = () => {
  const pathname = usePathname();

  let dataSource = null;
  if (pathname.includes("/geo/solutions")) {
    dataSource = geoSolutionsjsonData;
  } else if (pathname.includes("/geo/usecases")) {
    dataSource = geoUsecasesjsonData;
  } else if (pathname.includes("/gtm/usecases")) {
    dataSource = gtmUsecasesjsonData;
  } else if (pathname.includes("/gtm/solutions")) {
    dataSource = gtmSolutionsjsonData;
  }

  const endpoint = pathname.split("/").pop()?.toLowerCase();

  const usecaseData = dataSource?.find((item) => {
    return item.id.toLowerCase() === endpoint;
  });

  const defaultData = {
    image: dataSource?.[0]?.image || "",
    problem: "Default Problem",
    solution: "Default Solution",
  };

  const dataToDisplay: any = usecaseData || defaultData;
  console.log("Endpoint:__", endpoint, dataToDisplay);
  return (
    <div
      className="relative w-full flex flex-col gap-12 "
      style={{ paddingTop: pathname.split("/")[2] === "product" || pathname.split("/")[2] === "solutions" ? 140 : 0 }}
    >
      {pathname.split("/")[2] === "product" && (
        <>
          <Image
            src={GridImage}
            alt="grid"
            className="absolute top-0 -z-[10]"
          />
          <div className="h-[100px] w-full absolute top-0 bg-gradient-to-b from-[rgba(165,184,198,0.2)] to-[rgba(132,168,204,0)]"></div>
        </>
      )}
      {pathname.split("/")[2] === "usecases" ? (
        <div className="w-full">
          {/* For Screens ≤ 898px - Text Above, Image Below */}
          <div className="max-[898px]:flex flex-col hidden mt-20 relative">
            {/* Container with Gradient */}
            <div
              className="w-full p-6 rounded-r-md relative"
              style={{
                opacity: "0.9",
                background: `${dataToDisplay.blurColor}`,
                backdropFilter: "blur(50px)",
              }}
            >
              {/* Text Content */}
              <div className="w-[60%]">
                <div className="text-black font-bold text-[28px] leading-[34px] z-30">
                  {dataToDisplay.text}
                </div>
                <div className="text-black text-sm leading-5 mt-4 z-300">
                  <p>{dataToDisplay.subtext}</p>
                </div>
              </div>
            </div>

            {/* Image Below Text on Small Screens */}
            <div className="w-full">
              <Image
                src={dataToDisplay.image}
                alt="Banner Image"
                className="w-full max-h-[650px] object-cover"
              />
            </div>
          </div>

          <div className="min-[899px]:block hidden w-full">
            {/* Background Image */}
            <Image
              src={dataToDisplay.image}
              alt="Banner Image"
              className="h-[450px] md:h-[650px] w-full object-cover"
            />

            {/* Blurry Background */}
            <div
              className="absolute left-0 top-0 h-[450px] md:h-[650px] w-full md:w-[700px] p-6 rounded-r-md"
              style={{
                opacity: "0.9",
                background: `${dataToDisplay.blurColor}`,
                filter: "blur(100px)",
                backdropFilter: "blur(50px)",
                maskImage:
                  "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 30%)",
              }}
            />

            {/* Text Content */}
            <div className="absolute left-5 md:left-[100px] top-10 h-auto max-w-[90%] md:max-w-[40%] p-4 md:p-6 rounded-r-md flex flex-col">
              {/* Main Text */}
              <div className="text-black font-bold text-[28px] md:text-[40px] mt-20 md:mt-32 leading-[34px] md:leading-[46px] break-words">
                {dataToDisplay.text}
              </div>

              {/* Subtext */}
              <div className="text-[#171717] text-sm md:text-lg leading-5 md:leading-6 mt-4 text-wrap break-words">
                <p>{dataToDisplay.subtext}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (pathname.split("/")[2] === "solutions" || pathname.includes("/geo/product")) && (
        <div className="w-full flex items-center justify-center">
          <Section />
        </div>
      
      )}
      {pathname.split("/")[2] !== "solutions" && (
        <div className="flex flex-col gap-10 items-center mt-12 ">
          <div className="text-sm font-medium border border-color rounded-xl py-1 px-7">
            CUSTOMERS
          </div>
          <AutoScroll icons={companyLogos} size="small" />
        </div>
      )}
      <div className="w-full flex justify-center">
        <ProblemSolution />
      </div>
      {pathname.split("/")[2] === "product" && (
        <div className="w-full flex items-center justify-center mt-10">
          <HelpfulContainer />
        </div>
      )}
      {pathname.split("/")[2] === "product" && (
        <div className="w-full flex items-center justify-center mt-10">
          <BeniftsSection />
        </div>
      )}
      {pathname.split("/")[2] === "product" && (
        <div className="w-full flex items-center justify-center">
          <Conclusion
            // heading="Make Search Smart"
            // subheading="Go beyond basic lists and power your event strategy with deeper intel."
          />
        </div>
      )}
      {pathname.split("/")[2] === "solutions" ? (
        <div className="">
          {/* <Scroll /> */}
          <div className="w-full flex items-center justify-center">
            <LandingComponent />
          </div>
        </div>
      ) : (
        pathname.split("/")[2] === "usecases" && (
          <div className="w-full flex items-center justify-center">
            {/* <LandingComponent /> */}
            <Scroll />
          </div>
        )
      )}
      {(pathname.split("/")[2] === "solutions" ||
        pathname.split("/")[2] === "usecases") && (
        <div className="mb-5 w-full flex items-center justify-center">
          <VerticalScroll
            mainHeading={
              pathname.split("/")[2] === "usecases" ? "SOLUTIONS" : "USE CASES"
            }
            dataToDisplay={dataToDisplay}
          />
        </div>
      )}
      <CircleContainer />
      <div>
        <ProductsCarousel />
      </div>
    </div>
  );
};

export default page;
