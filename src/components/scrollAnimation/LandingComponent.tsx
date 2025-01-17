import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowImgTwo from '/public/Arrow-2.svg'
import ArrowImgOne from '/public/Arrow-1.svg'
import { div } from "framer-motion/client";

interface Props {
  image: StaticImageData;
}

const LandingComponent = ({image }: Props) => {

  return (
    <div className="h-[580px] flex flex-col items-center relative w-full overflow-hidden">
      <div
        className="flex flex-col items-center gap-4 justify-start w-full text-center h-[580px] absolute z-20"
      >
        <div className="rounded-lg border border-black p-2 mt-[60px]">How we are helpful</div>
        <div className="font-semibold text-[40px] w-[40%]">
          Geo Provides Unique Features To Unlock On ground Demand
        </div>
        <Image src={ArrowImgOne} alt="arrow" />
      </div> 
      <div
        className="absolute z-10 bottom-[-200px]"
        style={{ // initial position, ensures it starts from below
          width: '600px',    // with specific dimensions
          height: '450px'    // same for height
        }}
      >
        <Image
          src={image}
          alt="img"
          width={600}
          height={450}
          // fill
          unoptimized
   
        />
      </div>
    </div>
  );
};

export default LandingComponent;
