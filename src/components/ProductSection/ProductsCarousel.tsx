import React, { useState } from 'react'
import SparkleImg from "/public/sparkle.png";
import Image from 'next/image';
import AutoScroll from '../AutoScroll';
import GetMore_1 from "/public/tracker/getmore_1.png";
import GetMore_2 from "/public/tracker/getmore_2.png";
import GetMore_3 from "/public/tracker/getmore_3.png";
import GetMore_4 from "/public/tracker/getmore_4.png";
import GetMore_5 from "/public/tracker/getmore_5.png";
import GetMore_6 from "/public/tracker/getmore_6.png";
import GetMore_7 from "/public/tracker/getmore_7.png";
import GetMore_8 from "/public/tracker/getmore_8.png";
import GetMore_9 from "/public/tracker/getmore_9.png";
import AiImage from '/public/Products/aiassistant.png'
import ModelImage from '/public/Products/model_enrichment.png'
import ResearchImage from '/public/Products/Research.png'
import TrendsImage from '/public/Products/trends_common.png'
import { motion } from 'framer-motion';
import LeftArrow from '/public/LeftArrow.svg'
import RightArrow from '/public/RightArrow.svg'

const ProductsCarousel = () => {
    const data = [
        { topic: "SEARCH", heading: "Visualisation Engine", subheading: "Discover Insights Seamlessly with List, Map, and Calendar Views.", bottom: "-50%" },
        { topic: "SMART TRACKERS", heading: "Deploy Agents", subheading: "Activate intelligence with agents that gather and deliver precise data.", bottom: "35%" },
        { topic: "DATA MODELLING", heading: "Model Enrichment", subheading: "Transform raw data into actionable insights with advanced enrichment capabilities.", bottom: "-5%" },
        { topic: "TRENDS", heading: "Identify Trends", subheading: "Uncover Patterns, Predict Future Movements, and Stay Ahead of the Curve.", bottom: "-4%" },
        { topic: "CONSULTING", heading: "Consultant Service", subheading: "Get Tailored Insights to Answer Tough Questions and Drive Strategic Decisions", bottom: "-5%" },
    ]

    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const icons = [GetMore_1, GetMore_2, GetMore_3, GetMore_4, GetMore_5, GetMore_6, GetMore_7, GetMore_8, GetMore_9]

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }else{
            setCurrentIndex(4)
        }
    }

    const handleNext = () => {
        if (currentIndex < 4) {
            setCurrentIndex(currentIndex + 1)
        }else{
            setCurrentIndex(0)
        }
    }

    return (
        <div className="h-[542px] w-full overflow-hidden flex justify-center">
            <div className='w-[1300px] border border-[var(--border-color)] relative rounded-xl h-full items-center overflow-hidden flex flex-col justify-start'>
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
                <div className='absolute left-[10%] top-[30%] w-[40px] h-[40px] flex items-center justify-center bg-white rounded-[40px] shadow-md cursor-pointer' onClick={handlePrev}>
                    <Image src={LeftArrow} alt='left'/>
                </div>
                <motion.div className="text-sm font-medium border border-color rounded-xl py-1 px-7 mt-10"
                    key={`topic-${currentIndex}`} // Unique key for heading
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    {data[currentIndex].topic}
                </motion.div>

                <div className="w-[70%] flex items-start justify-between mt-5">
                    <Image src={SparkleImg} alt="star" height={38} width={38} />
                    <div className='text-center'>
                        <motion.div
                            className="font-semibold text-[40px]"
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
                            className="text-lg text-[var(--secondary-text-color)]"
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

                    <Image src={SparkleImg} alt="star" height={38} width={38} />
                </div>
                <motion.div className={`absolute`}
                    key={`img-${currentIndex}`} // Unique key for heading
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    style={{ bottom: data[currentIndex].bottom }}>
                    {currentIndex === 0 ?
                        <Image src={ResearchImage} alt='ai' /> :
                        currentIndex === 1 ?
                            <AutoScroll size='large' icons={icons} /> :
                            currentIndex === 2 ?
                                <Image src={ModelImage} alt='ai' width={500} height={370} /> :
                                currentIndex === 3 ?
                                    <Image src={TrendsImage} alt='ai' width={800} height={370} unoptimized /> :
                                    <div className='bg-white rounded-xl shadow-md p-5'>
                                        <Image src={AiImage} alt='ai' width={700} height={370} />
                                    </div>}

                </motion.div>
                <div className='absolute right-[10%] top-[30%] w-[40px] h-[40px] flex items-center justify-center bg-white rounded-[40px] shadow-md cursor-pointer' onClick={handleNext}>
                    <Image src={RightArrow} alt='right'/>
                </div>
            </div>
        </div>
    )
}

export default ProductsCarousel