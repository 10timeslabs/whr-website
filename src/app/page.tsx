// "use client";
import React from "react";
import Image from "next/image";
import AutoScroll from "@/components/AutoScroll";
import CircleContainer from "@/components/circleAnimation/CircleContainer";
import ProductsCarousel from "@/components/ProductSection/ProductsCarousel";
import { companyLogos } from "../../data/companyLogoData";
import Clarity from "@/components/clarityAnimation/Clarity";
import UseCasesContainer from "@/components/useCaseSection/UseCasesContainer";
import ProblemContainer from "@/components/realWorldProblem/ProblemContainer";
import GridImage from '/public/herosection_grid.png'
import FragmentDataIcon from '/public/realworldproblems/Fragmenteddata.svg'
import NoiseIcon from '/public/realworldproblems/noise.svg'
import PuzzleIcon from '/public/realworldproblems/puzzle.svg'
import IntelDataIcon from '/public/realworldproblems/timesensitiveintel.svg'
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";
import HomeNavbar from "@/components/HomeNavbar";
import { Typewriter } from "react-simple-typewriter";
import TypewriterEffect from "@/components/TypewriterEffect";

export const metadata = {
  title: "whr.ai - Global Event Intelligence Platform",
  alternates: {
    canonical: "https://whr.ai",
  },
};

export default function Home() {

  const headingWords = ["Demand ?", "Opportunity ?", "Risk ?", "Focus ?", "Money ?"]

  const cardData = [
    { icon: FragmentDataIcon, heading: "Fragmented Data", subheading: "Fragmented data poses significant challenges, with information scattered across multiple sources, inconsistent formats, various languages, duplicate entries, and unsynchronised timelines" },
    { icon: NoiseIcon, heading: "Too Much Noise", subheading: "With overwhelming volumes of information, the process of finding relevant data, cleaning it, identifying fake or unreliable entries, and quantifying it for meaningful use becomes a daunting task." },
    { icon: PuzzleIcon, heading: "Piecing the Puzzle", subheading: "Data is only as valuable as the connections between its points. Without linking multiple lateral data points, insights remain incomplete and unusable." },
    { icon: IntelDataIcon, heading: "Time Sensitive Intel", subheading: "Delivering actionable intelligence to the right people at the right time is critical for success. When key insights are accessible exactly when they’re needed, it enables informed decisions." },
  ]

  return (
    <div className="relative pt-[160px] max-[1024px]:pt-[120px]">
      <HomeNavbar />
      <Image src={GridImage} alt="grid" className="absolute top-0 -z-[50]" />
      <div className="h-[100px] w-full absolute top-0 bg-gradient-to-b from-[rgba(165,184,198,0.2)] to-[rgba(132,168,204,0)]"></div>

      <div className={`text-center`}>
        <p className="text-[1.5vw] text-[var(--secondary-text-color)] max-[950px]:text-[16px]">
          DONT GUESS. KNOW WHR!
        </p>
        <h1 className="mb-3 text-[5vw] font-medium max-[850px]:text-[40px] max-[550px]:text-[32px]">
          M<TypewriterEffect text="aximize Event ROI"/>
        </h1>

        {/* <HeadingtextAnimation heading="Whr is the" words={headingWords}/> */}

      </div>
      <div className="w-full flex items-center justify-center mt-10">
        <UseCasesContainer pathName="" />
      </div>

      <div className="w-full"><Clarity /></div>
      <div className="w-full"><ProblemContainer cardData={cardData} route="home" /></div>
      <div className="flex flex-col gap-10 items-center mt-14">
        <div className="text-sm font-medium border border-color rounded-xl py-1 px-7">CUSTOMERS</div>
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
