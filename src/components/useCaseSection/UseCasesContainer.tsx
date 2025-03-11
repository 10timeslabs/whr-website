// "use client"
// import React, { useEffect, useState } from 'react'
// import SparkleImg from "/public/sparkle.png";
// import Image from "next/image";
// import CircleImage from "/public/CircularAnimation/Circle.png";
// import { dropdownValues } from "../../../data/dropdownData";
// import GridImage from "/public/usecase_grid.png";
// import Link from "next/link";
// interface Props {
//   text?: string;
//   pathName: string;
// }
// const UseCasesContainer = ({ text, pathName }: Props) => {
//   const [activeTab, setActiveTab] = useState("GTM");
//   const gtmUsecases = dropdownValues.gtm["Use Cases"];
//   const geoUsecases = dropdownValues.geo["Use Cases"];
//   const [showMore, setShowMore] = useState(true); // Track visibility
//   const [usecaseData, setUsecaseData] = useState(
//     pathName === "/geo" ? geoUsecases : gtmUsecases
//   );

//   const showTabs = !(pathName === "/geo" || pathName === "/gtm");
//   useEffect(() => {
//     // Only update usecaseData if not on /geo or /gtm
//     if (pathName !== "/geo" && pathName !== "/gtm") {
//       setUsecaseData(activeTab === "GTM" ? gtmUsecases : geoUsecases);
//     }
//   }, [activeTab, pathName]);

//   useEffect(() => {
//     const updateVisibility = () => {
//       if (window.innerWidth <= 550) {
//         setShowMore(false);
//       }

//     };
//     updateVisibility(); // Run on initial load
//     window.addEventListener("resize", updateVisibility); // Listen for resize events
//     return () => window.removeEventListener("resize", updateVisibility); // Cleanup
//   }, []);

//   return (
//     <div
//       className="min-h-[520px] w-[87%] border border-[var(--border-color)] relative rounded-xl flex flex-col items-center relative overflow-hidden "
//     // style={{ backgroundImage: `url(${GridImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//     >
//       <div className='w-full h-full absolute bg-white top-0 -z-[40]'></div>
//       <Image src={GridImage} alt="grid" className="absolute -z-[30]" />
//       <div
//         className="absolute right-0 top-[-150px] h-[700px] w-full -z-[20]"
//         style={{
//           background: `
//             radial-gradient(circle, rgba(229, 221, 252, 0.6) 0%, transparent 40%)`,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       ></div>
//       <Image
//         src={CircleImage}
//         alt="circle"
//         width={690}
//         height={690}
//         priority // Ensures this image loads ASAP for LCP optimization
//         className="absolute top-[40%] -z-[10]"
//       />

//       <div className="w-[80%] flex items-start justify-between mt-10 max-[600px]:justify-center">
//         <Image src={SparkleImg} alt="star" height={58} width={58} className='max-[600px]:hidden' />
//         <div className="flex flex-col gap-8 items-center">

//           {showTabs ? (
//             <div className="flex items-center gap-3 p-1 bg-[var(--neutral-light-color)] border border-[var(--neutral-light-color)] rounded-sm w-fit">
//               <button
//                 className={`w-[100px] py-1 font-semibold rounded-sm flex items-center justify-center gap-1 ${activeTab === "GTM" ? "text-[#6750a4] bg-white" : "text-[var(--tertiary-text-color)]"
//                   }`}
//                 onClick={() => setActiveTab("GTM")}
//               >
//                 GTM
//               </button>
//               <button
//                 className={`w-[100px] py-1 font-semibold rounded-sm flex items-center justify-center gap-1 ${activeTab === "GEO" ? "text-[#6750a4] bg-white" : "text-[var(--tertiary-text-color)]"
//                   }`}
//                 onClick={() => setActiveTab("GEO")}
//               >
//                 GEO
//               </button>
//             </div>
//           ) : (
//             <span className="text-[36px] font-medium text-center">{text}</span>
//           )}
//           {pathName === "/" && <div className='text-2xl text-center'>{activeTab === "GTM" ? "Where should you Go" : "Where could you focus"}</div>}
//           <div className="text-sm font-medium border border-color rounded-xl py-1 px-7">
//            Use Cases
//           </div>
//         </div>
//         <Image src={SparkleImg} alt="star" height={58} width={58} className='max-[600px]:hidden' />
//       </div>

