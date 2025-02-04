import React from 'react'
import GridImageTwo from "/public/usecase_grid.png";
import { geoProductJsonData } from "../../../data/geoProductData";
import { gtmProductJsonData } from "../../../data/gtmProductData";
import { usePathname } from "next/navigation";


const Conclusion = () => {

    const pathname = usePathname();
    let dataSource = null;
    if (pathname.includes("/geo/product")) {
        dataSource = geoProductJsonData;
    } else if (pathname.includes("/gtm/product")) {
        dataSource = gtmProductJsonData;
    }

    const endpoint = pathname.split("/").pop()?.toLowerCase();
    const productData = dataSource?.find((item: any) => item.id.toLowerCase() === endpoint);
    const heading = productData?.conclusion.heading
    const subheading = productData?.conclusion.subheading

    return (
        <div className="w-[87%] flex flex-col items-center justify-center rounded-2xl border border-[var(--border-color)] h-[256px] gap-5"
            style={{ backgroundImage: `url(${GridImageTwo.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className='text-[48px] w-[90%] text-center text-[var(--primary-color)] max-[775px]:text-[40px] max-[450px]:text-[24px]'>{heading}</div>
            <div className='w-[40%] text-center text-[20px] text-[var(--secondary-text-color)] max-[775px]:text-[16px] max-[450px]:text-[14px]'>{subheading}</div>

        </div>
    )
}

export default Conclusion