"use client"
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';


interface Props {
    heading: string;
    words: string[]
}

const HeadingtextAnimation = ({ heading, words }: Props) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Change word every 2 seconds

        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className='flex justify-center w-[90%] text-[56px] leading-[60px] font-medium flex-wrap max-[600px]:text-[48px]'>
            <h1 className='flex'>
            <div>{heading}</div>
            <div className="overflow-hidden h-[60px] ml-2">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={words[index]} // Key helps AnimatePresence track changes
                        initial={{ y: 50 }}
                        animate={{ y: 0}}
                        exit={{ y: -50}}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-gradient-to-r from-[#EE1CC082] via-[#7757DE] to-[#DD18FD40] bg-clip-text text-transparent font-semibold"
                    >
                        {words[index]}
                    </motion.div>
                </AnimatePresence>
            </div>
            </h1>
        </div>
    )
}

export default HeadingtextAnimation