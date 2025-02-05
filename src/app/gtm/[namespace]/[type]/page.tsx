import React from "react";
import GtmComponent from "@/components/gtmComponents/GtmComponent";
import { gtmUsecasesjsonData } from "../../../../../data/gtmUsecasesData";
import { gtmSolutionsjsonData } from "../../../../../data/gtmSolutionsdata";
const page = () => {
  return (
    <div>
      <GtmComponent />
    </div>
  );
};

export default page;

export async function generateMetadata(context: any) {
  
  const { namespace, type } = context.params;
  let dataSource = null;
  if (namespace === "usecases") {
    dataSource = gtmUsecasesjsonData;
  } else if (namespace === "solutions") {
    dataSource = gtmSolutionsjsonData;
  }
  const gtmData = dataSource?.find((item) => {
    return item.id.toLowerCase() === type;
  });
  const dataToDisplay: any = gtmData;
  // console.log("id______________", namespace, type,dataToDisplay);
  if (!type || !namespace) {
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
    openGraph: {
      title: dataToDisplay.metaData.title,
      description: dataToDisplay.metaData.description,
      images: dataToDisplay.metaData.image,
      // url: `${console_url}/detailpage?widgetId=${widgetId}&eventId=${eventId}`,
      type: "website",
    },
  };
}
