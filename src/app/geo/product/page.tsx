import Footer from '@/components/Footer'
import GeneralNavbar from '@/components/GeneralNavbar'
import GetInTouch from '@/components/GetInTouch'
import React from 'react'
import { geoProductJsonData } from '../../../../data/geoProductData'
import PageCard from '@/components/PageCard'

const Page = () => {
	return (
		<div className='pt-[120px] flex flex-col items-center'>
			<GeneralNavbar />
			<div className='grid grid-cols-3 gap-6'>
				{geoProductJsonData.map((data, key)=>(
					<PageCard heading={data.heading} subheading={data.dropText} icon={data.icon} image={data.image} href={data.href} key={key}/>
				))}
			</div>
			<div className='w-[87%]'></div>
			<GetInTouch />
			<Footer />
		</div>
	)
}

export default Page