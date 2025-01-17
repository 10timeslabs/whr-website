import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import ArrowImgTwo from '/public/Arrow-2.svg'
import ArrowImgOne from '/public/Arrow-1.svg'
import { div } from "framer-motion/client";

interface Props {
  heading: string;
  subHeading: string;
  imageOne: StaticImageData
  imageTwo: StaticImageData
}

const FirstSolutionComponent = ({ heading, subHeading, imageOne, imageTwo }: Props) => {

  const controls = useAnimation();
  useEffect(() => {
    // Start with the initial animation
    controls.start("visible").then(() => {
      // After the first animation completes, trigger fade-out
      controls.start("fadeOut");
    });
  }, []);
  const variants = {
    initial: { bottom: "-200px", opacity: 1 },
    visible: {
      right: 80,
      bottom: 80,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
    fadeOut: {
      opacity: 0,
      transition: { duration: 0.5 }, // Fade-out duration
    },
  };                                   

                                        
  return (
    <div className="h-[580px] flex flex-col items-center relative w-full overflow-hidden">
      <motion.div
        className="flex flex-col items-center gap-4 justify-start w-full text-center h-[580px] absolute z-20"
        initial={{ opacity: 1 }} // Initially visible
        whileInView={{ opacity: 0 }} // Fade out as it scrolls out of view
        viewport={{ once: true, amount: "some", margin: "0px 0px 0px 0px" }} // Trigger when the section is 50% out of view
        transition={{ duration: .5, delay: .5 }}
      >
        <div className="rounded-lg border border-black p-2 mt-[60px]">How we are helpful</div>
        <div className="font-semibold text-[40px] w-[40%]">
          Geo Provides Unique Features To Unlock On ground Demand
        </div>
        <Image src={ArrowImgOne} alt="arrow" />
      </motion.div>
      <motion.div
        className="flex items-center justify-center gap-4 h-[580px] mr-[400px] absolute"
        initial={{ opacity: 0 }}  // Initially hidden
        whileInView={{ opacity: 1 }}  // Will fade in when in view
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: .5 }}  // Duration of the fade-in animation
      >
        <div className="flex flex-col w-[45%] gap-8">
          <div className="text-xl font-semibold">{heading}</div>
          <div className="text-base">{subHeading}</div>
        </div>
        <Image src={ArrowImgTwo} alt="arrow" />
      </motion.div>
      <motion.div
        className="absolute z-10"
        style={{
          width: "600px",
          height: "450px",
        }}
        initial="initial"
        animate={controls}
        variants={variants}
      >
        <Image
          src={imageOne}
          alt="img"
          width={600}
          height={450}
          unoptimized

        />
      </motion.div>
      <motion.div
        className="flex items-center justify-center rounded-[14px] absolute right-20 z-20"
        style={{ width: '600px', height: '500px' }}
        viewport={{ once: true, amount: "some" }}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: .5, delay: 1 }
        }}
      >
        <Image
          src={imageTwo}
          alt='second image'
          width={600}
          unoptimized
          className='object-fit'
        />
      </motion.div>
    </div>
  );
};

export default FirstSolutionComponent;
