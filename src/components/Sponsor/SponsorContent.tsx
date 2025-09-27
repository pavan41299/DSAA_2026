import React from 'react'
import Image from 'next/image'

function SponsorContent() {
  const sponsors = [
    {
      name: "IEEE",
      logo: "/ieee.png",
      url: "https://www.ieee.org/",
    },
    {
      name: "IEEE CIS",
      logo: "/ieee_cis.png",
      url: "https://cis.ieee.org/",
    },
    {
      name: "IIIT Hyderabad",
      logo: "/download.webp",
      url: "https://www.iiit.ac.in/",
    },
  ];

  return (
    
    <div className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6 max-w-4xl mx-auto text-center ">
      <h3 className="font-inter text-center font-semibold text-[40px] md:text-[40px] leading-[100%] tracking-[0%] mb-14">
        Sponsors
      </h3>
      {/* Title */}
      {/* <h2 className="text-2xl font-semibold text-gray-900 mb-2">Sponsors</h2>
      <div className="border-t-2 border-blue-500 w-24 mx-auto mb-8"></div> */}
      
      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-16">
        {sponsors.map((sponsor, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
              <div className="w-[200px] h-[100px] flex items-center justify-center">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={200}
                  height={100}
                  className="object-contain"
                  quality={100}
                />
              </div>
            </a>
            <a
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-600 hover:underline"
            >
              {sponsor.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SponsorContent;
