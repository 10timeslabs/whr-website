"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

import AutoScroll from "@/components/AutoScroll";
import CircleContainer from "@/components/circleAnimation/CircleContainer";
import ProductsCarousel from "@/components/ProductSection/ProductsCarousel";
import { companyLogos } from "../../data/companyLogoData";
import Clarity from "@/components/clarityAnimation/Clarity";
import UseCasesContainer from "@/components/useCaseSection/UseCasesContainer";
import ProblemContainer from "@/components/realWorldProblem/ProblemContainer";
import GridImage from '/public/herosection_grid.png'

export default function Home() {

  return (
    <div style={{paddingTop : 120}} className="relative">
      <Image src={GridImage} alt="grid" className="absolute top-0 -z-[10]"/>
      <div className="h-[100px] w-full absolute top-0 bg-gradient-to-b from-[rgba(165,184,198,0.2)] to-[rgba(132,168,204,0)]"></div>

      <div className={`text-center`}>
        <span className="mb-3 text-[56px] font-medium">
          Whats Happening for Real
        </span>
        <p className="text-[20px] text-[var(--secondary-text-color)]">
          Unlock Real-World Action Intel with WHR
        </p>
      </div>
      <div className="w-full flex items-center justify-center mt-10">
        <UseCasesContainer />
      </div>

      <div className="w-full"><Clarity /></div>
      <div className="w-full"><ProblemContainer/></div>
      <div className="flex flex-col gap-10 items-center mt-12 mb-[80px]">
        <div className="text-sm font-medium border border-color rounded-xl py-1 px-7">CUSTOMERS USING WHR</div>
        <AutoScroll icons={companyLogos} size="small" />
      </div>
      <CircleContainer />
      <div className="flex flex-col gap-8 items-center mt-10">
        <div className="flex flex-col text-center">
          <span className="text-[48px]">Foresee the Future</span>
          <span className="text-[var(--secondary-text-color)] text-[18px]"> Real-World Made Predictable for Taking Proactive Action</span>
        </div>
        <ProductsCarousel />
      </div>
    </div>
  );
}
