import React from 'react'
import DataCard from './DataCard'
import ImageOne from './usecase.svg'
import { motion } from 'framer-motion';

interface Props {
  mainHeading: string;
}

const VerticalScroll = ({ mainHeading }: Props) => {

  const data = [
    { icon: ImageOne, heading: "Demand Forecasting", subHeading: "Events are constantly changing with new launches, dates, formats and location. " },
    { icon: ImageOne, heading: "Risk Identification", subHeading: "Events are constantly changing with new launches, dates, formats and location. " },
    { icon: ImageOne, heading: "Geo Marketing", subHeading: "Events are constantly changing with new launches, dates, formats and location. " },
    { icon: ImageOne, heading: "Geo Marketing", subHeading: "Events are constantly changing with new launches, dates, formats and location. " },
    { icon: ImageOne, heading: "Geo Marketing", subHeading: "Events are constantly changing with new launches, dates, formats and location. " },
    { icon: ImageOne, heading: "Geo Marketing", subHeading: "Events are constantly changing with new launches, dates, formats and location. " },
  ]
  return (
    <div className='w-full flex flex-col items-center gap-5 p-4'>
      <div className='text-sm font-medium border border-color rounded-xl py-1 px-7'>{mainHeading}</div>
      <div className='text-center font-semibold text-2xl w-[40%]'>Preparing for demand anomalies is a powerful competitive advantage</div>
      <div className='text-[var(--secondary-text-color)] text-lg'>GEO enables better predictability of demand by taking into consideration upcoming & forecasted events, along with the estimated impact.</div>
      <div className="relative w-[1200px] flex flex-col items-center mt-7">
        {/* Vertical Line */}
        <div className="absolute h-full w-0.5 bg-gray-200 left-1/2 transform -translate-x-1/2 z-0"></div>

        <motion.div
          className="absolute w-0.5 bg-[var(--primary-color)] left-1/2 transform -translate-x-1/2 z-0"
          initial={{ height: 0 }}          // Initial height is 0
          whileInView={{ height: 85 }} // Animate to 100% when in view
          viewport={{amount: 1, once : true }} // Trigger when 50% of the element is in view
          transition={{ duration: .6 }}     // Set the duration of the animation
          onViewportEnter={() => console.log("Entered viewport fully!")}
        ></motion.div>
        {/* Vertical Lines (Primary Color) */}
        {Array.from({ length: data.length - 1 }).map((_, key) => (
          <motion.div
            key={key}
            className="absolute w-0.5 bg-[var(--primary-color)] left-1/2 transform -translate-x-1/2 z-10"
            style={{
              top: `${85 + key * 166}px`, // Properly position each line
            }}
            initial={{ height: 0 }}
            whileInView={{ height: 166 }}
            viewport={{ once: false, amount: 0.8 }} // Trigger when 80% of the line is in view
            transition={{
              duration: 0.6,
            }}
          ></motion.div>
        ))}

        <motion.div className="absolute h-[85px] w-0.5 bg-[var(--primary-color)] left-1/2 transform -translate-x-1/2 z-0"
          style={{ top: `${85 + (data.length - 1) * 166}px` }}
          initial={{ height: 0 }}          // Initial height is 0
          whileInView={{ height: "85px" }} // Animate to 100% when in view
          viewport={{ once: false, amount: 0.5 }} // Trigger when 50% of the element is in view
          transition={{ duration: .6 }}
        ></motion.div>
        {/* Start Circle */}
        <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full left-1/2 transform -translate-x-1/2 -top-3 z-10"></div>

        {data.map((item, index) => (
          <div
            key={index}
            className={`w-full flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"} relative`}
          >
            {/* Line Connector */}
            <motion.div
              initial={{ opacity: 0 }} // Use opacity for the initial animation
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, delay: .1 }}
              className={`absolute h-0.5 bg-[var(--primary-color)] ${index % 2 !== 0 ? "left-1/2 transform -translate-x-0 w-[70px]" : "right-1/2 transform translate-x-0 w-[70px]"
                }`}
              style={{ top: "50%" }}
            ></motion.div>
            {/* Diamond Shape */}
            <motion.div
              initial={{ opacity: 0 }} // Use opacity for the initial animation
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, delay: .1 }}
              className={`absolute w-2 h-2 bg-[var(--primary-color)] ${index % 2 !== 0 ? "left-[calc(50%+70px)]" : "right-[calc(50%+70px)]"
                } transform rotate-45`}
              style={{ top: "48%" }}
            ></motion.div>

            {/* Card */}
            <div>
              <DataCard
                heading={item.heading}
                subHeading={item.subHeading}
                icon={item.icon}
              />
            </div>
          </div>
        ))}
        {/* End Circle */}
        <div className="absolute w-3 h-3 bg-[var(--primary-color)] rounded-full left-1/2 transform -translate-x-1/2 -bottom-3 z-10"></div>
      </div>
    </div>
  )
}

export default VerticalScroll