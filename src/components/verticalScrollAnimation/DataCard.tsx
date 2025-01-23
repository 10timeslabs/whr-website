import { motion, useAnimation } from 'framer-motion';
import Image, { StaticImageData } from 'next/image'
import React, { useEffect } from 'react'

interface Props {
  icon: StaticImageData;
  heading: string;
  subHeading: string;
}

const DataCard = ({ icon, heading, subHeading }: Props) => {

  return (
    <motion.div
      initial={{ opacity: 0 }} // Use opacity for the initial animation
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.4, delay : .1 }} // Control other animations (like opacity)
      className="rounded-[20px] border border-[var(--border-color)] p-5 shadow-md h-[166px] w-[527px] flex items-center justify-center gap-5"
      style={{
        backgroundColor: "white", // Default color
      }}
    >
      <Image src={icon} alt='icon' />
      <div className='flex flex-col gap-2 text-[#010D3E]'>
        <div className='text-[18px] font-semibold'>{heading}</div>
        <div>{subHeading}</div>
      </div>
    </motion.div>
  )
}

export default DataCard