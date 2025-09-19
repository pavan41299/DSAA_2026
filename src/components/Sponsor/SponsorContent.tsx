import React from 'react'
import Image from 'next/image'
import ComingSoonImage from '../../../public/coming soon2.png'

function SponsorContent() {
  const sponsors = [
    {
      name: "IEEE",
      logo: "/public/latestlogoaroial.png", // put your IEEE logo herepublic\latestlogoaroial.png
      url: "https://www.ieee.org/",
    },
    {
      name: "IEEE CIS",
      logo: "/public/banner1.png", // put your IEEE CIS logo here public\download.webp
      url: "https://cis.ieee.org/",
    },
    {
      name: "IIIT Hyderabad",
      logo: "/sponsors/ieee-cis.png", // put your IEEE CIS logo hereC:\Users\pavan\OneDrive\Desktop\GitHUbsDSAA2026\DSAA_2026\public\latestlogoaroial.png
      url: "https://cis.ieee.org/",
    },
  ];
  return (
    <div className="max-w-4xl mx-auto text-center py-12">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Sponsors</h2>
      <div className="border-t-2 border-blue-500 w-24 mx-auto mb-8"></div>

      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-16">
        {sponsors.map((sponsor, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={200}
                height={100}
                className="object-contain"
              />
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
   
  // return (
  //   <section className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6">
  //     <div className="max-w-[1700px] mx-auto">
  //       <div className="flex justify-center mb-8">
  //       <section className="w-full py-8 md:py-14 px-4">
  //         <h2 className="font-inter font-semibold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-[36px] sm:leading-[42px] md:leading-[48px] lg:leading-[60px] text-center text-[#101828] mb-6 md:mb-10">
  //         Coming Soon
  //         </h2>
  //       </section>
  //       </div>
  //     </div>
  //   </section>
  // )
}

export default SponsorContent
