import React from "react";
import GeoComponent from "@/components/geoComponents/GeoComponents";
import { geoUsecasesjsonData } from "../../../../../data/geoUsecasesData";
import { geoSolutionsjsonData } from "../../../../../data/geoSolutionsData";
import { geoProductJsonData } from "../../../../../data/geoProductData";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";
import GeneralNavbar from "@/components/GeneralNavbar";
const Page = () => {
  return (
    <div>
      <GeoComponent />
    </div>
  );
};

export default Page;

export async function generateMetadata(context: any) {
  const { namespace, type } = await context.params;
  // console.log("content", context,namespace,type)

  let dataSource = null;
  if (namespace === "usecases") {
    dataSource = geoUsecasesjsonData;
  } else if (namespace === "solutions") {
    dataSource = geoSolutionsjsonData;
  } else if (namespace === "product") {
    dataSource = geoProductJsonData;
  }
  const geoData = dataSource?.find((item) => {
    return item.id.toLowerCase() === type;
  });

  const dataToDisplay: any = geoData;
  if (!type || !namespace || !geoData) {
    return {
      title: "404 - Not Found",
      description: "The page you are looking for does not exist.",
      openGraph: {
        title: "404 - Not Found",
        description: "The page you are looking for does not exist.",
        images: [], // You can include a default 404 image if desired
        // url: `${console_url}/detailpage?widgetId=${widgetId}&eventId=${eventId}`,
        type: "website",
      },
    };
  }
  return {
    title: dataToDisplay.metaData.title,
    description: dataToDisplay.metaData.description,
    alternates: {
      canonical:`https://www.whr.ai/geo/${namespace}/${type}`,
    },
    openGraph: {
      title: dataToDisplay.metaData.title,
      description: dataToDisplay.metaData.description,
      images: dataToDisplay.metaData.image,
      url: `https://www.whr.ai/geo/${namespace}/${type}`,
      type: "website",
    },
  };
}
