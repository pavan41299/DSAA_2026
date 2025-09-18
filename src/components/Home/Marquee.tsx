import React from "react";
import MarqueeLib from "react-fast-marquee";

const marqueeItems = [
  "Journal Track & Late-Breaking & PhD Abstract submission call is open!",
  "Submission date extended by 2 days",
  "Journal Track & Late-Breaking & PhD Abstract submission call is open!",
];

function Marquee() {
  return (
    <div className="flex flex-col xl:flex-row w-full bg-white border-b border-[#E5E7EB]">
      {/* Left container */}
      <div className="flex items-center justify-center xl:justify-end xl:text-right font-inter font-medium text-[16px] xl:text-[21.37px] leading-[100%] px-4 py-3 xl:px-[21.37px] xl:py-[16.02px] w-full xl:w-[355.22px] h-auto xl:h-[74.78333282470703px] bg-[#363636] text-white xl:min-w-[355.22px]">
        Announcements
      </div>
      
      {/* Marquee */}
      <div className="flex-1 overflow-hidden flex items-center h-[60px] xl:h-auto">
        <MarqueeLib gradient={false} speed={50}>
          {marqueeItems.map((item, idx) => (
            <span
              key={idx}
              className="font-inter h-[40px] xl:h-[50px] font-medium text-[16px] xl:text-[18px] leading-[100%] text-[#464646] px-3 xl:px-6 flex items-center whitespace-nowrap"
              style={{
                borderRight: "1.34px solid #CBCBCB",
              }}
            >
              {item}
            </span>
          ))}
        </MarqueeLib>
      </div>
    </div>
  );
}

export default Marquee;
