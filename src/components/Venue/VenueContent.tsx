import React from 'react'
import Image from 'next/image'
import VenueImage from "../../../public/prideplaza.webp";
function AttendContent() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
    <h1 className="font-inter font-semibold 
        text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px]  
        text-center text-[#101828]">Conference Venue</h1>
        <div className="text-center">
      <hr className="mt-2 border-t-2 border-[#00008b] w-3/12 mx-auto" />
    </div>
    {/*  banner with blue line  on above */}


    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="w-full flex flex-col items-center text-center">
        {/* Venue Image */}
        <div className="w-full max-w-4xl mb-8">
          <Image
            src={VenueImage}
            alt="Pride Plaza Hotel, Aerocity New Delhi"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Heading */}
        <section className="w-full py-2 md:py-6 px-4">
          <h2 className="font-inter font-semibold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-[36px] sm:leading-[42px] md:leading-[48px] lg:leading-[60px] text-center text-[#101828] mb-6 md:mb-10">
            Pride Plaza Hotel, Aerocity, New Delhi
          </h2>

          {/* Venue Description */}
          <p className="font-inter text-center text-[16px] md:text-[18px] leading-[28px] text-[#475467] max-w-4xl mx-auto">
            Asset 5-A, Hospitality District, Indira Gandhi International Airport, Aerocity, New Delhi, Delhi 110037.
            <br />
            Contact : 1800 209 1400
          </p>

        </section>
      
        <div className="flex items-start gap-4 mb-2 ">        
        <a
          href="https://maps.app.goo.gl/McaH173NtMpq6kPeA"
          target="_blank"
          rel="noopener noreferrer"
          style={{color:"blue"}}
          className="font-inter text-[15px] md:text-[16px] text-[#484848] hover:text-sky-500 leading-5"
        >
          View Location on Google Maps
        </a>
      </div>
      </div>
    </div>
    </div>
  );
}

export default AttendContent
