"use client"
import React, { useState } from 'react'
import ProblemImage from '../../../public/realworldproblems/Problemsolution.json'
import Image, { StaticImageData } from 'next/image'
import TopgridImage from '/public/realworldproblems/Problemgrid_top.png'
import BottomgridImage from '/public/realworldproblems/Problemgrid_bottom.png'
import ProblemCard from './ProblemCard'
import dynamic from 'next/dynamic'
import CoordinateImage from '/public/landingPagesSolutionImages/Coordinate.png'
import PromoteImage from '/public/landingPagesSolutionImages/promote.png'
import ResearchImage from '/public/landingPagesSolutionImages/Research.png'
import TrackerImage from '/public/landingPagesSolutionImages/Trackers.png'
import TrendsImage from '/public/landingPagesSolutionImages/Trends.png'
import LeftArrow from '/public/LeftArrow.svg'
import RightArrow from '/public/RightArrow.svg'

interface Props {
	cardData: { icon: StaticImageData, heading: string, subheading: string }[]
	route: string;
}

const ProblemContainer = ({ cardData, route }: Props) => {

	const LottieComponent = dynamic(
		() => import('@/components/LottieComponent'),
		{ ssr: false }
	)
	const EngineScroll = dynamic(
		() => import('./EngineScroll'),
		{ ssr: false }
	)

	const [currentIndex, setCurrentIndex] = useState<number>(1);
	const handlePrev = () => {
		const length = route === "geo" ? geoSolutionData.length : gtmSolutionData.length
		setCurrentIndex((prevIndex) =>
			(prevIndex - 1 + length) % length);
	};

	const handleNext = () => {
		const length = route === "geo" ? geoSolutionData.length : gtmSolutionData.length
		setCurrentIndex((prevIndex) => (prevIndex + 1) % length); // Loop back to 0
	};

	const geoSolutionData = [
		{ heading: "Unified, Verified Data", subheading: "We consolidate events from multiple channels, clean them with AI+human checks, and deliver a single, trusted feed—no more guesswork or scattered listings", image: ResearchImage },
		{ heading: "Accurate Forecasting", subheading: "GEO aggregates upcoming & forecasted events, quantifies footfall, and helps you plan staffing, pricing, and inventory with confidence", image: TrendsImage },
		{ heading: "Real-Time Collaboration", subheading: "Receive instant updates on new or changing events. Coordinate via built-in trackers and notes, preventing chaos and capturing fresh business opportunities well ahead of time", image: CoordinateImage },
		{ heading: "Location-Focused Insights", subheading: "Define polygons or entire cities; filter by event size, type, inbound scores—so you can strategically deploy on-ground marketing and staffing for higher returns", image: TrackerImage }
	]
	const gtmSolutionData = [
		{ heading: "Smart Event Discovery", subheading: "The right event isn’t always the biggest. Access enriched B2B event data with 20+ smart filters and proprietary scores—no more messy spreadsheets", image: ResearchImage },
		{ heading: "Co-ordinate Efficiently", subheading: "Simplify team and event planner communication with an all-in-one event management tool. Share event details, reduce confusion, and seamlessly coordinate participation, proposals, and negotiations—all in one dashboard", image: CoordinateImage },
		{ heading: "Promote Strategically", subheading: "Promote events with branded widgets, custom pages, and seamless asset integration. Engage prospects and share effortlessly with custom links", image: PromoteImage },
		{ heading: "Track Actively", subheading: "Track event participation, ROI, and feedback in a single dashboard. Manage reports, teams, and strategies seamlessly across geographies", image: TrackerImage }
	]

	return (
		<div className='w-full flex items-center justify-center relative'>
			<Image src={TopgridImage} alt='grid' className='absolute top-0 -z-[10] max-[600px]:hidden' />
			<Image src={BottomgridImage} alt='grid' className='absolute bottom-[20%] -z-[10] max-[600px]:hidden' />
			<div className='w-[87%] flex mt-[110px] justify-between max-[1000px]:flex-col'>
				<div className='flex flex-col w-[25%] gap-8 max-[1000px]:w-[100%] max-[1000px]:gap-4'>
					<div className='text-[64px] leading-[70px]'>Real World Problems</div>
					<div className='text-[20px] text-[var(--secondary-text-color)]'>A billion people go, do we know when, why, whr?</div>
					<div className='max-[1000px]:hidden'>
						<LottieComponent lottieData={ProblemImage} height={484}/>
					</div>
					{/* <Image src={ProblemImage} alt='prob' width={220} className='max-[1000px]:hidden' /> */}
					<div className='text-[64px] leading-[70px] max-[1000px]:hidden max-[1200px]:text-[48px] max-[1200px]:leading-[55px]'>
						{route === "home" ? "Wht, Whn, " : route === "geo" ? geoSolutionData[currentIndex].heading : gtmSolutionData[currentIndex].heading}
						{route === "home" && <span className='bg-gradient-to-r from-[#EE1CC082] via-[#7757DE] to-[#DD18FD40] bg-clip-text text-transparent'>Whr?</span>}
					</div>
					<div className='text-[var(--secondary-text-color)] text-[20px] max-[1000px]:hidden max-[1200px]:text-[16px]'>
						{route === "home" ? "Built with billions of signals, millions of sources, thousands of models to answer real questions" : route === "geo" ? geoSolutionData[currentIndex].subheading : gtmSolutionData[currentIndex].subheading}
					</div>
				</div>
				<div className='w-[60%] flex flex-col gap-4 max-[1000px]:w-[100%] max-[1000px]:justify-center'>
					<div className="grid grid-cols-2 gap-4 max-[1000px]:mt-8 max-[700px]:grid-cols-1">
						{cardData.map((problem, key) => (
							<ProblemCard
								key={key}
								icon={problem.icon}
								heading={problem.heading}
								subheading={problem.subheading}
							/>
						))}
					</div>
					<div className='text-[64px] leading-[64px] hidden max-[1000px]:block mt-5'>
						{route === "home" ? "Wht, Whn, " : route === "geo" ? geoSolutionData[currentIndex].heading : gtmSolutionData[currentIndex].heading}
						{route === "home" && <span className='bg-gradient-to-r from-[#EE1CC082] via-[#7757DE] to-[#DD18FD40] bg-clip-text text-transparent'>Whr?</span>}
					</div>
					<div className='text-[var(--secondary-text-color)] text-[20px] hidden max-[1000px]:block'>
						{route === "home" ? "Built with billions of signals, millions of sources, thousands of models to answer real questions" : route === "geo" ? geoSolutionData[currentIndex].subheading : gtmSolutionData[currentIndex].subheading}
					</div>
					{route === "home" && <div className='w-full h-[500px]'><EngineScroll /></div>}
					{route !== "home" &&
						<div className='w-full relative'>
							<div className='absolute left-[-6%] top-[50%] w-[40px] h-[40px] flex items-center justify-center bg-white rounded-[40px] drop-shadow-[2px_4px_6px_rgba(0,0,0,0.20)] cursor-pointer max-[575px]:h-[25px] max-[575px]:w-[25px]' onClick={handlePrev}>
								<Image src={LeftArrow} alt='left' />
							</div>
							<Image src={route === "geo" ? geoSolutionData[currentIndex].image : gtmSolutionData[currentIndex].image} alt='banner' />
							<div className='absolute right-[-6%] top-[50%] w-[40px] h-[40px] flex items-center justify-center bg-white rounded-[40px] drop-shadow-[2px_4px_6px_rgba(0,0,0,0.20)] cursor-pointer max-[575px]:h-[25px] max-[575px]:w-[25px]' onClick={handleNext}>
								<Image src={RightArrow} alt='right' />
							</div>
						</div>
					}
				</div>
			</div>
		</div>
	)
}

export default ProblemContainer