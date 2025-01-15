'use client'
import React, { useState } from 'react'
import ImageOne from '/public/tracker/getmore_1.png'
import ImageTwo from '/public/tracker/getmore_2.png'
import ImageThree from '/public/tracker/getmore_3.png'
import SolutionComponent from './SolutionComponent'
import { motion, AnimatePresence } from 'framer-motion';

const Scroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };
  const data = [
    { solution: "First Solution", image: ImageOne },
    { solution: "Second Solution", image: ImageTwo },
    { solution: "Third Solution", image: ImageThree },
  ]
  return (
    <div className="w-full max-w-lg">
      <div className="relative h-96 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <SolutionComponent
              solution={data[currentIndex].solution}
              image={data[currentIndex].image}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              } transition-colors duration-300`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Scroll