"use client"
import { motion} from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

interface Props {
  icon: any;
  // icon: React.ReactNode;
  heading: string;
  subHeading: string;
  href : string;
}

const DataCard = ({ icon, heading, subHeading, href }: Props) => {

  const [iconSize, setIconSize] = useState({ width: "62", height: "62" });

  useEffect(() => {
    const updateIconSize = () => {
      if(window.innerWidth <= 490){
        setIconSize({ width: "24", height: "24" });
      }
      else if (window.innerWidth <= 790) {
        setIconSize({ width: "40", height: "40" });
      } else {
        setIconSize({ width: "62", height: "62" });
      }
    };

    updateIconSize(); // Run on initial load
    window.addEventListener("resize", updateIconSize); // Listen for resize events

    return () => window.removeEventListener("resize", updateIconSize); // Cleanup
  }, []);

  const router = useRouter()
  const handleRouting = ()=>{
    router.push(href)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }} // Use opacity for the initial animation
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.4, delay: .1 }} // Control other animations (like opacity)
      className="rounded-[20px] cursor-pointer border border-[var(--border-color)] p-5 shadow-md h-[166px] w-[527px] flex items-center justify-center gap-5 max-[1250px]:w-[400px] max-[1000px]:w-[300px] max-[790px]:w-[200px] max-[790px]:flex-col max-[600px]:w-[150px]"
      style={{
        backgroundColor: "white", // Default color
      }}
      onClick={handleRouting}
    >
      <div> {React.cloneElement(icon, { width: iconSize.width, height: iconSize.height})}</div>
      <div className='flex flex-col gap-2 text-[#010D3E]'>
        <div className='text-[18px] font-semibold max-[790px]:text-center max-[600px]:text-[12px]'>{heading}</div>
        <div className="line-clamp-2 max-[790px]:hidden">{subHeading}</div>
      </div>
    </motion.div>
  )
}

export default DataCard