// // "use client"
// // import React from 'react';
// // import useEmblaCarousel from 'embla-carousel-react';
// // import Autoplay from 'embla-carousel-autoplay';
// // import Image from 'next/image';
// // import BannerImage from "../../../public/14 sept india gate copy.jpg";
// // import BannerImage2 from "../../../public/14 sep monuments.jpg"
// // import BannerImage3 from "../../../public/14 sep dance.jpg"
// // import BannerImage4 from "../../../public/14 SEP NOIDA.jpg"
// // import BannerImage5 from "../../../public/14 SEP kERALA.jpg"

// // const images = [
// //   { src: BannerImage, alt: "Banner 1" },
// //   { src: BannerImage2, alt: "Banner 2" },
// //   { src: BannerImage3, alt: "Banner 3" },
// //   { src: BannerImage4, alt: "Banner 4" },
// //   { src: BannerImage5, alt: "Banner 5" },
// // ];

// // const Banner: React.FC = () => {
// //   const [emblaRef] = useEmblaCarousel(
// //     { loop: true },
// //     [Autoplay({ delay: 2500 })]
// //   );

// //   return (
// //     <section className="w-full">
// //       <div className="overflow-hidden w-full" ref={emblaRef}>
// //         <div className="flex">
// //           {images.map((image, index) => (
// //             <div className="flex-shrink-0 w-full min-w-0 relative" key={index}>
// //               <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden">
// //                 <Image
// //                   src={image.src}
// //                   alt={image.alt}
// //                   fill
// //                   className="md:object-cover object-cover"
// //                   priority={index === 0}
// //                   sizes="100vw"
// //                 />
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Banner;
// "use client"
// import React from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import Image from 'next/image';
// import BannerImage from "../../../public/14 sept india gate copy.jpg";
// import BannerImage2 from "../../../public/14 sep monuments.jpg"
// import BannerImage3 from "../../../public/14 sep dance.jpg"
// import BannerImage4 from "../../../public/14 SEP NOIDA.jpg"
// import BannerImage5 from "../../../public/14 SEP kERALA.jpg"

// const images = [
//   { src: BannerImage, alt: "Banner 1" },
//   { src: BannerImage2, alt: "Banner 2" },
//   { src: BannerImage3, alt: "Banner 3" },
//   { src: BannerImage4, alt: "Banner 4" },
//   { src: BannerImage5, alt: "Banner 5" },
// ];

// const Banner: React.FC = () => {
//   const [emblaRef] = useEmblaCarousel(
//     { loop: true },
//     [Autoplay({ delay: 2500 })]
//   );

//   return (
//     <section className="w-full px-2 sm:px-4">
//       <div className="overflow-hidden w-full rounded-xl shadow-lg" ref={emblaRef}>
//         <div className="flex">
//           {images.map((image, index) => (
//             <div className="flex-shrink-0 w-full min-w-0 relative" key={index}>
//               <div className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] lg:h-[65vh] xl:h-[75vh] overflow-hidden rounded-xl">
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   fill
//                   className="object-contain sm:object-cover"
//                   priority={index === 0}
//                   sizes="100vw"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;



"use client"
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import BannerImage from "../../../public/14 sept india gate copy.jpg";
import BannerImage2 from "../../../public/14 sep monuments.jpg"
import BannerImage3 from "../../../public/14 sep dance.jpg"
import BannerImage4 from "../../../public/14 SEP NOIDA.jpg"
import BannerImage5 from "../../../public/14 SEP kERALA.jpg"

const images = [
  { src: BannerImage, alt: "Banner 1" },
  { src: BannerImage2, alt: "Banner 2" },
  { src: BannerImage3, alt: "Banner 3" },
  { src: BannerImage4, alt: "Banner 4" },
  { src: BannerImage5, alt: "Banner 5" },
];

const Banner: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 2500, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full m-0 p-0">
      <div
        className="overflow-hidden w-full rounded-xl shadow-lg"
        ref={emblaRef}
        onMouseEnter={() => emblaApi?.autoplay?.pause()}
        onMouseLeave={() => emblaApi?.autoplay?.play()}
      >
        <div className="flex">
          {images.map((image, index) => (
            <div className="flex-shrink-0 w-full min-w-0 relative" key={index}>
              <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden rounded-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover w-full h-full"
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Dots / Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                selectedIndex === index ? 'bg-blue-700' : 'bg-gray-300'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
