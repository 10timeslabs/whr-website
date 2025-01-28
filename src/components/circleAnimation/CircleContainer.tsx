import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import SparkleImg from "/public/sparkle.png";
import CircleAnimation from './CircleAnimation';
import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from 'framer-motion';
// import "react-simple-typewriter/dist/index.css";

const CircleContainer = () => {

  const data = [
    { heading: "Reliable Data", subheading: "Go beyond scraping – access trustworthy, actionable insights." },
    { heading: "Multi-Lingual Resolution", subheading: "Break barriers with insights across languages." },
    { heading: "Spam Check", subheading: "Eliminate noise and focus on what truly matters." },
    { heading: "Rating & Sorting", subheading: "Prioritize what matters with smart ratings and sorting." },
    { heading: "Enrichment", subheading: "Add depth and value to your data for sharper insights." },
    { heading: "Access Hidden & Private Events", subheading: "Unlock exclusive opportunities and stay ahead of the curve." },
    { heading: "Duplicate Mapping", subheading: "Seamlessly identify and remove redundant entries." },
    { heading: "15 Years of Data Intelligence", subheading: "Decades of expertise powering smarter decisions." },
    { heading: "Fake & Scam Check", subheading: "Protect your decisions with verified, authentic data." },

  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  // Update heading and subheading every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTyping(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        setTyping(true);
      }, 0); // Small delay before starting typing again
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  const currentData = data[currentIndex];


  return (
    <div className="h-[542px] w-full overflow-hidden flex justify-center">
      <div className='w-[1300px] border border-[var(--border-color)] relative rounded-xl h-full items-center  overflow-hidden flex flex-col justify-start'>
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
        <div className="w-[70%] flex items-start justify-between mt-5">
          <Image src={SparkleImg} alt="star" height={38} width={38} />
          <div className='text-center'>

            <motion.div
              key={currentIndex} // Ensure framer-motion correctly animates changes
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,      // Duration for fade in and fade out
                ease: "easeOut"     // Easing for smooth transition
              }}
              className="font-semibold text-[40px]"
            >
              {typing ? (
                <Typewriter
                  words={[currentData.heading]}
                  typeSpeed={100}
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
                duration: 0.8,      // Duration for fade in and fade out
                ease: "easeOut"     // Easing for smooth transition
              }}
              className="text-lg text-[var(--secondary-text-color)]"
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

          <Image src={SparkleImg} alt="star" height={38} width={38} />
        </div>
        <div className='absolute bottom-[-60%]'><CircleAnimation /></div>
      </div>
    </div>
  )
}

export default CircleContainer