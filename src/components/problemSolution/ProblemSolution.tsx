import React from "react";
import DataCard from "./DataCard";
import { usePathname } from "next/navigation";
import { geoSolutionsjsonData } from "../../../data/geoSolutionsData";
import { geoUsecasesjsonData } from "../../../data/geoUsecasesData";
import { gtmUsecasesjsonData } from "../../../data/gtmUsecasesData";
import { gtmSolutionsjsonData } from "../../../data/gtmSolutionsdata";
import ProblemImg from '/public/Problembanner.png'
import SolutionImg from '/public/Solutionbanner.png'
import Image from "next/image";
import { motion } from "framer-motion";

const ProblemSolution = () => {
  const pathname = usePathname();

  let dataSource = null;
  if (pathname.includes("/geo/solutions")) {
    dataSource = geoSolutionsjsonData;
  } else if (pathname.includes("/geo/usecases")) {
    dataSource = geoUsecasesjsonData;
  } else if (pathname.includes("/gtm/usecases")) {
    dataSource = gtmUsecasesjsonData
  } else if (pathname.includes("/gtm/solutions")) {
    dataSource = gtmSolutionsjsonData
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
    <div className="w-[1300px] flex flex-col items-center gap-5 p-4">
      <div className="text-sm font-medium border border-color rounded-xl py-1 px-7">
        What do we solve
      </div>
      <div className="flex flex-col gap-5 w-full relative">
        <div className="w-full flex justify-start relative h-[272px] overflow-hidden rounded-e-xl">
          <div className="w-[50%] flex flex-col gap-8 ml-5">
            <div className="text-[32px] font-medium">Problem</div>
            <div>{dataToDisplay.problem}</div>
          </div>
          <motion.div
            className="absolute right-[-50%]"
            initial={{ right: "0%" }} // Initial position
            whileInView={{ right: "-70%" }} // Final position when in view
            viewport={{ once: false, amount: 0.2 }} // Trigger animation when 50% in viewport
            transition={{ duration: 0.8, delay :.2, ease: "easeInOut" }} // Animation settings
          >
            <Image src={ProblemImg} height={272} width={1300} alt="problem" />
          </motion.div>
        </div>
        <div className="w-full flex justify-end relative h-[272px] overflow-hidden rounded-s-xl">
          <div className="w-[50%] flex flex-col gap-8">
            <div className="text-[32px] font-medium">Solution</div>
            <div>{dataToDisplay.solution}</div>
          </div>
          <motion.div
            className="absolute left-[-50%]"
            initial={{ left: "0%" }} // Initial position
            whileInView={{ left: "-70%" }} // Final position when in view
            viewport={{ once: false, amount: 0.2 }} // Trigger animation when 50% in viewport
            transition={{ duration: 0.8, delay :.2, ease: "easeInOut" }} // Animation settings
          >
            <Image src={SolutionImg} height={272} width={1300} alt="solution" />
          </motion.div>
        </div>
        <div className="absolute flex flex-col items-center h-full left-[-20px]">
            <div className="w-[15px] h-[30%] bg-[#CAB8FF]"></div>
            <div className="w-[.9px] h-[70%] bg-[#CAB8FF]"></div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolution;
