// "use client"
// import React, { useEffect, useRef, useState } from 'react'
// import Lottie from 'lottie-react'
// import CleaningImage from '../../../public/realworldproblems/cleaningengine.json'
// import EnrichmentImage from '../../../public/realworldproblems/enrichmentengine.json'
// import InteligenceImage from '../../../public/realworldproblems/intelligenceengine.json'
// import SourcingImage from '../../../public/realworldproblems/sourcingengine.json'
// import { AnimatePresence, motion } from 'framer-motion'
// // import Image from 'next/image'

// const EngineScroll = () => {

// 	const [activeIndex, setActiveIndex] = useState(0);
// 	const [isVisible, setIsVisible] = useState(false);
// 	const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
// 	const containerRef = useRef<HTMLDivElement | null>(null);

// 	useEffect(() => {
// 		const observerOptions = {
// 			root: null, // viewport
// 			rootMargin: "0px",
// 			threshold: 1, // Trigger only when fully visible
// 		};

// 		const observerCallback = (entries: IntersectionObserverEntry[]) => {
// 			entries.forEach((entry) => {
// 				if (entry.isIntersecting) {
// 					const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
// 					if (index !== -1) {
// 						setActiveIndex(index);
// 					}
// 				}
// 			});
// 		};

// 		const observer = new IntersectionObserver(observerCallback, observerOptions);

// 		sectionRefs.current.forEach((section) => {
// 			if (section) observer.observe(section);
// 		});

// 		return () => observer.disconnect();
// 	}, []);

// 	// Detect when the entire scrolling section is in view
// 	useEffect(() => {
// 		const handleScroll = () => {
// 			if (!containerRef.current) return;

// 			const { top, bottom } = containerRef.current.getBoundingClientRect();
// 			const isInView = top < window.innerHeight - 500 && bottom > 350;
// 			setIsVisible(isInView);
// 		};

// 		window.addEventListener("scroll", handleScroll);
// 		handleScroll(); // Run on mount

// 		return () => window.removeEventListener("scroll", handleScroll);
// 	}, []);

// 	const data = [
// 		{ image: SourcingImage, heading: "Sourcing Engine", subheading: "Powered by the largest event scraper, our platform sources data from millions of users, channels, and trusted partners. Backed by a dedicated data-searching team and integrated with top platforms, we ensure comprehensive and reliable event intelligence to keep you ahead" },
// 		{ image: CleaningImage, heading: "Cleaning Engine", subheading: "The Cleaning Engine streamlines data by performing critical tasks like deduplication, spam detection, scam identification, and thorough verification and re-verification. By eliminating noise and enhancing accuracy, it ensures that only reliable, high-quality data is ready for actionable use." },
// 		{ image: EnrichmentImage, heading: "Enrichment Engine", subheading: "Link additional data building blocks, add valuable cues for deeper insights, and organize with ranking, rating, clustering, and tagging. Calculate linkages and influence to unlock the full potential of your data and drive smarter decisions" },
// 		{ image: InteligenceImage, heading: "Intelligence Engine", subheading: "Seamlessly connect multiple datasets, identify patterns through advanced modeling, and generate precise estimations and scoring. Compute overall impact scores to unlock deeper insights and drive impactful decisions" },
// 	]

// 	return (
// 		<div ref={containerRef} className="relative w-full flex justify-center">
// 			{/* Scrollable Container */}
// 			<div className="w-[87%] flex relative justify-between">
// 				{/* Left Side Content (Scrollable) */}
// 				<div className="w-[40%] flex flex-col max-[800px]:w-full">
// 					{data.map((engine, key) => (
// 						<div key={key} className='flex flex-col gap-10 max-[800px]:mt-10 max-[800px]:items-center'>
// 							<div ref={(el) => { sectionRefs.current[key] = el; }}
// 								className="h-[500px] flex flex-col justify-center max-[800px]:h-fit max-[800px]:items-center"
// 							>
// 								<motion.div
// 									initial={{ opacity: 0, x: -50 }}
// 									animate={{ opacity: 1, x: 0 }}
// 									transition={{ duration: 0.5 }}
// 									className="font-semibold text-[36px] max-[1024px]:text-[24px] max-[800px]:text-[36px] max-[500px]:text-[28px]"
// 								>
// 									{engine.heading}
// 								</motion.div>
// 								<motion.div
// 									initial={{ opacity: 0, x: -50 }}
// 									animate={{ opacity: 1, x: 0 }}
// 									transition={{ duration: 0.5, delay: 0.2 }}
// 									className="text-[var(--secondary-text-color)] mt-5 text-[20px] max-[1024px]:text-[16px] max-[800px]:text-[20px] max-[800px]:text-center"
// 								>
// 									{engine.subheading}
// 								</motion.div>
// 							</div>
// 							<div className='hidden max-[800px]:block w-[80%]'><Lottie animationData={engine.image} style={{ width: "100%", height: "100%" }} /></div>
// 						</div>
// 					))}
// 				</div>
// 				{!isVisible &&
// 					<div className='w-[50%] h-[500px] flex items-center justify-center'>
// 						<div className='h-[250px]'><Lottie animationData={data[0].image} style={{ width: "100%", height: "100%" }} /></div>
// 					</div>
// 				}
// 				{/* Right Side - Fixed Image with Visibility Control */}
// 				{isVisible && (
// 					<div className="w-[50%] relative max-[800px]:hidden">
// 						<motion.div
// 							className="fixed top-[90px] right-[8%] w-[40%] h-[500px] flex items-center justify-center"
// 							initial={{
// 								opacity: activeIndex === 0 ? 1 : 0
// 								// opacity: 0
// 							}}
// 							animate={{
// 								opacity: isVisible ? 1 : 0,
// 								visibility: isVisible ? "visible" : "hidden",
// 							}}
// 							transition={{ duration: 0.5 }}
// 						>
// 							<AnimatePresence mode="wait"> -
// 								<motion.div
// 									key={activeIndex} // Forces re-render on index change
// 									initial={{
// 										// opacity: 0,
// 										opacity: activeIndex === 0 ? 1 : 0,
// 										// scale: 0.9
// 										scale: activeIndex === 0 ? 1 : 0.9
// 									}}
// 									animate={{ opacity: 1, scale: 1 }}
// 									exit={{ opacity: 0 }}
// 									transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
// 									className="h-[250px]"
// 								>
// 									<Lottie animationData={data[activeIndex].image} style={{ width: "100%", height: "100%" }} />
// 								</motion.div>
// 							</AnimatePresence>
// 						</motion.div>
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// }

