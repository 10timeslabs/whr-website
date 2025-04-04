// "use client"
// import React, { useEffect, useRef, useState } from 'react'
// import Logo from '/public/logo/croppedlogo.png'
// import Image from 'next/image'
// import { motion, useInView } from 'framer-motion';
// import { Typewriter } from 'react-simple-typewriter';
// import BottomWaveImage from '/public/claritysection_wave_bottom.png'
// import TopWaveImage from '/public/claritysection_wave_top.png'

// const Clarity = () => {
//     const logoRef = useRef(null);
//     const isLogoInView = useInView(logoRef, { once: false });
//     const [showText, setShowText] = useState(false);

//     useEffect(() => {
//         if (isLogoInView) {
//             setTimeout(() => {
//                 setShowText(true);
//             }, 600); // Wait for logo animation to complete before showing text
//         }
//     }, [isLogoInView]);
//     return (
//         <div className='w-full flex flex-col items-center justify-center h-[550px] relative'>
//             {/* <Image src={TopWaveImage} alt='wave' className='-z-10 absolute top-[-20%]' width={1300} /> */}
//             <Image src={BottomWaveImage} alt='wave' className='-z-10 absolute bottom-0' style={{ width: "100%" }} />
//             <div className='font-medium text-[32px] max-[575px]:text-[28px]'>Clarity in Chaos</div>
//             <div className='w-[90%] text-[var(--secondary-text-color)] text-[20px] text-center max-[575px]:text-[16px]'>Real-world can be chaotic; beauty emerges from chaos. </div>
//             <div className='flex items-center justify-center w-full mt-10 h-[280px]'>
//                 <div className='w-[800px] relative flex items-center justify-center h-full'>
//                     <motion.div
//                         ref={logoRef}
//                         initial={{ scale: 0.1 }}
//                         animate={isLogoInView ? { scale: 1, opacity: 1 } : {}}
//                         transition={{ duration: .6, ease: "easeOut" }}
//                     >
//                         <Image
//                             className="drop-shadow-[0_10px_5px_rgba(103,80,164,0.5)]"
//                             src={Logo}
//                             alt="logo"
//                             height={60}
//                             width={51}
//                         />
//                     </motion.div>

//                     {/* Typewriter Texts */}
//                     {showText && (
//                         <div className='text-[24px] max-[820px]:text-[18px]'>
//                             <div className="absolute top-0 left-[30%] bg-[#F8FBEA] text-[#8B8D52] rounded-xl py-1 px-2 max-[820px]:left-[40%] max-[650px]:left-[20%]">
//                                 <Typewriter words={["Don't Just Go, Know"]} loop={1} typeSpeed={50} />
//                                 <span className="font-semibold">
//                                     <Typewriter words={[" WHR!"]} loop={1} typeSpeed={50} />
//                                 </span>
//                             </div>

//                             <div className="absolute top-[80px] left-0 bg-[#FFF7F5] text-[#AE7562] rounded-xl py-1 px-2 max-[820px]:left-[10%] max-[650px]:top-[55px]">
//                                 <Typewriter words={["Where could you"]} loop={1} typeSpeed={50} />
//                                 <span className="font-semibold">
//                                     <Typewriter words={[" FOCUS?"]} loop={1} typeSpeed={50} />
//                                 </span>
//                             </div>

//                             <div className="absolute top-[120px] right-0 bg-[#FEF6FF] text-[#9263A0] rounded-xl py-1 px-2 max-[820px]:right-[10%] max-[650px]:top-[180px]">
//                                 <Typewriter words={["Where should you"]} loop={1} typeSpeed={50} />
//                                 <span className="font-semibold">
//                                     <Typewriter words={[" GO?"]} loop={1} typeSpeed={50} />
//                                 </span>
//                             </div>

//                             <div className="absolute top-[210px] left-[30%] bg-[#F4FAFF] text-[#486D95] rounded-xl py-1 px-2 max-[820px]:left-[40%] max-[650px]:top-[250px] max-[650px]:left-[20%]">
//                                 <Typewriter words={["Where would you"]} loop={1} typeSpeed={50} />
//                                 <span className="font-semibold">
//                                     <Typewriter words={[" BE?"]} loop={1} typeSpeed={50} />
//                                 </span>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Clarity


"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Logo from "/public/logo/croppedlogo.png";
import BottomWaveImage from "/public/claritysection_wave_bottom.png";
import CircleImage from "/public/CircularAnimation/Circle.png";

