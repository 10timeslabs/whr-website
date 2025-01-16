import React, { useEffect, useRef, useState } from 'react'
import ImageOne from '/public/Scroll/ListView.png'
import ImageTwo from '/public/tracker/getmore_2.png'
import ImageThree from '/public/tracker/getmore_3.png'
import SolutionComponent from './SolutionComponent'
import { AnimatePresence, motion } from 'framer-motion'
import FirstSolutionComponent from './FirstSolutionComponent'

const Scroll = () => {
  const data = [
    { solution: "Advanced Search",subHeading : "Use over 40+ filters to zoom in on what matters to your business for as much as 12 months ahead.", image: ImageOne },
    { solution: "Smart Scores",subHeading : "Use proprietary scores like Inbound Score, Economic Impact Estimate or International percent to identify volatility.", image: ImageOne },
    { solution: "Custom Tracker",subHeading : "Save your custom search to track you area of influence or that of your competitor. Get notified when something changes.", image: ImageOne },
    
  ];

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [isLocked, setIsLocked] = useState(true);
  // const [isVisible, setIsVisible] = useState(false);
  // const scrollRef = useRef<HTMLDivElement>(null);

  // const handleScroll = (event: WheelEvent) => {
  //   if (!isLocked || !isVisible) return;

  //   event.preventDefault();

  //   if (event.deltaY > 0 && currentIndex < data.length - 1) {
  //     // Scroll down, go to the next item
  //     setCurrentIndex((prevIndex) => prevIndex + 1);
  //   } else if (event.deltaY < 0 && currentIndex > 0) {
  //     // Scroll up, go to the previous item
  //     setCurrentIndex((prevIndex) => prevIndex - 1);
  //   } else if (currentIndex === data.length - 1 && event.deltaY > 0) {
  //     // Unlock scrolling once the last item is reached
  //     setIsLocked(false);
  //   }
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsVisible(entry.isIntersecting);
  //     },
  //     { threshold: 1.0 } // Ensures the element is fully visible
  //   );

  //   if (scrollRef.current) {
  //     observer.observe(scrollRef.current);
  //   }

  //   return () => {
  //     if (scrollRef.current) {
  //       observer.unobserve(scrollRef.current);
  //     }
  //   };
  // }, []);
  // useEffect(() => {
  //   if (isVisible) {
  //     window.addEventListener("wheel", handleScroll, { passive: false });
  //     console.log("fully visible")
  //   } else {
  //     window.removeEventListener("wheel", handleScroll);
  //     console.log("not visible")
  //   }

  //   return () => {
  //     window.removeEventListener("wheel", handleScroll);
  //   };
  // }, [isVisible, currentIndex, isLocked]);

  return (
    <div 
    // ref={scrollRef}
     className="w-full flex h-[580px] bg-[#ebf2ff40] items-center justify-center overflow-hidden">
      {/* <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex} // Ensures unique animations for each solution
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute"
        >
          <SolutionComponent
            key={currentIndex}
            heading={data[currentIndex].solution}
            subHeading={data[currentIndex].subHeading}
            image={data[currentIndex].image}
          />
        </motion.div>
      </AnimatePresence> */}
      <FirstSolutionComponent heading={data[0].solution} subHeading={data[0].subHeading} image={data[0].image}/>
    </div>
  );
};

export default Scroll