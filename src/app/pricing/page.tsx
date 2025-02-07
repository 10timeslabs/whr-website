import Footer from '@/components/Footer'
import GetInTouch from '@/components/GetInTouch'
import HomeNavbar from '@/components/HomeNavbar'
import PriceCard from '@/components/pricing/PriceCard'
import React from 'react'

const Page = () => {

	const pricingPlans = [
		{ name: "Basic", price: "$10", features: ["Feature 1", "Feature 2"], per: "/month" },
		{ name: "Standard", price: "$20", features: ["Feature 1", "Feature 2", "Feature 3"], per: "/month" },
		{ name: "Premium", price: "$50", features: ["Feature 1", "Feature 2", "Feature 3", "Feature 5"], per: "/month" },
		{ name: "Enterprise", price: "Custom", features: ["All Features"], per: "/month" }
	];
	return (
		<div className='flex flex-col items-center'>
			<HomeNavbar />
			<div className='flex flex-col mt-[120px] justify-center w-[87%] gap-4'>
				<div className='w-full flex items-center justify-center gap-4'>
					{pricingPlans.map((data, key) => (
						<div className='flex-1'>
							<PriceCard key={key} data={data} isActive={key === 2 ? true : false}/>
						</div>
					))}
				</div>
			</div>
			<GetInTouch />
			<Footer />
		</div>
	)
}

export default Page