//       {/* <> */}
//       <div className='w-full flex gap-3 justify-center flex-wrap mt-10'>
//         {usecaseData.slice(0, 5).map((usecase: any, key: number) => (
//           <Link
//             href={usecase.href}
//             key={key}
//             className="flex bg-white gap-2 rounded-lg border border-[#EEEEF0] p-2 items-center justify-center"
//           >
//             {React.cloneElement(usecase.icon, { color: "#6750A4", color2: "#FFF6E6" })}
//             <span>{usecase.label}</span>
//           </Link>
//         ))}
//       </div>
//       <div className='w-full flex gap-3 justify-center flex-wrap mt-3'>
//         {usecaseData.slice(5, 10).map((usecase: any, key: number) => (
//           <Link
//             href={usecase.href}
//             key={key}
//             className="flex bg-white gap-2 rounded-lg border border-[#EEEEF0] p-2 items-center justify-center"
//           >
//             {React.cloneElement(usecase.icon, { color: "#6750A4", color2: "#FFF6E6" })}
//             <span>{usecase.label}</span>
//           </Link>
//         ))}
//       </div>
//       {showMore && (<div className="w-full flex gap-3 justify-center flex-wrap mt-3 mb-5">
//         {usecaseData.slice(10).map((usecase: any, key: number) => (
//           <Link
//             href={usecase.href}
//             key={key}
//             className="flex bg-white gap-2 rounded-lg border border-[#EEEEF0] p-2 items-center justify-center"
//           >
//             {React.cloneElement(usecase.icon, { color: "#6750A4", color2: "#FFF6E6" })}
//             <span>{usecase.label}</span>
//           </Link>
//         ))}
//       </div>)}
//       {/* </> */}
//       {/* } */}
//       <button
//         className={`text-[#6750a4] font-medium cursor-pointer m-5 hidden max-[550px]:block ${showMore ? "mt-0" : ""}`}
//         onClick={() => setShowMore(!showMore)} // Toggle state
//       >
//         {showMore ? "Hide" : "+ Load 5 More"}
//       </button>

//     </div>
//   );
// };

// export default UseCasesContainer;



