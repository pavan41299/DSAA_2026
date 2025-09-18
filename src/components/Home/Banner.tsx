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
//     <section className="w-full">
//       <div className="overflow-hidden w-full" ref={emblaRef}>
//         <div className="flex">
//           {images.map((image, index) => (
//             <div className="flex-shrink-0 w-full min-w-0 relative" key={index}>
//               <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden">
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   fill
//                   className="md:object-cover object-cover"
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
import React from 'react';
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
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 2500 })]
  );

  return (
    <section className="w-full px-2 sm:px-4">
      <div className="overflow-hidden w-full rounded-xl shadow-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div className="flex-shrink-0 w-full min-w-0 relative" key={index}>
              <div className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] lg:h-[65vh] xl:h-[75vh] overflow-hidden rounded-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain sm:object-cover"
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
