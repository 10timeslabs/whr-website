"use client";
import React from "react";
import BannerImage from "/public/GeoUsecasesBanners/geo_usecase_hotel&lodging_cropped.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gtmUsecasesjsonData } from "../../../../../data/gtmUsecasesData";

const page = () => {
  const pathname = usePathname();
  const endpoint = pathname.split("/").pop()?.toLowerCase();

  const usecaseData = gtmUsecasesjsonData.find((item) => {
    return item.id.toLowerCase() === endpoint;
  });

  // Fallback data if no match is found
  const defaultData = {
    image: gtmUsecasesjsonData[0].image,
    text: "Default Item",
    subtext: "Default Description",
  };

  const dataToDisplay: any = usecaseData || defaultData;

  console.log("Endpoint:", endpoint, dataToDisplay);

  return (
    <div className="relative w-full h-screen ">
      <Image
        src={dataToDisplay.image}
        alt="Banner Image"
        className="h-[650px] w-full object-cover"
      />

      {/* Blurry Background */}
      <div
        className="absolute left-0 top-0 h-[650px] w-[700px] p-6 rounded-r-md"
        // style={{
        //   opacity: "0.9",
        //   background:
        //     "linear-gradient(180deg, rgba(141, 223, 3, 0.20) 11.3%, rgba(228, 215, 190, 0.20) 52.44%)",
        //   filter: "blur(100px)",
        //   backdropFilter: "blur(50px)",
        //   maskImage:
        //     "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 30%)",
        // }}

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
      <div>Below Section</div>
    </div>
  );
};

export default page;
