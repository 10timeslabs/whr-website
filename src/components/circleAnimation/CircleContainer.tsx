// "use client"
// import React, { useCallback, useEffect, useRef, useState } from 'react'
// import Image from 'next/image'
// import SparkleImg from "/public/sparkle.png";
// import CircleAnimation from './CircleAnimation';
// import { Typewriter } from "react-simple-typewriter";
// import { motion } from 'framer-motion';
// import { usePathname } from 'next/navigation';
// // import "react-simple-typewriter/dist/index.css";

// const CircleContainer = () => {

//   const data = [
//     { heading: "Reliable Data", subheading: "Go beyond scraping – access trustworthy, actionable insights." },
//     { heading: "Multi-Lingual Resolution", subheading: "Break barriers with insights across languages." },
//     { heading: "Spam Check", subheading: "Eliminate noise and focus on what truly matters." },
//     { heading: "Rating & Sorting", subheading: "Prioritize what matters with smart ratings and sorting." },
//     { heading: "Enrichment", subheading: "Add depth and value to your data for sharper insights." },
//     { heading: "Access Hidden & Private Events", subheading: "Unlock exclusive opportunities and stay ahead of the curve." },
//     { heading: "Duplicate Mapping", subheading: "Seamlessly identify and remove redundant entries." },
//     { heading: "15 Years of Data Intelligence", subheading: "Decades of expertise powering smarter decisions." },
//     { heading: "Fake & Scam Check", subheading: "Protect your decisions with verified, authentic data." },

//   ]
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [typing, setTyping] = useState(true);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);
//   const pathName = usePathname()
//   const startAutoRotation = useCallback(() => {
//     if (intervalRef.current) clearInterval(intervalRef.current);

//     intervalRef.current = setInterval(() => {
//       setTyping(false);
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//         setTyping(true);
//       }, 0);
//     }, 4000);
//   }, [data.length]);

//   useEffect(() => {
//     startAutoRotation();
//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//         intervalRef.current = null; // Ensure ref is reset
//       }
//     };
//   }, [startAutoRotation]);

//   // **Handle Click Event**
//   const handleClick = useCallback((clickedIndex: number) => {
//     setCurrentIndex((9 - clickedIndex) % 9);
//     startAutoRotation(); // Restart Timer
//   }, [startAutoRotation]);
//   const currentData = data[currentIndex];
  
//   return (
//     <div className="h-[580px] w-full overflow-hidden flex justify-center max-[1325px]:h-[540px] max-[775px]:h-[550px]">
//       <div className='w-[87%] border border-[var(--border-color)] relative rounded-xl h-full items-center  overflow-hidden flex flex-col justify-start '>
//         <div
//           className="absolute right-0 top-[-150px] h-[600px] w-full -z-10"
//           style={{
//             background: `
//             radial-gradient(circle, rgba(229, 221, 252, 0.6) 0%, transparent 30%)`,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         ></div>

//         <div className="text-sm font-medium border border-color rounded-xl py-1 px-7 mt-10">
//           WHY CHOOSE US
//         </div>
//         {/* Progress bar */}
//         <div className="flex gap-2 mt-10 max-[400px]:gap-1">
//             {Array.from({ length: 9 }).map((_, index) => (
//                 <div
//                     key={index}
//                     className={`h-2 w-10 rounded-lg transition-all duration-300 ${
//                         index <= currentIndex ? "bg-[#6750a4]" : "bg-gray-300"
//                     } max-[540px]:w-7 max-[400px]:h-1 `}
//                 />
//             ))}
//         </div>

//         <div className="w-[70%] flex items-start justify-between mt-5 max-[775px]:w-full max-[775px]:justify-center max-[550px]:w-[90%]">
//           <Image src={SparkleImg} alt="star" height={38} width={38} className='max-[775px]:hidden' />
//           <div className='text-center'>