const Clarity = () => {
  const logoRef = useRef(null);
  const isLogoInView = useInView(logoRef, { once: false });

  const [showText, setShowText] = useState(false);
  const [circleSize, setCircleSize] = useState(300);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotationDeg, setRotationDeg] = useState(0); // Accumulated rotation
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const texts = [
    "Don't Just Go, Know WHR!",
    "Where should you GO?",
    "Where would you BE?",
    "Where could you FOCUS?",
  ];

  const startAutoRotation = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setRotationDeg((prevDeg) => prevDeg + 90);
    }, 4000);
  }, []);

  useEffect(() => {
    startAutoRotation();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [startAutoRotation]);

  useEffect(() => {
    if (isLogoInView) {
      setTimeout(() => {
        setShowText(true);
      }, 600);
    }
  }, [isLogoInView]);

  useEffect(() => {
    const updateCircleSize = () => {
      if (window.innerWidth <= 775) {
        setCircleSize(350);
      } else if (window.innerWidth <= 1325) {
        setCircleSize(300);
      } else {
        setCircleSize(600);
      }
    };

    updateCircleSize();
    window.addEventListener("resize", updateCircleSize);
    return () => window.removeEventListener("resize", updateCircleSize);
  }, []);

  const getRotatedTexts = () => {
    return texts.map((_, i) => texts[(i + currentIndex) % texts.length]);
  };

  const rotatedTexts = getRotatedTexts();

  return (
    <div className="w-full flex flex-col items-center justify-center h-[550px] relative">
      <Image
        src={BottomWaveImage}
        alt="wave"
        className="-z-10 absolute bottom-0"
        style={{ width: "100%" }}
      />

      <div className="font-medium text-[32px] max-[575px]:text-[28px]">
        Clarity in Chaos
      </div>
      <div className="w-[90%] text-[var(--secondary-text-color)] text-[20px] text-center max-[575px]:text-[16px]">
        Real-world can be chaotic; beauty emerges from chaos.
      </div>

      <div className="flex items-center justify-center w-full mt-16 h-[280px]">
        <div className="w-[800px] relative flex items-center justify-center h-full">
          {/* Rotating Container */}
          <motion.div
            animate={{ rotate: rotationDeg }}
            transition={{ duration: 1 }}
            className="absolute flex items-center justify-center"
            style={{ width: circleSize, height: circleSize }}
          >
            {/* Circle Image */}
            <Image
              src={CircleImage}
              alt="circle"
              width={circleSize}
              height={circleSize}
              className="absolute"
            />

            {/* Text Elements */}
            {showText && (
              <>
                {/* Top */}
                <div
                  className="absolute"
                  style={{
                    top: `-30px`,
                    left: "50%",
                    transform: `translateX(-50%) rotate(-${rotationDeg}deg)`,
                    width: "140px",
                    textAlign: "center",
                  }}
                >
                  <div className="bg-[#F8FBEA] text-[#8B8D52] rounded-xl py-1 px-2 text-sm">
                    {rotatedTexts[0]}
                  </div>
                </div>

                {/* Right */}
                <div
                  className="absolute"
                  style={{
                    top: "50%",
                    right: `-70px`,
                    transform: `translateY(-50%) rotate(-${rotationDeg}deg)`,
                    width: "140px",
                    textAlign: "center",
                  }}
                >
                  <div className="bg-[#FEF6FF] text-[#9263A0] rounded-xl py-1 px-2 text-sm">
                    {rotatedTexts[1]}
                  </div>
                </div>

                {/* Bottom */}
                <div
                  className="absolute"
                  style={{
                    bottom: `-30px`,
                    left: "50%",
                    transform: `translateX(-50%) rotate(-${rotationDeg}deg)`,
                    width: "140px",
                    textAlign: "center",
                  }}
                >
                  <div className="bg-[#F4FAFF] text-[#486D95] rounded-xl py-1 px-2 text-sm">
                    {rotatedTexts[2]}
                  </div>
                </div>

                {/* Left */}
                <div
                  className="absolute"
                  style={{
                    top: "50%",
                    left: `-70px`,
                    transform: `translateY(-50%) rotate(-${rotationDeg}deg)`,
                    width: "140px",
                    textAlign: "center",
                  }}
                >
                  <div className="bg-[#FFF7F5] text-[#AE7562] rounded-xl py-1 px-2 text-sm">
                    {rotatedTexts[3]}
                  </div>
                </div>
              </>
            )}
          </motion.div>

          {/* Center Logo */}
          <motion.div
            ref={logoRef}
            initial={{ scale: 0.1 }}
            animate={isLogoInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute"
          >
            <Image
              className="drop-shadow-[0_10px_5px_rgba(103,80,164,0.5)]"
              src={Logo}
              alt="logo"
              height={60}
              width={51}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Clarity;