"use client"
import React, { useEffect, useState } from 'react'
import SparkleImg from "/public/sparkle.png";
import Image from "next/image";
import CircleImage from "/public/CircularAnimation/Circle.png";
import { homepageTabsData } from "../../../data/homepageTabsData";
import GridImage from "/public/usecase_grid.png";
import Link from "next/link";
interface Props {
  text?: string;
  pathName: string;
}
const UseCasesContainer = ({ text, pathName }: Props) => {
  const [activeTab, setActiveTab] = useState("Predict from Events");
  const predictFromEvents = homepageTabsData.PredictFromEvents["Use Cases"];
  const ParticipateInEvents = homepageTabsData.participateInEvents["Use Cases"];
  const sellToEvents = homepageTabsData.SellToEvents["Use Cases"];
  const [showMore, setShowMore] = useState(true); // Track visibility
  const [usecaseData, setUsecaseData] = useState(
    pathName === "/geo" ? predictFromEvents : ParticipateInEvents
  );

  const showTabs = !(pathName === "/geo" || pathName === "/gtm");
  useEffect(() => {
    // Only update usecaseData if not on /geo or /gtm
    if (pathName !== "/geo" && pathName !== "/gtm") {
      setUsecaseData(activeTab === "Predict from Events" ? predictFromEvents : activeTab==="Participate in Events" ?ParticipateInEvents:sellToEvents);
    }
  }, [activeTab, pathName]);

  useEffect(() => {
    const updateVisibility = () => {
      if (window.innerWidth <= 550) {
        setShowMore(false);
      }

    };
    updateVisibility(); // Run on initial load
    window.addEventListener("resize", updateVisibility); // Listen for resize events
    return () => window.removeEventListener("resize", updateVisibility); // Cleanup
  }, []);

  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" && window.innerWidth <= 890);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 890); 
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const tabs = ["Predict from Events", "Sell to Events", "Participate in Events"];
  const activeIndex = tabs.indexOf(activeTab)
  const handlePrev = () => {
    const newIndex = activeIndex === 0 ? tabs.length - 1 : activeIndex - 1;
    setActiveTab(tabs[newIndex]);
  };

  const handleNext = () => {
    const newIndex = activeIndex === tabs.length - 1 ? 0 : activeIndex + 1;
    setActiveTab(tabs[newIndex]);
  };
  
  return (
    <div
      className="min-h-[520px] w-[87%] border border-[var(--border-color)] relative rounded-xl flex flex-col items-center relative overflow-hidden "
    // style={{ backgroundImage: `url(${GridImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className='w-full h-full absolute bg-white top-0 -z-[40]'></div>
      <Image src={GridImage} alt="grid" className="absolute -z-[30]" />
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
        src={CircleImage}
        alt="circle"
        width={690}
        height={690}
        priority // Ensures this image loads ASAP for LCP optimization
        className="absolute top-[40%] -z-[10]"
      />

      <div className="w-[80%] flex items-start justify-between mt-10 max-[600px]:justify-center">
        <Image src={SparkleImg} alt="star" height={58} width={58} className='max-[600px]:hidden' />
        <div className="flex flex-col gap-8 items-center">
           {
            isMobile&&showTabs?(
              <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 w-max">
                <button onClick={handlePrev} className="p-2">
                 <LeftArrow/>
                </button>
    
               <div className='bg-[var(--neutral-light-color)] p-2 rounded-md'> <div className="px-4 py-2 bg-white rounded-md shadow-md border font-semibold text-[#6750a4]">
                  {activeTab}
                </div></div>
    
                <button onClick={handleNext} className="p-2">
                <RightArrow/>
                </button>
              </div>
    
              <div className="flex gap-2 mt-2">
                {tabs.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 w-2 rounded-full ${index === activeIndex? "bg-[#6750a4]" : "bg-gray-400"}`}
                  ></span>
                ))}
              </div>
            </div>
            ):( <div className="flex items-center gap-3 p-1 bg-[var(--neutral-light-color)] border border-[var(--neutral-light-color)] rounded-sm w-fit">
              <button
                className={`w-auto px-2 py-1 font-semibold rounded-sm flex items-center justify-center gap-1 ${activeTab === "Predict from Events" ? "text-[#6750a4] bg-white" : "text-[var(--tertiary-text-color)]"
                  }`}
                onClick={() => setActiveTab("Predict from Events")}
              >
                Predict from Events
              </button>
              <button
                className={`w-auto px-2 py-1 font-semibold rounded-sm flex items-center justify-center gap-1 ${activeTab === "Sell to Events" ? "text-[#6750a4] bg-white" : "text-[var(--tertiary-text-color)]"
                  }`}
                onClick={() => setActiveTab("Sell to Events")}
              >
                Sell to Events
              </button>
              <button
                className={`w-auto px-2 py-1 font-semibold rounded-sm flex items-center justify-center gap-1 ${activeTab === "Participate in Events" ? "text-[#6750a4] bg-white" : "text-[var(--tertiary-text-color)]"
                  }`}
                onClick={() => setActiveTab("Participate in Events")}
              >
                Participate in Events
              </button>
            </div> )
           }
          {pathName === "/" && <div className='text-2xl text-center'>{activeTab === "GTM" ? "Where should you Go" : "Where could you focus"}</div>}
          <div className="text-sm font-medium border border-color rounded-xl py-1 px-7">
           Use Cases
          </div>
        </div>
        <Image src={SparkleImg} alt="star" height={58} width={58} className='max-[600px]:hidden' />
      </div>

      {/* <> */}
      <div className='w-full flex gap-3 justify-center flex-wrap mt-10'>
        {usecaseData.slice(0, 5).map((usecase: any, key: number) => (
          <Link
            href={usecase.href}
            key={key}
            className="flex bg-white gap-2 rounded-lg border border-[#EEEEF0] p-2 items-center justify-center"
          >
            {React.cloneElement(usecase.icon, { color: "#6750A4", color2: "#FFF6E6" })}
            <span>{usecase.label}</span>
          </Link>
        ))}
      </div>
      <div className='w-full flex gap-3 justify-center flex-wrap mt-3'>
        {usecaseData.slice(5, 10).map((usecase: any, key: number) => (
          <Link
            href={usecase.href}
            key={key}
            className="flex bg-white gap-2 rounded-lg border border-[#EEEEF0] p-2 items-center justify-center"
          >
            {React.cloneElement(usecase.icon, { color: "#6750A4", color2: "#FFF6E6" })}
            <span>{usecase.label}</span>
          </Link>
        ))}
      </div>
      {showMore && (<div className="w-full flex gap-3 justify-center flex-wrap mt-3 mb-5">
        {usecaseData.slice(10).map((usecase: any, key: number) => (
          <Link
            href={usecase.href}
            key={key}
            className="flex bg-white gap-2 rounded-lg border border-[#EEEEF0] p-2 items-center justify-center"
          >
            {React.cloneElement(usecase.icon, { color: "#6750A4", color2: "#FFF6E6" })}
            <span>{usecase.label}</span>
          </Link>
        ))}
      </div>)}
      {/* </> */}
      {/* } */}
      {activeTab !== "Sell to Events" && (
       <button
        className={`text-[#6750a4] font-medium cursor-pointer m-5 hidden max-[550px]:block ${showMore ? "mt-0" : ""}`}
        onClick={() => setShowMore(!showMore)} // Toggle state
      >
        {showMore ? "Hide" : "+ Load 5 More"}
      </button>
      )}
    </div>
  );
};

export default UseCasesContainer;

const LeftArrow = () =>{
  return(
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-gray-600"
  >
    <path d="M15 18l-6-6 6-6"></path>
  </svg>
  )
}

const RightArrow = () =>{
  return(
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 text-gray-600"
  >
    <path d="M9 18l6-6-6-6"></path>
  </svg>
  )
}