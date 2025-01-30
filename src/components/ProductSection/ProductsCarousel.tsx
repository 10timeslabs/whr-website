import React, { useEffect, useState } from 'react'
import SparkleImg from "/public/sparkle.png";
import Image from 'next/image';
import AutoScroll from '../AutoScroll';
import AiImage from '/public/Products/aiassistant.png'
import ModelImage from '/public/Products/model_enrichment.png'
import ResearchImage from '/public/Products/Research.png'
// import TrendsImage from '/public/Products/trends_common.png'
import TrendsImg from '/public/Products/trends_carousel.png'
import Aiicon from '/public/Products/aiicon.svg'
import Modelicon from '/public/Products/modelicon.svg'
import Researchicon from '/public/Products/researchicon.svg'
import Trackericon from '/public/Products/trackericon.svg'
import Trendsicon from '/public/Products/trendsicon.svg'
import { motion } from 'framer-motion';
import LeftArrow from '/public/LeftArrow.svg'
import RightArrow from '/public/RightArrow.svg'
import { trackerImageData } from '../../../data/trackerImagesData';

const ProductsCarousel = () => {
    const data = [
        { topic: "SEARCH", heading: "Visualisation Engine", subheading: "Discover Insights Seamlessly with List, Map, and Calendar Views.", bottom: "-20%", icon: Researchicon },
        { topic: "SMART TRACKERS", heading: "Deploy Agents", subheading: "Activate intelligence with agents that gather and deliver precise data.", bottom: "10%", icon: Trackericon },
        { topic: "DATA MODELLING", heading: "Model Enrichment", subheading: "Transform raw data into actionable insights with advanced enrichment capabilities.", bottom: "-10%", icon: Modelicon },
        { topic: "TRENDS", heading: "Identify Trends", subheading: "Uncover Patterns, Predict Future Movements, and Stay Ahead of the Curve.", bottom: "0%", icon: Trendsicon },
        { topic: "CONSULTING", heading: "Consultant Service", subheading: "Get Tailored Insights to Answer Tough Questions and Drive Strategic Decisions", bottom: "-3%", icon: Aiicon },
    ]

    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [bottomValue, setBottomValue] = useState(data[currentIndex].bottom); // Only for this first data value in array
    useEffect(() => {
        const updateBottomValue = () => {
            if (window.innerWidth <= 650 && currentIndex === 0) {
              setBottomValue("10%"); // Change bottom to 10% if width is 650px or less
            } else if (window.innerWidth <= 875 && currentIndex === 0) {
              setBottomValue("-5%"); // Change bottom to -5% if width is between 651px and 875px
            } else if (currentIndex === 0) {
              setBottomValue(data[0].bottom); // Restore original value if width increases
            }
          };
      
        updateBottomValue(); // Run on initial load
        window.addEventListener("resize", updateBottomValue); // Listen for resize events
      
        return () => window.removeEventListener("resize", updateBottomValue); // Cleanup
      }, []);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        } else {
            setCurrentIndex(4)
        }
    }

    const handleNext = () => {
        if (currentIndex < 4) {
            setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(0)
        }
    }

    return (
        <div className="h-[650px] w-full overflow-hidden flex flex-col items-center justify-center">
            <div className="flex flex-col text-center">
                <span className="text-[48px]">Foresee the Future</span>
                <span className="text-[var(--secondary-text-color)] text-[18px]"> Real-World Made Predictable for Taking Proactive Action</span>
            </div>
            <div className='w-[87%] border border-[var(--border-color)] relative rounded-xl h-[542px] items-center overflow-hidden flex flex-col justify-start mt-10'>
                <div
                    className="absolute right-0 bottom-[-20%] h-[542px] w-full -z-10"
                    style={{
                        background: `
                radial-gradient(circle, rgba(229, 221, 252, 1) 0%, transparent 43%)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                ></div>
                <div className='absolute left-[10%] top-[30%] w-[40px] h-[40px] flex items-center justify-center bg-white rounded-[40px] shadow-md cursor-pointer max-[775px]:hidden' onClick={handlePrev}>
                    <Image src={LeftArrow} alt='left' />
                </div>
                <div className='w-[80%] flex justify-center items-center max-[775px]:justify-between'>
                    <div className='w-[40px] h-[40px] items-center justify-center bg-white rounded-[40px] shadow-md cursor-pointer hidden max-[775px]:flex' onClick={handlePrev}>
                        <Image src={LeftArrow} alt='left' />
                    </div>
                    <motion.div className="mt-5"
                        key={`topic-${currentIndex}`} // Unique key for heading
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >
                        {/* {data[currentIndex].topic} */}
                        <Image src={data[currentIndex].icon} alt='icon' height={80} width={80} />
                    </motion.div>
                    <div className='w-[40px] h-[40px] items-center justify-center bg-white rounded-[40px] shadow-md cursor-pointer hidden max-[775px]:flex' onClick={handleNext}>
                        <Image src={RightArrow} alt='right' />
                    </div>
                </div>

                <div className="w-[70%] flex items-start justify-between mt-1 max-[775px]:w-[90%] max-[775px]:justify-center">
                    <Image src={SparkleImg} alt="star" height={38} width={38} className='max-[775px]:hidden' />
                    <div className='text-center'>
                        <motion.div
                            className="font-semibold text-[40px] max-[775px]:text-[28px]"
                            key={`heading-${currentIndex}`} // Unique key for heading
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                        >
                            {data[currentIndex].heading}
                        </motion.div>
                        <motion.div
                            className="text-lg text-[var(--secondary-text-color)] max-[775px]:text-[14px]"
                            key={`subheading-${currentIndex}`} // Unique key for subheading
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                        >
                            {data[currentIndex].subheading}
                        </motion.div>

                    </div>
                    <Image src={SparkleImg} alt="star" height={38} width={38} className='max-[775px]:hidden' />
                </div>
                <motion.div className={`absolute`}
                    key={`img-${currentIndex}`} // Unique key for heading
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    style={{ bottom: currentIndex === 0 ? bottomValue :  data[currentIndex].bottom }}>
                    {currentIndex === 0 ?
                        <Image src={ResearchImage} alt='ai' className='w-[900px]' style={{objectFit : "fill"}}/> :
                        currentIndex === 1 ?
                            <AutoScroll size='large' icons={trackerImageData} /> :
                            currentIndex === 2 ?
                                <Image src={ModelImage} alt='ai' width={500} height={370} /> :
                                currentIndex === 3 ?
                                    <Image src={TrendsImg} alt='ai' width={700} height={370} unoptimized /> :
                                    <div className='bg-white rounded-xl shadow-md p-5'>
                                        <Image src={AiImage} alt='ai' width={600} height={370} />
                                    </div>}

                </motion.div>
                <div className='absolute right-[10%] top-[30%] w-[40px] h-[40px] flex items-center justify-center bg-white rounded-[40px] shadow-md cursor-pointer max-[775px]:hidden' onClick={handleNext}>
                    <Image src={RightArrow} alt='right' />
                </div>
            </div>
        </div>
    )
}

export default ProductsCarousel