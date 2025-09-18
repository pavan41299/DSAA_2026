import React from "react";
import Image from "next/image";
import personImage from "../../../public/MaleDummy.jpeg";
import personImage2 from "../../../public/FemaleDummy.jpeg";
import Chevronrights from "../../../public/chevrons-right.svg"

const organizers = [
  {
    role: "General Chair",
    name: "Organizer Name",
    affiliation: "Designation/ Authority",
    image: personImage,
  },
  {
    role: "General Chair",
    name: "Organizer Name",
    affiliation: "Designation/ Authority",
    image: personImage2,
  },
  {
    role: "General Chair",
    name: "Organizer Name",
    affiliation: "Designation/ Authority",
    image: personImage,
  },
];

const stripItems = [
  { text: "Programme", bg: "#B4E9FF" },
  { text: "Travel Attraction", bg: "#DBF7E4" },
  { text: "Venue", bg: "#FFD9DA" },
  { text: "Airport Transfer", bg: "#E8E5FF" },
];

function ConferenceOrganizers() {
  return (
    <section className="w-full py-8 md:py-14 px-4">
      {/* Heading */}
      <h2 className="font-inter font-semibold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-[36px] sm:leading-[42px] md:leading-[48px] lg:leading-[60px] text-center text-[#101828] mb-6 md:mb-10">
        Conference Organizers
      </h2>
      
      {/* Organizers Grid */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
        {/* Organizer Cards */}
        {organizers.map((org, idx) => (
          <div key={idx} className="flex flex-col items-center bg-white rounded-xl p-4 md:p-6">
            <div className="font-inter font-medium text-[12px] md:text-[14px] leading-[18px] md:leading-[21px] text-[#2B7FFF] text-center mb-2">
              {org.role}
            </div>
            <Image
              src={org.image}
              alt={org.name}
              width={80}
              height={80}
              className="md:w-[100px] md:h-[100px] rounded-full mb-3 object-cover"
            />
            <div className="font-inter font-medium text-[18px] md:text-[20px] leading-[27px] md:leading-[30px] text-[#101828] text-center mb-1">
              {org.name}
            </div>
            <div className="font-inter font-normal text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] text-[#4A5565] text-center">
              {org.affiliation}
            </div>
          </div>
        ))}
        
        {/* Explore Card */}
        <div className="flex flex-col items-center justify-center bg-[#F8FAFE] rounded-xl p-4 md:p-6">
          <div className="font-inter font-normal text-[14px] md:text-[16px] leading-[21px] md:leading-[27px] text-black text-center mb-4">
            Explore the complete Organizing Committee Leading DSSA 2026
          </div>
          <button
            className="w-auto cursor-pointer py-[16px] md:py-[18px] px-[14px] md:px-[26px] rounded-[12px] bg-[#0B0B0B] uppercase font-inter font-medium text-[14px] md:text-[16px] leading-none text-white inline-flex items-center justify-center"
          >
            View All Chairs
          </button>
        </div>
      </div>
      
      {/* Strip Section */}
      <div className="max-w-[1700px] mx-auto flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 justify-center sm:justify-between">
        {stripItems.map((item) => (
          <div
            key={item.text}
            className="rounded-[1px] px-6 sm:px-8 md:px-8 py-3 md:py-4 gap-2 w-full sm:w-auto"
            style={{
              background: item.bg,
              boxShadow: "0px 4px 4px 0px #00000040",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
            }}
          >
            <Image
              src={Chevronrights}
              alt="chevrons right"
              width={24}
              height={24}
              className="sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] inline-flex items-center mr-2 sm:mr-3"
            />
            <span className="font-inter font-bold text-[20px] sm:text-[26px] md:text-[24px] leading-[28px] sm:leading-[34px] md:leading-[42.07px] text-[#2F2D2D] text-center inline-flex items-center">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ConferenceOrganizers;
