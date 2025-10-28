import React from "react";
import Image from "next/image";
import { url } from "inspector";

const committees = [
  {
    title: "Honorary Chairs",
    members: [
      {
        photo: "/Sandeep Kumar Shukla.jpg",
        name: "Sandeep Kumar Shukla",
        university: "Director, IIIT Hyderabad, India",
        url :"https://www.iiit.ac.in/faculty/sandeep-kumar-shukla/",
      },
      {
        photo: "/dddas.jpg",
        name: "Debabratha Das",
        university: "Director, IIIT Bangalore, India",
        url :"https://www.iiitb.ac.in/faculty/debabrata-das/",
      },
    ],
  },
  {
    title: "Chair, IEEE India Council",
    members: [
      {
        photo: "/MaleDummy.jpeg",
        name: "Prerna Gaur",
        university: "Netaji Subhash University of Technology, New Delhi, India",
        url :"",
      },
      
    ],
  },
  {
    title: "General Co-Chairs",
    members: [
      {
        photo: "/PKReddysmart.jpg",
        name: "P. Krishna Reddy",
        university: "IIIT Hyderabad, India",
        url :"https://www.iiit.ac.in/faculty/krishna-reddy-p/",
      },
      {
        photo: "/Prof. Jaideep Srivastava.webp",
        name: "Jaideep Srivastava",
        university: "University of Minnesota, USA",
        url :"https://cse.umn.edu/cs/jaideep-srivastava",
      },
      {
        photo: "/Masaru Kitsuregawa, The University of Tokyo.jpg",
        name: "Masaru Kitsuregawa",
        university: "The University of Tokyo, Japan",
        url :"https://www.tkl.iis.u-tokyo.ac.jp/db-core/members/kitsuregawa.en.html",
      },
    ],
  },
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
      { photo: "/MaleDummy.jpeg",
        name: " Erol Gelenbe", 
        university: "Institute of Theoretical and Applied Informatics, Polish Academy of Sciences",
        url: "", 
     },
     { photo: "/MaleDummy.jpeg",
      name: " Satish Narayana Sreerama", 
      university: "University of Hyderabad, India",
      url: "", 
   },
      
    ],
  },
  {
    title: "PC Chairs - Large Language Models Track",
    // members: [
    //   { photo: "/MaleDummy.jpeg", name: "To be announced", university: "" },
    //   // { photo: "", name: "To be announced", university: "" },
    // ],
    members: [
      { photo: "/linset.jpeg", 
        name: " Linsey Pan", 
        university: "PayPal, USA",url: "", },

      { photo: "/MaleDummy.jpeg", 
        name: " Naresh Manwani", 
        university: "IIIT Hyderabad, India",
        url: "",},

      { photo: "/MaleDummy.jpeg", 
        name: " Chenlei Leng", 
        university: "Hong Kong Polytechnic University, China",
        url: "", },
      // { photo: "", name: "To be announced", university: "" },
    ],
  },
  {
    title: "Doctoral Consortium Track Chairs",
    members: [
      { photo: "/MaleDummy.jpeg", name: "Carlos Ordonez", university: "University of Houston, USA", url: "", },
      // { photo: "", name: "To be announced", university: "" },

      { photo: "/MaleDummy.jpeg", 
        name: " Xudong Liu", 
        university: "The University of North Florida, USA",
        url: "" },

        { photo: "/MaleDummy.jpeg", 
          name: " Abhishek Santra", 
          university: "The University of Texas at Arlington, USA" ,
          url: "",},
          
    ],
  },
  {
    title: "Journal Track Chairs",
    members: [
      {
        photo: "/Hady Lauw.png",
        name: "Hady Lauw",
        university: "Singapore Management University, Singapore",
        url: "https://faculty.smu.edu.sg/profile/hady-w-lauw-341",
      },      
      {
        photo: "/LanDU.png",
        name: "Lan Du",
        university: "Monash University, Australia",
        url: "https://research.monash.edu/en/persons/lan-du/",
      },
      {
        photo: "/Benjamin Fung.webp",
        name: "Benjamin Fun",
        university: "McGill University, Canada",
        url: "https://dmas.lab.mcgill.ca/fung/",
      },

      {
        photo: "/kalidas.jpg",
        name: "Dr. Kalidas Yeturu",
        university: "IIT Tirupati, India",
        url: "https://old.iittp.ac.in/dr-kalidas-yeturu",
      },
      {
        photo: "/Longbing Cao.webp",
        name: "Longbing Cao",
        university: "Macquarie University, Australia",
        url: "https://researchers.mq.edu.au/en/persons/longbing-cao/",
      },
    ],
  },
  {
    title: "Special Session Chairs",
    members: [
      
      {
        photo: "/Carson Leung.jpg",
        name: "Carson Leung",
        university: "University of Manitoba, Canada",
        url: "https://umanitoba.ca/science/directory/computer-science/carson-leung",
      },
      {
        photo: "/Kamal.png",
        name: "Kamal Karlapalem",
        university: "IIIT Hyderabad, India",
        url: "https://www.iiit.ac.in/faculty/kamalakar-karlapalem/",
      },
      {
        photo: "/Defu Lian.jpeg",
        name: "Defu Lian",
        university: "University of Science and Technology of China, China",
        url: "http://staff.ustc.edu.cn/~liandefu/",
      },
    ],
  },
  {
    title: "Tutorial Chairs",
    members: [
      
      {
        photo: "/Benjamin Fung.webp",
        name: "Benjamin Fung",
        university: "McGill University, Canada",
        url: "https://dmas.lab.mcgill.ca/fung/",
      },
      {
        photo: "/rk.jpg",
        name: "P. Radha Krishna",
        university: "NIT Warangal, India",
        url: "https://erp.nitw.ac.in/ext/profile/cs-prkrishna/",
      },
      {
        photo: "/Madria.png",
        name: "Sanjay Madria",
        university: "Missouri University of Science and Technology, USA",
        url: "https://cii.mst.edu/people/members/sanjaymadria/",
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
        url: "https://google.com",
      },
    ],
  },
  {
    title: "Publicity Chairs",
    members: [
      {
        photo: "/vinu.jpg",
        name: "Vinu Ellampallil Venugopal",
        university: "IIIT Bangalore, India",
        url: "https://www.iiitb.ac.in/faculty/dr-vinu-e-venugopal",
      },
      {
        photo: "/zhangqi_cs.png",
        name: "Qi Zhang",
        university: "Tongji University, China",
        url: "https://google.com",
      },
      {
        photo: "/veeraragahv.jpg",
        name: "Veeraraghava Raju Hasti",
        university: "University of Central Florida, USA",
        url: "https://www.cecs.ucf.edu/faculty/veeraraghava-raju-hasti/",
      },
      {
        photo: "/MaleDummy.jpeg",
        name: "Usman Naseem",
        university: "Macquarie University, Australia",
        url: "https://google.com",
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
        url: "https://u-aizu.ac.jp/research/faculty/detail?cd=90130&lng=en",
      },
      {
        photo: "/MaleDummy.jpeg",
        name: "Yanqiu Wu",
        university: "Macquarie University, Australia",
        url: "https://google.com",
      },
    ],
  },
  {
    title: "Sponsorship Chair",
    members: [
      {
        photo: "/Kedar.jpg",
        name: "Kedar Kulkarni",
        university: "Reliance Industries Ltd., India",
        url: "https://google.com",
      },
    ],
  },
  {
    title: "Finance Chair",
    members: [
      {
        photo: "/Vikram-Pudi.png",
        name: "Vikram Pudi",
        university: "IIIT Hyderabad, India",
        url: "https://www.iiit.ac.in/faculty/vikrampudi/",
      },
    ],
  },
  {
    title: "Registration & Local Arrangement Chairs",
    members: [
      {
        photo: "/VK.jpg",
        name: "Vikram Goyal",
        university: "IIIT Delhi, India",
        url: "https://www.iiitd.ac.in/vikram",
      },
    ],
  },
];

function OrganizingCommitteeContent() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h3 className="font-inter text-center font-semibold text-[36px] md:text-[44px] leading-tight mb-12 text-[#101828]">
        Organizing Committee
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