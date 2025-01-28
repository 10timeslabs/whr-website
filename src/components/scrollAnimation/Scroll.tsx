import React, { useEffect, useRef, useState } from 'react'
import ResearchImg from '/public/Scroll/research_score.png'
import ResearchSmallImg from '/public/Scroll/ListViewSmall.png'
import AiImage from '/public/Scroll/aiassistant.png'
import ScoreImg from '/public/Scroll/Score_highlights.png'
import TrackerOne from '/public/Scroll/tracker_bg.png'
import TrackerTwo from '/public/Scroll/tracker_fg.png'
import ThreshBarImg from '/public/Scroll/thresholdbar.png'
import TrendsImg from '/public/Scroll/Trends_visualiser.png'
import ArrowOne from '/public/Scroll/Arrow-1.svg'
import ArrowTwo from '/public/Scroll/Arrow-2.svg'
import ArrowThree from '/public/Scroll/Arrow-3.svg'
import ArrowFour from '/public/Scroll/Arrow-4.svg'
import ArrowFive from '/public/Scroll/Arrow-5.svg'
import ResearchIcon from '/public/Scroll/Research.svg'
import ScoresIcon from '/public/Scroll/Smartscores.svg'
import TrackersIcon from '/public/Scroll/Trackers.svg'
import TrendsIcon from '/public/Scroll/Trends.svg'
import AiIcon from '/public/Scroll/AI.svg'
import SolutionComponent from './SolutionComponent'
import { AnimatePresence, motion } from 'framer-motion'
import FirstSolutionComponent from './FirstSolutionComponent'
import LandingComponent from './LandingComponent'
import UsecaseScroll from '../usecaseScrollAnimation/UsecaseScroll'

const Scroll = () => {
  const data = [
    { solution: "Advanced Search", subHeading: "Use over 40+ filters to zoom in on what matters to your business for as much as 12 months ahead.", imageOne: ResearchImg, imageTwo: ResearchSmallImg, arrowImg: ArrowTwo, animationType: "updown", iconImg: ResearchIcon },
    { solution: "Smart Scores", subHeading: "Use proprietary scores like Inbound Score, Economic Impact Estimate or International percent to identify volatility.", imageOne: ResearchImg, imageTwo: ScoreImg, arrowImg: ArrowThree, animationType: "downup", iconImg: ScoresIcon },
    { solution: "Custom Tracker", subHeading: "Save your custom search to track you area of influence or that of your competitor. Get notified when something changes.", imageOne: TrackerOne, imageTwo: TrackerTwo, arrowImg: ArrowFour, animationType: "zoom", iconImg: TrackersIcon },
    { solution: "Trend Visualiser", subHeading: "See impact over time duration or across geography in a single view. Get notified as you would like.", imageOne: TrendsImg, imageTwo: ThreshBarImg, arrowImg: ArrowFour, animationType: "inimage", iconImg: TrendsIcon },
    { solution: "AI Assist", subHeading: "Don’t want to deal with search & filters? simply ask your AI agent and instruct them on what you would like to be notified about .", imageOne: AiImage, imageTwo: AiImage, arrowImg: ArrowFive, animationType: "none", iconImg: AiIcon },
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

  return (
    <div className="min-h-[500px] w-full overflow-hidden flex justify-center" ref={scrollRef}>
      <div className="w-[1300px] border border-[var(--border-color)] relative rounded-xl h-[500px] items-center justify-center overflow-hidden">
        <div
          className={`absolute ${currentIndex === 0 ? "right-0 top-[20%]" : "right-[-30%] top-0"} h-[500px] w-[85%] -z-10`}
          style={{
            background:
              "radial-gradient(circle, rgba(229, 221, 252, 0.6) 0%, transparent 70%)",
          }}></div>
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
                arrowImg={data[currentIndex - 1].arrowImg}
                animationType={data[currentIndex - 1].animationType}
                iconImg={data[currentIndex - 1].iconImg}
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
              arrowImg={data[currentIndex - 1].arrowImg}
              animationType={data[currentIndex - 1].animationType}
              iconImg={data[currentIndex - 1].iconImg}
            />}
          </>
        )}
        {currentIndex !== 0 && <div className='flex items-center gap-2 absolute left-[60px] bottom-[50px]'>
          {Array.from({ length: data.length + 1 }).map((_, index) => (
            <div
              key={index}
              className={`h-[10px] w-[10px] rounded-[10px] bg-[#D9D9D9] ${index === currentIndex ? "bg-[var(--primary-color)]" : ""}`}
            ></div>
          ))}
        </div>}
      </div>

    </div>

  );


};

export default Scroll