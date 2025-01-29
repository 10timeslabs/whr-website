"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/HomeNavbar";
import Footer from "@/components/Footer";
import BackgroundImage from "/public/logo/background.jpg";
import HeroBannerPng from "/public/hero-bg.png";
import CircleImage from "/public/circle-bg.png";
import AutoScroll from "@/components/AutoScroll";
import { trackerImageData } from "../../data/trackerImagesData";
import CircleAnimation from "@/components/circleAnimation/CircleAnimation";
import CircleContainer from "@/components/circleAnimation/CircleContainer";
import ProductsCarousel from "@/components/ProductSection/ProductsCarousel";
import { companyLogos } from "../../data/companyLogoData";
import Clarity from "@/components/clarityAnimation/Clarity";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Location Intel");
  return (
    <div className={`py-[120px]`}>
      <div className={`text-center`}>
        <span className="mb-3 text-[56px] font-medium">
          Whats Happening for Real
        </span>
        <p className="text-[20px] text-[var(--secondary-text-color)]">
          Unlock Real-World Action Intel with WHR
        </p>
      </div>

      <section className="flex justify-center items-center mt-8">
        <nav className={styles.nav}>
          <div className={styles.tabs}>
            <button
              className={
                activeTab === "Location Intel" ? styles.activeTab : ""
              }
              onClick={() => setActiveTab("Location Intel")}
            >
              Location Intel
            </button>
            <button
              className={
                activeTab === "Industry Intel" ? styles.activeTab : ""
              }
              onClick={() => setActiveTab("Industry Intel")}
            >
              Industry Intel
            </button>
          </div>
        </nav>
      </section>
      <div className="w-full"><Clarity/></div>
      <div className="flex flex-col gap-6 items-center mb-[50px]">
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
