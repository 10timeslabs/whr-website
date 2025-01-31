import React, { useEffect, useState } from 'react'
import SparkleImg from "/public/sparkle.png";
import Image from "next/image";
import CircleImage from "/public/CircularAnimation/Circle.png";
import { dropdownValues } from "../../../data/dropdownData";
import GridImage from "/public/usecase_grid.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface Props {
  text?: string;
}
const UseCasesContainer = ({ text }: Props) => {
  const [activeTab, setActiveTab] = useState("GTM");
  const gtmUsecases = dropdownValues.gtm["Use Cases"];
  const geoUsecases = dropdownValues.geo["Use Cases"];
  const [showMore, setShowMore] = useState(true); // Track visibility
  const [usecaseData, setUsecaseData] = useState([]);

  
  const pathName = usePathname();
  useEffect(() => {
    if(pathName === "/geo"){
      setUsecaseData(geoUsecases)
    }
    else if(pathName === "/gtm"){
      setUsecaseData(gtmUsecases)
    }
    else if (activeTab === "GTM") {
      setUsecaseData(gtmUsecases)
    } else if (activeTab === "GEO") {
      setUsecaseData(geoUsecases)
    }
  }, [activeTab])

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

  return (
    <div
      className="min-h-[520px] w-[87%] border border-[var(--border-color)] relative rounded-xl flex flex-col items-center relative overflow-hidden"
    // style={{ backgroundImage: `url(${GridImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div
        className="absolute right-0 top-[-150px] h-[700px] w-full -z-10"
        style={{
          background: `
            radial-gradient(circle, rgba(229, 221, 252, 0.6) 0%, transparent 40%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>
      <Image src={GridImage} alt="grid" className="absolute -z-[2]" />
      <Image
        src={CircleImage}
        alt="circle"
        width={690}
        height={690}
        unoptimized
        className="absolute top-[40%] 
      -z-[1]"
      />
      <div className="w-[80%] flex items-start justify-between mt-10 max-[600px]:justify-center">
        <Image src={SparkleImg} alt="star" height={58} width={58} className='max-[600px]:hidden' />
        <div className="flex flex-col gap-8 items-center">

          {pathName === "/geo" || pathName === "/gtm" ? (
            <span className="text-[36px] font-medium text-center">{text}</span>
          ) : (
            <div className="flex items-center gap-3 p-1 bg-[var(--neutral-light-color)] border border-[var(--neutral-light-color)] rounded-sm w-fit">
              <button
                className={`w-[100px] py-1 font-semibold rounded-sm flex items-center justify-center gap-1 ${activeTab === "GTM" ? "text-[#6750a4] bg-white" : "text-[var(--tertiary-text-color)]"
                  }`}
                onClick={() => setActiveTab("GTM")}
              >
                GTM
              </button>
              <button
                className={`w-[100px] py-1 font-semibold rounded-sm flex items-center justify-center gap-1 ${activeTab === "GEO"
                  ? "text-[#6750a4] bg-white"
                  : "text-[var(--tertiary-text-color)]"
                  }`}
                onClick={() => setActiveTab("GEO")}
              >
                GEO
              </button>
            </div>
          )}
          {/* {pathName === "/geo" || pathName === "/gtm" ? (
            <div>select your usecase to get started</div>
          ) : (
            ""
          )} */}
          
          {pathName === "/"  && <div className='text-2xl text-center'>{activeTab === "GTM" ? "Where should you Go" : "Where could you focus"}</div>}
          <div className="text-sm font-medium border border-color rounded-xl py-1 px-7">
            USECASES
          </div>
          {/* <div className="text-sm font-medium border border-color rounded-xl py-1 px-7">USECASES</div> */}
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
            {React.cloneElement(usecase.icon, { color: "#6750a4" })}
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
            {React.cloneElement(usecase.icon, { color: "#6750a4" })}
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
            {React.cloneElement(usecase.icon, { color: "#6750a4" })}
            <span>{usecase.label}</span>
          </Link>
        ))}
      </div>)}
      {/* </> */}
      {/* } */}
      <button
        className={`text-[#6750a4] font-medium cursor-pointer m-5 hidden max-[550px]:block ${showMore ? "mt-0" : ""}`}
        onClick={() => setShowMore(!showMore)} // Toggle state
      >
        {showMore ? "Hide" : "+ Load 5 More"}
      </button>

    </div>
  );
};

export default UseCasesContainer;
