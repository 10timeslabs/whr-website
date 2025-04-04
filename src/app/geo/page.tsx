// "use client";
import React, { useState } from "react";
import Image from "next/image";
import AutoScroll from "@/components/AutoScroll";
import CircleContainer from "@/components/circleAnimation/CircleContainer";
import ProductsCarousel from "@/components/ProductSection/ProductsCarousel";
import { companyLogos } from "../../../data/companyLogoData";
import Clarity from "@/components/clarityAnimation/Clarity";
import UseCasesContainer from "@/components/useCaseSection/UseCasesContainer";
import ProblemContainer from "@/components/realWorldProblem/ProblemContainer";
import GridImage from "/public/herosection_grid.png";
import HeadingtextAnimation from "@/components/HeadingtextAnimation";
import IneffectiveGround from '/public/internal_landing_page_icons/in-effective onground_eventeli prob.svg'
import LastMinChaos from '/public/internal_landing_page_icons/last-minute chaos_eventeli prob.svg'
import Scattered from '/public/internal_landing_page_icons/Scattered Event_Eventeli problem.svg'
import Volatile from '/public/internal_landing_page_icons/Volatile local demand_eventeli prob.svg'
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";
import GeneralNavbar from "@/components/GeneralNavbar";
export const metadata = {
  title: "whr.ai/geo - Geo Event Intelligence Solutions",
  alternates: {
    canonical: "https://whr.ai/geo",
  },
  openGraph: {
    title: "whr.ai/geo - Geo Event Intelligence Solutions",
    description: "Discover powerful geo event intelligence solutions.",
    url: "https://whr.ai/geo",
    siteName: "whr.ai",
    images: [
      {
        url: "https://c1.10times.com/whr/gtm-geo/static/image/product/Research.png",
        width: 1200,
        height: 630,
        alt: "Geo Event Intelligence Solutions",
      },
    ],
    type: "website",
  },
};
export default function Home() {
  const headingWords = [
    "Demand ?",
    "Opportunity ?",
    "Risk ?",
    "Focus ?",
    "Money ?",
  ];

  const cardData = [
    {
      icon: Scattered,
      heading: "Scattered Event Intel",
      subheading:
        "Traditional sources are outdated or incomplete, making it tough to track all relevant happenings that affect on-ground operations.",
    },
    {
      icon: Volatile,
      heading: "Volatile Local Demand",
      subheading:
        "Local events cause unplanned surges or dips, derailing forecasts and forcing businesses into reactive mode.",
    },
    {
      icon: LastMinChaos,
      heading: "Last-Minute Chaos",
      subheading:
        "Finding out about critical events too late leads to rushed decisions, missed sales, and operational strain across teams and departments.",
    },
    {
      icon: IneffectiveGround,
      heading: "Ineffective On-Ground Ops",
      subheading:
        "Without location-based insights, marketing and operations can’t optimize resource allocation or on-site activations, losing revenue potential.",
    },
  ];

  return (
    <div className="relative pt-[160px] max-[1024px]:pt-[120px]">
      <GeneralNavbar />
      <Image src={GridImage} alt="grid" className="absolute top-0 -z-[50]" />
      <div className="h-[100px] w-full absolute top-0 bg-gradient-to-b from-[rgba(165,184,198,0.2)] to-[rgba(132,168,204,0)]"></div>

      <div className={`text-center`}>
        <p className="text-[1.5vw] text-[var(--secondary-text-color)] max-[950px]:text-[16px]">
          Don't Just Guess, Know Whr!
        </p>
        <div className={`flex justify-center w-full`}>
          <HeadingtextAnimation heading="Whr is the" words={headingWords} />
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-10">
        <UseCasesContainer text="Whr Depends on your Why" pathName="/geo"/>
      </div>

      {/* <div className="w-full">
        <Clarity />
      </div> */}
       <div className="flex flex-col gap-10 items-center mt-14 mb-14">
        <div className="text-sm font-medium border border-color rounded-xl py-1 px-7">
          CUSTOMERS
        </div>
        <AutoScroll icons={companyLogos} size="small" />
      </div>
      <div className="w-full">
        <ProblemContainer cardData={cardData} route="geo" />
      </div>
      {/* <div className="flex flex-col gap-10 items-center mt-14">
        <div className="text-sm font-medium border border-color rounded-xl py-1 px-7">
          CUSTOMERS
        </div>
        <AutoScroll icons={companyLogos} size="small" />
      </div> */}
      <div className="mt-14">
        <CircleContainer />
      </div>
      <div className="mt-14">
        <ProductsCarousel />
      </div>
      <div className="w-full">
        <Clarity />
      </div>
      <GetInTouch />
      <Footer />
    </div>
  );
}
