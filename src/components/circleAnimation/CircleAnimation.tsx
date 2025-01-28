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

const CircleAnimation = () => {

    const images = [ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive, ImageSix, ImageSeven, ImageEight, ImageNine]

    const [rotation, setRotation] = useState(0); // State to track the rotation angle
    const [activeIndex, setActiveIndex] = useState(0);
    // const element = 9

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotation((prevRotation) => {
                const newRotation = prevRotation + 40; // Add 40 degrees for clockwise rotation
                const newIndex = (activeIndex - 1 + images.length) % images.length; // Decrement index for clockwise rotation
                setActiveIndex(newIndex); // Update the active index
                return newRotation;
            });
        },4000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [activeIndex]);

    return (
        <motion.div className="relative w-[600px] h-[600px] bg-gray-200 rounded-full mx-auto mt-8"
            style={{
                transform: `rotate(${rotation}deg)`, // Apply the calculated rotation
                transition: "transform .4s ease", // Smooth transition for rotation
            }}
        >
            <Image src={CircleImage} alt='circle' width={600} height={600}/>
            {Array.from({ length: images.length }).map((_, index) => {
                const angle = (index / images.length) * 360; // Angle in degrees for each element
                const radians = (angle - 90) * (Math.PI / 180); // Convert to radians and shift by -90° to start at the top
                const x = 300 + 300 * Math.cos(radians); // X-coordinate
                const y = 300 + 300 * Math.sin(radians);
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
                            width: isActive ? "140px" : "90px", // Animate width
                            height: isActive ? "140px" : "90px", // Animate height
                        }}
                        transition={{
                            duration: .5, // Smooth transition duration
                            ease: "easeInOut", // Smooth easing
                        }}
                    >
                        <Image src={images[index]} className="h-full w-full" alt={`icon-${index}`} />
                    </motion.div>
                );
            })}
        </motion.div>
    );
}

export default CircleAnimation