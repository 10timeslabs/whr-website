"use client"
import React from 'react'
import LeafIcon from "/public/leafIcon.svg";
import Image, { StaticImageData } from 'next/image';

interface Props {
  heading: string;
  subheading: string;
  icon : StaticImageData;
}

const DataCard = ({ heading, subheading, icon }: Props) => {
  return (
    <div className='bg-white w-full rounded-2xl border border-[var(--border-color)] p-8 flex flex-col items-start gap-[25px] h-[300px] text-[24px] max-[1440px]:text-[20px] max-[980px]:h-[200px] max-[450px]:text-[16px]'>
      <div className='flex flex-col gap-[25px] max-[1130px]:flex-row max-[1130px]:items-center max-[1130px]:gap-2'>
        <Image src={icon} alt='leaf' className='w-[55px] max-[1440px]:w-[45px]' />
        <div>{heading}</div>
      </div>
      <div className='text-[var(--tertiary-text-color)]'>{subheading}</div>
    </div>
  )
}

export default DataCard