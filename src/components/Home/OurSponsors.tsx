"use client";
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';
import LoremLogo1 from "../../../public/sponsorlogos/loremlogo1.png"
import LoremLogo2 from "../../../public/sponsorlogos/loremlogo2.png"
import LoremLogo3 from "../../../public/sponsorlogos/loremlogo3.png"
import LoremLogo4 from "../../../public/sponsorlogos/loremlogo4.png"
import LoremLogo5 from "../../../public/sponsorlogos/loremlogo5.png"

const sponsors = [
  LoremLogo1, LoremLogo2, LoremLogo3, LoremLogo4, LoremLogo5, LoremLogo1, LoremLogo2, LoremLogo3,
  LoremLogo4, LoremLogo5, LoremLogo1, LoremLogo2, LoremLogo3, LoremLogo4, LoremLogo5, LoremLogo1,
  LoremLogo2, LoremLogo3, LoremLogo4, LoremLogo5, LoremLogo1, LoremLogo2, LoremLogo3, LoremLogo4,
];

// Create slides with 8 sponsors each
const createSlides = () => {
  const slides = [];
  for (let i = 0; i < sponsors.length; i += 8) {
    slides.push(sponsors.slice(i, i + 8));
  }
  return slides;
};

function OurSponsors() {
  const slides = createSlides();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000 })]
  );

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="w-full py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 bg-[#FCFCFC]">
      <div className="max-w-[1600px] mx-auto text-center">
        {/* Heading */}
        <h2 className="font-inter font-semibold text-[32px] sm:text-[40px] md:text-[40px] leading-[42px] sm:leading-[44px] md:leading-[46.74px] text-center text-[#101828] mb-4 sm:mb-6">
          Our Sponsors
        </h2>
        
        {/* Subtitle */}
        <p className="font-inter font-normal text-[16px] sm:text-[18px] md:text-[16px] leading-[24px] sm:leading-[28px] md:leading-[32.72px] text-center text-[#4A5565] mb-12 sm:mb-16 md:mb-12 max-w-4xl mx-auto">
          We are grateful to our sponsors for their support in making DSAA 2026 possible and advancing the data science community.
        </p>
        
        {/* Embla Carousel */}
        <div className="overflow-hidden mb-8 sm:mb-12" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} className="flex-shrink-0 w-full min-w-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center justify-center px-2 sm:px-4">
                  {slide.slice(0, 6).map((logo, logoIndex) => (
                    <div
                      key={`${slideIndex}-${logoIndex}`}
                      className="flex items-center justify-center p-2 sm:p-4 hover:scale-105 transition-transform duration-200"
                    >
                      <Image
                        src={logo}
                        alt={`Sponsor ${slideIndex * 6 + logoIndex + 1}`}
                        className="object-contain"
                        width={180}
                        height={90}
                        style={{ maxHeight: "90px", width: "100%", height: "auto" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Dots */}
        {slides.length > 1 && (
          <div className="flex justify-center gap-3 mb-12 sm:mb-16">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === selectedIndex ? 'bg-[#155DFC]' : 'bg-[#3a3a3a]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
        
        {/* Become a Sponsor Button */}
        <Link
          href="/contact"
          className="w-auto py-[16px] md:py-[18px] px-[14px] md:px-[26px] rounded-[12px] bg-[#155DFC] uppercase font-inter font-medium text-[14px] md:text-[16px] leading-none text-white inline-flex items-center justify-center transition-colors duration-200 hover:bg-[#0E44C0] cursor-pointer"
        >
          Become a Sponsor
        </Link>
      </div>
      
    </section>
  );
}

export default OurSponsors;
