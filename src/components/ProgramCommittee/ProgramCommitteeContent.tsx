import React from "react";
import Image from "next/image";
import { url } from "inspector";

const committees = [
    {
    title: "PC Chairs - Research Track",
    members: [
      {
        photo: "/Tanmoy Chakraborty.png",
        name: "Tanmoy Chakraborty",
        university: "IIT Delhi, India",
        url :"https://web.iitd.ac.in/~tanchak/",
      },
      {
        photo: "/Sharma Chakravarthy, The University of Texas at Arlington.jpg",
        name: "Sharma Chakravarthy",
        university: "The University of Texas at Arlington, USA",
        url :"https://www.uta.edu/academics/faculty/profile?user=sharmac",
      },
      {
        photo: "/Longbing Cao.webp",
        name: "Longbing Cao",
        university: "Macquarie University, Australia",
        url :"https://researchers.mq.edu.au/en/persons/longbing-cao/",
      },
    ],
  },
  {
    title: "PC Chairs - Application, Data and Benchmark Track",
    members: [
      {
        photo: "/Partha Pratim Roy, Indian Institute of Technology.jpg",
        name: "Partha Pratim Roy",
        university: "IIT (ISM) Dhanbad, India",
        url :"https://www.iitism.ac.in/faculty-details?faculty=parthapratim",
      },
      {
        photo: "/ladej.png",
        name: "Ladjel Bellatreche",
        university: "ENSMA, France",
        url :"https://www.lias-lab.fr/members/bellatreche/",
      },
    ],
  },
  {
    title: "PC Chairs - Industry Track",
    members: [
      {
        photo: "/Arvind-Agrawal.jpg",
        name: "Arvind Agarwal",
        university: "IBM, India",
        url :"",
      },
      {
        photo: "/Rajeev Gupta.jpg",
        name: "Rajeev Gupta",
        university: "Microsoft, India",
        url :"",
      },
    ],
  },
  {
    title: "PC Chairs - Surveys & Vision Track ",
    members: [
      { photo: "/qing.jpg",
         name: " Qingsong Wen", 
         university: "Squirrel Ai Learning, USA" ,
         url: "https://sites.google.com/site/qingsongwen8/",
      },
      { photo: "/Prof-Gelenbe.jpg",
        name: " Erol Gelenbe", 
        university: "Institute of Theoretical and Applied Informatics, Polish Academy of Sciences, Poland",
        url: "https://www.computer.org/profiles/erol-gelenbe", 
     },
     { photo: "/Satish Narayana Srirama.jpg",
      name: " Satish Narayana Srirama", 
      university: "University of Hyderabad, India",
      url: "https://scis.uohyd.ac.in/~srirama/", 
   },
      
    ],
  },
  {
    title: "PC Chairs - Large Language Models Track",
    
    members: [
      { photo: "/linset.jpeg", 
        name: " Linsey Pang", 
        university: "PayPal, AI, US",url: "https://siliconvalley.northeastern.edu/faculty/xiaolin-linsey-pang/", },

      { photo: "/Naresh-Manwani.webp", 
        name: " Naresh Manwani", 
        university: "IIIT Hyderabad, India",
        url: "https://www.iiit.ac.in/faculty/naresh-manwani/",},

      { photo: "/Prof Leng Chenlei.jpg", 
        name: " Chenlei Leng", 
        university: "Hong Kong Polytechnic University, China",
        url: "https://www.polyu.edu.hk/ama/people/academic-staff/prof-leng-chenlei/", },
      // { photo: "", name: "To be announced", university: "" },
    ],
  },
  {
    title: "Doctoral Consortium Track Chairs",
    members: [
      { photo: "/carlos.jpg", 
        name: "Carlos Ordonez", 
        university: "University of Houston, USA", 
        url: "https://www.uh.edu/nsm/physics/people/profiles/carlos-ordonez/index.php", },
      // { photo: "", name: "To be announced", university: "" },

      { 
        photo: "/XUDONG LIU.jpg", 
        name: " Xudong Liu", 
        university: "The University of North Florida, USA",
        url: "https://xudongliu.domains.unf.edu/" },

        { photo: "/Abhishek Santra.jpeg", 
          name: " Abhishek Santra", 
          university: "The University of Texas at Arlington, USA" ,
          url: "https://www.uta.edu/academics/faculty/profile?user=abhishek.santra",},
          
    ],
  },
      
  
];

function ProgramCommitteeContent() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h3 className="font-inter text-center font-semibold text-[36px] md:text-[44px] leading-tight mb-12 text-[#101828]">
        Technical Program Committee
      </h3>
      
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
                
                {/* ✅ Clickable Image if URL exists */}
                {member.url ? (
                  <a
                    href={member.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform duration-300"
                  >
                    <Image
                      src={member.photo || "/blank.jpg"}
                      alt={member.name}
                      width={150}
                      height={200}
                      className="object-cover mb-4 w-[150px] h-[200px] rounded-[30%]"
                    />
                  </a>
                ) : (
                  <Image
                    src={member.photo || "/blank.jpg"}
                    alt={member.name}
                    width={150}
                    height={200}
                    className="object-cover mb-4 w-[150px] h-[200px] rounded-[30%]"
                  />
                )}

                {/* ✅ Name also clickable and turns blue on hover */}
                {member.url ? (
                  <a
                    href={member.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200"
                  >
                    {member.name}
                  </a>
                ) : (

                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                )}
                <p className="text-gray-600">{member.university}</p>
              </div>
            ))}
          </div>

          {index !== committees.length - 1 && (
            <div className="border-t border-blue-800 mt-12"></div>
          )}
        </div>
      ))}
      <div>
        <h5 className="font-inter font-semibold 
            text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] 
            leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] 
            text-center text-[#101828] mb-10"
          >
          Programming Committee Chairs
        </h5>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center text-center border rounded-2xl shadow-sm p-6 hover:shadow-md transition w-64">
            <Image src="/maleDummy.jpeg" alt="TBA" width={150} height={200} className="object-cover mb-4 w-[150px] h-[200px] rounded-[30%]" />
            <h3 className="text-lg font-semibold text-gray-900">To be announced</h3>
          </div>
          <div className="flex flex-col items-center text-center border rounded-2xl shadow-sm p-6 hover:shadow-md transition w-64">
            <Image src="/FemaleDummy.jpeg" alt="TBA" width={150} height={200} className="object-cover mb-4 w-[150px] h-[200px] rounded-[30%]" />
            <h3 className="text-lg font-semibold text-gray-900">To be announced</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramCommitteeContent;
