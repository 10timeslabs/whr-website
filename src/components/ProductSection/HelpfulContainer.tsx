import React from 'react'
import SparkleImg from "/public/sparkle.png";
import Image from 'next/image';
import DataCard from './DataCard';

const HelpfulContainer = () => {

	const data = [
		{ heading: "Search by Geo", subheading: "Draw polygons or pick entire cities." },
		{ heading: "Filter by Types", subheading: "Business, social, or unplanned events." },
		{ heading: "View Flexibly", subheading: "Table, card, map, or calendar." },
	]
	return (
		<div className='w-[87%] flex flex-col justify-center items-center gap-10'>
			<div className='w-[70%] flex justify-between items-start'>
				<Image src={SparkleImg} alt="star" height={38} width={38} className='max-[775px]:hidden' />
				<div className='flex flex-col items-center'>
					<span className='text-[40px] text-center'>How are we helpful</span>
					<span className='text-[20px] text-[var(--secondary-text-color)] text-center'>A billion people go, do we know when, why, whr?</span>
				</div>
				<Image src={SparkleImg} alt="star" height={38} width={38} className='max-[775px]:hidden' />
			</div>
			<div className='flex justify-between gap-[40px] max-[980px]:flex-col w-full'>
				{data.map((item, key) => (
					<div key={key} className='flex-1 max-[980px]:flex-none max-[980px]:w-full'>
						<DataCard heading={item.heading} subheading={item.subheading} />
					</div>
				))}
			</div>

		</div>
	)
}

export default HelpfulContainer