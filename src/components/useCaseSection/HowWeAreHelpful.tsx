'use client'
import React, { useState } from 'react'
import SparkleImg from "/public/sparkle.png";
import Image from 'next/image';
import GridImageTwo from "/public/usecase_grid.png"
import LeftArrow from '/public/LeftArrow.svg'
import RightArrow from '/public/RightArrow.svg'
import { gtmUsecasesjsonData } from "../../../data/gtmUsecasesData";
import { usePathname } from "next/navigation";

const HowWeAreHelpful = () => {
	const pathname = usePathname();

	const endpoint = pathname.split("/").pop()?.toLowerCase();
	let dataSource = null;
	if (pathname.includes("/gtm/usecases")) {
		dataSource = gtmUsecasesjsonData
	} else {
		dataSource = gtmUsecasesjsonData
	}
	const usecaseData = dataSource.find((item) => {
		return item.id.toLowerCase() === endpoint;
	});
	const how_helpfulData = usecaseData?.how;
	const carouselData = how_helpfulData?.content

	const [currentIndex, setCurrentIndex] = useState<number>(0)
	const handlePrev = () => {
		if (!carouselData || carouselData.length === 0) return; // Prevent errors if data is undefined or empty

		setCurrentIndex((prevIndex) =>
			(prevIndex - 1 + carouselData.length) % carouselData.length
		);
	};

	const handleNext = () => {
		if (!carouselData || carouselData.length === 0) return;
		setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData?.length); // Loop back to 0
	};
	return (
		<div className='w-[87%] flex justify-between'>
			<div className='flex flex-col gap-4 w-[40%] items-start max-[1000px]:w-[30%]'>
				<div className="text-sm font-medium border border-color rounded-xl py-1 px-7">HOW ARE WE HELPFUL</div>
				<div className='text-[64px] leading-[70px] max-[1000px]:text-[48px] max-[1000px]:leading-[54px]'>{how_helpfulData?.heading}</div>
				<div className='text-[var(--secondary-text-color)] text-[20px]'>{how_helpfulData?.subheading}</div>
			</div>
			<div className='relative w-[55%] flex flex-col items-center min-h-[250px] max-[1000px]:w-[60%]' style={{ backgroundImage: `url(${GridImageTwo.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
				<div className='absolute left-[-3%] top-[50%] w-[40px] h-[40px] flex items-center justify-center bg-white rounded-[40px] drop-shadow-[2px_4px_6px_rgba(0,0,0,0.20)] cursor-pointer' onClick={handlePrev}>
					<Image src={LeftArrow} alt='left' />
				</div>
				<div className='w-[80%] flex items-center justify-between'>
					<Image src={SparkleImg} alt="star" height={30} width={30} className='max-[775px]:hidden' />
					<div className='text-[var(--primary-color)] font-medium text-[24px]'>
						{carouselData && carouselData[currentIndex].heading}</div>
					<Image src={SparkleImg} alt="star" height={30} width={30} className='max-[775px]:hidden' />
				</div>
				<div className='text-lg w-[80%] mt-7 flex flex-col gap-3'>
					{carouselData && carouselData[currentIndex].points.map((data, key) => (
						<div key={key}>{data}</div>
					))}
				</div>
				<div>

				</div>
				<div className='absolute right-[-3%] top-[50%] w-[40px] h-[40px] flex items-center justify-center bg-white rounded-[40px] drop-shadow-[2px_4px_6px_rgba(0,0,0,0.20)] cursor-pointer' onClick={handleNext}>
					<Image src={RightArrow} alt='right' />
				</div>
			</div>
		</div>
	)
}

export default HowWeAreHelpful