// export default EngineScroll

"use client";
import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import CleaningImage from "../../../public/realworldproblems/cleaningengine.json";
import EnrichmentImage from "../../../public/realworldproblems/enrichmentengine.json";
import InteligenceImage from "../../../public/realworldproblems/intelligenceengine.json";
import SourcingImage from "../../../public/realworldproblems/sourcingengine.json";
import { AnimatePresence, motion } from "framer-motion";
// import Image from 'next/image'

const EngineScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 1, // Trigger only when fully visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Detect when the entire scrolling section is in view
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, bottom } = containerRef.current.getBoundingClientRect();
      const isInView = top < window.innerHeight - 500 && bottom > 350;
      setIsVisible(isInView);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const data = [
    {
      image: SourcingImage,
      heading: "Sourcing Engine",
      subheading:
        "Powered by the largest event scraper, our platform sources data from millions of users, channels, and trusted partners. Backed by a dedicated data-searching team and integrated with top platforms, we ensure comprehensive and reliable event intelligence to keep you ahead",
    },
    {
      image: CleaningImage,
      heading: "Cleaning Engine",
      subheading:
        "The Cleaning Engine streamlines data by performing critical tasks like deduplication, spam detection, scam identification, and thorough verification and re-verification. By eliminating noise and enhancing accuracy, it ensures that only reliable, high-quality data is ready for actionable use.",
    },
    {
      image: EnrichmentImage,
      heading: "Enrichment Engine",
      subheading:
        "Link additional data building blocks, add valuable cues for deeper insights, and organize with ranking, rating, clustering, and tagging. Calculate linkages and influence to unlock the full potential of your data and drive smarter decisions",
    },
    {
      image: InteligenceImage,
      heading: "Intelligence Engine",
      subheading:
        "Seamlessly connect multiple datasets, identify patterns through advanced modeling, and generate precise estimations and scoring. Compute overall impact scores to unlock deeper insights and drive impactful decisions",
    },
  ];

  return (
    <div ref={containerRef} className="relative w-full flex justify-center">
      {/* Scrollable Container */}
      <div className="w-[87%] mt-9">
        <div>
          <div className="text-[64px] leading-[70px] max-[1000px]:hidden max-[1200px]:text-[48px] max-[1200px]:leading-[55px]">
            Wht, Whn,
            <span className="bg-gradient-to-r from-[#EE1CC082] via-[#7757DE] to-[#DD18FD40] bg-clip-text text-transparent">
              Whr?
            </span>
          </div>
          <div className="text-[var(--secondary-text-color)] text-[20px] max-[1000px]:hidden max-[1200px]:text-[16px]">
            Built with billions of signals, millions of sources, thousands of
            models to answer real questions
          </div>
        </div>
        <div className="flex relative justify-between">
          {/* Left Side Content (Scrollable) */}
          <div className="w-[40%] flex flex-col max-[800px]:w-full">
            {data.map((engine, key) => (
              <div
                key={key}
                className="flex flex-col gap-10 max-[800px]:mt-10 max-[800px]:items-center"
              >
                <div
                  ref={(el) => {
                    sectionRefs.current[key] = el;
                  }}
                  className="h-[500px] flex flex-col justify-center max-[800px]:h-fit max-[800px]:items-center"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-semibold text-[36px] max-[1024px]:text-[24px] max-[800px]:text-[36px] max-[500px]:text-[28px]"
                  >
                    {engine.heading}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-[var(--secondary-text-color)] mt-5 text-[20px] max-[1024px]:text-[16px] max-[800px]:text-[20px] max-[800px]:text-center"
                  >
                    {engine.subheading}
                  </motion.div>
                </div>
                <div className="hidden max-[800px]:block w-[80%]">
                  <Lottie
                    animationData={engine.image}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            ))}
          </div>
          {!isVisible && (
            <div className="w-[50%] h-[500px] flex items-center justify-center">
              <div className="h-[250px]">
                <Lottie
                  animationData={data[0].image}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          )}
          {/* Right Side - Fixed Image with Visibility Control */}
          {isVisible && (
            <div className="w-[50%] relative max-[800px]:hidden">
              <motion.div
                className="fixed top-[90px] right-[8%] w-[40%] h-[500px] flex items-center justify-center"
                initial={{
                  opacity: activeIndex === 0 ? 1 : 0,
                  // opacity: 0
                }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  visibility: isVisible ? "visible" : "hidden",
                }}
                transition={{ duration: 0.5 }}
              >
                <AnimatePresence mode="wait">
                  {" "}
                  -
                  <motion.div
                    key={activeIndex} // Forces re-render on index change
                    initial={{
                      // opacity: 0,
                      opacity: activeIndex === 0 ? 1 : 0,
                      // scale: 0.9
                      scale: activeIndex === 0 ? 1 : 0.9,
                    }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
                    className="h-[250px]"
                  >
                    <Lottie
                      animationData={data[activeIndex].image}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EngineScroll;
