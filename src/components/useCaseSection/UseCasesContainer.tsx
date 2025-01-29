import React, { useState } from 'react'
import SparkleImg from "/public/sparkle.png";
import Image from 'next/image';
import CircleImage from '/public/CircularAnimation/Circle.png'
import { dropdownValues } from '../../../data/dropdownData';
import GridImage from '/public/usecase_grid.png'

const UseCasesContainer = () => {

  const [activeTab, setActiveTab] = useState("GTM");
  const gtmUsecases = dropdownValues.gtm["Use Cases"];
  const geoUsecases = dropdownValues.geo["Use Cases"];

  return (
    <div className='h-[520px] w-[1300px] border border-[var(--border-color)] relative rounded-xl flex flex-col items-center relative overflow-hidden'
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
      <Image src={GridImage} alt='grid' className='absolute -z-[2]'/>
      <Image src={CircleImage} alt="circle" width={690} height={690} unoptimized className='absolute top-[40%] 
      -z-[1]' />
      <div className='w-[80%] flex items-start justify-between mt-10'>
        <Image src={SparkleImg} alt="star" height={58} width={58} />
        <div className='flex flex-col gap-8 items-center'>
          <div className="flex items-center gap-3 p-1 bg-[var(--neutral-light-color)] border border-[var(--neutral-light-color)] rounded-sm w-fit">
            <button className={`w-[100px] py-1 font-semibold text-[var(--tertiary-text-color)] rounded-sm flex items-center justify-center gap-1 ${activeTab === "GTM" ? "text-[var(--primary-color)] bg-white" : ""}`}
              onClick={() => setActiveTab("GTM")}>
              GTM
            </button>
            <button className={`w-[100px] py-1 font-semibold text-[var(--tertiary-text-color)] rounded-sm flex items-center justify-center gap-1 ${activeTab === "GEO" ? "text-[var(--primary-color)] bg-white" : ""}`}
              onClick={() => setActiveTab("GEO")}>
              GEO
            </button>
          </div>
          <div className='text-2xl'>Where should you Go</div>
          <div className="text-sm font-medium border border-color rounded-xl py-1 px-7">USECASES</div>
        </div>
        <Image src={SparkleImg} alt="star" height={58} width={58} />
      </div>
      {activeTab === "GTM" ?
        <>
          <div className='w-full flex gap-3 justify-center mt-10'>
            {gtmUsecases.slice(0, 5).map((usecase: any, key: number) => (
              <div key={key} className='flex bg-white gap-2 rounded-lg border border-[#EEEEF0] p-2 items-center justify-center'>
                {React.cloneElement(usecase.icon, { color: "#6750a4" })}
                <span>{usecase.label}</span>
              </div>
            ))}
          </div>
          <div className='w-full flex gap-3 justify-center mt-3'>
            {gtmUsecases.slice(5, 10).map((usecase: any, key: number) => (
              <div key={key} className='flex bg-white gap-2 rounded-lg border border-[#EEEEF0] p-2 items-center justify-center'>
                {React.cloneElement(usecase.icon, { color: "#6750a4" })}
                <span>{usecase.label}</span>
              </div>
            ))}
          </div>
          <div className='w-full flex gap-3 justify-center mt-3'>
            {gtmUsecases.slice(10).map((usecase: any, key: number) => (
              <div key={key} className='flex bg-white gap-2 rounded-lg border border-[#EEEEF0] p-2 items-center justify-center'>
                {React.cloneElement(usecase.icon, { color: "#6750a4" })}
                <span>{usecase.label}</span>
              </div>
            ))}
          </div>
        </> :
        <>
          <div className='w-full flex gap-3 justify-center mt-10'>
            {geoUsecases.slice(0, 5).map((usecase: any, key: number) => (
              <div key={key} className='flex bg-white gap-2 rounded-lg border border-[#EEEEF0] p-2 items-center justify-center'>
                {React.cloneElement(usecase.icon, { color: "#6750a4" })}
                <span>{usecase.label}</span>
              </div>
            ))}
          </div>
          <div className='w-full flex gap-3 justify-center mt-3'>
            {geoUsecases.slice(5, 10).map((usecase: any, key: number) => (
              <div key={key} className='flex bg-white gap-2 rounded-lg border border-[#EEEEF0] p-2 items-center justify-center'>
                {React.cloneElement(usecase.icon, { color: "#6750a4" })}
                <span>{usecase.label}</span>
              </div>
            ))}
          </div>
          <div className='w-full flex gap-3 justify-center mt-3'>
            {geoUsecases.slice(10).map((usecase: any, key: number) => (
              <div key={key} className='flex bg-white gap-2 rounded-lg border border-[#EEEEF0] p-2 items-center justify-center'>
                {React.cloneElement(usecase.icon, { color: "#6750a4" })}
                <span>{usecase.label}</span>
              </div>
            ))}
          </div>
        </>}

    </div>
  )
}

export default UseCasesContainer