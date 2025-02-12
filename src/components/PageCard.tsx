import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
  image: string | StaticImageData;
  heading: string;
  subheading: string;
  icon: any
  href: string;
}

const PageCard = ({ image, heading, subheading, icon, href }: Props) => {
  return (
    <Link href={href} className='bg-white rounded-md p-4 flex flex-col gap-[1vw] max-w-[400px] duration-[200ms] hover:drop-shadow-[2px_4px_6px_rgba(0,0,0,0.20)] hover:scale-[1.02] cursor-pointer max-[1000px]:gap-4 max-[820px]:gap-[1.5vw] max-[620px]:gap-4'>
      <Image src={image} alt='banner' width={368} height={100} className='rounded-sm object-contain max-h-[173px]' />
      <div className='flex items-center gap-2'>
        <div> {React.cloneElement(icon, { color: "#6750A4", width: 25, height: 25 })}</div>
        <div className='text-[24px] font-medium max-[1240px]:text-[2vw] max-[1000px]:text-[24px] max-[820px]:text-[3vw] max-[620px]:text-[24px]'>{heading.substring(0,25)}{heading.length > 25 ? "..." :""}</div>
      </div>
      <div className='text-[var(--secondary-text-color)] max-[1240px]:text-[1.3vw] max-[1000px]:text-[16px] max-[820px]:text-[2.3vw] max-[620px]:text-[16px]'>{subheading}</div>
      <div className='border border-[var(--primary-color)] rounded-md text-center px-5 py-2 w-fit text-[#6750a4] max-[1240px]:text-[1.3vw] max-[1000px]:text-[16px] max-[820px]:text-[2.3vw] max-[620px]:text-[16px]'>Learn More</div>
    </Link>
  )
}

export default PageCard