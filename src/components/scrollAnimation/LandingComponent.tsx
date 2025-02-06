"use client"
import React from "react";
import DemandImg from "/public/demandforecasting.svg";
import SparkleImg from "/public/sparkle.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { geoSolutionsjsonData } from "../../../data/geoSolutionsData";
import { gtmSolutionsjsonData } from "../../../data/gtmSolutionsdata";
import Lottie from "lottie-react";

const LandingComponent = () => {
  const pathname = usePathname();
  let dataSource = null;
  if (pathname.includes("/geo/solutions")) {
    dataSource = geoSolutionsjsonData;
  } else if (pathname.includes("/gtm/solutions")) {
    dataSource = gtmSolutionsjsonData;
  }
  console.log("data is ", dataSource)
  const endpoint = pathname.split("/").pop()?.toLowerCase();
  console.log("endpoint is", endpoint)

  const usecaseData = dataSource?.find((item) => {
    return item.id.toLowerCase() === endpoint;
  });
  console.log("usecase is ", usecaseData)
  const defaultData: any = {
    image: dataSource?.[0]?.image || "",
    problem: "Default Problem",
    solution: "Default Solution",
  };

  const dataToDisplay = usecaseData || defaultData;

  const points = dataToDisplay.how.split("\n");

  return (
    <div className="rounded-[20px] border border-[var(--border-color)] w-[87%] flex flex-col items-center gap-10 px-[70px] py-[40px] relative overflow-hidden">
      {/* Background Radial Gradient */}
      <div
        className="absolute right-[-40%] top-0 h-full w-full -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(229, 221, 252, 0.6) 0%, transparent 92%)",
        }}
      ></div>
      <div className="flex items-center justify-between w-full">
        <Image src={SparkleImg} alt="star" height={38} width={38} />
        <div className="text-sm font-medium border border-color rounded-xl py-1 px-7">
          How are we helpful
        </div>
        <Image src={SparkleImg} alt="star" height={38} width={38} />
      </div>

      <div className="flex items-center gap-10">
        <div className="flex flex-col gap-5 text-lg w-[60%]">
          <div className="mt-2">
            {points.map((point: string, index: number) => (
              <p key={index}>{point}</p>
            ))}
          </div>
        </div>        
        <div className="w-[507px] h-[263px]">
        <Lottie animationData={dataToDisplay.image} style={{ width: '100%', height: '100%' }}/>
      </div>
      </div>
    </div>
  );
};

export default LandingComponent;
