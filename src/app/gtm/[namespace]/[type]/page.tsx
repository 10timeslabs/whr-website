"use client";
import React from "react";
import GridImage from '/public/herosection_grid.png'
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
import CircleContainer from "@/components/circleAnimation/CircleContainer";
import ProductsCarousel from "@/components/ProductSection/ProductsCarousel";
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
    dataSource = gtmUsecasesjsonData
  } else if (pathname.includes("/gtm/solutions")) {
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

  const dataToDisplay: any = usecaseData || defaultData;
  console.log("Endpoint:__", endpoint, dataToDisplay);

  return (
    <div className="relative w-full flex flex-col gap-12 " style={{ paddingTop: pathname.split("/")[2] === "product" ? 120 : 0 }} >
      {pathname.split("/")[2] === "product" &&
        <>
          <Image src={GridImage} alt="grid" className="absolute top-0 -z-[10]" />
          <div className="h-[100px] w-full absolute top-0 bg-gradient-to-b from-[rgba(165,184,198,0.2)] to-[rgba(132,168,204,0)]"></div>
        </>
      }
      {(pathname.split("/")[2] === "usecases") ? (
        <div>
          <Image
            src={dataToDisplay.image}
            alt="Banner Image"
            className="h-[650px] w-full object-cover"
          />
          {/* Blurry Background */}
          <div
            className="absolute left-0 top-0 h-[650px] w-[700px] p-6 rounded-r-md"
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
          <div className="absolute left-[100px] top-10 h-[570px] w-[40%] p-6 rounded-r-md flex flex-col ">
            {/* Main Text */}
            <div className="text-black font-bold text-[40px] mt-32 leading-[46px]">
              {dataToDisplay.text}
            </div>

            {/* Subtext */}
            <div className="text-[#171717] text-lg leading-6 mt-4">
              <p>{dataToDisplay.subtext}</p>
            </div>
          </div>
        </div>
      ) : (
        pathname.split("/")[2] === "solutions" &&
        <div className="w-full flex items-center justify-center mt-[140px]">
          <Section />
        </div>
      )}
      {pathname.split("/")[2] !== "solutions" &&
        <div className="flex flex-col gap-10 items-center mt-12 ">
          <div className="text-sm font-medium border border-color rounded-xl py-1 px-7">CUSTOMERS USING WHR</div>
          <AutoScroll icons={companyLogos} size="small" />
        </div>}

      <div className="w-full flex justify-center">
        <ProblemSolution />
      </div>
      {pathname.split("/")[2] === "product" &&
        <div className="w-full flex items-center justify-center mt-10"><HelpfulContainer /></div>
      }
      {pathname.split("/")[2] === "product" &&
        <div className="w-full flex items-center justify-center mt-10"><BeniftsSection /></div>
      }
      {pathname.split("/")[2] === "product" &&
        <div className="w-full flex items-center justify-center">
          <Conclusion heading="Make Search Smart" subheading="Go beyond basic lists and power your event strategy with deeper intel."/>
        </div>
      }
      {pathname.split("/")[2] === "solutions" ? (
        <div className="min-h-[580px]">
          {/* <Scroll /> */}
          <div className="w-full flex items-center justify-center">
            <LandingComponent />
          </div>
        </div>
      ) : (
        pathname.split("/")[2] === "usecases" && <div className="w-full flex items-center justify-center">
          {/* <LandingComponent /> */}
          <Scroll />
        </div>
      )}
      {(pathname.split("/")[2] === "solutions" || pathname.split("/")[2] === "usecases") && <div className="mb-5">
        <VerticalScroll
          mainHeading={
            pathname.split("/")[2] === "usecases" ? "SOLUTIONS" : "USE CASES"
          }
          dataToDisplay={dataToDisplay}
        />
      </div>}
      <CircleContainer />
      <div>
        <ProductsCarousel />
      </div>
    </div>
  );
};

export default page;
