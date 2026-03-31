import React from 'react'
import Image from 'next/image'

function SponsorContent() {
  const sponsor = {
    name: 'IIIT Hyderabad',
    logo: '/download.webp',
    url: 'https://www.iiit.ac.in/',
  }

  const technicalCoSponsors = [
    {
      name: 'IEEE',
      logo: '/ieee.png',
      url: 'https://www.ieee.org/',
    },
    {
      name: 'IEEE Computer Society',
      logo: '/ieeecs.jpeg',
      url: 'https://www.computer.org/',
    },
  ]

  return (
    <div className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6 max-w-4xl mx-auto text-center">
      <h3 className="font-inter text-center font-semibold text-[40px] md:text-[40px] leading-[100%] tracking-[0%] mb-14">
        Sponsors
      </h3>

      {/* Main Sponsor */}
      <div className="flex justify-center mb-14">
        <div className="flex flex-col items-center">
          <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
            <div className="w-[220px] h-[110px] flex items-center justify-center">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={220}
                height={110}
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
      </div>

      {/* Technical Co-Sponsors */}
      <div>
        <h4 className="text-2xl font-semibold mb-8">Technical Co-Sponsors</h4>
        <div className="flex flex-wrap justify-center gap-16">
          {technicalCoSponsors.map((sponsor, idx) => (
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
    </div>
  )
}

export default SponsorContent