"use client"
import React, { useEffect, useState } from "react"
import SparkleImg from "/public/sparkle.png"
import Image from "next/image"
import CircleImage from "/public/CircularAnimation/Circle.png"
import { homepageTabsData } from "../../data/homepageTabsData"
import GridImage from "/public/usecase_grid.png"
import Link from "next/link"
import { usePathname } from "next/navigation"
import aiRecommendation from "/public/ai-recommendations.svg"
import usecases from "/public/usecases.svg"
import smartSearch from "/public/smart-search.svg"
import companiesIcon from "/public/company-icon.svg"
import peopleIcon from "/public/people-icon.svg"
import eventIcon from "/public/events-icon.svg"

const SearchSection = () => {
  const [activeTab, setActiveTab] = useState("Smart Search") 
  const predictFromEvents = homepageTabsData.PredictFromEvents["Use Cases"]
  const ParticipateInEvents = homepageTabsData.participateInEvents["Use Cases"]
  const sellToEvents = homepageTabsData.SellToEvents["Use Cases"]
  const pathName = usePathname()
  const [usecaseData, setUsecaseData] = useState(pathName === "/geo" ? predictFromEvents : ParticipateInEvents)
  const showTabs = !(pathName === "/geo" || pathName === "/gtm")
  const [searchInput, setSearchInput] = useState("");
  const router = require("next/navigation").useRouter ? require("next/navigation").useRouter() : null;
  const [aiInput, setAiInput] = useState("");
  const [aiError, setAiError] = useState("");

  const handleAiFetch = () => {
    if (!aiInput.trim()) {
      setAiError("Please enter a website URL.");
      return;
    }
    let urlValue = aiInput.trim();
    // Add protocol if missing
    if (!/^https?:\/\//i.test(urlValue)) {
      urlValue = "https://" + urlValue;
    }
    try {
      const urlObj = new URL(urlValue);
      // Only allow http/https
      if (!/^https?:$/.test(urlObj.protocol)) {
        setAiError("Please enter a valid http or https URL.");
        return;
      }
      // Remove protocol for dashboard url param
      const cleanUrl = urlObj.hostname + urlObj.pathname + (urlObj.search || "");
      const redirectUrl = `https://gtm.whr.ai/internal/trackers?tab=allTrackers&showTemplates=true&brand=${encodeURIComponent(cleanUrl)}&utm_campaign=onboarding&utm_source=whr&utm_medium=web&utm_term=ai_recommendations`;
      if (typeof window !== "undefined") {
        window.location.href = redirectUrl;
      } else if (router) {
        router.push(redirectUrl);
      }
    } catch (e) {
      setAiError("Please enter a valid website URL.");
    }
  };

  useEffect(() => {
    // Only update usecaseData if not on /geo or /gtm
    if (pathName !== "/geo" && pathName !== "/gtm") {
      setUsecaseData(
        activeTab === "Predict" ? predictFromEvents : activeTab === "Participate" ? ParticipateInEvents : sellToEvents,
      )
    }
  }, [activeTab, pathName])

  return (
    <div
      className="w-[87%] max-sm:w-[95%] py-8 border border-[var(--border-color)] relative rounded-xl flex flex-col items-center overflow-hidden"
      // style={{ backgroundImage: `url(${GridImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="w-full h-full absolute bg-white top-0 -z-[40]"></div>
      <Image src={GridImage || "/placeholder.svg"} alt="grid" className="absolute -z-[30]" />
      <div
        className="absolute right-0 top-[-150px] h-[700px] w-full -z-[20]"
        style={{
          background: `
          radial-gradient(circle, rgba(229, 221, 252, 0.6) 0%, transparent 40%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>
      <Image
        src={CircleImage || "/placeholder.svg"}
        alt="circle"
        width={690}
        height={690}
        priority // Ensures this image loads ASAP for LCP optimization
        className="absolute top-[40%] -z-[10] max-sm:w-[400px] max-sm:h-[400px]"
      />
      <div className="w-[80%] max-sm:w-[95%] flex items-start justify-between mt-0 sm:mt-10 max-[600px]:justify-center">
        <Image
          src={SparkleImg || "/placeholder.svg"}
          alt="star"
          height={58}
          width={58}
          className="max-[600px]:hidden"
        />
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
          {/* Tabs */}
          <div className="flex gap-2 max-sm:gap-1 bg-white rounded-lg shadow-md p-2 mb-6 max-sm:justify-center">
            <button
              className={`flex items-center gap-2 max-sm:gap-0 px-4 max-sm:px-3 py-2 rounded-lg font-medium max-sm:text-sm transition ${
                activeTab === "Smart Search" ? "text-white bg-primary" : "text-gray-500 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("Smart Search")}
              aria-label="Smart Search"
            >
              <Image
                src={smartSearch || "/placeholder.svg"}
                alt="smartSearch"
                width={20}
                height={20}
                className="max-sm:w-5 max-sm:h-5"
              />
              <span className="max-sm:hidden">Smart Search</span>
            </button>
            {pathName == "/gtm" && <button
              className={`flex items-center gap-2 max-sm:gap-0 px-4 max-sm:px-3 py-2 rounded-lg font-medium max-sm:text-sm transition ${
                activeTab === "AI Recommendations" ? "text-white bg-primary" : "text-gray-500 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("AI Recommendations")}
              aria-label="AI Recommendations"
            >
              <Image
                src={aiRecommendation || "/placeholder.svg"}
                alt="aiRecommendation"
                width={20}
                height={20}
                className="max-sm:w-5 max-sm:h-5"
              />
              <span className="max-sm:hidden">AI Recommendations</span>
            </button>}
            <button
              className={`flex items-center gap-2 max-sm:gap-0 px-4 max-sm:px-3 py-2 rounded-lg font-medium max-sm:text-sm transition ${
                activeTab === "Usecases" ? "text-white bg-primary" : "text-gray-500 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("Usecases")}
              aria-label="Usecases"
            >
              <Image
                src={usecases || "/placeholder.svg"}
                alt="usecases"
                width={20}
                height={20}
                className="max-sm:w-5 max-sm:h-5"
              />
              <span className="max-sm:hidden">Usecases</span>
            </button>
          </div>

          {/* Mobile: Show active tab name below tabs */}
          <div className="sm:hidden mb-3 text-center font-semibold text-base text-primary">
            {activeTab}
          </div>

          {/* Tab Content */}
          {activeTab === "Smart Search" && (
            <div className="w-full bg-white rounded-3xl border border-[#E6E6E6] shadow-lg flex flex-col px-6 max-sm:px-4 py-6 max-sm:py-4">
              <div className="flex items-center w-full">
                <textarea
                  placeholder="Search by keywords, people or company"
                  className="resize-none flex-1 bg-transparent h-24 max-sm:h-20 outline-none text-lg max-sm:text-base text-gray-800 placeholder-gray-400"
                  value={searchInput}
                  onChange={e => setSearchInput(e.target.value)}
                />
              </div>
              {/* Category buttons */}
              <div className="flex items-center justify-between gap-2 mt-2">
                <div className="flex gap-2 max-sm:flex-wrap">
                  <div className="flex items-center gap-2 max-sm:gap-1 p-2 max-sm:px-3 max-sm:py-2 rounded-lg bg-[#EBF5FF] text-[#666666] font-medium">
                    <Image
                      src={companiesIcon || "/placeholder.svg"}
                      alt="companies"
                      className="max-sm:w-4 max-sm:h-4"
                    />
                    <span className="text-sm max-sm:text-xs">Companies</span>
                  </div>
                  <div className="flex items-center gap-2 max-sm:gap-1 p-2 max-sm:px-3 max-sm:py-2 rounded-lg bg-[#EBF5FF] text-[#666666] font-medium">
                    <Image src={peopleIcon || "/placeholder.svg"} alt="people" className="max-sm:w-4 max-sm:h-4" />
                    <span className="text-sm max-sm:text-xs">People</span>
                  </div>
                  <div className="flex items-center gap-2 max-sm:gap-1 p-2 max-sm:px-3 max-sm:py-2 rounded-lg bg-[#EBF5FF] text-[#666666] font-medium">
                    <Image src={eventIcon || "/placeholder.svg"} alt="events" className="max-sm:w-4 max-sm:h-4" />
                    <span className="text-sm max-sm:text-xs">Events</span>
                  </div>
                </div>
                <div className="max-sm:flex max-sm:justify-center max-sm:mt-2">
                  <button
                    type="button"
                    className="ml-2 max-sm:ml-0 p-2 rounded-full bg-primary hover:bg-primary-dark transition flex items-center justify-center"
                    aria-label="Send search"
                    onClick={() => {
                      if (!searchInput.trim()) return;
                      // Split input by comma or space, filter out empty
                      const keywords = searchInput.split(/[,\s]+/).filter(Boolean);
                      const platform = pathName == "/gtm" ? "gtm" : "geo"
                      const url = `https://${platform}.whr.ai/internal/search/events?view=table&includeKeywords=${encodeURIComponent(keywords.join(","))}&utm_campaign=onboarding&utm_source=whr&utm_medium=web&utm_term=smart_search`;
                      if (typeof window !== "undefined") {
                        window.location.href = url;
                      } else if (router) {
                        router.push(url);
                      }
                    }}
                  >
                    {/* Send Icon SVG */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="max-sm:w-5 max-sm:h-5"
                    >
                      <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="white" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "AI Recommendations" && (
            <div className="w-full bg-white rounded-3xl border border-[#E6E6E6] shadow-lg p-6 max-sm:p-4">
              <p className="text-gray-500 max-sm:text-sm">
                Enter your website and we will help you to build your event brief
              </p>
              <div className="w-full my-4 flex max-sm:flex-col items-center border-2 border-primary rounded-lg px-2 py-1 focus-within:ring-2 focus-within:ring-[#B9A7E6] transition max-sm:gap-2">
                <input
                  type="text"
                  placeholder="Enter web URL"
                  className="flex-1 outline-none bg-transparent px-2 py-2 max-sm:px-1 max-sm:py-1 text-gray-700 text-base max-sm:text-sm max-sm:w-full"
                  value={aiInput}
                  onChange={e => {
                    setAiInput(e.target.value);
                    setAiError("");
                  }}
                />
                <button
                  className="ml-2 max-sm:ml-0 px-4 py-1 max-sm:px-6 max-sm:py-2 rounded bg-gray-200 text-gray-600 font-medium hover:bg-gray-300 transition max-sm:w-full"
                  type="button"
                  onClick={handleAiFetch}
                >
                  Fetch
                </button>
              </div>
              {aiError && (
                <div className="text-red-500 text-sm mt-1">{aiError}</div>
              )}
            </div>
          )}

          {activeTab === "Upload List" && (
            <div className="w-full bg-white rounded-3xl border border-[#E6E6E6] shadow-lg flex flex-col items-center justify-center p-6 max-sm:p-4">
              <h2 className="text-xl max-sm:text-lg font-semibold mb-2">Upload List</h2>
              <p className="text-gray-500 max-sm:text-sm max-sm:text-center">
                Upload your list of companies, people, or events to get started. (Dummy content)
              </p>
            </div>
          )}

          {activeTab === "Usecases" && (
            <div className="w-full bg-white rounded-3xl border border-[#E6E6E6] shadow-lg flex flex-col items-center justify-center p-4 max-sm:p-3">
              <div className="w-full flex gap-3 max-sm:gap-2 justify-center flex-wrap">
                {usecaseData.map((usecase: any, key: number) => (
                  <Link
                    href={usecase.href}
                    key={key}
                    className="flex bg-white gap-2 max-sm:gap-1 rounded-lg border border-[#EEEEF0] p-2 max-sm:p-1.5 items-center justify-center max-sm:text-sm"
                  >
                    {React.cloneElement(usecase.icon, {
                      color: "#6750A4",
                      color2: "#FFF6E6",
                      className: "max-sm:w-4 max-sm:h-4",
                    })}
                    <span className="max-sm:text-xs">{usecase.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        <Image
          src={SparkleImg || "/placeholder.svg"}
          alt="star"
          height={58}
          width={58}
          className="max-[600px]:hidden"
        />
      </div>
    </div>
  )
}

export default SearchSection
