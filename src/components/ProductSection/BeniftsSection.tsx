"use client"
import React from 'react'
import SparkleImg from "/public/sparkle.png";
import Image from 'next/image';
import { geoProductJsonData } from "../../../data/geoProductData";
import { gtmProductJsonData } from "../../../data/gtmProductData";
import { usePathname } from "next/navigation";

const BeniftsSection = () => {
	const pathname = usePathname();
	let dataSource = null;
	if (pathname.includes("/geo/product")) {
		dataSource = geoProductJsonData;
	} else if (pathname.includes("/gtm/product")) {
		dataSource = gtmProductJsonData;
	}

	const endpoint = pathname.split("/").pop()?.toLowerCase();
	const productData = dataSource?.find((item: any) => item.id.toLowerCase() === endpoint);
	const data = productData?.highlights
	return (
		<div className='w-[87%] flex justify-center items-start gap-5 max-[990px]:flex-col max-[990px]:items-center'>
			<div className='flex flex-col min-w-[40%] gap-5 max-[990px]:items-center max-[600px]:gap-2'>
				<span className='text-[64px] leading-[70px] max-[990px]:text-center max-[990px]:text-[50px]  max-[990px]:leading-[54px] max-[600px]:text-[40px]'>Benefits & Highlights</span>
				<span className='text-[20px] text-[var(--secondary-text-color)] max-[990px]:text-center max-[600px]:text-[16px]'>A billion people go, do we know when, why, whr?</span>
			</div>
			<div className='w-[60%] flex flex-col gap-4 max-[990px]:w-full'>
				{data?.map((item, key) => (
					<div className={`w-full flex ${key === 1 ? "justify-end" : "justify-start"}`} key={key}>
						<div className='w-[500px] bg-white rounded-2xl border border-[var(--border-color)] flex items-center gap-4 p-4'>
							<Image src={SparkleImg} alt='sparkle' width={38} height={38} />
							<span className='font-medium text-xl'>{item}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default BeniftsSection