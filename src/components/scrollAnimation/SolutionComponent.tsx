import Image, { StaticImageData } from 'next/image';
import React from 'react'
import ArrowImg from '/public/Arrow-2.svg'
import { motion } from 'framer-motion';

interface Props {
  heading: string;
  subHeading: string;
  imageOne: StaticImageData
  imageTwo: StaticImageData
}

const SolutionComponent = ({ heading, subHeading, imageOne, imageTwo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }} // Start from the left (x: -100)
      animate={{ opacity: 1, x: 0 }} // Animate to original position (x: 0)
      exit={{ opacity: 0, x: 100 }} // Exit animation: slide out to the right
      transition={{
        duration: 0.4, // Animation duration
        ease: 'easeInOut', // Smooth easing
      }}
      viewport={{ amount: 'all' }}
      className='h-[580px] flex gap-5 items-center justify-center w-full relative'>
      <div className='flex gap-5 absolute w-[30%] left-[20%]'>
        <div className='flex flex-col gap-8'>
          <div className='text-xl font-semibold'>{heading}</div>
          <div className='text-base'>{subHeading}</div>
        </div>
        <Image src={ArrowImg} alt='arrow' />
      </div>

      <motion.div
        className="border rounded-[14px] absolute right-20"
        style={{ width: '600px' }}
        viewport={{ once: true, amount: 'all' }} // trigger when the first image is in view
        initial={{ opacity: 1 }}
        whileInView={{
          opacity: 0,
          transition: { duration: .5, delay : .5 },
        }}
      >
        <Image
          src={imageOne}
          alt='first image'
          width={600}
          unoptimized
          className='object-fit'
        />
      </motion.div>

      <motion.div
        className="flex items-center justify-center rounded-[14px] absolute right-20"
        style={{ width: '600px', height: '500px' }}
        viewport={{ once: true, amount: "some" }}
        initial={{ opacity: 0, y: -100 }} 
        whileInView={{
          opacity: 1,
          y: 0, 
          transition: { duration: .5 , delay : .5}
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
    </motion.div>
  )
}

export default SolutionComponent