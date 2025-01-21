import React, { useEffect, useRef, useState } from 'react'
import ImageOne from '/public/Scroll/ListView.png'
import ImageTwo from '/public/Scroll/ListViewSmall.png'
import SolutionComponent from './SolutionComponent'
import { AnimatePresence, motion } from 'framer-motion'
import FirstSolutionComponent from './FirstSolutionComponent'
import { div } from 'framer-motion/client'
import LandingComponent from './LandingComponent'
import UsecaseScroll from '../usecaseScrollAnimation/UsecaseScroll'

const Scroll = () => {
  const data = [
    { solution: "Advanced Search", subHeading: "Use over 40+ filters to zoom in on what matters to your business for as much as 12 months ahead.", imageOne: ImageOne, imageTwo: ImageTwo },
    { solution: "Smart Scores", subHeading: "Use proprietary scores like Inbound Score, Economic Impact Estimate or International percent to identify volatility.", imageOne: ImageOne, imageTwo: ImageTwo },
    { solution: "Custom Tracker", subHeading: "Save your custom search to track you area of influence or that of your competitor. Get notified when something changes.", imageOne: ImageOne, imageTwo: ImageTwo },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false); // Track visibility of the div
  const scrollRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("down"); // 'up' or 'down'
  // const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = (e: WheelEvent) => {
    if (!isInView) return; // Only trigger if the component is in view

    if (e.deltaY > 0) {
      // Scrolling down
      e.preventDefault(); // Prevent the default scroll behavior
      if (currentIndex < data.length) {
        setCurrentIndex((prev) => {
          setScrollDirection("down"); // Set direction to down
          return prev + 1;
        });
      } else {
        // Allow normal scrolling when at the last index
        window.removeEventListener("wheel", handleScroll);
      }
    } else {
      // Scrolling up
      if (currentIndex > 0) {
        e.preventDefault(); // Prevent the default scroll behavior
        setCurrentIndex((prev) => {
          setScrollDirection("up"); // Set direction to up
          return prev - 1;
        });
      } else {
        // Allow normal scrolling when at the first index and scrolling up
        window.removeEventListener("wheel", handleScroll);
      }
    }
  };

  useEffect(() => {
    // Intersection Observer to detect when the component is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting); // Update visibility state
      },
      {
        threshold: 0.9, // 90% visibility required
      }
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

  // Attach the scroll event listener to handle scroll direction
  useEffect(() => {
    if (isInView) {
      window.addEventListener("wheel", handleScroll, { passive: false });
    } else {
      window.removeEventListener("wheel", handleScroll);
    }

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isInView, currentIndex]);

  useEffect(() => {
    console.log("current index :", currentIndex)
  }, [currentIndex])

  // useEffect(() => {
  //   const handleScrollDirection = () => {
  //     const currentScrollY = window.scrollY;
  //     if (currentScrollY > lastScrollY) {
  //       setScrollDirection('down');
  //     } else if (currentScrollY < lastScrollY) {
  //       setScrollDirection('up');
  //     }
  //     setLastScrollY(currentScrollY);
  //   };

  //   window.addEventListener('wheel', handleScrollDirection);
  //   return () => window.removeEventListener('wheel', handleScrollDirection);
  // }, [lastScrollY]);

  return (
    <div className="min-h-[580px] w-full relative" ref={scrollRef}>
      <div
        className="w-full flex h-[580px] items-center justify-center overflow-hidden"
      >
        {scrollDirection === 'down' ? (
          <>
            {currentIndex === 0 && (
              <UsecaseScroll image={data[0].imageOne} />
            )}
            {(currentIndex === 1) && (
              <FirstSolutionComponent
                heading={data[0].solution}
                subHeading={data[0].subHeading}
                imageOne={data[0].imageOne}
                imageTwo={data[0].imageTwo}
              />
            )}
            {currentIndex > 1 && (
              <SolutionComponent
                key={currentIndex - 1}
                heading={data[currentIndex - 1].solution}
                subHeading={data[currentIndex - 1].subHeading}
                imageOne={data[currentIndex - 1].imageOne}
                imageTwo={data[currentIndex - 1].imageTwo}
              />
            )}
          </>
        ) : (
          <>
            {currentIndex === 0 && (
              <UsecaseScroll image={data[0].imageOne} />
            )}
            {currentIndex > 0 && <SolutionComponent
              key={currentIndex}
              heading={data[currentIndex - 1].solution}
              subHeading={data[currentIndex - 1].subHeading}
              imageOne={data[currentIndex - 1].imageOne}
              imageTwo={data[currentIndex - 1].imageTwo}
            />}
          </>
        )}
      </div>
      <div className='flex items-center gap-2 absolute left-[20%] bottom-[50px]'>
        {Array.from({ length: data.length + 1 }).map((_, index) => (
          <div
            key={index}
            className={`h-[10px] w-[10px] rounded-[10px] bg-[#D9D9D9] ${index === currentIndex ? "bg-[var(--primary-color)]" : ""}`}
          ></div>
        ))}
      </div>
    </div>

  );


};

export default Scroll