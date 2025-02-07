'use client'
import Footer from '@/components/Footer'
import GetInTouch from '@/components/GetInTouch'
import HomeNavbar from '@/components/HomeNavbar'
import PriceCard from '@/components/pricing/PriceCard'
import { motion } from 'framer-motion'
import React from 'react'

const Page = () => {

	const pricingPlans = [
		{ name: "Basic", price: "$10", features: ["Feature 1", "Feature 2"], per: "per month" },
		{ name: "Standard", price: "$20", features: ["Feature 1", "Feature 2", "Feature 3"], per: "per month" },
		{ name: "Premium", price: "$50", features: ["Feature 1", "Feature 2", "Feature 3", "Feature 5"], per: "per month" },
		{ name: "Enterprise", price: "Custom", features: ["All Features"], per: "per month" }
	];
	return (
		<div className='flex flex-col items-center'>
			<HomeNavbar />
			<div className='flex flex-col mt-[120px] justify-center w-[87%] gap-10'>
				<div className='flex flex-col'>
					<span className='bg-gradient-to-r from-[#EE1CC082] via-[#7757DE] to-[#DD18FD40] bg-clip-text text-transparent text-[60px] leading-[65px] font-medium w-fit'>Pricing</span>
					<span className='text-[20px] text-[var(--secondary-text-color)]'>Empower Real-World Intelligence with Whr</span>
				</div>
				<div className='w-full flex items-center justify-center gap-4'>
					{pricingPlans.map((data, key) => (
						<motion.div
						key={key}
						className="flex-1"
						initial={{ x: '-80%', opacity: 0 }} // Start off-screen to the left
						whileInView={{ x: 0, opacity: 1 }} // Animate into position when in viewport
						transition={{ duration: 0.6, delay: key * 0.2, ease: 'easeOut' }} // Delay each card slightly
						viewport={{ once: true }} // Only animate once
					>
						<PriceCard data={data} isActive={key === 2} />
					</motion.div>
					))}
				</div>
				<div className='w-full flex flex-col items-center'>
					<div className='text-[#171717] font-medium text-[36px]'>Find the right plan for you</div>
					<div></div>
				</div>
				<div className="bg-white rounded-lg shadow-md border border-[var(--primary-color)] overflow-hidden">
					<table className="w-full border-collapse">
						{/* Table Header */}
						<thead>
							<tr className="bg-[var(--primary-light-color)]">
								<th className="p-3 text-left">Features</th>
								{pricingPlans.map((data, key) => (
									<th key={key} className="p-3 text-center">{data.name}</th>
								))}
							</tr>
						</thead>

						{/* Table Body */}
						<tbody>
							<tr>
								<td className="p-3">Feature 1</td>
								<td className="p-3 text-center">✅</td>
								<td className="p-3 text-center">✅</td>
								<td className="p-3 text-center">✅</td>
								<td className="p-3 text-center">✅</td>
							</tr>
							<tr>
								<td className="p-3">Feature 2</td>
								<td className="p-3 text-center">✅</td>
								<td className="p-3 text-center">✅</td>
								<td className="p-3 text-center">✅</td>
								<td className="p-3 text-center">✅</td>
							</tr>
							<tr>
								<td className="p-3">Feature 3</td>
								<td className="p-3 text-center"></td>
								<td className="p-3 text-center">✅</td>
								<td className="p-3 text-center">✅</td>
								<td className="p-3 text-center">✅</td>
							</tr>
							<tr>
								<td className="p-3">Feature 4</td>
								<td className="p-3 text-center"></td>
								<td className="p-3 text-center"></td>
								<td className="p-3 text-center">✅</td>
								<td className="p-3 text-center">✅</td>
							</tr>
							<tr>
								<td className="p-3">Feature 5</td>
								<td className="p-3 text-center"></td>
								<td className="p-3 text-center"></td>
								<td className="p-3 text-center"></td>
								<td className="p-3 text-center">✅</td>
							</tr>
						</tbody>
					</table>
				</div>

			</div>
			<GetInTouch />
			<Footer />
		</div>
	)
}

export default Page