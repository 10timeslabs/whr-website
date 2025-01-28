import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props{
  icons : StaticImageData[],
  size : string;
}

const AutoScroll = ({icons, size} : Props) => {

  return (
    <div className="relative w-full h-32 overflow-hidd">
      {/* Scrolling container */}
      <div className="flex w-full animate-scroll gap-8">
        {/* Render icons twice for seamless looping */}
        {[...icons, ...icons, ...icons].map((icon, index) => (
          <div key={index} className="flex-shrink-0 ">
            <Image
              src={icon}
              alt={`Icon ${index}`}
              layout="intrinsic"
              width={size === "small" ? 100 : 300}
              height={size === "small" ? 50 : 100}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[rgba(255,255,255,1)] via-[rgba(255,255,255,0)] to-[rgba(255,255,255,1)]"></div>
    </div>
  );
};

export default AutoScroll;
