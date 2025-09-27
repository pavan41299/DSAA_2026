import React from "react";
import Image from "next/image";
import DssaLogo from "../../../public/PKReddy.jpg"
// import DssaLogo from "../../../public/Dr. Sarah Chen.png"

const committees = [
  {
    title: "Honorary Chairs",
    members: [
      {
        photo: "/Sandeep Kumar Shukla.jpg",
        name: "Sandeep Kumar Shukla",
        university: "Director, IIIT Hyderabad",
      },
      {
        photo: "/dddas.jpg",
        name: "Debabratha Das",
        university: "Director, IIIT Bangalore",
      },
    ],
  },
  {
    title: "General Co-Chairs",
    members: [
      {
        photo: "/PKReddysmart.jpg",
        name: "P. Krishna Reddy",
        university: "IIIT Hyderabad",
      },
      {
        photo: "/Prof. Jaideep Srivastava.webp",
        name: "Jaideep Srivastava",
        university: "University of Minnesota",
      },
      {
        photo: "/Masaru Kitsuregawa, The University of Tokyo.jpg",
        name: "Masaru Kitsuregawa",
        university: "The University of Tokyo",
      },
    ],
  },
  {
    title: "PC Chairs - Research Track",
    members: [
      {
        photo: "/Tanmoy Chakraborty.png",
        name: "Tanmoy Chakraborty",
        university: "IIT Delhi",
      },
      {
        photo: "/Sharma Chakravarthy, The University of Texas at Arlington.jpg",
        name: "Sharma Chakravarthy",
        university: "The University of Texas at Arlington",
      },
      {
        photo: "/Longbing Cao.webp",
        name: "Longbing Cao",
        university: "Macquarie University, Australia",
      },
    ],
  },
  {
    title: "PC Chairs - Application Track",
    members: [
      {
        photo: "/Partha Pratim Roy, Indian Institute of Technology.jpg",
        name: "Partha Pratim Roy",
        university: "IIT (ISM) Dhanbad, India",
      },
      {
        photo: "/ladej.png",
        name: "Ladjel Bellatreche",
        university: "ENSMA, France",
      },
    ],
  },
  {
    title: "PC Chairs - Industry Track",
    members: [
      {
        photo: "/Arvind-Agrawal.jpg",
        name: "Arvind Agarwal",
        university: "IBM India",
      },
      {
        photo: "/Rajeev Gupta.jpg",
        name: "Rajeev Gupta",
        university: "Microsoft",
      },
    ],
  },
  {
    title: "Journal Track Chairs",
    members: [
      {
        photo: "/kalidas.jpg",
        name: "Dr. Kalidas",
        university: "IIT Tirupati, India",
      },
      {
        photo: "/LanDU.png",
        name: "Lan Du",
        university: "Monash University, Australia",
      },
      {
        photo: "/Hady Lauw.png",
        name: "Hady Lauw",
        university: "Singapore Management University",
      },
      {
        photo: "/Longbing Cao.webp",
        name: "Longbing Cao",
        university: "Macquarie University, Australia",
      },
    ],
  },
  {
    title: "Special Session Chairs",
    members: [
      {
        photo: "/Kamal.png",
        name: "Kamal Karlapalem",
        university: "IIIT Hyderabad",
      },
      {
        photo: "/Carson Leung.jpg",
        name: "Carson Leung",
        university: "University of Manitoba, Canada",
      },
      {
        photo: "/Defu Lian.jpeg",
        name: "Defu Lian",
        university: "University of Science and Technology of China",
      },
    ],
  },
  {
    title: "Tutorial Chairs",
    members: [
      {
        photo: "/rk.jpg",
        name: "P. Radha Krishna",
        university: "NIT Warangal",
      },
      {
        photo: "/Benjamin Fung.webp",
        name: "Benjamin Fung",
        university: "McGill University, Canada",
      },
      {
        photo: "/Evangelos E. Papalexakis.jpeg",
        name: "Evangelos E. Papalexakis",
        university: "University of California, Riverside",
      },
    ],
  },
  {
    title: "Diversity & Inclusion Chair",
    members: [
      {
        photo: "/Dr Sanju Tiwari, Sharda University, India.jpeg",
        name: "Dr. Sanju Tiwari",
        university: "Sharda University, India",
      },
    ],
  },
  {
    title: "Publicity Chairs",
    members: [
      {
        photo: "/Xiaohan Yu, Macquarie University.jpeg",
        name: "Xiaohan Yu",
        university: "Macquarie University, Australia",
      },
      {
        photo: "/OIP.webp",
        name: "Qi Zhang",
        university: "Tongji University, China",
      },
    ],
  },
  {
    title: "Proceedings Chair",
    members: [
      {
        photo: "/R. Uday Kiran.jpg",
        name: "R. Uday Kiran",
        university: "The University of Aizu, Japan",
      },
    ],
  },
  {
    title: "Sponsorship Chair",
    members: [
      {
        photo: "/PKReddysmart.jpg",
        name: "P. Krishna Reddy",
        university: "IIIT Hyderabad",
      },
    ],
  },
  {
    title: "Finance Chair",
    members: [
      {
        photo: "/Vikram-Pudi.png",
        name: "Vikram Pudi",
        university: "IIIT Hyderabad",
      },
    ],
  },
  {
    title: "Registration & Local Arrangement Chairs",
    members: [
      {
        photo: "/VK.jpg",
        name: "Vikram Goyal",
        university: "IIIT Delhi",
      },
    ],
  },
];

function OrganizingCommitteeContent() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {committees.map((committee, index) => (
        <div key={index} className="mb-12">
          <h5
            className="font-inter font-semibold 
            text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] 
            leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] 
            text-center text-[#101828] mb-10"
          >
            {committee.title}
          </h5>

          <div className="flex flex-wrap justify-center gap-8">
            {committee.members.map((member, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center border rounded-2xl shadow-sm p-6 hover:shadow-md transition w-64"
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={150}
                  height={200}
                  className="object-cover mb-4 w-[150px] h-[200px] rounded-[30%]"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.university}</p>
              </div>
            ))}
          </div>

          {index !== committees.length - 1 && (
            <div className="border-t border-blue-800 mt-12"></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default OrganizingCommitteeContent;
