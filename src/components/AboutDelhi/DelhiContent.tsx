import React from "react";

function TouristSpots() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6 text-center">
      <h3 className="font-inter font-semibold text-[36px] md:text-[44px] leading-tight mb-12 text-[#101828]">
        Your Gateway to India
      </h3>

      <div className="flex flex-col gap-6 items-center">
        <a
          href="https://www.incredibleindia.gov.in/en"
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter text-xl md:text-2xl text-blue-600 hover:text-blue-800 underline"
        >
          Discover India
        </a>

        <a
          href="https://delhitourism.travel/places-to-visit-in-delhi"
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter text-xl md:text-2xl text-blue-600 hover:text-blue-800 underline"
        >
          Explore Delhi
        </a>
      </div>
    </section>
  );
}

export default TouristSpots;
