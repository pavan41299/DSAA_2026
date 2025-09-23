import React from "react";
import Image from "next/image";

// ✅ Add as many places as you want here
const spots = [
  {
    name: "Qutub Minar",
    description:
      "A UNESCO World Heritage site, tallest brick minaret in India, showcasing Indo-Islamic Mughal architecture.",
    // imgSrc: "/qutub-minar.jpg",
  },
  {
    name: "Jantar Mantar",
    description:
      "An astronomical observatory built in 1724, consists of 13 architectural astronomy instruments designed to compile astronomical tables and predict the movement of the sun, moon, and planets",
    // imgSrc: "/qutub-minar.jpg",
  },
  {
    name: "India Gate",
    description:
      "Iconic war memorial in the heart of Delhi, popular for evening walks and illuminated at night.",
    // imgSrc: "/india-gate.jpg",
  },
  {
    name: "Red Fort",
    description:
      "Majestic Mughal fort built by Shah Jahan. Famous for its museums, ramparts, and evening light shows.",
    // imgSrc: "/red-fort.jpg",
  },
  {
    name: "Humayun’s Tomb",
    description:
      "A Mughal-era architectural marvel surrounded by Persian-style gardens, precursor to the Taj Mahal.",
    // imgSrc: "/humayuns-tomb.jpg",
  },
  {
    name: "Lotus Temple",
    description:
      "A Baháʼí House of Worship shaped like a lotus. Open to all religions, offering peace and meditation.",
    // imgSrc: "/lotus-temple.jpg",
  },
  {
    name: "Akshardham Temple",
    description:
      "A modern Hindu temple and cultural complex with breathtaking carvings, exhibitions, and water shows.",
    // imgSrc: "/akshardham.jpg",
  },
  {
    name: "Jama Masjid",
    description:
      "One of the largest mosques in India with a massive courtyard and panoramic views from its minarets.",
    imgSrc: "/jama-masjid.jpg",
  },
  {
    name: "Lodhi Garden",
    description:
      "Historic gardens featuring tombs of the Lodi dynasty, popular for morning walks and photography.",
    imgSrc: "/lodhi-garden.jpg",
  },
  {
    name: "Chandni Chowk",
    description:
      "A bustling old market with street food, spices, jewelry, and cultural heritage in Old Delhi.",
    imgSrc: "/chandni-chowk.jpg",
  },
  {
    name: "Connaught Place",
    description:
      "Colonial-era circular market hub with shops, restaurants, cafes, and vibrant nightlife.",
    imgSrc: "/connaught-place.jpg",
  },
  {
    name: "Purana Qila (Old Fort)",
    description:
      "Among Delhi’s oldest forts, with boating options and historical ruins, especially beautiful at dusk.",
    imgSrc: "/purana-qila.jpg",
  },
  
];
const spotsAroundDelhi = [
  {
    name: "Agra (Taj Mahal & Agra Fort)",
    img: "/tourist/agra.jpg",
    desc: "Home to the iconic Taj Mahal, Agra Fort, and nearby Fatehpur Sikri.",
    distance: "230 km",
    time: "3.5 – 4 hrs",
  },
  {
    name: "Jaipur (Pink City, Rajasthan)",
    img: "/tourist/jaipur.jpg",
    desc: "Amber Fort, Hawa Mahal, City Palace, and rich Rajasthani culture.",
    distance: "270 km",
    time: "5 hrs",
  },
  {
    name: "Mathura & Vrindavan",
    img: "/tourist/mathura.jpg",
    desc: "Birthplace of Lord Krishna with temples, ISKCON, and Yamuna ghats.",
    distance: "180 km",
    time: "3 hrs",
  },
  {
    name: "Neemrana (Rajasthan)",
    img: "/tourist/neemrana.jpg",
    desc: "Famous for Neemrana Fort Palace and zip-lining adventure.",
    distance: "120 km",
    time: "2 hrs",
  },
  {
    name: "Rishikesh (Uttarakhand)",
    img: "/tourist/rishikesh.jpg",
    desc: "Yoga capital, Ganga rafting, Lakshman Jhula, and spiritual retreats.",
    distance: "240 km",
    time: "5–6 hrs",
  },
  {
    name: "Haridwar (Uttarakhand)",
    img: "/tourist/haridwar.jpg",
    desc: "Ganga Aarti at Har Ki Pauri, temples, and ghats.",
    distance: "220 km",
    time: "5 hrs",
  },
  {
    name: "Mussoorie (Uttarakhand)",
    img: "/tourist/mussoorie.jpg",
    desc: "Queen of Hills with waterfalls, Gun Hill, and scenic beauty.",
    distance: "300 km",
    time: "7 hrs",
  },
  {
    name: "Jim Corbett National Park",
    img: "/tourist/corbett.jpg",
    desc: "India’s oldest national park, famous for tigers and safaris.",
    distance: "240 km",
    time: "5 hrs",
  },
];
export default TouristSpots;
function TouristSpots() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="font-inter font-semibold text-3xl sm:text-4xl md:text-5xl text-center text-[#101828] mb-12">
        Top Tourist Spots in Delhi
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {spots.map((spot, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-shadow duration-500 border border-gray-200"
          >
            {/* Image */}
            {/* <div className="w-full h-56 relative">
              <Image
                // src={spot.imgSrc}
                alt={spot.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div> */}

            {/* Content */}
            <div className="p-5">
              <h3 className="font-inter font-semibold text-xl text-[#101828] mb-2">
                {spot.name}
              </h3>
              <p className="font-inter text-sm text-[#475467] leading-relaxed">
                {spot.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      

    
    <h2 className="font-inter font-semibold text-3xl sm:text-4xl md:text-5xl text-center text-[#101828] mt-12 mb-12">
        Top Tourist Spots Around Delhi
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {spotsAroundDelhi.map((spot, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-shadow duration-500 border border-gray-200"
          >
            {/* Image */}
            {/* <div className="w-full h-56 relative">
              <Image
                // src={spot.imgSrc}
                alt={spot.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div> */}

            {/* Content */}
            <div className="p-5">
              <h3 className="font-inter font-semibold text-xl text-[#101828] mb-2">
                {spot.name}
              </h3>
              <p className="font-inter text-sm text-[#475467] leading-relaxed">
                {spot.desc}
              </p>
              <p className="font-inter text-sm text-[#475467] leading-relaxed">
                Distance in Kms : {spot.distance}
              </p>
              <p className="font-inter text-sm text-[#475467] leading-relaxed">
                Ideal travelling time : {spot.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
      <a
        href="https://delhitourism.travel/places-to-visit-in-delhi"
        target="_blank"
        rel="noopener noreferrer"
        className="font-inter text-blue-600 hover:text-blue-800 underline"
      >
        Explore Places to Visit in Delhi (Delhi Tourism)
      </a>
    </div>

    
    </section>
    
  );
}




