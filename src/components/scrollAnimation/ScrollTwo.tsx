import React, { useEffect, useRef, useState } from 'react'
import ImageOne from '/public/Scroll/ListView.png'
import ImageTwo from '/public/Scroll/ListViewSmall.png'
import SolutionComponent from './SolutionComponent'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import FirstSolutionComponent from './FirstSolutionComponent'

const ScrollTwo = () => {
  const data = [
    { solution: "Advanced Search", subHeading: "Use over 40+ filters to zoom in on what matters to your business for as much as 12 months ahead.", imageOne: ImageOne, imageTwo: ImageTwo },
    { solution: "Smart Scores", subHeading: "Use proprietary scores like Inbound Score, Economic Impact Estimate or International percent to identify volatility.", imageOne: ImageOne, imageTwo: ImageTwo },
    { solution: "Custom Tracker", subHeading: "Save your custom search to track you area of influence or that of your competitor. Get notified when something changes.", imageOne: ImageOne, imageTwo: ImageTwo },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false); 
  const scrollRef = useRef(null);

  // Track scroll progress using useScroll
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"], // Begin tracking when the top of the target enters the bottom of the viewport
  });

  useEffect(() => {
    // Subscribe to changes in scrollYProgress
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      // Only process scroll updates when the container is at least 90% visible
      if (!isInView) return;

      const segment = 1 / data.length; // Divide scroll progress into equal segments
      const newIndex = Math.floor(progress / segment);

      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < data.length) {
        setCurrentIndex(newIndex);
      }
    });

    return () => {
      unsubscribe(); // Clean up listener
    };
  }, [scrollYProgress, currentIndex, data.length, isInView]);


  useEffect(() => {
    // Intersection Observer to check when the container is 90% visible
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.intersectionRatio >= 0.9); // Set to true if at least 90% visible
      },
      { threshold: [0.9] }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);

  // Prevent scrolling until the last component
  const handleWheel = (e: WheelEvent) => {
    if (!isInView) return;

    e.preventDefault(); // Prevent default scroll behavior

    if (e.deltaY > 0 && currentIndex < data.length - 1) {
      // Scroll down
      setCurrentIndex((prev) => prev + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      // Scroll up
      setCurrentIndex((prev) => prev - 1);
    } else if (e.deltaY > 0 && currentIndex === data.length - 1) {
      // Allow normal scrolling after the last component
      window.removeEventListener("wheel", handleWheel);
    }
  };

  useEffect(() => {
    if (isInView) {
      window.addEventListener("wheel", handleWheel, { passive: false });
    } else {
      window.removeEventListener("wheel", handleWheel);
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isInView, currentIndex]);

  return (
    <div className="min-h-[580px]" ref={scrollRef}>
      <motion.div
        className="w-full flex h-[580px] bg-[#ebf2ff40] items-center justify-center overflow-hidden"
        viewport={{ once: true, amount: 'all' }}
      >
        <SolutionComponent
          key={currentIndex}
          heading={data[currentIndex].solution}
          subHeading={data[currentIndex].subHeading}
          imageOne={data[currentIndex].imageOne}
          imageTwo={data[currentIndex].imageTwo}
        />
      </motion.div>
    </div>
  );

  // return (
  //   <div 
  //    className="w-full flex h-[580px] bg-[#ebf2ff40] items-center justify-center overflow-hidden">
  //     {/* <AnimatePresence mode="wait"> */}
  //       <motion.div
  //         key={currentIndex} // Ensures unique animations for each solution
  //         initial={{ opacity: 0, y: 50 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         exit={{ opacity: 0, x: 100 }}
  //         transition={{ duration: 0.5, ease: "easeInOut" }}
  //       >
  //         <SolutionComponent
  //           key={currentIndex}
  //           heading={data[0].solution}
  //           subHeading={data[0].subHeading}
  //           imageOne={data[0].imageOne}
  //           imageTwo={data[0].imageTwo}
  //           // heading={data[currentIndex].solution} subHeading={data[currentIndex].subHeading} imageOne={data[currentIndex].imageOne} imageTwo={data[currentIndex].imageTwo}
  //         />
  //       </motion.div>
  //     {/* </AnimatePresence> */}
  //     {/* <FirstSolutionComponent heading={data[0].solution} subHeading={data[0].subHeading} image={data[0].image}/> */}
  //   </div>
  // );
};

export default ScrollTwo