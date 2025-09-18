// // "use client"
// import React, { useEffect, useCallback, useState } from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import Image from 'next/image';
// import BannerImage from "../../../public/14 sept india gate copy.jpg";
// import BannerImage2 from "../../../public/14 sep monuments.jpg";
// import BannerImage3 from "../../../public/14 sep dance.jpg";
// import BannerImage4 from "../../../public/14 SEP NOIDA.jpg";
// import BannerImage5 from "../../../public/14 SEP kERALA.jpg";

// const images = [
//   { src: BannerImage, alt: "Banner 1" },
//   { src: BannerImage2, alt: "Banner 2" },
//   { src: BannerImage3, alt: "Banner 3" },
//   { src: BannerImage4, alt: "Banner 4" },
//   { src: BannerImage5, alt: "Banner 5" },
// ];

// const Banner: React.FC = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true },
//     [Autoplay({ delay: 2500, stopOnInteraction: true })]
//   );

//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     emblaApi.on("select", onSelect);
//     onSelect();
//   }, [emblaApi, onSelect]);

//   return (
//     <section className="w-full m-0 p-0 flex justify-center">
//       <div
//         className="overflow-hidden w-full max-w-[1600px] rounded-xl shadow-lg"
//         ref={emblaRef}
//         onMouseEnter={() => emblaApi?.autoplay?.pause()}
//         onMouseLeave={() => emblaApi?.autoplay?.play()}
//       >
//         <div className="flex">
//           {images.map((image, index) => (
//             <div key={index} className="flex-shrink-0 w-full min-w-0 relative">
//               <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] overflow-hidden rounded-xl">
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   fill
//                   className="object-cover w-full h-full"
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
import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import BannerImage from "../../../public/14 sept india gate copy.jpg";
import BannerImage2 from "../../../public/14 sep monuments.jpg";
import BannerImage3 from "../../../public/14 sep dance.jpg";
import BannerImage4 from "../../../public/14 SEP NOIDA.jpg";
import BannerImage5 from "../../../public/14 SEP kERALA.jpg";

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
    <section className="w-full m-0 p-0 flex justify-center">
      <div
        className="overflow-hidden w-full max-w-[1600px] rounded-xl shadow-lg"
        ref={emblaRef}
        // onMouseEnter={() => emblaApi?.autoplay?.pause()}
        // onMouseLeave={() => emblaApi?.autoplay?.play()}
      >
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full min-w-0 relative">
              <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] overflow-hidden rounded-xl">
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
      </div>
    </section>
  );
};

export default Banner;
