import React from 'react'
import SparkleImg from "/public/sparkle.png";
import Image from 'next/image';

const BeniftsSection = () => {
	const data = ["Draw polygons or pick entire cities.", "Boost ROI with relevant filters.", "Flexible viewing formats"]
	return (
		<div className='w-[87%] flex justify-center items-start gap-5'>
			<div className='flex flex-col w-[40%] gap-5'>
				<span className='text-[64px] leading-[70px]'>Benefits & Highlights</span>
				<span className='text-[20px] text-[var(--secondary-text-color)]'>A billion people go, do we know when, why, whr?</span>
			</div>
			<div className='w-[60%] flex flex-col gap-4'>
				{data.map((item, key) => (
					<div className={`w-full flex ${key === 1 ? "justify-end" : "justify-start"}`} key={key}>
						<div className='w-[500px] bg-white rounded-2xl border border-[var(--border-color)] flex items-center gap-4 p-4'>
							<Image src={SparkleImg} alt='sparkle' width={38} height={38}/>
							<span className='font-medium text-xl'>{item}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default BeniftsSection