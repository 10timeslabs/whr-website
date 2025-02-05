


import React from "react";
import HeroBanner from "./HeroBanner";
import { usePathname } from "next/navigation";
import { geoSolutionsjsonData } from "../../../data/geoSolutionsData";
import { geoProductJsonData } from "../../../data/geoProductData";
import { gtmSolutionsjsonData } from "../../../data/gtmSolutionsdata";
import { gtmProductJsonData } from "../../../data/gtmProductData";

const Section = () => {
  const pathname = usePathname();
  let dataSource = null;
  if (pathname.includes("/geo/solutions")) {
    dataSource = geoSolutionsjsonData;
  } else if (pathname.includes("/gtm/solutions")) {
    dataSource = gtmSolutionsjsonData;
  } else if (pathname.includes("/geo/product")) {
    dataSource = geoProductJsonData;
  } else if (pathname.includes("/gtm/product")) {
    dataSource = gtmProductJsonData
  }

  const endpoint = pathname.split("/").pop()?.toLowerCase();

  const usecaseData = dataSource?.find((item: any) => item.id.toLowerCase() === endpoint);

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
