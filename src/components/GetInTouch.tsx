"use client"
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PlatformSelectionModal from "./PlatformSelection/platformSelectionModal";
import whrLogo from "/public/logo/croppedlogo.png";
import { GAEvent } from "../../utils/gaEvents";

const GetInTouch = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleClick = () => {
    if(pathName.split("/")[1] === "geo"){
      window.open("https://geo.whr.ai/signup", "_blank");
    } else if(pathName.split("/")[1] === "gtm"){
      window.open("https://gtm.whr.ai/signup", "_blank");
    } else {
      setIsModalOpen(true);
    }
  }
  return (
    <div
      className="pb-6 w-full"
      style={{
        opacity: "0.9",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 1) 10%,  rgba(210, 220, 255, 0.5) 100%)",
      }}
    >
      <div className="flex flex-col items-center mt-12">
        <div className="flex flex-col items-center text-sm font-medium border border-color rounded-xl py-1 px-7">
          GET IN TOUCH
        </div>
        <div className="mt-12 text-center">
          <span className="text-[48px]">
            Sign up to know Whr
          </span>
        </div>
        <div className="mt-6 text-[#010D3E] text-md text-center w-[30%] max-[650px]:w-[70%]">
            Celebrate the Power of Connection with a Platform Designed to Track Events, Uncover Insights, and Drive Impact.
        </div>
        <div
          className="bg-[#6F48AD]   px-[12px] py-[8px] rounded-[10px] text-white cursor-pointer mt-8"
          onClick={() => {
            handleClick();
          }}
        >
          Sign Up
        </div>
      </div>
      
      <PlatformSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className=" grid grid-cols-1 sm:grid-cols-6 gap-4 sm:gap-6 mt-6 max-h-[70vh] sm:max-h-none overflow-y-auto p-2">
          <div className="bg-[#59478C] rounded-xl p-4 sm:p-5 flex flex-col gap-3 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.25)] col-span-1 sm:col-span-6 lg:col-span-2 min-h-[160px] sm:h-[20vh] lg:h-[50vh] justify-between">
            <div className="flex flex-col gap-3">
              <div className="text-sm text-white">
                Choose the platform that fits your business needs, complete a quick signup, and begin your journey.
              </div>
              <div className="text-white font-bold">{"->"}</div>
            </div>
            <div className="items-center gap-2 flex sm:hidden lg:flex">
              <div className="bg-white rounded-xl p-1 h-9 w-9 flex items-center justify-center shadow-lg">
                <Image src={whrLogo} alt="tick" height={26} width={24} />
              </div>
              <span className="text-white font-bold text-lg">WHR.ai</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 sm:p-5 flex flex-col gap-3 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.25)] col-span-1 sm:col-span-3 lg:col-span-2 min-h-[280px] sm:h-[50vh] justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-xl p-1 h-9 w-9 flex items-center justify-center shadow-lg">
                  <Image src={whrLogo} alt="tick" height={26} width={24} />
                </div>
                <div className="font-bold text-2xl">GEO</div>
              </div>
              <div className="text-muted-foreground text-sm">
                What You'll Get
              </div>
              <div className="overflow-y-auto h-auto sm:h-[120px] flex-1">
                <div className="flex gap-2 items-baseline text-sm">
                  Unlock comprehensive geographic insights and spatial intelligence to make data-driven decisions for your business.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <button
                className="bg-[var(--primary-color)] rounded-md text-white text-center py-2"
                onClick={() => {
                  GAEvent('whr_get_in_touch', 'Platform Selection', 'Click', 'Choose GEO Button');
                  window.open("https://geo.whr.ai/signup", "_blank");
                  setIsModalOpen(false);
                }}
              >
                Choose GEO
              </button>
              <div className="text-center pb-3 text-sm">
                Already have an account?
                <Link
                  href="https://geo.whr.ai/signin"
                  className="text-[#6750a4] cursor-pointer font-medium"
                >
                  {" "}
                  Log In
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 sm:p-5 flex flex-col gap-3 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.25)] col-span-1 sm:col-span-3 lg:col-span-2 min-h-[280px] sm:h-[50vh] justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-xl p-1 h-9 w-9 flex items-center justify-center shadow-lg">
                  <Image src={whrLogo} alt="tick" height={26} width={24} />
                </div>
                <div className="font-bold text-2xl">GTM</div>
              </div>
              <div className="text-muted-foreground text-sm">
                What You'll Get
              </div>
              <div className="overflow-y-auto h-auto sm:h-[120px] flex-1">
                <div className="flex gap-2 items-baseline text-sm">
                  Focused insights into business events, delivering industry-specific intelligence to drive informed go-to-market decisions.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <button
                className="bg-[var(--primary-color)] rounded-md text-white text-center py-2"
                onClick={() => {
                  GAEvent('whr_get_in_touch', 'Platform Selection', 'Click', 'Choose GTM Button');
                  window.open("https://gtm.whr.ai/signup", "_blank");
                  setIsModalOpen(false);
                }}
              >
                Choose GTM
              </button>
              <div className="text-center pb-3 text-sm">
                Already have an account?
                <Link
                  href="https://gtm.whr.ai/signin"
                  className="text-[#6750a4] cursor-pointer font-medium"
                >
                  {" "}
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PlatformSelectionModal>
    </div>
  );
};

export default GetInTouch;
