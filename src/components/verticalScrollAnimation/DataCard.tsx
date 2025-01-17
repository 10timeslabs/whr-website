import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Props{
    icon : StaticImageData;
    heading : string;
    subHeading : string;
}

const DataCard = ({icon, heading, subHeading} : Props) => {
  return (
    <div className='bg-white rounded-[20px] border border-[var(--border-color)] p-5 shadow-md h-[166px] w-[527px] flex items-center justify-center gap-5'>
        <Image src={icon} alt='icon'/>
        <div className='flex flex-col gap-2 text-[#010D3E]'>
            <div className='text-[18px] font-semibold'>{heading}</div>
            <div>{subHeading}</div>
        </div>
    </div>
  )
}

export default DataCard