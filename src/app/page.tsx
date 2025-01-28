"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/HomeNavbar";
import Footer from "@/components/Footer";
import BackgroundImage from "/public/logo/background.jpg";
import HeroBannerPng from "/public/hero-bg.png";
import CircleImage from "/public/circle-bg.png";
import GetMore_1 from "/public/tracker/getmore_1.png";
import GetMore_2 from "/public/tracker/getmore_2.png";
import GetMore_3 from "/public/tracker/getmore_3.png";
import GetMore_4 from "/public/tracker/getmore_4.png";
import GetMore_5 from "/public/tracker/getmore_5.png";
import GetMore_6 from "/public/tracker/getmore_6.png";
import GetMore_7 from "/public/tracker/getmore_7.png";
import GetMore_8 from "/public/tracker/getmore_8.png";
import GetMore_9 from "/public/tracker/getmore_9.png";
import AutoScroll from "@/components/AutoScroll";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Location Intel");
  const icons = [GetMore_1, GetMore_2, GetMore_3, GetMore_4, GetMore_5, GetMore_6, GetMore_7, GetMore_8, GetMore_9]
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
              <AutoScroll icons={icons} size="large"/>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
