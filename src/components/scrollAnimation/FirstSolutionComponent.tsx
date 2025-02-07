"use client"
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import ArrowImgOne from '/public/Scroll/Arrow-1.svg' 
import ArrowImgTwo from '/public/Scroll/Arrow-2.svg'
import ResearchIcon from '/public/Scroll/Research.svg' 
import SparkleImg from "/public/sparkle.png";

interface Props {
  heading: string;
  subHeading: string;
  imageOne: StaticImageData
  imageTwo: StaticImageData
}

const FirstSolutionComponent = ({ heading, subHeading, imageOne, imageTwo }: Props) => {

  const [fadeOut, setFadeOut] = useState(false);
  return (
    <div className="h-[500px] flex flex-col items-center relative w-full overflow-hidden">
      <motion.div
        className="flex flex-col items-center gap-4 justify-start w-full text-center h-[500px] absolute z-20 top-[20px]"
        initial={{ opacity: 1 }} // Initially visible
        whileInView={{ opacity: 0 }} // Fade out as it scrolls out of view
        viewport={{ once: true, amount: "some", margin: "0px 0px 0px 0px" }} // Trigger when the section is 50% out of view
        transition={{ duration: .5 }}
      >
        <div className='text-sm font-medium border border-color rounded-xl py-1 px-7'>How are we helpful</div>
        <div className="w-[70%] flex items-start justify-between">
          <Image src={SparkleImg} alt="star" height={38} width={38} />
          <div className="font-semibold text-[40px] w-[80%]">
            Geo Provides Unique Features To Unlock On ground Demand
          </div>
          <Image src={SparkleImg} alt="star" height={38} width={38} />
        </div>
        <Image src={ArrowImgOne} alt="arrow" />
      </motion.div>
      <motion.div
        className="flex gap-1 h-[500px] w-full absolute left-[60px]"
        initial={{ opacity: 0 }}  // Initially hidden
        whileInView={{ opacity: 1 }}  // Will fade in when in view
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: .5 }}  // Duration of the fade-in animation
      >
        <div className="flex flex-col w-[30%] gap-8 mt-[40px]">
          <Image src={ResearchIcon} alt='icon' height={72} width={72}/>
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
        initial={{ bottom: "-200px" }}
        animate={fadeOut ? { opacity: 0, bottom: 25, right: 80 } : { opacity: 1, bottom: 25, right: 80 }}
        transition={{ duration: .7 }}
        onAnimationComplete={() => {
          // Trigger fade-out after the first animation completes
          if (!fadeOut) {
            setTimeout(() => setFadeOut(true), 500); // Delay for the fade-out after the animation finishes
          }
        }}
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
