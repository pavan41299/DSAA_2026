import React from "react";
import Image from "next/image";
// import DssaLogo from "../../../public/latestlogoaroial.png"

const committees = [
  {
    title: "Honorary Chairs",
    members: [
      {
        photo: "/members/default.png",
        name: "Sandeep Kumar Shukla",
        university: "Director, IIIT Hyderabad",
      },
    ],
  },
  {
    title: "General Co-Chairs",
    members: [
      {
        photo: "/members/default.png",
        name: "P. Krishna Reddy",
        university: "IIIT Hyderabad",
      },
      {
        photo: "/members/default.png",
        name: "Jaideep Srivastava",
        university: "University of Minnesota",
      },
      {
        photo: "/members/default.png",
        name: "Masaru Kitsuregawa",
        university: "The University of Tokyo",
      },
    ],
  },
  {
    title: "PC Chairs - Research Track",
    members: [
      {
        photo: "/members/default.png",
        name: "Tanmoy Chakraborty",
        university: "IIT Delhi",
      },
      {
        photo: "/members/default.png",
        name: "Sharma Chakravarthy",
        university: "The University of Texas at Arlington",
      },
      {
        photo: "/members/default.png",
        name: "Longbing Cao",
        university: "Macquarie University, Australia",
      },
    ],
  },
  {
    title: "PC Chairs - Application Track",
    members: [
      {
        photo: "/members/default.png",
        name: "Partha Pratim Roy",
        university: "IIT (ISM) Dhanbad, India",
      },
      {
        photo: "/members/default.png",
        name: "Ladjel Bellatreche",
        university: "ENSMA, France",
      },
    ],
  },
  {
    title: "PC Chairs - Industry Track",
    members: [
      {
        photo: "/members/default.png",
        name: "Arvind Agarwal",
        university: "IBM India",
      },
      {
        photo: "/members/default.png",
        name: "Rajeev Gupta",
        university: "Microsoft",
      },
    ],
  },
  {
    title: "Journal Track Chairs",
    members: [
      {
        photo: "/members/default.png",
        name: "Dr. Kalidas",
        university: "IIT Tirupati, India",
      },
      {
        photo: "/members/default.png",
        name: "Lan Du",
        university: "Monash University, Australia",
      },
      {
        photo: "/members/default.png",
        name: "Hady Lauw",
        university: "Singapore Management University",
      },
      {
        photo: "/members/default.png",
        name: "Longbing Cao",
        university: "Macquarie University, Australia",
      },
    ],
  },
  {
    title: "Special Session Chairs",
    members: [
      {
        photo: "/members/default.png",
        name: "Kamal Karlapalem",
        university: "IIIT Hyderabad",
      },
      {
        photo: "/members/default.png",
        name: "Carson Leung",
        university: "University of Manitoba, Canada",
      },
      {
        photo: "/members/default.png",
        name: "Defu Lian",
        university: "University of Science and Technology of China",
      },
    ],
  },
  {
    title: "Tutorial Chairs",
    members: [
      {
        photo: "/members/default.png",
        name: "P. Radha Krishna",
        university: "NIT Warangal",
      },
      {
        photo: "/members/default.png",
        name: "Benjamin Fung",
        university: "McGill University, Canada",
      },
      {
        photo: "/members/default.png",
        name: "Evangelos E. Papalexakis",
        university: "University of California, Riverside",
      },
    ],
  },
  {
    title: "Diversity & Inclusion Chair",
    members: [
      {
        photo: "/members/default.png",
        name: "Dr. Sanju Tiwari",
        university: "Sharda University, India",
      },
    ],
  },
  {
    title: "Publicity Chairs",
    members: [
      {
        photo: "/members/default.png",
        name: "Xiaohan Yu",
        university: "Macquarie University, Australia",
      },
      {
        photo: "/members/default.png",
        name: "Qi Zhang",
        university: "Tongji University, China",
      },
    ],
  },
  {
    title: "Proceedings Chair",
    members: [
      {
        photo: "/members/default.png",
        name: "R. Uday Kiran",
        university: "The University of Aizu, Japan",
      },
    ],
  },
  {
    title: "Sponsorship Chair",
    members: [
      {
        photo: "/members/default.png",
        name: "P. Krishna Reddy",
        university: "IIIT Hyderabad",
      },
    ],
  },
  {
    title: "Finance Chair",
    members: [
      {
        photo: "/members/default.png",
        name: "Vikram Pudi",
        university: "IIIT Hyderabad",
      },
    ],
  },
  {
    title: "Registration & Local Arrangement Chairs",
    members: [
      {
        photo: "/members/default.png",
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
                  height={150}
                  className="rounded-full object-cover mb-4"
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
