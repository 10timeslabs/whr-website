import React from 'react'
import LeafIcon from "/public/leafIcon.svg";
import Image from 'next/image';

interface Props{
    heading : string;
    subheading : string;
}

const DataCard = ({heading, subheading}: Props) => {
  return (
    <div className='bg-white rounded-2xl border border-[var(--border-color)] p-10 flex flex-col items-start gap-[25px]'>
        <Image src={LeafIcon} alt='leaf'/>
        <div className='text-[24px]'>{heading}</div>
        <div className='text-[var(--tertiary-text-color)] text-[24px]'>{subheading}</div>
    </div>
  )
}

export default DataCard