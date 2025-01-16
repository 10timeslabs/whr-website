import React from "react";
import BannerImage from "/public/geo_usecase_hotel&lodging_cropped.png";
import Image from "next/image";

const page = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={BannerImage}
        alt="Banner Image"
        className="h-[650px] w-full object-cover" 
      />

      {/* Main Text */}
      <div className="absolute left-10 top-1/4 transform -translate-y-1/3 text-black font-bold text-3xl p-4">
        Higher Occupancy, Lower Surprises
      </div>

      {/* Text with Background Blur */}
      <div className="absolute left-5 top-[30%] text-[#666666] text-lg p-4 max-w-lg">
        <div className="bg-[#E3B785] bg-opacity-10 backdrop-blur-md p-6 rounded-md">
          <p>
            You can't plan for what you can't foresee. Identifying causes for
            sudden increases and decreases in bookings is critical to taking
            action. With events being the most volatile factor, having a
            reliable event forecast helps with better pricing, inventory
            management, and staffing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
