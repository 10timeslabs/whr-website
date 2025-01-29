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

export default function Home() {
  const [activeTab, setActiveTab] = useState("Location Intel");
  return (
    <div>
      {/* <div className={`${styles.heroSection} relative`}> */}
      <Navbar />
      {/* <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.circle_square}>
          <span className={styles.dashboardImgSpinner}></span>
          <Image
            src={CircleImage}
            alt="circleimage"
            className={styles.circleImg}
          />
        </div> */}
      {/* <span className={styles.dashboardImgSpinnerTwo}></span> */}
      <div className={`${styles.heroCaption} text-center`}>
        <h1 className="mb-3 text-[56px]">
          Whats Happening for Real
        </h1>
        {/* <h3 style={{ fontSize: "1.8rem", fontWeight: "500" }}>
              AI Workflows to Unlock Real-World Events
            </h3> */}
        <p className="text-[20px]">
          Unlock Real-World Action Intel with WHR
        </p>
        <a href="https://console.whr.ai" className={styles.scheduleDemoBtn}>
          Get Started
        </a>
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
      <div className="flex flex-col gap-6 items-center mb-[50px]">
        <div className="text-sm font-medium border border-color rounded-xl py-1 px-7">CUSTOMERS USING WHR</div>
        <AutoScroll icons={companyLogos} size="small" />
      </div>
      <CircleContainer />
      <ProductsCarousel />
    </div>
  );
}
