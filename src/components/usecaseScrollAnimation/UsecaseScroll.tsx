// import React from 'react'
// import DemandImg from '/public/demandforecasting.svg'
// import SparkleImg from '/public/sparkle.png'
// import Image from 'next/image'

// const UsecaseScroll = () => {
// 	return (
// 		<div className='rounded-[20px] border border-[var(--border-color)] w-[80%] flex flex-col items-center gap-10 px-[70px] py-[40px] relative overflow-hidden'>
// 			{/* Background Radial Gradient */}
// 			<div className="absolute right-[-40%] top-0 h-full w-full -z-10" style={{
// 				background: "radial-gradient(circle, rgba(229, 221, 252, 0.6) 0%, transparent 92%)",
// 			}}></div>
// 			<div className='flex items-center justify-between w-full'>
// 				<Image src={SparkleImg} alt='star' height={38} width={38}/>
// 				<div className='text-sm font-medium border border-color rounded-xl py-1 px-7'>How are we helpful</div>
// 				<Image src={SparkleImg} alt='star' height={38} width={38}/>
// 			</div>

// 			<div className='flex items-center gap-10'>
// 				<div className='flex flex-col gap-5 text-lg'>
// 					<div>We cover all event format that impact on-ground reality and footfall. For attended events, our AI engine estimates expected footfall and it split between local versus inbound traffic from outside a specific geo-location. Additionally, our engine qualifies the economic impacts the events go have individually or as a group of events happening within a geography on a specific time period.</div>
// 					<div className='font-semibold'>How can this be used:</div>
// 					<div>a. See demand forecast and its impact over time in our trend dashboard <br />
// 						b. Consume data via an API to include in your internal prediction model</div>
// 				</div>
// 				<Image src={DemandImg} alt='img' width={428} />
// 			</div>

// 		</div>
// 	)
// }

// export default UsecaseScroll



import React from "react";
import Image, { StaticImageData } from "next/image";
import ArrowImgOne from '/public/Scroll/Arrow-1.svg'
import SparkleImg from "/public/sparkle.png";

interface Props {
  image: StaticImageData;
}

const UsecaseScroll = ({ image }: Props) => {
  return (
    <div className="h-[500px] flex flex-col items-center relative w-full overflow-hidden">
      <div className="flex flex-col items-center gap-4 justify-start w-full text-center h-[580px] absolute z-20 top-[20px]">
        <div className="text-sm font-medium border border-color rounded-xl py-1 px-7">
          How are we helpful
        </div>
        <div className="w-[70%] flex items-start justify-between">
          <Image src={SparkleImg} alt="star" height={38} width={38} />
          <div className="font-semibold text-[40px] w-[80%]">
            Geo Provides Unique Features To Unlock On ground Demand
          </div>
          <Image src={SparkleImg} alt="star" height={38} width={38} />
        </div>

        <Image src={ArrowImgOne} alt="arrow" />
      </div>
      <div
        className="absolute z-10 bottom-[-200px]"
        style={{
          // initial position, ensures it starts from below
          width: "600px", // with specific dimensions
          height: "450px", // same for height
        }}
      >
        <Image
          src={image}
          alt="img"
          width={600}
          height={450}
          // fill
          unoptimized
        />
      </div>
    </div>
  );
};

export default UsecaseScroll;
