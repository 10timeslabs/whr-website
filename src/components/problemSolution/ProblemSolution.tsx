import React from "react";
import DataCard from "./DataCard";
import { usePathname } from "next/navigation";
import { geoSolutionsjsonData } from "../../../data/geoSolutionsData";
import { geoUsecasesjsonData } from "../../../data/geoUsecasesData";

const ProblemSolution = () => {
  const pathname = usePathname();

  let dataSource = null;
  if (pathname.includes("/geo/solutions")) {
    dataSource = geoSolutionsjsonData;
  } else if (pathname.includes("/geo/usecases")) {
    dataSource = geoUsecasesjsonData;
  }

  const endpoint = pathname.split("/").pop()?.toLowerCase();

  const usecaseData = dataSource?.find((item) => {
    return item.id.toLowerCase() === endpoint;
  });

  const defaultData = {
    image: dataSource?.[0]?.image || "",
    problem: "Default Problem",
    solution: "Default Solution",
  };

  const dataToDisplay = usecaseData || defaultData;

  return (
    <div className="w-full flex flex-col items-center gap-5 p-4">
      <div className="text-sm font-medium border border-color rounded-xl py-1 px-7">
        What do we solve
      </div>
      <div className="flex gap-[50px]">
        <DataCard heading="PROBLEM" subHeading={dataToDisplay.problem} />
        <DataCard heading="SOLUTION" subHeading={dataToDisplay.solution} />
      </div>
    </div>
  );
};

export default ProblemSolution;
