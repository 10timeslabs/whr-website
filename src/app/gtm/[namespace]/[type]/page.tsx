"use client";
import React from "react";
import BannerImage from "/public/GeoUsecasesBanners/geo_usecase_hotel&lodging_cropped.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gtmUsecasesjsonData } from "../../../../../data/gtmUsecasesData";
import Section from "@/components/solutionHeroBanner/Section";
import ProblemSolution from "@/components/problemSolution/ProblemSolution";
import LandingComponent from "@/components/scrollAnimation/LandingComponent";
import Scroll from "@/components/scrollAnimation/Scroll";
import VerticalScroll from "@/components/verticalScrollAnimation/VerticalScroll";
import AutoScroll from "@/components/AutoScroll";
import { geoSolutionsjsonData } from "../../../../../data/geoSolutionsData";
import { geoUsecasesjsonData } from "../../../../../data/geoUsecasesData";
import { gtmSolutionsjsonData } from "../../../../../data/gtmSolutionsdata";
import { companyLogos } from "../../../../../data/companyLogoData";

const page = () => {
  const pathname = usePathname();
  // const endpoint = pathname.split("/").pop()?.toLowerCase();

  // const usecaseData = gtmUsecasesjsonData.find((item) => {
  //   return item.id.toLowerCase() === endpoint;
  // });

  // // Fallback data if no match is found
  // const defaultData = {
  //   image: gtmUsecasesjsonData[0].image,
  //   text: "Default Item",
  //   subtext: "Default Description",
  // };

  // const dataToDisplay: any = usecaseData || defaultData;
  let dataSource = null;
  if (pathname.includes("/geo/solutions")) {
    dataSource = geoSolutionsjsonData;
  } else if (pathname.includes("/geo/usecases")) {
    dataSource = geoUsecasesjsonData;
  }else if(pathname.includes("/gtm/usecases")){
    dataSource = gtmUsecasesjsonData
  }else if(pathname.includes("/gtm/solutions")){
    dataSource = gtmSolutionsjsonData
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

  const dataToDisplay:any = usecaseData || defaultData;
  console.log("Endpoint:__", endpoint, dataToDisplay);

  return (
    <div className="relative w-full flex flex-col gap-12 ">
      {pathname.split("/")[2] === "usecases" ? (
        // <div>
        //   <Image
        //     src={dataToDisplay.image}
        //     alt="Banner Image"
        //     className="h-[650px] w-full object-cover"
        //   />
        //   {/* Blurry Background */}
        //   <div
        //     className="absolute left-0 top-0 h-[650px] w-[700px] p-6 rounded-r-md"
        //     style={{
        //       opacity: "0.9",
        //       background: `${dataToDisplay.blurColor}`,
        //       filter: "blur(100px)",
        //       backdropFilter: "blur(50px)",
        //       maskImage:
        //         "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 30%)",
        //     }}
        //   />
        //   {/* Text Content */}
        //   <div className="absolute left-[100px] top-10 h-[570px] w-[40%] p-6 rounded-r-md flex flex-col ">
        //     {/* Main Text */}
        //     <div className="text-black font-bold text-[40px] mt-32 leading-[46px]">
        //       {dataToDisplay.text}
        //     </div>

        //     {/* Subtext */}
        //     <div className="text-[#171717] text-lg leading-6 mt-4">
        //       <p>{dataToDisplay.subtext}</p>
        //     </div>
        //   </div>
        //   <div className="mt-16"><AutoScroll icons={companyLogos} size="small"/></div>
        // </div>
        <div className="relative w-full">
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

        {/* AutoScroll Section */}
        <div className="mt-10 md:mt-16">
          <AutoScroll icons={companyLogos} size="small" />
        </div>
      </div>
      ) : (
        <div className="w-full flex items-center justify-center mt-[140px]">
          <Section />
        </div>
      )}
      <div>
        <ProblemSolution />
      </div>
      {pathname.split("/")[2] === "solutions" ? (
        <div className="min-h-[580px]">
          {/* <Scroll /> */}
          <div className="w-full flex items-center justify-center">
            <LandingComponent />
          </div>
        </div>
      ) : (
        <div className="w-full flex items-center justify-center">
          {/* <LandingComponent /> */}
          <Scroll />
        </div>
      )}
      {/* <div className="mb-5">
        <VerticalScroll
          mainHeading={
            pathname.split("/")[2] === "usecases" ? "SOLUTIONS" : "USE CASES"
          }
        />
      </div> */}
       <div className="mb-5">
        <VerticalScroll
          mainHeading={
            pathname.split("/")[2] === "usecases" ? "SOLUTIONS" : "USE CASES"
          }
          dataToDisplay={dataToDisplay}
        />
      </div>
    </div>
  );
};

export default page;
