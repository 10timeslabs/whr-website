"use client";
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

import IneffectiveGround from '/public/internal_landing_page_icons/in-effective onground_eventeli prob.svg'
import LastMinChaos from '/public/internal_landing_page_icons/last-minute chaos_eventeli prob.svg'
import Scattered from '/public/internal_landing_page_icons/Scattered Event_Eventeli problem.svg'
import Volatile from '/public/internal_landing_page_icons/Volatile local demand_eventeli prob.svg'

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
    <div style={{ paddingTop: 120 }} className="relative">
      <Image src={GridImage} alt="grid" className="absolute top-0 -z-[10]" />
      <div className="h-[100px] w-full absolute top-0 bg-gradient-to-b from-[rgba(165,184,198,0.2)] to-[rgba(132,168,204,0)]"></div>

      <div className={`flex justify-center w-full`}>
        <HeadingtextAnimation heading="Whr is the" words={headingWords} />
      </div>
      <div>
        <p className="flex mt-4 justify-center text-[20px] text-[var(--secondary-text-color)]">
          Dont Just Guess, Know Whr!
        </p>
      </div>
      <div className="w-full flex items-center justify-center mt-10">
        <UseCasesContainer text="Whr Depends on your Why"/>
      </div>

      <div className="w-full">
        <Clarity />
      </div>
      <div className="w-full">
        <ProblemContainer cardData={cardData} />
      </div>
      <div className="flex flex-col gap-10 items-center mt-12 mb-[80px]">
        <div className="text-sm font-medium border border-color rounded-xl py-1 px-7">
          CUSTOMERS USING WHR
        </div>
        <AutoScroll icons={companyLogos} size="small" />
      </div>
      <CircleContainer />
      <div className="mt-10">
        <ProductsCarousel />
      </div>
    </div>
  );
}
