import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
  image: string;
  heading: string;
  subheading: string;
  icon: any
  href: string;
}

const PageCard = ({ image, heading, subheading, icon, href }: Props) => {
  return (
    <Link href={href} className='bg-white rounded-md p-4 flex flex-col justify-between w-[400px] h-[370px] duration-[200ms] hover:drop-shadow-[2px_4px_6px_rgba(0,0,0,0.20)] hover:scale-[1.02] cursor-pointer'>
      <Image src={image} alt='banner' width={368} height={100} className='rounded-sm object-contain max-h-[173px]' />
      <div className='flex items-center gap-2'>
        <div> {React.cloneElement(icon, { width: 20, height: 20 })}</div>
        <div className='text-[24px] text-[#6750a4] font-medium'>{heading.substring(0,25)}{heading.length > 25 ? "..." :""}</div>
      </div>
      <div>{subheading}</div>
      <div className='border border-[var(--primary-color)] rounded-md text-center px-5 py-2 w-fit text-[#6750a4]'>Learn More</div>
    </Link>
  )
}

export default PageCard