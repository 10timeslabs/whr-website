"use client";
import React from "react";
import { motion } from "framer-motion";

const JourneySection = () => {
  const journeyData = [
    {
      date: "Jan 2025 Founded",
      description: "Born from the decade in events - solving the hardest demand variable."
    },
    {
      date: "2025 Event Graph V1", 
      description: "Linked events, companies, venues and location."
    },
    {
      date: "2025 GTM & GEO Apps",
      description: "Prospecting, tracking and demand workflows across teams."
    }
  ];

  return (
    <div className="w-[87%] flex justify-between mt-[120px] max-[1000px]:flex-col max-[1000px]:gap-8">
      {/* Left Section - Journey Title & Description */}
      <div className="w-[45%] max-[1000px]:w-full">
        <div className="text-[56px] leading-[64px] max-[730px]:text-[40px] max-[730px]:leading-[50px] mb-8">
          Our Journey
        </div>
        <div className="text-[#3a3a3a] text-lg max-[730px]:text-[14px] max-[730px]:leading-[20px]">
          Founded in January 2025, whr.ai emerged from over a decade in the event industry. Our team recognized that events significantly contribute to market volatility, yet traditional data was often fragmented and noisy. Unlike simpler factors like weather, understanding events requires a specialized approach. To address this, we launched whr.ai as a reliable source of truth for actionable business insights.
        </div>
      </div>

      {/* Right Section - Timeline with all cards on the right */}
      <div className="w-[45%] max-[1000px]:w-full relative">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 w-0.5 bg-[var(--primary-color)] h-full max-[600px]:left-4 max-[600px]:hidden"></div>
        
        {/* Start Circle */}
        <div className="absolute left-[32.5px] top-0 w-3 h-3 bg-[var(--primary-color)] rounded-full transform -translate-x-1/2 z-10 max-[600px]:left-[14px] max-[600px]:hidden"></div>

        {/* Journey Items */}
        <div className="flex flex-col gap-8">
          {journeyData.map((item, index) => (
            <div key={index} className="relative pl-20 max-[600px]:pl-0">
              {/* Horizontal Line Connector */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="absolute left-8 top-[55px] h-0.5 bg-[var(--primary-color)] w-8 max-[600px]:hidden"
              ></motion.div>
              
              {/* Diamond Shape */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="absolute left-[60px] top-[52px] w-2 h-2 bg-[var(--primary-color)] transform rotate-45 max-[600px]:hidden"
              ></motion.div>

              {/* Journey Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white border border-[var(--border-color)] rounded-2xl p-6 shadow-sm"
              >
                <div className="text-lg font-semibold text-[#010D3E] mb-3 max-[730px]:text-[16px]">
                  {item.date}
                </div>
                <div className="text-[#3a3a3a] text-sm max-[730px]:text-[14px] max-[730px]:leading-[20px]">
                  {item.description}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        
        {/* End Circle */}
        <div className="absolute left-[32.5px] bottom-0 w-3 h-3 bg-[var(--primary-color)] rounded-full transform -translate-x-1/2 z-10 max-[600px]:left-[14px] max-[600px]:hidden"></div>
      </div>
    </div>
  );
};

export default JourneySection;
