import React from 'react'
import HeroBanner from './HeroBanner'
import { usePathname } from "next/navigation";
import { geoSolutionsjsonData } from "../../../data/geoSolutionsData";
const Section = () => {
  const pathname = usePathname();
  const endpoint = pathname.split("/").pop()?.toLowerCase();

  const usecaseData = geoSolutionsjsonData.find((item) => {
    return item.id.toLowerCase() === endpoint;
  });

  // Fallback data if no match is found
  const defaultData = {
    image: geoSolutionsjsonData[0].image,
    text: "Default Item",
    subtext: "Default Description",
  };

  const dataToDisplay: any = usecaseData || defaultData;

  return (
    <div className='w-[80%]'>
        <HeroBanner heading={dataToDisplay.text} subHeading={dataToDisplay.subtext} image={dataToDisplay.image}/>
    </div>
  )
}

export default Section