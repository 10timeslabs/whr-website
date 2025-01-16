import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowImgTwo from '/public/Arrow-2.svg'
import ArrowImgOne from '/public/Arrow-1.svg'
import { div } from "framer-motion/client";

interface Props {
  heading: string;
  subHeading: string;
  image: StaticImageData;
}

const FirstSolutionComponent = ({ heading, subHeading, image }: Props) => {

  // const { scrollYProgress } = useScroll();

  // const imageX = useTransform(scrollYProgress, [0, 1], ["15%", "50%"]); // Horizontal position: from center to right
  // const imageY = useTransform(scrollYProgress, [0, 1], ["500px", "-10px"]); // Vertical position

  // const imageWidth = useTransform(scrollYProgress, [0, 1], ["700px", "700px"]); // Width (if needed for scale)
  // const imageHeight = useTransform(scrollYProgress, [0, 1], ["450px", "520px"]); // Height

  return (
    <div className="h-[580px] flex flex-col items-center relative w-full">
      <motion.div
        className="flex flex-col items-center gap-4 justify-start w-full text-center h-[580px] absolute z-20"
        initial={{ opacity: 1 }} // Initially visible
        whileInView={{ opacity: 0 }} // Fade out as it scrolls out of view
        viewport={{ once: true, amount: "all", margin: "100px 0px 0px 0px" }} // Trigger when the section is 50% out of view
        transition={{ duration: 1 }}
      >
        <div className="rounded-lg border border-black p-2 mt-[80px]">How we are helpful</div>
        <div className="font-semibold text-[40px] w-[40%]">
          Geo Provides Unique Features To Unlock On ground Demand
        </div>
        <Image src={ArrowImgOne} alt="arrow" />
      </motion.div>
      <motion.div
        className="flex items-center justify-center gap-4 h-[580px] mr-[400px] absolute"
        initial={{ opacity: 0 }}  // Initially hidden
        whileInView={{ opacity: 1 }}  // Will fade in when in view
        viewport={{ once: true, amount:"all" }}  // Trigger when 50% of the element is in view
        transition={{ duration: 1 }}  // Duration of the fade-in animation
      >
        <div className="flex flex-col w-[45%] gap-8">
          <div className="text-xl font-semibold">{heading}</div>
          <div className="text-base">{subHeading}</div>
        </div>
        <Image src={ArrowImgTwo} alt="arrow" />
      </motion.div>
      <motion.div
        className="absolute z-10"
        style={{ // initial position, ensures it starts from below
          width: '700px',    // with specific dimensions
          height: '450px'    // same for height
        }}
        viewport={{
          amount: 0.5,
          once : true // trigger when all of the element is in view
        }}
        initial={{ bottom: '-200px' }} // starting position
        whileInView={{
          right: 20,
          bottom: 100 // this defines the end position
        }}
        // animate={{ bottom: 0 }}
        transition={{
          duration: 0.7, // smooth transition
          ease: "easeOut" // easing function
        }}
      >
        <Image
          src={image}
          alt="img"
          width={700}
          height={450}
          // fill
          unoptimized
   
        />
      </motion.div>
    </div>
  );
};

export default FirstSolutionComponent;
