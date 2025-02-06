"use client"
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const GetInTouch = () => {
  const router = useRouter();
  const pathName = usePathname()
  const handleClick = () =>{
    if(pathName.split("/")[1] === "geo"){
      window.open("https://console.eventeli.com/", "_blank")
    }else if(pathName.split("/")[1] === "gtm"){
      window.open("https://console.whr.ai/", "_blank")
    }
  }
  return (
    <div
      className="pb-6"
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
            Sign up for free today
          </span>
        </div>
        <div className="mt-6 text-[#010D3E] text-md text-center w-[30%] max-[650px]:w-[70%]">
            Celebrate the Power of Connection with a Platform Designed to Track Events, Uncover Insights, and Drive Impact.
        </div>
        <div
          className="bg-primary px-[12px] py-[8px] rounded-[10px] text-white cursor-pointer mt-8"
          onClick={() => {
            handleClick ()
            // window.open("https://console.whr.ai/", "_blank");
          }}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
