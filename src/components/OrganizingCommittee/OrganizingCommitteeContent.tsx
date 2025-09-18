import React from "react";
import Image from "next/image";

const committees = [
  {
    title: "Organizing Committee",
    members: [
      {
        photo: "/Dr. Sarah Chen.png",
        name: "Dr. Sarah Chen",
        university: "Harvard University",
      },
      {
        photo: "/members/member2.jpg",
        name: "Prof. Anjali Sharma",
        university: "Jawaharlal Nehru University, New Delhi",
      },
      {
        photo: "/members/member3.jpg",
        name: "Dr. Vikram Rao",
        university: "University of Hyderabad",
      },
    ],
  },
  {
    title: "Technical Program Committee",
    members: [
      {
        photo: "/members/member4.jpg",
        name: "Dr. Emily Johnson",
        university: "MIT",
      },
      {
        photo: "/members/member5.jpg",
        name: "Prof. Rajesh Patel",
        university: "IIT Bombay",
      },
    ],
  },
  {
    title: "Advisory Committee",
    members: [
      {
        photo: "/members/member6.jpg",
        name: "Dr. Li Wei",
        university: "Tsinghua University",
      },
      {
        photo: "/members/member7.jpg",
        name: "Prof. Maria Garcia",
        university: "University of Barcelona",
      },
      {
        photo: "/members/member8.jpg",
        name: "Dr. John Smith",
        university: "Stanford University",
      },
    ],
  },
  {
    title: "Steering Committee",
    members: [
      {
        photo: "/members/member9.jpg",
        name: "Prof. Aditi Mehra",
        university: "IIT Kanpur",
      },
      {
        photo: "/members/member10.jpg",
        name: "Dr. Michael Brown",
        university: "Oxford University",
      },
    ],
  },
  {
    title: "Finance Committee",
    members: [
      {
        photo: "/members/member11.jpg",
        name: "Dr. Priya Nair",
        university: "IISc Bangalore",
      },
    ],
  },
  {
    title: "Publication Committee",
    members: [
      {
        photo: "/members/member12.jpg",
        name: "Prof. David Wilson",
        university: "University of Cambridge",
      },
      {
        photo: "/members/member13.jpg",
        name: "Dr. Chen Yu",
        university: "Peking University",
      },
    ],
  },
  {
    title: "Publicity Committee",
    members: [
      {
        photo: "/members/member14.jpg",
        name: "Prof. Sofia Rossi",
        university: "University of Milan",
      },
      {
        photo: "/members/member15.jpg",
        name: "Dr. Rajiv Gupta",
        university: "IIT Madras",
      },
    ],
  },
  {
    title: "Sponsorship Committee",
    members: [
      {
        photo: "/members/member16.jpg",
        name: "Prof. Elena Petrova",
        university: "Moscow State University",
      },
    ],
  },
  {
    title: "Local Organizing Committee",
    members: [
      {
        photo: "/members/member17.jpg",
        name: "Dr. Sunil Agarwal",
        university: "University of Delhi",
      },
      {
        photo: "/members/member18.jpg",
        name: "Prof. Claire Dubois",
        university: "Sorbonne University",
      },
    ],
  },
  {
    title: "Student Committee",
    members: [
      {
        photo: "/members/member19.jpg",
        name: "Ms. Neha Verma",
        university: "IIT Roorkee",
      },
      {
        photo: "/members/member20.jpg",
        name: "Mr. Arjun Singh",
        university: "BITS Pilani",
      },
    ],
  },
];

function OrganizingCommitteeContent() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {committees.map((committee, index) => (
        <div key={index} className="mb-12">
          {/* Committee Title */}
          <h5
            className="font-inter font-semibold 
            text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] 
            leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] 
            text-center text-[#101828] mb-10"
          >
            {committee.title}
          </h5>

          {/* Committee Members */}
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

          {/* Bluish Divider Line */}
          {index !== committees.length - 1 && (
            <div className="border-t border-blue-800 mt-12"></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default OrganizingCommitteeContent;
