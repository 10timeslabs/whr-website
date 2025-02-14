"use client";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  icons: StaticImageData[];
  size: string;
}

const AutoScroll = ({ icons, size }: Props) => {
  const [imageWidth, setImageWidth] = useState(size === "small" ? 150 : 300);
  const [animationDuration, setAnimationDuration] = useState("20s"); // Default speed

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      // Adjust image width dynamically
      if (screenWidth <= 421 && size !== "small") {
        setImageWidth(200);
      } else {
        setImageWidth(size === "small" ? 150 : 300);
      }

      // Adjust animation speed based on screen size
      const imagesPerRow = Math.floor(screenWidth / imageWidth);
      const duration = Math.max(40, imagesPerRow * 2); // Adjust timing dynamically
      setAnimationDuration(`${duration}s`);
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size, imageWidth]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Scrolling container */}
      <div
        className="flex w-max animate-scroll gap-8 items-center"
        style={{ animationDuration }}
      >
        {/* Render icons multiple times for seamless looping */}
        {[...icons, ...icons, ...icons].map((icon, index) => (
          <div key={index} className="flex-shrink-0">
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

      {/* Fade effect on edges */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[rgba(255,255,255,1)] via-[rgba(255,255,255,0)] to-[rgba(255,255,255,1)]"></div>

      {/* CSS for smooth infinite scrolling */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AutoScroll;
