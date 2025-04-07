"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  icon: any;
  // icon: React.ReactNode;
  heading: string;
  subHeading: string;
  href: string;
}

const DataCard = ({ icon, heading, subHeading, href }: Props) => {
  const [iconSize, setIconSize] = useState({ width: "62", height: "62" });

  useEffect(() => {
    const updateIconSize = () => {
      if (window.innerWidth <= 490) {
        setIconSize({ width: "24", height: "24" });
      } else if (window.innerWidth <= 790) {
        setIconSize({ width: "40", height: "40" });
      } else {
        setIconSize({ width: "62", height: "62" });
      }
    };

    updateIconSize(); // Run on initial load
    window.addEventListener("resize", updateIconSize); // Listen for resize events

    return () => window.removeEventListener("resize", updateIconSize); // Cleanup
  }, []);

  const router = useRouter();
  const handleRouting = () => {
    router.push(href);
  };

  return (
    // <motion.div
    //   initial={{ opacity: 0 }} // Use opacity for the initial animation
    //   whileInView={{ opacity: 1 }}
    //   viewport={{ once: false, amount: 0.5 }}
    //   transition={{ duration: 0.4, delay: .1 }} // Control other animations (like opacity)
    //   className="rounded-[20px] cursor-pointer border border-[var(--border-color)] p-5 shadow-md h-[166px] w-[527px] flex items-center justify-center gap-5 max-[1250px]:w-[400px] max-[1000px]:w-[300px] max-[790px]:w-[200px] max-[790px]:flex-col max-[600px]:w-[150px]"
    //   style={{
    //     backgroundColor: "white", // Default color
    //   }}
    //   onClick={handleRouting}
    // >
    //   <div> {React.cloneElement(icon, { width: iconSize.width, height: iconSize.height})}</div>
    //   <div className='flex flex-col gap-2 text-[#010D3E]'>
    //     <div className='text-[18px] font-semibold max-[790px]:text-center max-[600px]:text-[12px]'>{heading}</div>
    //     <div className="line-clamp-2 max-[790px]:hidden">{subHeading}</div>
    //   </div>
    // </motion.div>

    // <motion.div
    //   initial={{ opacity: 0 }}
    //   whileInView={{ opacity: 1 }}
    //   viewport={{ once: false, amount: 0.5 }}
    //   transition={{ duration: 0.4, delay: 0.1 }}
    //   className="rounded-[20px] cursor-pointer border border-[var(--border-color)] p-5 shadow-md h-[166px] w-[527px] flex items-center gap-5 max-[1250px]:w-[400px] max-[1000px]:w-[300px] max-[790px]:w-[200px] max-[790px]:flex-col max-[600px]:w-[150px] relative"
    //   style={{ backgroundColor: "white" }}
    //   onClick={handleRouting}
    // >
    //   <div>
    //     {React.cloneElement(icon, {
    //       width: iconSize.width,
    //       height: iconSize.height,
    //     })}
    //   </div>
    //   <div className="absolute right-5 hidden max-[790px]:block">
    //     <ArrowSvg />
    //   </div>

    //   <div className="flex flex-col gap-2 text-[#010D3E] w-full">
    //     <div className="flex items-center justify-between">
    //       <span className="text-[18px] font-semibold max-[790px]:text-center max-[600px]:text-[12px]">
    //         {heading}
    //       </span>
    //       <div className="max-[790px]:hidden">
    //         <ArrowSvg />
    //       </div>
    //     </div>

    //     <div className="line-clamp-2 max-[790px]:hidden">{subHeading}</div>
    //   </div>
    // </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className={`${subHeading.length<120?'min-h-[166px] items-center':""} max-[790px]:h-[166px] rounded-[20px] cursor-pointer border border-[var(--border-color)] p-5 shadow-md  w-[527px] flex max-[790px]:items-center gap-5 max-[1250px]:w-[400px] max-[1000px]:w-[300px] max-[790px]:w-[200px] max-[790px]:flex-col max-[600px]:w-[150px] relative`}
      style={{ backgroundColor: "white" }}
      onClick={handleRouting}
    >
      <div>
        {React.cloneElement(icon, {
          width: iconSize.width,
          height: iconSize.height,
        })}
      </div>
      <div className="absolute right-5 hidden max-[790px]:block">
        <ArrowSvg />
      </div>

      <div className="flex flex-col gap-2 text-[#010D3E] w-full">
        <div className="flex items-center justify-between">
          <span className="text-[18px] font-semibold max-[790px]:text-center max-[600px]:text-[12px]">
            {heading}
          </span>
          <div className="max-[790px]:hidden">
            <ArrowSvg />
          </div>
        </div>

        <div className="max-[790px]:hidden">{subHeading}</div>
      </div>
    </motion.div>
  );
};

export default DataCard;

const ArrowSvg = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.428571"
        y="0.428571"
        width="23.1429"
        height="23.1429"
        rx="11.5714"
        fill="white"
      />
      <rect
        x="0.428571"
        y="0.428571"
        width="23.1429"
        height="23.1429"
        rx="11.5714"
        stroke="#6750A4"
        strokeWidth="0.857143"
      />
      <path
        d="M16.0189 7.9808L9.31998 7.9808L9.31998 8.92535L14.4011 8.9287L7.64525 15.6845L8.31514 16.3544L15.071 9.59859L15.0743 14.6797L16.0189 14.6797L16.0189 7.9808Z"
        fill="#6750A4"
      />
    </svg>
  );
};
