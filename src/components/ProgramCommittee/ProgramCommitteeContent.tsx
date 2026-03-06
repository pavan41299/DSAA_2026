import React from "react";

const committees = [
  {
    title: "PC Chairs - Research Track",
    members: [
      {
        name: "Tanmoy Chakraborty",
        university: "IIT Delhi, India",
        url: "https://web.iitd.ac.in/~tanchak/",
      },
      {
        name: "Sharma Chakravarthy",
        university: "The University of Texas at Arlington, USA",
        url: "https://www.uta.edu/academics/faculty/profile?user=sharmac",
      },
      {
        name: "Longbing Cao",
        university: "Macquarie University, Australia",
        url: "https://researchers.mq.edu.au/en/persons/longbing-cao/",
      },
    ],
  },
  {
    title: "PC Chairs - Application, Data and Benchmark Track",
    members: [
      {
        name: "Partha Pratim Roy",
        university: "IIT (ISM) Dhanbad, India",
        url: "https://www.iitism.ac.in/faculty-details?faculty=parthapratim",
      },
      {
        name: "Ladjel Bellatreche",
        university: "ENSMA, France",
        url: "https://www.lias-lab.fr/members/bellatreche/",
      },
    ],
  },
  {
    title: "PC Chairs - Industry Track",
    members: [
      {
        name: "Arvind Agarwal",
        university: "IBM, India",
        url: "",
      },
      {
        name: "Rajeev Gupta",
        university: "Microsoft, India",
        url: "",
      },
    ],
  },
  {
    title: "PC Chairs - Surveys & Vision Track",
    members: [
      {
        name: "Qingsong Wen",
        university: "Squirrel AI Learning, USA",
        url: "https://sites.google.com/site/qingsongwen8/",
      },
      {
        name: "Erol Gelenbe",
        university:
          "Institute of Theoretical and Applied Informatics, Polish Academy of Sciences, Poland",
        url: "https://www.computer.org/profiles/erol-gelenbe",
      },
      {
        name: "Satish Narayana Srirama",
        university: "University of Hyderabad, India",
        url: "https://scis.uohyd.ac.in/~srirama/",
      },
    ],
  },
  {
    title: "PC Chairs - Large Language Models Track",
    members: [
      {
        name: "Linsey Pang",
        university: "PayPal AI, USA",
        url: "https://siliconvalley.northeastern.edu/faculty/xiaolin-linsey-pang/",
      },
      {
        name: "Naresh Manwani",
        university: "IIIT Hyderabad, India",
        url: "https://www.iiit.ac.in/faculty/naresh-manwani/",
      },
      {
        name: "Chenlei Leng",
        university: "Hong Kong Polytechnic University, China",
        url: "https://www.polyu.edu.hk/ama/people/academic-staff/prof-leng-chenlei/",
      },
    ],
  },
  {
    title: "Doctoral Consortium Track Chairs",
    members: [
      {
        name: "Carlos Ordonez",
        university: "University of Houston, USA",
        url: "https://www.uh.edu/nsm/physics/people/profiles/carlos-ordonez/index.php",
      },
      {
        name: "Xudong Liu",
        university: "University of North Florida, USA",
        url: "https://xudongliu.domains.unf.edu/",
      },
      {
        name: "Abhishek Santra",
        university: "The University of Texas at Arlington, USA",
        url: "https://www.uta.edu/academics/faculty/profile?user=abhishek.santra",
      },
    ],
  },
  {
    
    title: "Additional Programming Committee Chairs",
    members: [
      {
        name: "To be announced",
        university: "",
        url: "",
      },
      {
        name: "To be announced",
        university: "",
        url: "",
      },
      {
        name: "To be announced",
        university: "",
        url: "",
      },
      
    ],
  },
];

function ProgramCommitteeContent() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      
      <h3 className="text-center font-semibold text-[36px] md:text-[44px] mb-12 text-[#101828]">
        Technical Program Committee
      </h3>

      {committees.map((committee, index) => (
        <div key={index} className="mb-10">

          {/* Heading */}
          <h5 className="text-center font-semibold text-[24px] mb-6 text-[#101828]">
            {committee.title}
          </h5>

          {/* Bullet list */}
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-800">

            {committee.members.map((member, idx) => (
              <li key={idx}>

                {member.url ? (
                  <a
                    href={member.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 font-medium"
                  >
                    {member.name}
                  </a>
                ) : (
                  <span className="font-medium">{member.name}</span>
                )}

                {" — "}
                <span className="text-gray-600">{member.university}</span>

              </li>
            ))}

          </ul>

          {index !== committees.length - 1 && (
            <div className="border-t border-blue-800 mt-8"></div>
          )}

        </div>
      ))}

      {/* <div className="mt-12">
        <h5 className="text-center font-semibold text-[24px] mb-6 text-[#101828]">
          Programming Committee Chairs
        </h5>

        <ul className="list-disc pl-6 space-y-3 text-lg text-gray-800">
          <li>To be announced</li>
          <li>To be announced</li>
        </ul>
      </div> */}

    </div>
  );
}

export default ProgramCommitteeContent;