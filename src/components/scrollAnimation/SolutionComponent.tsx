import Image, { StaticImageData } from 'next/image';
import React from 'react'
import ArrowImg from '/public/Arrow-2.svg'

interface Props {
  heading: string;
  subHeading: string;
  image: StaticImageData
}

const SolutionComponent = ({ heading, subHeading, image }: Props) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col w-[30%] gap-8'>
        <div className='text-xl font-semibold'>{heading}</div>
        <div className='text-base'>{subHeading}</div>
      </div>

      <Image src={ArrowImg} alt='arrow' />
      <Image src={image} alt='img' height={300} width={300} />
    </div>
  )
}

export default SolutionComponent