//             <motion.div
//               key={currentIndex} // Ensure framer-motion correctly animates changes
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{
//                 duration: 0.8,      // Duration for fade in and fade out
//                 ease: "easeOut"     // Easing for smooth transition
//               }}
//               className="font-semibold text-[40px] max-[775px]:text-[28px] max-[550px]:text-[24px]"
//             >
//               {typing ? (
//                 <Typewriter
//                   words={[currentData.heading]}
//                   typeSpeed={30}
//                   cursor={false}
//                 />
//               ) : (
//                 ""
//               )}
//             </motion.div>
//             <motion.div
//               key={`sub-${currentIndex}`}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{
//                 duration: 0.8,      // Duration for fade in and fade out
//                 ease: "easeOut"     // Easing for smooth transition
//               }}
//               className="text-lg text-[var(--secondary-text-color)] max-[775px]:text-[14px]"
//             >
//               {typing ? (
//                 <Typewriter
//                   words={[currentData.subheading]}
//                   typeSpeed={30}
//                   cursor={false}
//                 />
//               ) : (
//                 ""
//               )}
//             </motion.div>
//           </div>

//           <Image src={SparkleImg} alt="star" height={38} width={38} className='max-[775px]:hidden' />
//         </div>
//         <div className='absolute bottom-[-60%] max-[775px]:bottom-[-30%]'><CircleAnimation currentIndex={currentIndex} handleClick={handleClick} /></div>
//       </div>
//     </div>
//   )
// }

// export default CircleContainer


"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import SparkleImg from "/public/sparkle.png";
import CircleAnimation from "./CircleAnimation";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
// import "react-simple-typewriter/dist/index.css";
import BottomWaveImage from "/public/claritysection_wave_bottom.png";
import TopWaveImage from "/public/claritysection_wave_top.png";

const CircleContainer = () => {
  const data = [
    {
      heading: "Reliable Data",
      subheading:
        "Go beyond scraping – access trustworthy, actionable insights.",
    },
    {
      heading: "Multi-Lingual Resolution",
      subheading: "Break barriers with insights across languages.",
    },
    {
      heading: "Spam Check",
      subheading: "Eliminate noise and focus on what truly matters.",
    },
    {
      heading: "Rating & Sorting",
      subheading: "Prioritize what matters with smart ratings and sorting.",
    },
    {
      heading: "Enrichment",
      subheading: "Add depth and value to your data for sharper insights.",
    },
    {
      heading: "Access Hidden & Private Events",
      subheading: "Unlock exclusive opportunities and stay ahead of the curve.",
    },
    {
      heading: "Duplicate Mapping",
      subheading: "Seamlessly identify and remove redundant entries.",
    },
    {
      heading: "15 Years of Data Intelligence",
      subheading: "Decades of expertise powering smarter decisions.",
    },
    {
      heading: "Fake & Scam Check",
      subheading: "Protect your decisions with verified, authentic data.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const pathName = usePathname();
  const startAutoRotation = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setTyping(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        setTyping(true);
      }, 0);
    }, 4000);
  }, [data.length]);

  useEffect(() => {
    startAutoRotation();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null; // Ensure ref is reset
      }
    };
  }, [startAutoRotation]);

  // **Handle Click Event**
  const handleClick = useCallback(
    (clickedIndex: number) => {
      setCurrentIndex((9 - clickedIndex) % 9);
      startAutoRotation(); // Restart Timer
    },
    [startAutoRotation]
  );
  const currentData = data[currentIndex];

  return (
    <div className="h-[580px] w-full overflow-hidden flex justify-center max-[1325px]:h-[540px] max-[775px]:h-[550px]">
      <Image
        src={TopWaveImage}
        alt="wave"
        className="-z-10 absolute top-[10]"
        width={1300}
      />
      <div className="w-[100%] relative rounded-xl h-full items-center  flex flex-col justify-start">
        <div className="w-[87%]   rounded-xl h-full items-center  overflow-hidden flex flex-col justify-start ">
          <div
            className="absolute right-0 top-[-150px] h-[600px] w-full -z-10"
            style={{
              background: `
            radial-gradient(circle, rgba(229, 221, 252, 0.6) 0%, transparent 30%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></div>

          <div className="text-sm font-medium border border-color rounded-xl py-1 px-7 mt-10">
            WHY CHOOSE US
          </div>
          {/* Progress bar */}
          <div className="flex gap-2 mt-10 max-[400px]:gap-1">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className={`h-2 w-10 rounded-lg transition-all duration-300 ${
                  index <= currentIndex ? "bg-[#6750a4]" : "bg-gray-300"
                } max-[540px]:w-7 max-[400px]:h-1 `}
              />
            ))}
          </div>

          <div className="w-[70%] flex items-start justify-between mt-5 max-[775px]:w-full max-[775px]:justify-center max-[550px]:w-[90%]">
            <Image
              src={SparkleImg}
              alt="star"
              height={38}
              width={38}
              className="max-[775px]:hidden"
            />
            <div className="text-center">
              <motion.div
                key={currentIndex} // Ensure framer-motion correctly animates changes
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8, // Duration for fade in and fade out
                  ease: "easeOut", // Easing for smooth transition
                }}
                className="font-semibold text-[40px] max-[775px]:text-[28px] max-[550px]:text-[24px]"
              >
                {typing ? (
                  <Typewriter
                    words={[currentData.heading]}
                    typeSpeed={30}
                    cursor={false}
                  />
                ) : (
                  ""
                )}
              </motion.div>
              <motion.div
                key={`sub-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8, // Duration for fade in and fade out
                  ease: "easeOut", // Easing for smooth transition
                }}
                className="text-lg text-[var(--secondary-text-color)] max-[775px]:text-[14px]"
              >
                {typing ? (
                  <Typewriter
                    words={[currentData.subheading]}
                    typeSpeed={30}
                    cursor={false}
                  />
                ) : (
                  ""
                )}
              </motion.div>
            </div>

            <Image
              src={SparkleImg}
              alt="star"
              height={38}
              width={38}
              className="max-[775px]:hidden"
            />
          </div>
          <div className="absolute bottom-[-60%] max-[775px]:bottom-[-30%]">
            <CircleAnimation
              currentIndex={currentIndex}
              handleClick={handleClick}
            />
          </div>
        </div>
        <Image
          src={BottomWaveImage}
          alt="wave"
          className="-z-10 absolute bottom-0"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default CircleContainer;
