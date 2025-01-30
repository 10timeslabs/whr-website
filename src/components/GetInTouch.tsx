import { useRouter } from "next/navigation";
import React from "react";

const GetInTouch = () => {
  const router = useRouter();
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
        <div className="mt-12">
          <span className="md:text-[56px] text-[36px] leading-[64px] font-bold">
            Sign up for free today
          </span>
        </div>
        <div className="mt-6 text-[#010D3E] text-md text-center w-[30%]">
            Celebrate the Power of Connection with a Platform Designed to Track Events, Uncover Insights, and Drive Impact.
        </div>
        <div
          className="bg-[#6750A4] px-[15px] py-[8px] rounded-[10px] text-white cursor-pointer mt-8"
          // onClick={() => {
          //   router.push("https://console.whr.ai/");
          // }}
          onClick={() => {
            window.open("https://console.whr.ai/", "_blank");
          }}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
