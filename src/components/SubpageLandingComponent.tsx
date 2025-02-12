import Footer from '@/components/Footer'
import GeneralNavbar from '@/components/GeneralNavbar'
import GetInTouch from '@/components/GetInTouch'
import React from 'react'
import PageCard from '@/components/PageCard'

interface Props {
	passedData: any;
	page: string;
	heading : string;
	subheading : string;
}

const SubpageLandingComponent = ({ passedData, page, heading, subheading }: Props) => {
	return (
		<div className='pt-[120px] flex flex-col items-center'>
			<GeneralNavbar />
			<div className='flex flex-col items-center'>
				<div className='font-bold text-[40px] text-center w-[90%] max-[850px]:text-[32px]'>This is Heading his is subheading his is subheading</div>
				<div className='text-[var(--secondary-text-color)] text-center w-[90%]'>This is subheading his is subheading his is subheading his is subheading his is subheading his is subheading </div>
				<div className='mt-10 grid grid-cols-3 gap-6 place-items-center max-[1000px]:grid-cols-2 max-[620px]:grid-cols-1'>
					{passedData.map((data: any, key: number) => (
						<PageCard heading={data.heading} subheading={data.dropText} icon={data.icon} image={page === "solutions" ? data.staticImage : data.image} href={data.href} key={key} />
					))}
				</div>
			</div>
			<GetInTouch />
			<Footer />
		</div>
	)
}

export default SubpageLandingComponent