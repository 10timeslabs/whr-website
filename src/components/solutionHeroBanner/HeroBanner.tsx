import React from "react";
import Lottie from "lottie-react";
import { usePathname } from "next/navigation"
import Image from "next/image";

interface Props {
  heading: string;
  subHeading: string;
  image: any;
}

const HeroBanner = ({ heading, subHeading, image }: Props) => {
    const pathname = usePathname();
  return (
    <div className="w-full flex justify-between items-start max-[550px]:flex-col max-[550px]:items-center max-[550px]:gap-2">
      <div className="flex flex-col gap-5 w-[40%] max-[550px]:w-full">
        <div className="font-semibold text-[40px] max-[775px]:text-[28px]">{heading}</div>
        <div className="text-[var(--secondary-text-color)] text-[18px] max-[775px]:text-[14px]">
          {subHeading}
        </div>
      </div>
      {pathname.includes("/geo/product") ?<Image src={image} alt="img" width={500}/> :<div className="h-[260px] max-[775px]:h-[200px]">
        <Lottie animationData={image} style={{ width: '100%', height: '100%' }}/>
      </div> }
      
    </div>
  );
};

export default HeroBanner;
