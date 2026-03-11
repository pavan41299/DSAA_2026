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
  // {    
  //   title: "Programming Committee",
  //   members: [
  //     {
  //       name: "TBA",
  //       university: "",
  //       url: "",
  //     },      
  //   ],
  // },
];

const programCommitteeMembers = [
  { name: "Abdul Muqtadir Mohammed Zubair", university: "Snapchat Inc.", url: "" },
  { name: "Abdullah Mueen", university: "University of New Mexico", url: "" },
  { name: "Abdullah Uz Tansel", university: "City University of New York", url: "" },
  { name: " Anmol Gupta", university: " MythyaVerse ", url: "" },
  { name: "Annavarapu Chandra Sekhara Rao", university: "IIT(ISM), Dhanbad", url: "" },
  { name: "Anjan Chowdhury", university: "IIT(ISM), Dhanbad", url: "" },
  { name: "Agoritsa Polyzou", university: "Florida International University", url: "" },
  { name: "Ajay Kumar Boddepalli", university: "Walmart Lab", url: "" },
  { name: "Akira Matsui", university: "Yokohama National University", url: "" },
  { name: "Alexander Gates", university: "University of Virginia", url: "" },
  { name: "Amine Khaldi", university: "Kasdi Merbah University", url: "" },
  { name: "Anastasios Gounaris", university: "Aristotle University of Thessaloniki", url: "" },
  { name: "Animesh Chaturvedi", university: "IIIT Dharwad", url: "" },
  { name: "Anirban Dasgupta", university: "IIT Gandhinagar", url: "" },
  { name: "Anne Laurent", university: "Université de Montpellier", url: "" },
  { name: "Anupriya Sharma", university: "Walmart Lab", url: "" },
  { name: "Ashwin Shreyas Mohan Rao", university: "Information Sciences Institute - USC", url: "" },
  { name: "Ayan Das", university: "IIT(ISM), Dhanbad", url: "" },
  { name: "Barrie Kersbergen", university: "bol.com", url: "" },
  { name: "Bernd Amann", university: "Sorbonne Université - LIP6", url: "" },
  { name: "Boyang Li", university: "Kean University", url: "" },
  { name: "Bruno Veloso", university: "University of Porto & INESC TEC", url: "" },
  { name: "Can Polat", university: "Texas A&M University", url: "" },
  { name: "Carson Leung", university: "University of Manitoba", url: "" },
  { name: "Chenlei Leng", university: "Hong Kong Polytechnic University", url: "" },
  { name: "Chiara Balestra", university: "TU Dortmund", url: "" },
  { name: "Cho Yin Yiu", university: "Hong Kong Polytechnic University", url: "" },
  { name: "Christine Sinoquet", university: "LS2N CNRS, University of Nantes", url: "" },
  { name: "Debi Prosad Dogra", university: " IIT Bhubaneswar", url: "" },
  { name: "Damianos Chatziantoniou", university: "Athens University of Economics and Business", url: "" },
  { name: "David Skillicorn", university: "Queen's University", url: "" },
  { name: "Deep Narayan", university: "Walmart Lab", url: "" },
  { name: "Dimitrios Tsoumakos", university: "National Technical University of Athens", url: "" },
  { name: "Dimitris Spiliotopoulos", university: "University of the Peloponnese", url: "" },
  { name: "Dino Ienco", university: "University of Torino", url: "" },
  { name: "Dominique Laurent", university: "Université Cergy-Pontoise", url: "" },
  { name: "Donato Malerba", university: "Università degli Studi di Bari Aldo Moro", url: "" },
  { name: "Dongqi Fu", university: "University of Illinois at Urbana-Champaign", url: "" },
  { name: "Duc-Dung Nguyen", university: "Vietnam Academy of Science and Technology", url: "" },
  { name: "Elisa Quintarelli", university: "University of Verona", url: "" },
  { name: "Emilio Ferrara", university: "University of Southern California", url: "" },
  { name: "Eric Leclercq", university: "University of Burgundy - LIB", url: "" },
  { name: "Eunice Chan", university: "University of Illinois Urbana-Champaign", url: "" },
  { name: "Evangelos Papalexakis", university: "University of California Riverside", url: "" },
  { name: "Federica Mandreoli", university: "University of Modena", url: "" },
  { name: "Federico Montori", university: "University of Bologna", url: "" },
  { name: "Fuheng Zhao", university: "University of Utah", url: "" },
  { name: "Gabriel Gomes de Oliveira", university: "University of Campinas", url: "" },
  { name: "Gaotang Li", university: "University of Michigan", url: "" },
  { name: "George Papastefanatos", university: "ATHENA Research Center", url: "" },
  { name: "George Pallis", university: "University of Cyprus", url: "" },
  { name: "Hanghang Tong", university: "University of Illinois Urbana-Champaign", url: "" },
  { name: "Harry Kai-Ho Chan", university: "University of Sheffield", url: "" },
  { name: "Hasan Kurban", university: "Hamad Bin Khalifa University", url: "" },
  { name: "Hoda Khalil", university: "Carleton University", url: "" },
  { name: "Homa Hosseinmardi", university: "University of Pennsylvania", url: "" },
  { name: "Hyunsik Yoo", university: "University of Illinois Urbana-Champaign", url: "" },
  { name: "Ioannis Konstantinou", university: "University of Thessaly", url: "" },
  { name: "Jeremy Blackburn", university: "Binghamton University", url: "" },
  { name: "Jessica Lin", university: "George Mason University", url: "" },
  { name: "Jiajie He", university: "University of Maryland Baltimore County", url: "" },
  { name: "Jian Kang", university: "University of Rochester", url: "" },
  { name: "Jiejun Xu", university: "HRL Laboratories", url: "" },
  { name: "Jose Sepulveda", university: "Amazon", url: "" },
  { name: "Josep Domingo-Ferrer", university: "Universitat Rovira i Virgili", url: "" },
  { name: "Julian McAuley", university: "UC San Diego", url: "" },
  { name: "Jun Wu", university: "Michigan State University", url: "" },
  { name: "Jun-Gi Jang", university: "University of Illinois Urbana-Champaign", url: "" },
  { name: "Kanjar De", university: " Rise Research Institutes of Sweden", url: "" },
  { name: "Katharina Morik", university: "TU Dortmund", url: "" },
  { name: "Kristina Lerman", university: "University of Southern California", url: "" },
  { name: "Lalithkumar Prakashchand", university: "Meta Platforms", url: "" },
  { name: "Lecheng Zheng", university: "University of Illinois Urbana-Champaign", url: "" },
  { name: "Lihui Liu", university: "University of Illinois Urbana-Champaign", url: "" },
  { name: "Lilia Georgieva", university: "Heriot-Watt University", url: "" },
  { name: "Luciano Heitor Gallegos Marin", university: "University of Southern California", url: "" },  
  { name: "M. Saqib Nawaz", university: "Shenzhen University", url: "" },
  { name: "Magnus Mueller", university: "Amazon", url: "" },
  { name: "Maguelonne Teisseire", university: "France's National Research Institute", url: "" },
  { name: "Md. Rezaul Karim", university: "RWTH Aachen University", url: "" },
  { name: "Mehmet Dalkilic", university: "Indiana University Bloomington", url: "" },
  { name: "Mert Nakip", university: "IITIS Polish Academy of Sciences", url: "" },
  { name: "Miltiadis Siavvas", university: "University of Thessaloniki", url: "" },
  { name: "Min-Ling Zhang", university: "Southeast University", url: "" },
  { name: "Mohad-Saïd Hacid", university: "Université Lyon 1", url: "" },
  { name: "Mounika Kamsali Veera", university: "Walmart Lab", url: "" },
  { name: "Myra Spiliopoulou", university: "Otto von Guericke University Magdeburg", url: "" },
  { name: "Paolo Garza", university: "Politecnico di Torino", url: "" },
  { name: "Pallavi Kaushik", university: " University of Oxford,  United Kingdom ", url: "" },
  { name: "Paul Boniol", university: "University of Paris, EDF ", url: "" },
  { name: "Pradeep Kumar", university: " Eigen Innovations Inc., New Brunswick", url: "" },
  { name: "Prateek Keserwani ", university: " Samsung R&D Institute India - Bangalore ", url: "" },
  { name: "Pradumn K. Pandey", university: "Indian Institute of TechnologyRoorkee", url: "" },
  { name: "Paulo Azevedo", university: "University of Minho", url: "" },
  { name: "Pranay Kona", university: "Walmart Lab", url: "" },
  { name: "Qiwei Han", university: "Nova School of Business and Economics", url: "" },
  { name: "Rajendra Pamula,", university: "IIT ISM Dhanbad", url: "" },
  { name: "Rajkumar Saini", university: "Luleå University of Technology (LTU), Sweden.", url: "" },
  { name: "Ricardo Torres", university: "Wageningen University & Research", url: "" },
  { name: "Ruiyang Wang", university: "Anthropic", url: "" },
  { name: "Ruizhong Qiu", university: "University of Illinois Urbana-Champaign", url: "" },
  { name: "Rushanthi Baskaran", university: "Informatics Institute of Technology, Colombo", url: "" },
  { name: "Shiqi Yang", university: "Amazon", url: "" },
  { name: "Shishir Adhikari", university: "University of Illinois Chicago", url: "" },
  { name: "Sirui Chen", university: "University of Illinois Urbana-Champaign", url: "" },
  { name: "Siyi Guo", university: "University of Southern California", url: "" },
  { name: "Sonali Agarwal", university: " Indian Institute of Information Technology Allahabad ", url: "" },
  { name: " Sudhanshu Kumar", university: " MIT Moradabad", url: "" }
  { name: "Tadashi Nomoto", university: "National Institute of Japanese Literature", url: "" },
  { name: "Theodore Dalamagas", university: "ATHENA Research Center", url: "" },
  { name: "Tianlin Zhang", university: "University of Manchester", url: "" },
  { name: "Tianxin Wei", university: "University of Illinois Urbana-Champaign", url: "" },
  { name: "Ting-Wei Li", university: "University of Illinois Urbana-Champaign", url: "" },
  { name: "Toshihiro Kamishima", university: "Independent Researcher", url: "" },
  { name: "Trenton Ford", university: "College of William & Mary", url: "" },
  { name: "Wenjie Xi", university: "George Mason University", url: "" },
  { name: "Wenting Yang", university: "UC San Diego", url: "" },
  { name: "Wenxuan Bao", university: "University of Illinois Urbana-Champaign", url: "" },
  { name: "Xi Zheng", university: "Macquarie University", url: "" },
  { name: "Xiao Lin", university: "University of Illinois Urbana-Champaign", url: "" },
  { name: "Xinrui He", university: "University of Illinois Urbana-Champaign", url: "" },
  { name: "Xinyu He", university: "University of Illinois Urbana-Champaign", url: "" },
  { name: "Xudong Liu", university: "University of North Florida", url: "" },
  { name: "Yifei Zhu", university: "Shanghai Jiao Tong University", url: "" },
  { name: "Yikun Ban", university: "University of Illinois Urbana-Champaign", url: "" },
  { name: "Yong Zhang", university: "Tsinghua University", url: "" },
  { name: "Yuchen Yan", university: "University of Illinois", url: "" },
  { name: "Yunzhe Qi", university: "University of Illinois Urbana-Champaign", url: "" },
  { name: "Zhe Xu", university: "University of Illinois Urbana-Champaign", url: "" },
  { name: "Zheng Yan", university: "Xidian University", url: "" },
  { name: "Zhichen Zeng", university: "University of Illinois Urbana-Champaign", url: "" },
  { name: "Zhining Liu", university: "University of Illinois Urbana-Champaign", url: "" },
  { name: "Zihao Li", university: "University of Illinois Urbana-Champaign", url: "" },
  { name: "Zihao Wang", university: "Hong Kong University of Science and Technology,Hong Kong", url: "" },
  { name: "Ziwei Wu", university: "University of Illinois Urbana-Champaign", url: "" }
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
          <h5 className="text-left font-semibold text-[24px] mb-6 text-[#101828]">
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
      
      <div className="border-t border-blue-800 mb-8 mt-8"></div>    
      <h3 className="text-left font-semibold text-[24px] md:text-[32px] mb-12 text-[#101828]">
        Program Committee
      </h3>
      <ul className="list-disc pl-6 space-y-3 text-lg text-gray-800">
  {programCommitteeMembers.map((member, idx) => (
    <li key={idx}>
      <span className="font-medium">{member.name}</span>
      {" — "}
      <span className="text-gray-600">{member.university}</span>
    </li>
  ))}
</ul>
      

    </div>
  );
}

export default ProgramCommitteeContent;