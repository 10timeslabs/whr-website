// "use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

import AutoScroll from "@/components/AutoScroll";
import CircleContainer from "@/components/circleAnimation/CircleContainer";
import ProductsCarousel from "@/components/ProductSection/ProductsCarousel";
import { companyLogos } from "../../../data/companyLogoData";
import Clarity from "@/components/clarityAnimation/Clarity";
import UseCasesContainer from "@/components/useCaseSection/UseCasesContainer";
import ProblemContainer from "@/components/realWorldProblem/ProblemContainer";
import GridImage from "/public/herosection_grid.png";
import HeadingtextAnimation from "@/components/HeadingtextAnimation";
import FragmentDataIcon from "/public/realworldproblems/Fragmenteddata.svg";
import NoiseIcon from "/public/realworldproblems/noise.svg";
import PuzzleIcon from "/public/realworldproblems/puzzle.svg";
import IntelDataIcon from "/public/realworldproblems/timesensitiveintel.svg";

import BrokenPromotion from '/public/internal_landing_page_icons/broken promotion_geo prob.svg'
import InEfficientOnground from '/public/internal_landing_page_icons/Inefficient onboarding_geo prob.svg'
import LimitedIntelligence from '/public/internal_landing_page_icons/Limited Intelligence_geo prob.svg'
import Untracked from '/public/internal_landing_page_icons/untracked roi_geo prob.svg'
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";
import GeneralNavbar from "@/components/GeneralNavbar";

export const metadata = {
  title: "whr.ai/gtm - GTM Event Intelligence Solutions",
  alternates: {
    canonical: "https://whr.ai/gtm",
  },
  openGraph: {
    title: "whr.ai/gtm - GTM Event Intelligence Solutions",
    description: "Discover powerful geo event intelligence solutions.",
    url: "https://whr.ai/gtm",
    siteName: "whr.ai",
    images: [
      {
        url: "https://c1.10times.com/whr/gtm-geo/static/image/product/Research.png",
        width: 1200,
        height: 630,
        alt: "GTM Event Intelligence Solutions",
      },
    ],
    type: "website",
  },
};
export default function Home() {
  const headingWords = [
    "Partners ?",
    "Prospects ?",
    "Suppliers ?",
    "Customers ?",
    "Mentors ?",
    "Role Models ?",
    "Investors ?",
    "Experts ?",
    "Thought Leaders ?",
    "Peers ?",
    "Competitors ?",
    "Advisors ?",
    "Coaches ?",
    "Clients ?",
    "Media ?",

  ];

  const cardData = [
    {
      icon: LimitedIntelligence,
      heading: "Limited Intelligence",
      subheading:
        "Over a million public b2b events happen annually that are attended by 500millions+ professionals. However, the industry is infested with fake and poor quality events, and the noise is growing. There are no standard checks and metrics across the channel, leaving decision making....",
    },
    {
      icon: InEfficientOnground,
      heading: "Inefficient Onboarding",
      subheading:
        "$100 billion+ spent directly by companies to participate in events in various formats. However, there is no specialized tool for coordination planning amongst internal teams and communication and negotiation with the event planners.",
    },
    {
      icon: BrokenPromotion,
      heading: "Broken Promotion",
      subheading:
        "80% of all Fortune 2000 companies have a static event link on their website showing events they are participating in. Their employees share about events they are speaking, exhibiting, sponsoring or attending via social media without any tracker or....",
    },
    {
      icon: Untracked,
      heading: "Untracked ROI",
      subheading:
        "While events form 20% of all marketing spend, no synchronized records of event interest or participating audits to compare, analyze and decide for future participation. ",
    },
  ];

  return (
    <div style={{ paddingTop: 120 }} className="relative">
      <GeneralNavbar />
      <Image src={GridImage} alt="grid" className="absolute top-0 -z-[50]" priority/>
      <div className="h-[100px] w-full absolute top-0 bg-gradient-to-b from-[rgba(165,184,198,0.2)] to-[rgba(132,168,204,0)]"></div>

      <div className={`flex justify-center text-center`}>
        {/* <span className="mb-3 text-[56px] font-medium">
          Whr is the Demand
        </span> */}

        <HeadingtextAnimation heading="Meet" words={headingWords} />
        {/* <p className="text-[20px] text-[var(--secondary-text-color)]">
          Unlock Real-World Action Intel with WHR
        </p> */}
      </div>
      <div>
        <p className="flex mt-4 justify-center text-[20px] text-[var(--secondary-text-color)]">
          Don't Just Go, Know Whr!
        </p>
      </div>
      <div className="w-full flex items-center justify-center mt-10">
        <UseCasesContainer text="Whr Depends on your Why" pathName="/gtm"/>
      </div>

      <div className="w-full">
        <Clarity />
      </div>
      <div className="w-full">
        <ProblemContainer cardData={cardData} route="gtm" />
      </div>
      <div className="flex flex-col gap-10 items-center mt-14">
        <div className="text-sm font-medium border border-color rounded-xl py-1 px-7">
          CUSTOMERS
        </div>
        <AutoScroll icons={companyLogos} size="small" />
      </div>
      <div className="mt-14">
        <CircleContainer />
      </div>
      <div className="mt-14">
        <ProductsCarousel />
      </div>
      <GetInTouch />
      <Footer />
    </div>
  );
}
