import React from "react";
import DemandImg from "/public/demandforecasting.svg";
import Image from "next/image";
import Lottie from "lottie-react";

interface Props {
  heading: string;
  subHeading: string;
  image: any;
}

const HeroBanner = ({ heading, subHeading, image }: Props) => {
  return (
    <div className="w-full flex justify-between items-start">
      <div className="flex flex-col gap-5 w-[40%]">
        <div className="font-semibold text-[40px]">{heading}</div>
        <div className="text-[var(--secondary-text-color)] text-[18px]">
          {subHeading}
        </div>
      </div>
      <div className="w-[507px] h-[263px]">
        <Lottie animationData={image} style={{ width: '100%', height: '100%' }}/>
      </div>
    </div>
  );
};

export default HeroBanner;
