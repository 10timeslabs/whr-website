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

export default function Home() {
  const [activeTab, setActiveTab] = useState("Location Intel");
  return (
    <div
      style={
        {
          // minHeight: "100vh",
          // backgroundImage: `url(${BackgroundImage.src})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
        }
      }
    >
      <div className={`${styles.heroSection} relative`}>
        <Navbar />
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.circle_square}>
          <span className={styles.dashboardImgSpinner}></span>
          <Image
            src={CircleImage}
            alt="circleimage"
            className={styles.circleImg}
          />
        </div>
        <span className={styles.dashboardImgSpinnerTwo}></span>
        <div className={styles.first_section}>
          <div className={`${styles.heroCaption} text-center`}>
            <h1 className="mb-3" style={{ fontSize: "4rem" }}>
              Know Before You Go
            </h1>
            <h3 style={{ fontSize: "1.8rem", fontWeight: "500" }}>
              AI Workflows to Unlock Real-World Events
            </h3>
            <p className={styles.heroCaption_sec_para}>
              Build your event strategy with access to a billion+ data points
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

          <section>
            <div>
              <AutoScroll icons={trackerImageData} size="large"/>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
