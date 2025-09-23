import React from 'react'
import Image from 'next/image'
import VenueImage from "../../../public/prideplaza.webp";
function AttendContent() {
  return (
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
        <section className="w-full py-8 md:py-14 px-4">
          <h2 className="font-inter font-semibold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-[36px] sm:leading-[42px] md:leading-[48px] lg:leading-[60px] text-center text-[#101828] mb-6 md:mb-10">
            Pride Plaza Hotel, Aerocity, New Delhi
          </h2>

          {/* Venue Description */}
          <p className="font-inter text-[16px] md:text-[18px] leading-[28px] text-[#475467] text-justify max-w-4xl mx-auto">
            The 13th IEEE International Conference on Data Science and Advanced
            Analytics (DSAA 2026) will be hosted at the{" "}
            <span className="font-semibold text-[#101828]">
              Pride Plaza Hotel, Aerocity, New Delhi
            </span>
            . Located just minutes away from Indira Gandhi International Airport,
            the 5-star luxury hotel offers world-class conference facilities with
            over 12,000 sq. ft. of event space, state-of-the-art audiovisual
            equipment, and elegant banquet halls. Attendees will also enjoy
            premium accommodations, diverse dining options, spa and fitness
            amenities, making it an ideal setting for a global academic and
            industry gathering.
          </p>
        </section>
      
        <div className="flex items-start gap-4 mb-6 ">
        
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
  );
}

export default AttendContent
