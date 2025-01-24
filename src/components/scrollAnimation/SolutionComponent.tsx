import Image, { StaticImageData } from 'next/image';
import React from 'react'
// import ArrowImg from '/public/Arrow-2.svg'
import { motion } from 'framer-motion';

interface Props {
  heading: string;
  subHeading: string;
  imageOne: StaticImageData
  imageTwo: StaticImageData
  arrowImg: StaticImageData
  animationType: string;
  iconImg: StaticImageData
}

const SolutionComponent = ({ heading, subHeading, imageOne, imageTwo, arrowImg, animationType, iconImg }: Props) => {
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
      className='h-[500px] flex gap-5 items-center justify-center w-full relative'>
      <div className="flex gap-1 h-[500px] w-full absolute left-[60px]">
        <div className="flex flex-col w-[30%] gap-8 mt-[40px]">
          <Image src={iconImg} alt='icon' height={72} width={72} />
          <div className='text-xl font-semibold'>{heading}</div>
          <div className='text-base'>{subHeading}</div>
        </div>
        <Image src={arrowImg} alt='arrow' />
      </div>

      {animationType === "zoom" &&
        <div className='absolute right-20'>
          <motion.div style={{ width: '600px' }}>
            <Image
              src={imageOne}
              alt='first image'
              width={600}
              unoptimized
              className='object-fit'
            />
          </motion.div>
          <motion.div
            className="absolute top-[40%] left-[50px]"
            initial={{ scale: 1 }} // Start with no size
            animate={{ scale: 1.1 }} // Animate to full size
            transition={{ duration: 0.4, delay: .4 }} // Set the duration to 0.4 seconds
          >
            <Image
              src={imageTwo}
              alt='first image'
              width={500}
              unoptimized
              className='object-fit'
            />
          </motion.div>
        </div>}
      {animationType === "inimage" &&
        <div className='absolute right-20'>
          <motion.div style={{ width: '600px' }}>
            <Image
              src={imageOne}
              alt='first image'
              width={600}
              unoptimized
              className='object-fit'
            />
          </motion.div>
          <motion.div
            className="flex items-center absolute justify-center rounded-[14px] bottom-0"
            style={{ width: '600px', height: '500px' }}
            viewport={{ once: true, amount: "some" }}
            initial={{ y: 100 }}
            whileInView={{
              y: 0,
              transition: { duration: .5, delay: .5 }
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
        </div>
      }
      {(animationType !== "inimage" && animationType !== "zoom") &&
        <div className='absolute right-20'>
          <motion.div
            className="rounded-[14px]"
            style={{ width: '600px' }}
            viewport={{ once: true, amount: 'all' }} // trigger when the first image is in view
            initial={{ opacity: 1 }}
            whileInView={{
              opacity: animationType === "none" ? 1 : 0,
              transition: { duration: .5, delay: .5 },
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
          {animationType !== "none" && <motion.div
            className="flex items-center justify-center rounded-[14px] absolute z-10 bottom-0"
            style={{ width: '600px', height: '500px' }}
            viewport={{ once: true, amount: "some" }}
            initial={{ opacity: 0, y: animationType === "updown" ? -100 : 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: .5, delay: .5 }
            }}
          >
            <Image
              src={imageTwo}
              alt='second image'
              width={600}
              unoptimized
              className='object-fit'
            />
          </motion.div>}
        </div>
      }
    </motion.div>
  )
}

export default SolutionComponent