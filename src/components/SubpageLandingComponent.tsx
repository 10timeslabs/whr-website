import Footer from '@/components/Footer'
import GeneralNavbar from '@/components/GeneralNavbar'
import GetInTouch from '@/components/GetInTouch'
import React from 'react'
import PageCard from '@/components/PageCard'

interface Props{
  passedData : any;
  page : string;
}

const SubpageLandingComponent = ({passedData, page}: Props) => {
  return (
		<div className='pt-[120px] flex flex-col items-center'>
			<GeneralNavbar />
			<div className='grid grid-cols-3 gap-6 place-items-center max-[1000px]:grid-cols-2 max-[620px]:grid-cols-1'>
				{passedData.map((data : any, key : number)=>(
					<PageCard heading={data.heading} subheading={data.dropText} icon={data.icon} image={page === "solutions" ? data.staticImage : data.image} href={data.href} key={key}/>
				))}
			</div>
			<div className='w-[87%]'></div>
			<GetInTouch />
			<Footer />
		</div>
  )
}

export default SubpageLandingComponent