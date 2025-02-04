import React, { useState } from 'react'
import SparkleImg from "/public/sparkle.png";
import Image from 'next/image';
import GridImageTwo from "/public/usecase_grid.png"
import LeftArrow from '/public/LeftArrow.svg'
import RightArrow from '/public/RightArrow.svg'


const HowWeAreHelpful = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0)
	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + 8) % 8); // Loop to last item if at start
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % 8); // Loop back to 0
	};
	return (
		<div className='w-[87%] flex justify-between'>
			<div className='flex flex-col gap-4 w-[40%] items-start max-[1000px]:w-[30%]'>
				<div className="text-sm font-medium border border-color rounded-xl py-1 px-7">HOW ARE WE HELPFUL</div>
				<div className='text-[64px] leading-[70px] max-[1000px]:text-[48px] max-[1000px]:leading-[54px]'>Power Your Event Intelligence</div>
				<div className='text-[var(--secondary-text-color)] text-[20px]'>Power Your Event Analysis & Strategic Insights</div>
			</div>
			<div className='relative w-[55%] flex flex-col items-center max-[1000px]:w-[60%]' style={{ backgroundImage: `url(${GridImageTwo.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
				<div className='absolute left-[-3%] top-[30%] w-[40px] h-[40px] flex items-center justify-center bg-white rounded-[40px] drop-shadow-[2px_4px_6px_rgba(0,0,0,0.20)] cursor-pointer' onClick={handlePrev}>
					<Image src={LeftArrow} alt='left' />
				</div>
				<div className='w-[80%] flex items-center justify-between'>
					<Image src={SparkleImg} alt="star" height={30} width={30} className='max-[775px]:hidden' />
					<div className='text-[var(--primary-color)] font-medium text-[24px]'>Robust Filtering</div>
					<Image src={SparkleImg} alt="star" height={30} width={30} className='max-[775px]:hidden' />
				</div>
				<div className='text-lg w-[80%] mt-7'>
					Search by category, keywords, location, size, or format to capture exactly what you need.
				</div>
				<div>

				</div>
				<div className='absolute right-[-3%] top-[30%] w-[40px] h-[40px] flex items-center justify-center bg-white rounded-[40px] drop-shadow-[2px_4px_6px_rgba(0,0,0,0.20)] cursor-pointer' onClick={handleNext}>
					<Image src={RightArrow} alt='right' />
				</div>
			</div>
		</div>
	)
}

export default HowWeAreHelpful