'use client'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import Footer from '@/components/Footer'
import GetInTouch from '@/components/GetInTouch'
import HomeNavbar from '@/components/HomeNavbar'
import PriceCard from '@/components/pricing/PriceCard'
import { AnimatePresence, motion } from 'framer-motion'
import TickIcon from '/public/priceTick.svg'
import DownArrow from '/public/DownArrowBold.svg'
import Image from 'next/image'
import PricingData from '../../../public/pricing-Data.json'

const Page = () => {
	// State to track open/closed tables
	const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
	const [isSticky, setIsSticky] = useState(false);
	const headerRef = useRef<HTMLDivElement | null>(null);
	const tableRef = useRef<HTMLDivElement | null>(null);
	const [headerOffset, setHeaderOffset] = useState(0);
	const [isYearly, setIsYearly] = useState<boolean>(false)

	// Toggle function
	const toggleSection = (category: string) => {
		setOpenSections((prev) => ({ ...prev, [category]: !prev[category] }));
	};
	useEffect(() => {
		if (headerRef.current) {
			setHeaderOffset(headerRef.current.offsetTop); // Store initial offset
		}

		const handleScroll = () => {
			const scrollY = window.scrollY;
			const tableBottom = tableRef.current
				? tableRef.current.getBoundingClientRect().bottom + window.scrollY
				: 0;

			if (scrollY > headerOffset) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}

			// When user scrolls past the table, show the navbar again
			if (scrollY >= tableBottom - 100) {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [headerOffset]);

	const pricingPlans = [
		{
			name: "Essential", price: 10,
			features: ["Global Event Search", "Global Company Search", "Global People Search", "Basic Event Tracker",
				"Event Pipeline Management", "Event Outreach CRM", "Past Participation Tracking", "No Ads & Event Promotions", "Search events beyond 6 months"], per: "per month"
		},
		{
			name: "Scale", price: 100,
			features: ["Eveything in Essential +", "Advance Event Search", "Advance People Search", "Advance Company Search", "Advance Trackers", "Trends & Reports Access", "Team Coordinate", "Past & Forecasted Events"], per: "per month"
		},
		{
			name: "Advance", price: 1000,
			features: ["Eveything in Scale +", "Priority Support", "Unlimited User-access", "Event Relevance Scoring ", "Embedable Custom Domain", "Advance Trend & Report Access", "Export Function", "Browser & Email Extension"], per: "per month"
		},
		{
			name: "Enterprise", price: 0,
			features: ["Eveything in Advance +", "Advance Outreach & Conceirge", "API Access", "Dedicated Support", "Custom Reports & Intel", "Unlimited Advance Trackers", "SSO & Integrations", "AI Event Strategist"], per: "per month"
		}
	];
	const togglePricing = () => {
		setIsYearly(!isYearly);
	};

	return (
		<div className='flex flex-col items-center'>
			<div className={`${isSticky ? "hidden" : "block"}`}><HomeNavbar /></div>
			<div className='flex flex-col mt-[120px] justify-center w-[87%] gap-10'>
				<div className='flex flex-col items-center'>
					<span className='bg-gradient-to-r from-[#EE1CC082] via-[#7757DE] to-[#DD18FD40] bg-clip-text text-transparent text-[60px] leading-[65px] font-medium w-fit '><h1>Pricing</h1></span>
					<span className='text-[20px] text-[var(--secondary-text-color)]'>Empower Real-World Intelligence with Whr</span>
				</div>
				{/* Toggle Switch */}
				<div className="flex justify-center items-center gap-4 mb-2 text-[18px]">
					<span className={` ${isYearly ? "text-gray-400" : "text-[var(--primary-color)] font-semibold"}`}>Monthly</span>
					<div
						className="relative w-14 h-8 bg-white drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] rounded-full cursor-pointer p-1 transition-all duration-300"
						onClick={togglePricing}
					>
						<div
							className={`absolute w-6 h-6 bg-[var(--primary-color)] rounded-full shadow-md transform transition-all duration-300 ${isYearly ? "translate-x-6" : "translate-x-0"
								}`}
						/>
					</div>
					<div className="flex items-center gap-2">
						<span className={isYearly ? "text-[var(--primary-color)] font-semibold" : "text-gray-400"}>Annually</span>
						<span className='text-[14px] border border-[#6750a4] rounded-lg px-3'>20% Off</span>
					</div>
				</div>
				<div className="w-full gap-4 grid grid-cols-4 max-[1300px]:grid-cols-2 max-[650px]:grid-cols-1">
					{pricingPlans.map((data, key) => (
						<motion.div
							key={key}
							className="flex-1"
							initial={{ x: '-80%', opacity: 0 }} // Start off-screen to the left
							whileInView={{ x: 0, opacity: 1 }} // Animate into position when in viewport
							transition={{ duration: 0.6, delay: key * 0.2, ease: 'easeOut' }} // Delay each card slightly
							viewport={{ once: true }} // Only animate once
						>
							<Suspense>
								<PriceCard data={data} isActive={key === 2} isAnually={isYearly} />
							</Suspense>
						</motion.div>
					))}
				</div>
				<div className='w-full flex flex-col items-center'>
					<div className='text-[#171717] font-medium text-[36px]'>Find the right plan for you</div>
					<div className='font-medium text-[var(--secondary-text-color)]'>Unclock the event potential.</div>
				</div>
				{/* COMPARISON TABLE */}
				<div className="w-full">
					{/* Sticky Header */}
					<div ref={headerRef} className={`drop-shadow-md border-b-[3px] border-[#6750A4] bg-white transition-all duration-300 ${isSticky ? "fixed top-[0px] z-50 w-[87%]" : "relative w-full"}`}>
						<div className="flex">
							{/* Feature Column (2/5 width) */}
							<div className="p-3 text-left text-[20px] w-2/5 font-bold max-[760px]:hidden">Feature</div>

							{/* Plan Columns (Each 1/5 width) */}
							{Object.keys(PricingData.plans).map((plan: any) => (
								<div key={plan} className="p-3 text-[20px] text-center w-1/5 font-semibold max-[760px]:w-1/4 max-[620px]:text-[16px] max-[480px]:text-[12px]">{plan}</div>
							))}
						</div>
					</div>
					<div ref={tableRef}>
						{Object.entries(PricingData.headingFeatures).map(([category, { features, values }]) => (
							<div key={category}>
								{/* Section Heading */}
								<div
									className="cursor-pointer text-xl font-bold border-b pb-2 flex justify-between items-center h-[80px] max-[480px]:font-semibold"
									onClick={() => toggleSection(category)}
								>
									<span className='text-[18px] w-2/5 max-[767px]:w-full'>{category}</span>
									{values.map((value, key) => (
										<div key={key} className='w-1/5 text-center text-[18px] font-medium max-[767px]:hidden'>{value}</div>
									))}
									<Image
										src={DownArrow}
										alt="down"
										className={`transform transition-transform duration-300 ${openSections[category] ? "rotate-180" : ""
											}`}
									/>
								</div>
								<div className='flex items-center font-medium border'>
								{values.map((value, key) => (
									<div key={key} className='w-1/4 text-center text-[18px] hidden max-[767px]:block'>{value}</div>
								))}
								</div>

								{/* Table */}
								<AnimatePresence>
									{openSections[category] &&
										(
											<motion.div
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: openSections[category] ? "max-content" : 0, opacity: openSections[category] ? 1 : 0 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.4, ease: "easeInOut" }}
												className="overflow-hidden"
											>
												<table className="w-full border-collapse table-fixed">
													{/* Table Body */}
													<tbody>
														{features.map((feature) => (
															<>
																{/* Standard Row for Larger Screens */}
																<tr key={feature} className="border hidden md:table-row">
																	{/* Feature Name (Wider Column) */}
																	<td className="border p-3 font-medium w-2/5 max-w-[300px] break-words max-[930px]:text-[14px]">
																		{feature}
																	</td>

																	{/* Feature Values Per Plan (Equal Widths) */}
																	{Object.entries(PricingData.plans).map(([plan, planData]: [string, any]) => {
																		const value = planData[category]?.[feature];

																		return (
																			<td key={plan} className="border p-3 text-center w-1/5 max-[930px]:text-[14px]">
																				{typeof value === "boolean" ? (value ? "✅" : "-") : value ?? "—"}
																			</td>
																		);
																	})}
																</tr>

																{/* Responsive Row Format (Stacks on Small Screens) */}
																<tr key={`${feature}-mobile`} className="border md:hidden block w-full">
																	<td className="border-b p-3 font-medium w-full block bg-gray-100">
																		{feature}
																	</td>

																	<td className="w-full flex justify-between px-3 py-2">
																		{Object.entries(PricingData.plans).map(([plan, planData]: [string, any]) => {
																			const value = planData[category]?.[feature];

																			return (
																				<div key={plan} className="w-1/4 text-center text-sm max-[500px]:text-[12px]">
																					{/* <div className="font-bold">{plan}</div> */}
																					<div className="mt-1">{typeof value === "boolean" ? (value ? "✅" : "-") : value ?? "—"}</div>
																				</div>
																			);
																		})}
																	</td>
																</tr>
															</>
														))}
													</tbody>
												</table>


											</motion.div>)}
								</AnimatePresence>
							</div>
						))}
					</div>
				</div>

			</div>
			<GetInTouch />
			<Footer />
		</div>
	)
}

export default Page