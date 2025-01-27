import React from "react";
import Image from "next/image";

// Import SVG icons
import Acme from "/public/auto_scroll_svg/acme 1.svg";
import Apex from "/public/auto_scroll_svg/apex 1.svg";
import Celestia from "/public/auto_scroll_svg/celestia 1.svg";
import Echo from "/public/auto_scroll_svg/echo 1.svg";
import Plus from "/public/auto_scroll_svg/pulse 1.svg";
import Quantum from "/public/auto_scroll_svg/quantum 1 (1).svg";

const AutoScroll = () => {
  const icons = [Acme, Apex, Celestia, Echo, Plus, Quantum];

  return (
    <div className="relative w-full h-32 overflow-hidd">
      {/* Scrolling container */}
      <div className="flex w-full animate-scroll gap-8">
        {/* Render icons twice for seamless looping */}
        {[...icons, ...icons, ...icons].map((icon, index) => (
          <div key={index} className="flex-shrink-0 w-24 h-24">
            <Image
              src={icon}
              alt={`Icon ${index}`}
              layout="intrinsic"
              width={100}
              height={50}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[rgba(255,255,255,1)] via-[rgba(255,255,255,0)] to-[rgba(255,255,255,1)]"></div>
    </div>
  );
};

export default AutoScroll;
