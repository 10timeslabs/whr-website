import React from "react";
import DataCard from "./DataCard";
import { motion } from "framer-motion";

// interface Props {
//   mainHeading: string;
// }

const VerticalScroll = ({ mainHeading, dataToDisplay }: any) => {

  return (
    <div className="w-full flex flex-col items-center gap-5 p-4">
      <div className="text-sm font-medium border border-color rounded-xl py-1 px-7">
        {mainHeading}
      </div>
      <div className="text-center font-semibold text-2xl w-[40%]">
        Preparing for demand anomalies is a powerful competitive advantage
      </div>
      <div className="text-[var(--secondary-text-color)] text-lg text-center">
        GEO enables better predictability of demand by taking into consideration
        upcoming & forecasted events, along with the estimated impact.
      </div>
      <div className="relative w-[1200px] flex flex-col items-center mt-7 max-[600px]:grid max-[600px]:grid-cols-2 max-[600px]:gap-4 max-[600px]:w-[90%] max-[600px]:place-items-center">
        {/* Vertical Line Grey*/}
        <div className="absolute h-full w-0.5 bg-gray-200 left-1/2 transform -translate-x-1/2 z-0 max-[600px]:hidden"></div>

        {/*first Vertical Line colored*/}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // Animate to 100% when in view
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.8 }} // Trigger when 50% of the element is in view
          className="absolute w-0.5 bg-[var(--primary-color)] h-[85px] left-1/2 transform -translate-x-1/2 z-0 max-[600px]:hidden"
        ></motion.div>
        {/*Dynamic Vertical Lines (Primary Color) */}
        {Array.from({ length: dataToDisplay.usecases.length - 1 }).map((_, key) => (
          <motion.div
            key={key}
            className="absolute w-0.5 bg-[var(--primary-color)] h-[166px] left-1/2 transform -translate-x-1/2 z-10 max-[600px]:hidden"
            style={{
              top: `${85 + key * 166}px`, // Properly position each line
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.9 }} // Trigger when 80% of the line is in view
            transition={{ duration: 0.5 }}
          ></motion.div>
        ))}
        {/*Last Vertical Line colored*/}
        <motion.div
          className="absolute h-[85px] w-0.5 bg-[var(--primary-color)] left-1/2 transform -translate-x-1/2 z-0 max-[600px]:hidden"
          style={{ top: `${85 + (dataToDisplay.usecases.length - 1) * 166}px` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // Animate to 100% when in view
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.8 }}
        ></motion.div>
        {/* Start Circle */}
        <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full left-1/2 transform -translate-x-1/2 -top-3 z-10 max-[600px]:hidden "></div>

        {dataToDisplay.usecases.map((item: any, index: number) => (
          <div
            key={index}
            className={`w-fit flex items-center justify-center relative max-[600px]:w-[150px]`}
          >
            {/* Line Connector */}
            <motion.div
              initial={{ opacity: 0 }} // Use opacity for the initial animation
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={`absolute h-0.5 bg-[var(--primary-color)] w-[70px] max-[600px]:hidden ${index % 2 !== 0
                  ? "left-1/2 transform -translate-x-0 "
                  : "right-1/2 transform translate-x-0 "
                }`}
              style={{ top: "50%" }}
            ></motion.div>
            {/* Diamond Shape */}
            <motion.div
              initial={{ opacity: 0 }} // Use opacity for the initial animation
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={`absolute w-2 h-2 bg-[var(--primary-color)] ${index % 2 !== 0
                  ? "left-[calc(50%+70px)]"
                  : "right-[calc(50%+70px)]"
                } transform rotate-45 max-[600px]:hidden `}
              style={{ top: "48%" }}
            ></motion.div>

            {/* Card */}
            <div className={index % 2 === 0 ? "mr-[675px] max-[1250px]:mr-[550px] max-[1000px]:mr-[450px] max-[790px]:mr-[345px] max-[600px]:m-0" : "ml-[675px] max-[1250px]:ml-[550px] max-[1000px]:ml-[450px]  max-[790px]:ml-[345px] max-[600px]:m-0"}>
              <DataCard
                heading={item.topic}
                subHeading={item.content}
                icon={item.icon}
              />
            </div>
          </div>
        ))}
        {/* End Circle */}
        <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full left-1/2 transform -translate-x-1/2 -bottom-3 z-10 max-[600px]:hidden"></div>
      </div>
    </div>
  );
};

export default VerticalScroll;
