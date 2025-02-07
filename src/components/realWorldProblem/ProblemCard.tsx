"use client"
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Props{
    icon : StaticImageData,
    heading : string;
    subheading : string;
}

const ProblemCard = ({icon, heading, subheading}: Props) => {
  return (
    <div className='bg-white rounded-[30px] p-5 flex flex-col gap-3 border border-[var(--border-color)]'>
        <div className='w-full rounded-2xl bg-[#F9F9FF] flex justify-start p-6'>
            <Image src={icon} alt='icon' height={60}/>
        </div>
        <div className='font-semibold text-lg'>{heading}</div>
        <div className='text-[var(--secondary-text-color)]'>{subheading}</div>
    </div>
  )
}

export default ProblemCard