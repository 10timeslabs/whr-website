import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Competitor from "/public/collections/competitor.svg";
import Keywords from "/public/collections/keywords.svg";
import Speaking from "/public/collections/speaking.svg";
import Template from "/public/collections/template.svg";

interface Props {
  heading: string;
  description: string;
  eventCount: string;
  image: string;
  href: string;
  icon: React.ReactNode;
  tags?: string[];
  trackerType?: string[];
  totalEvent?: number;
  id: string;
}

const CollectionCard = ({ 
  heading, 
  description, 
  eventCount, 
  image, 
  href, 
  icon, 
  tags = [], 
  trackerType = ["T_PRODUCT_KEYWORDS"],
  totalEvent = 0,
  id 
}: Props) => {
  
  const formatCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${Math.round(count / 1000)}k`;
    }
    return `${count}`;
  };

  const handleCardClick = (item: any) => {
    // Handle the click event similar to your existing code
    console.log('Collection clicked:', item);
  };

  return (
    <Link href={href} className="group block">
      <div
        className="w-full p-2 gap-3 flex items-center flex-col h-[350px] text-sm border border-[var(--border-color)] rounded-[12px] overflow-y-auto hide-scrollbar cursor-pointer hover:shadow-lg transition-all duration-300"
        onClick={() => handleCardClick({ id, heading, description, trackerType })}
      >
        {/* Header Section with Icon and Template */}
        <div className="w-full flex items-center min-h-[110px] rounded-md bg-[var(--tabs-background-color)] relative">
          {/* Icon based on tracker type */}
          <div className="absolute left-4 top-4">
            <Image
              src={
                trackerType[0] === "T_COMPETITOR"
                  ? Competitor
                  : trackerType[0] === "T_PRODUCT_KEYWORDS"
                  ? Keywords
                  : trackerType[0] === "T_SPEAKING_OPPORTUNITY"
                  ? Speaking
                  : Keywords
              }
              alt="tracker type"
              width={40}
              height={40}
            />
          </div>
          
          {/* Template illustration */}
          <div className="flex-1 flex justify-end items-center pr-4">
            <Image src={Template} alt="template" />
          </div>
          
          {/* Event count badge */}
          {totalEvent && totalEvent > 0 && (
            <div className="p-1 px-2 bg-[var(--primary-light-color)] font-medium text-xs absolute bottom-0 right-0 rounded-br-md rounded-tl-md">
              {formatCount(totalEvent)} events
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="w-full h-[60%] flex flex-col gap-3">
          <div className="h-[80%]">
            {/* Title */}
            <div className="font-semibold text-base text-[var(--primary-text-color)] mb-2 group-hover:text-[var(--primary-color)] transition-colors">
              {heading}
            </div>

            {/* Description */}
            <div className="text-[var(--secondary-text-color)] text-sm leading-relaxed">
              {description}
            </div>
          </div>

          {/* Tags Section */}
          {tags.length > 0 && (
            <div className="text-[var(--secondary-text-color)] h-auto">
              <div className="flex flex-wrap items-center">
                {tags.slice(0, 3).map((tag, index) => {
                  const isLong = tag.length > 35;
                  const truncated = isLong ? `${tag.substring(0, 35)}...` : tag;

                  return (
                    <div
                      key={index}
                      className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mr-1 mb-1 cursor-default"
                      title={isLong ? tag : undefined}
                    >
                      {truncated}
                    </div>
                  );
                })}

                {/* Show More inline with tags */}
                {tags.length > 3 && (
                  <span className="text-[var(--secondary-text-color)] hover:underline cursor-pointer text-[12px] inline-block mb-1">
                    +Show More
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;
