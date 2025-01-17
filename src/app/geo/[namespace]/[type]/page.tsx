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

const page = () => {
  const pathname = usePathname();
  const endpoint = pathname.split("/").pop()?.toLowerCase();

  const usecaseData = geoUsecasesjsonData.find((item) => {
    return item.id.toLowerCase() === endpoint;
  });

  // Fallback data if no match is found
  const defaultData = {
    image: geoUsecasesjsonData[0].image,
    text: "Default Item",
    subtext: "Default Description",
  };

  const dataToDisplay: any = usecaseData || defaultData;

  console.log("Endpoint:", endpoint, dataToDisplay);

  return (
    <div className="relative w-full flex flex-col gap-12 ">
      {pathname.split("/")[2] === "usecases" ?
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
        </div> :
        <div className="w-full flex items-center justify-center mt-[140px]"><Section /></div>}
      <div>
        <ProblemSolution />
      </div>
      {pathname.split("/")[2] === "solutions" ? <div className="min-h-[580px]">
        <Scroll />
      </div>
        :
        <div className="w-full flex items-center justify-center">
          <UsecaseScroll />
        </div>
      }
      <div className="mb-5">
        <VerticalScroll mainHeading={pathname.split("/")[2] === "usecases" ? "SOLUTIONS" : "USE CASES"} />
      </div>
    </div>
  );
};

export default page;
