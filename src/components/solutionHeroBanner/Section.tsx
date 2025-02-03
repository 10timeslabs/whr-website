


import React from "react";
import HeroBanner from "./HeroBanner";
import { usePathname } from "next/navigation";
import { geoSolutionsjsonData } from "../../../data/geoSolutionsData";
import { gtmSolutionsjsonData } from '../../../data/gtmSolutionsdata';

const Section = () => {
  const pathname = usePathname();

  // Determine data source based on the pathname
  let dataSource = null;
  if (pathname.includes("/geo/solutions")) {
    dataSource = geoSolutionsjsonData;
  } else if (pathname.includes("/gtm/solution")) {
    dataSource = gtmSolutionsjsonData;
  } 
  // else{
  //   dataSource =
  // }

  const endpoint = pathname.split("/").pop()?.toLowerCase();

  const usecaseData = dataSource?.find((item) => item.id.toLowerCase() === endpoint);

  const defaultData = {
    image: dataSource?.[0]?.image || "",
    text: "Default Item",
    subtext: "Default Description",
  };

  const dataToDisplay = usecaseData || defaultData;

  return (
    <div className="w-[87%]">
      <HeroBanner
        heading={dataToDisplay.text}
        subHeading={dataToDisplay.subtext}
        image={dataToDisplay.image}
      />
    </div>
  );
};

export default Section;
