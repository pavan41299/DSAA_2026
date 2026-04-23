import Link from "next/link";

function AboutSpecialSessions() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6 max-w-5xl mx-auto">
      <div className="max-w-[1700px] mx-auto">
        {/* Heading */}
        <h2 className="font-inter font-bold text-[32px] md:text-[40px] text-center text-[#101828] mb-3">
        Call for Papers for Special Sessions
        </h2>
        {/* <div className="font-inter text-[16px] md:text-[18px] text-center text-[#4A5565] mb-8">
          Important deadlines and milestones for DSAA 2026. Mark your calendar and stay updated.
        </div> */}
        {/* Important Dates */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-8 max-w-5xl mx-auto">
                <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-4">
                  Important Dates
                </h3>
                <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] space-y-2">
                  <li><b>Special Session Proposals Due :</b> April 8, 2026 <i>(<b>Applications Closed</b>)</i></li>
                  <li><b>Special Session Proposals Notification : </b>April 14, 2026 <i>(<b>Applications Closed</b>)</i></li>
                  <section className="w-full bg-white py-4 px-4 sm:py-6 sm:px-6 max-w-5xl mx-auto mt-4 mb-4">
                    <div className="max-w-[1700px] mx-auto">

                      {/* Heading */}
                      <h2 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-4">
                        Accepted Special Sessions
                      </h2>

                      {/* Sessions List */}
                      <div>
                      <ul className="list-disc pl-5 font-inter text-[15px] md:text-[16px] text-[#232B3A] space-y-6 marker:text-lg">

                          <li>
                            <a
                              href="https://indigopurple.github.io/DSAA/dsaa2026.html"
                              className="font-semibold hover:underline"
                              target="_blank"
                            >
                              Computational Imaging, Vision, and Language (CIVIL)
                            </a>
                            <div className="text-gray-600">
                              Organized by : Yaping Zhao
                            </div>             
                            <div>
                              <span className="text-gray-700">URL: </span>
                              <a
                                href="https://indigopurple.github.io/DSAA/dsaa2026.html"
                                className="text-blue-600 font-semibold hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                https://indigopurple.github.io/DSAA/dsaa2026.html
                              </a>
                            </div>
                          </li>

                          <li>
                            <a
                              href="https://sites.google.com/view/ds4sg2026/home"
                              className="font-semibold hover:underline"
                              target="_blank"
                            >
                              DS4SG: Data Science for Social Good
                            </a>
                            <div className="text-gray-600">
                              Organized by : Abdul Wahid*, Ioanna Miliou, Lauri Lovén, Rimjhim, Kainat Khan
                            </div>
                            <div>
                              <span className="text-gray-700">URL: </span>
                              <a
                                href="https://sites.google.com/view/ds4sg2026/home"
                                className="text-blue-600 font-semibold hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                https://sites.google.com/view/ds4sg2026/home
                              </a>
                            </div>
                          </li>

                          <li>
                            <a
                              href="https://dsaa-2026.vercel.app/attend"
                              className="font-semibold hover:underline"
                              target="_blank"
                            >
                              From Theory to Practice: Special Session on Large Language and Foundation Models (LLFM 2026)
                            </a>
                            <div className="text-gray-600">
                              Organized by : Rafet Sifa*, Wei Liu, Dhaval Patel, Lorenz Sparrenberg, Priya Priya
                            </div>
                            <div>
                            <span className="text-gray-700">URL: </span>
                            <a
                              href="https://dsaa-2026.vercel.app/attend"
                              className="text-blue-600 font-semibold hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                            
                            </a>
                          </div>
                          </li>

                          <li>
                            <a
                              href="https://sites.google.com/view/dsaa-scda/home"
                              className="font-semibold hover:underline"
                              target="_blank"
                            >
                              Maritime and Other Applications of Deep Learning Techniques: Challenges and Opportunities (MADL 2026)
                            </a>
                            <div className="text-gray-600">
                              Organized by : Youcef Djenouri, Gautam Srivastava*, Mohit Kumar
                            </div>
                            <div>
                              <span className="text-gray-700">URL: </span>
                              <a
                                href="https://sites.google.com/view/dsaa-scda/home"
                                className="text-blue-600 font-semibold hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                https://sites.google.com/view/dsaa-scda/home
                              </a>
                            </div>
                          </li>

                          <li>
                            <a
                              href="https://dsaa-2026.vercel.app/attend"
                              className="font-semibold hover:underline"
                              target="_blank"
                            >
                              Scalable Data Science: Integration with Cloud and Distributed Systems (SDS 2026)
                            </a>
                            <div className="text-gray-600">
                              Organized by : Tanvi Chawla*, Mamta Dahiya
                            </div>
                            <div>
                            <span className="text-gray-700">URL: </span>
                            <a
                              href="https://dsaa-2026.vercel.app/attend"
                              className="text-blue-600 font-semibold hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              
                            </a>
                          </div>
                          </li>

                        </ul>
                      </div>

                    </div>
    </section>
                  <li><b>Special Session Paper Submission:</b>{" "}
                    <span className="line-through text-gray-400 mr-2">May 1, 2026</span>
                    <span className="text-green-600 font-semibold">May 30, 2026</span>
                  </li>
                  <li><b>Special Session Paper Notification :</b>{" "}
                    <span className="line-through text-gray-400 mr-2">July 24, 2026</span>
                    <span className="text-green-600 font-semibold">August 10, 2026</span>
                  </li>
                  <li><b>Special Session Paper Camera-Ready :</b>{" "}
                    <span className="line-through text-gray-400 mr-2">August 21, 2026</span>
                    <span className="text-green-600 font-semibold">August 30, 2026</span>
                  </li>
                </ul>
              </div>  
              
        {/* About DSAA Special Sessions */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            About DSAA Special Sessions
          </h3>
          <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            DSAA Special Sessions are an important part of the main conference program. They bring together researchers, industry experts, practitioners, and potential users who are interested in cultivating specialized and important aspects of data science and analytics.
          </p>
          <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            DSAA Special Sessions are intended to include and promote emerging data science research areas that are not yet well established and covered in the main conference tracks, while featuring high quality papers, which would normally appear in the main track. The same evaluation criteria and quality level apply as for the main conference, but the papers must adhere to the area of the special session they are submitted to, and the reviewers are experts in that area.
          </p>
          <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
            We welcome proposals that promote a more intensive interaction between different communities and proposals that promote cooperation to solve interdisciplinary problems. Thus, special sessions might focus on:
          </p>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 mt-2 space-y-1">
            <li>Topics on the border of data science research area</li>
            <li>Advanced topics within the data science research area</li>
            <li>Specific application areas for data science</li>
          </ul>
        </div>

        {/* Proposal Submission and Review */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Special Session Proposal Submission and Review
          </h3>
          <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            All papers should be submitted electronically via
            <a href="https://openreview.net/group?id=IEEE.org/DSAA/2026/Special_Sessions" target="_blank" style={{ color: 'blue' }}>
              <b> Open Review</b>
            </a> (under Special Session Proposal category).
          </p>
          
          <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            Proposals for hosting special sessions at DSAA 2026 are welcome. The proposals must address:
          </p>
          <ol className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-decimal pl-5 space-y-1 mb-4">
            <li>Title: Propose a title of the special session.</li>
            <li>Abstract: A brief abstract (~100 words) describing the focus of the session.</li>
            <li>Aims and Scope.</li>
            <li>Rationale: Why the topic is novel, timely, and relevant to DSAA.</li>
            <li>List related events organized in recent years with details (conference, year, number of submissions, number of accepted papers, number of participants).</li>
            <li>Special Session Organizers: Names, affiliations, countries, email, short bios (relevant qualifications and experience), and identify at least one contact organizer (all must agree to appear on the website).</li>
            <li>A list of qualified committee members who would be invited.</li>
            <li>Expected number of submissions.</li>
          </ol>
          <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
            Special Session Proposals will be reviewed based on the above criteria and their relationship to the main conference topics. Preference may be given to timely topics that inspire highly interactive discussions and showcase the impact of data science and analytics.
          </p>
        </div>

        {/* Submission Process */}
        {/* <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Submission of a Special Session Proposal
          </h3>
          <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            All proposals should be submitted electronically via …
          </p>
          <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
            To submit a paper to a special session, go to: …, and select the appropriate Special Session.
          </p>
        </div> */}

        {/* After Acceptance */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            After Acceptance of a Special Session
          </h3>
          <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            Once a special session proposal has been accepted, its organizers should create a website with the Special Session information and should widely publicize the session’s call for papers on different mailing lists and social media.
          </p>
          <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            Special session papers strictly follow the same specifications, requirements, and policies as the main conference submissions in terms of deadlines, formatting, length, and publication in the proceedings.
          </p>
          <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-2">
            Reviewing the submissions in each special session is coordinated by the organizers, but fully aligned to the main conference review process:
          </p>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 space-y-1">
            <li>All papers will be double-blind reviewed.</li>
            <li>Organizers select program committee (PC) members.</li>
            <li>PC members may serve across multiple sessions.</li>
            <li>Papers are assigned to PC members for review.</li>
            <li>Organizers recommend acceptance/rejection, validated by Special Session Chairs.</li>
            <li>Final decisions are made by DSAA Program Chairs.</li>
          </ul>
        </div>

        {/* Proceedings and Indexing */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Proceedings and Indexing
          </h3>
          <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
            All accepted Special Session Proposals will be published by IEEE in the DSAA main conference proceedings under its Special Session scheme and submitted for inclusion in the IEEE Xplore Digital Library.
          </p>
          <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mt-2">
            Organizers may also arrange special issues for extended journal versions of the papers.
          </p>
        </div>

        {/* Enquiries */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Enquiries
          </h3>
          <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            General enquiries about Special Sessions Proposals should be sent directly to the Special Sessions Chairs.
          </p>
          <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            Specific inquiries about a Special Session should be submitted to the session organizers, who are advised to set up a joint email address once their proposal is accepted.
          </p>
          <div className="font-inter font-semibold text-[16px] md:text-[18px] text-[#232B3A] mb-2">
            Special Sessions Chairs
          </div>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 space-y-1">
            
            <li>Carson K. Leung, University of Manitoba, Canada</li>
            <li>Kamal Karlapalem, IIIT Hyderabad, India</li>
            <li>Defu Lian, University of Science and Technology of China, China</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSpecialSessions;
