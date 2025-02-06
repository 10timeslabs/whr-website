'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import GridImage from "/public/404_gridbackground.png";
import Lottie from 'lottie-react';
import NotFoundImage from '../../public/404.json'
import Link from 'next/link';
import LeftArrow from '/public/Left.svg'

const NotFound = () => {
	useEffect(() => {
		// Disable scrolling
		document.body.style.overflow = "hidden";

		return () => {
			// Re-enable scrolling when component unmounts
			document.body.style.overflow = "auto";
		};
	}, []);

	return (
		<div className='w-full relative flex items-center justify-center h-[100vh]'>
			<Image src={GridImage} alt="grid" className="absolute top-0 -z-[10] w-[80%]" />
			<div className='w-[87%] flex justify-evenly items-center'>
				<div className='flex flex-col gap-3'>
					<div className='text-[40px] font-bold'>Oops....</div>
					<div className='text-[32px]'>404 Page not found</div>
					<div className='text-[#4B4B4B] w-[70%]'>The URL seems to be incorrect. Try heading back to the homepage.</div>
					<Link href={"/"} className='bg-[var(--primary-color)] rounded text-[14px] text-white w-[200px] py-2 mt-5 flex items-center justify-center gap-2'>
						<Image src={LeftArrow} alt='left' />
						<span>Back to Home</span>
					</Link>
				</div>
				<div className="h-[300px]">
					<Lottie animationData={NotFoundImage} style={{ width: '100%', height: '100%' }} />
				</div>
			</div>
		</div>
	)
}

export default NotFound