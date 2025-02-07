"use client"
import React from 'react'
import SparkleImg from "/public/sparkle.png";
import Image from 'next/image';
import DataCard from './DataCard';
import { geoProductJsonData } from "../../../data/geoProductData";
import { gtmProductJsonData } from "../../../data/gtmProductData";
import { usePathname } from "next/navigation";

const HelpfulContainer = () => {

	const pathname = usePathname();
	let dataSource = null;
	if (pathname.includes("/geo/product")) {
		dataSource = geoProductJsonData;
	} else if (pathname.includes("/gtm/product")) {
		dataSource = gtmProductJsonData;
	}

	const endpoint = pathname.split("/").pop()?.toLowerCase();

	const productData = dataSource?.find((item: any) => item.id.toLowerCase() === endpoint);

	const formattedData = productData?.how.map((item) => {
		const [heading, subheading] = item.content.split(":").map((str) => str.trim());
		return {icon : item.icon, heading, subheading };
	  });

	return (
		<div className='w-[87%] flex flex-col justify-center items-center gap-10'>
			<div className='w-[70%] flex justify-between items-start'>
				<Image src={SparkleImg} alt="star" height={38} width={38} className='max-[775px]:hidden' />
				<div className='flex flex-col items-center'>
					<span className='text-[40px] text-center'>How are we helpful</span>
					<span className='text-[20px] text-[var(--secondary-text-color)] text-center'>A billion people go, do we know when, why, whr?</span>
				</div>
				<Image src={SparkleImg} alt="star" height={38} width={38} className='max-[775px]:hidden' />
			</div>
			<div className='flex justify-between gap-[40px] max-[980px]:flex-col w-full'>
				{formattedData?.map((item, key) => (
					<div key={key} className='flex-1 max-[980px]:flex-none max-[980px]:w-full'>
						<DataCard heading={item.heading} subheading={item.subheading} icon={item.icon}/>
					</div>
				))}
			</div>

		</div>
	)
}

export default HelpfulContainer