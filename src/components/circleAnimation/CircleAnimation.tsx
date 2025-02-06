"use client"
import React, { useEffect, useState } from 'react'
import AiIcon from '/public/Scroll/AI.svg'
import Image from 'next/image';
import { motion } from 'framer-motion';
import ImageThree from '/public/CircularAnimation/15yrs.svg'
import ImageFive from '/public/CircularAnimation/accesshiddenpvtevents.svg'
import ImageFour from '/public/CircularAnimation/Duplicatemapping.svg'
import ImageSix from '/public/CircularAnimation/Enrichment.svg'
import ImageEight from '/public/CircularAnimation/Fakescamcheck.svg'
import ImageNine from '/public/CircularAnimation/MultilingualResolution.svg'
import ImageSeven from '/public/CircularAnimation/Ratingandscores.svg'
import ImageOne from '/public/CircularAnimation/Reliabledata.svg'
import ImageTwo from '/public/CircularAnimation/Spamcheck.svg'
import CircleImage from '/public/CircularAnimation/Circle.png'

interface Props{
    currentIndex : number
}

const CircleAnimation = ({currentIndex} : Props) => {

    const images = [ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive, ImageSix, ImageSeven, ImageEight, ImageNine]

    // const [rotation, setRotation] = useState(0); // State to track the rotation angle
    // const [activeIndex, setActiveIndex] = useState(0);
    const [circleSize, setCircleSize] = useState(600);
    // const element = 9

    const rotation = currentIndex * 40; // Controlled by parent
    const activeIndex = (9 - currentIndex) % 9; 
    
    useEffect(() => {
        // Function to check window width and adjust size
        const checkWindowSize = () => {
            if(window.innerWidth <= 775){
                setCircleSize(300); // Set size to 500x500 if screen width <= 1325px    
            }
            else if (window.innerWidth <= 1325) {
                setCircleSize(500); // Set size to 500x500 if screen width <= 1325px
            } else {
                setCircleSize(600); // Otherwise, set size to 600x600
            }
        };

        // Initial check on mount
        checkWindowSize();

        // Listen to window resize and update the size dynamically
        window.addEventListener('resize', checkWindowSize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

    return (
        <motion.div className="relative bg-gray-200 rounded-full mx-auto mt-8"
            style={{
                transform: `rotate(${rotation}deg)`, // Apply the calculated rotation
                transition: "transform .4s ease", // Smooth transition for rotation
                height : circleSize,
                width :  circleSize
            }}
        >
            <Image src={CircleImage} alt='circle' width={circleSize} height={circleSize}/>
            {Array.from({ length: images.length }).map((_, index) => {
                const angle = (index / images.length) * 360; // Angle in degrees for each element
                const radians = (angle - 90) * (Math.PI / 180); // Convert to radians and shift by -90° to start at the top
                const x = circleSize/2 + circleSize/2 * Math.cos(radians); // X-coordinate
                const y = circleSize/2 + circleSize/2 * Math.sin(radians);
                const isActive = index === activeIndex;
                return (
                    <motion.div
                        key={index}
                        className="absolute"
                        style={{
                            top: `${y}px`,
                            left: `${x}px`,
                            transform: "translate(-50%, -50%)",
                        }}
                        animate={{
                            width: circleSize === 300 ? isActive ? "100px" : "60px" :  isActive ? "140px" : "90px", // Animate width
                            height:  circleSize === 300 ? isActive ? "100px" : "60px" :  isActive ? "140px" : "90px", // Animate height
                        }}
                        transition={{
                            duration: .5, // Smooth transition duration
                            ease: "easeInOut", // Smooth easing
                        }}
                    >
                        <Image src={images[index]} className="h-full w-full" alt={`icon-${index}`}/>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}

export default CircleAnimation