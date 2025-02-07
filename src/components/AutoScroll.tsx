"use client"
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  icons: StaticImageData[],
  size: string;
}

const AutoScroll = ({ icons, size }: Props) => {
  const [imageWidth, setImageWidth] = useState(size === "small" ? 150 : 300);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 421 && size !== "small") {
        setImageWidth(200);
      } else {
        setImageWidth(size === "small" ? 150 : 300);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Scrolling container */}
      <div className="flex w-full animate-scroll gap-8">
        {/* Render icons twice for seamless looping */}
        {[...icons, ...icons, ...icons].map((icon, index) => (
          <div key={index} className="flex-shrink-0 ">
            <Image
              src={icon}
              alt={`Icon ${index}`}
              layout="intrinsic"
              width={imageWidth}
              height={size === "small" ? 80 : 100}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[rgba(255,255,255,1)] via-[rgba(255,255,255,0)] to-[rgba(255,255,255,1)]"></div>
    </div>
  );
};

export default AutoScroll;
