import React from 'react'
import DataCard from './DataCard'
import ImageOne from './usecase.svg'

interface Props{
  mainHeading : string;
}

const VerticalScroll = ({mainHeading} : Props) => {

  const data = [
    { icon: ImageOne, heading: "Demand Forecasting", subHeading: "Events are constantly changing with new launches, dates, formats and location. " },
    { icon: ImageOne, heading: "Risk Identification", subHeading: "Events are constantly changing with new launches, dates, formats and location. " },
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
        {/* Start Circle */}
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full left-1/2 transform -translate-x-1/2 -top-3 z-10"></div>

        {data.map((item, index) => (
          <div
            key={index}
            className={`w-full flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"} relative`}
          >
            {/* Line Connector */}
            <div
              className={`absolute h-0.5 bg-gray-200 ${index % 2 !== 0 ? "left-1/2 transform -translate-x-0 w-[70px]" : "right-1/2 transform translate-x-0 w-[70px]"
                }`}
              style={{ top: "50%" }}
            ></div>
            {/* Diamond Shape */}
            <div
              className={`absolute w-2 h-2 bg-gray-200 ${index % 2 !== 0 ? "left-[calc(50%+70px)]" : "right-[calc(50%+70px)]"
                } transform rotate-45`}
              style={{ top: "48%" }}
            ></div>

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
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full left-1/2 transform -translate-x-1/2 -bottom-3 z-10"></div>
      </div>
    </div>
  )
}

export default VerticalScroll