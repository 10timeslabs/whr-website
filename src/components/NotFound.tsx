import React from 'react'
import Image from 'next/image'
import GridImage from "/public/404_gridbackground.png";
import Lottie from 'lottie-react';
import NotFoundImage from '../../public/404.json'
import LeftArrow from '/public/LeftArrow.svg'

const NotFound = () => {
	return (
		<div className='w-full relative flex pt-[170px] items-center justify-center'>
			<Image src={GridImage} alt="grid" className="absolute top-0 -z-[10] border border-red" />
			<div className='w-[87%] flex justify-evenly items-center'>
				<div className='flex flex-col gap-3'>
					<div className='text-[40px] font-bold'>Oops....</div>
					<div className='text-[32px]'>404 Page not found</div>
					<div className='text-[#4B4B4B] w-[70%]'>The URL seems to be incorrect. Try heading back to the homepage.</div>
					<button className='bg-[var(--primary-color)] rounded text-[14px] text-white w-[200px] texet-center py-2 mt-5'>
						Back to Home
					</button>
				</div>
				<div className="h-[300px]">
					<Lottie animationData={NotFoundImage} style={{ width: '100%', height: '100%' }} />
				</div>
			</div>
		</div>
	)
}

export default NotFound