import React from "react";

function AboutApplicationsTrack() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-[1700px] mx-auto">
        {/* Heading and subtitle */}
        <h2 className="font-inter font-bold text-[32px] md:text-[40px] text-center text-[#101828] mb-3">
          About DSAA Application Track
        </h2>
        <div className="font-inter text-[16px] md:text-[18px] text-center text-[#4A5565] mb-8">
          Important deadlines and milestones for DSAA 2026. Mark your calendar and stay updated.
        </div>

        {/* About Card */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            The DSAA&apos;2026 Applications Track solicits high-quality, original papers presenting applications and best practices of Data Science and Advanced Analytics across various disciplines and domains, including business, government, health and medical science, physical sciences, and social sciences.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            Submissions are expected to address problems on real-life data and the results can ideally be reproducible through a public Git repository. Furthermore, submitted papers are expected to provide interesting, insightful results to policy-makers, end-users, or practitioners of Data Science and Advanced Analytics, or to highlight new challenges for researchers motivated by the specific needs and characteristics of application areas.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-2 font-semibold">
            Topics of interest include but are not limited to
          </div>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 mb-4 space-y-1">
            <li>Generative AI applications</li>
            <li>Domain-specific data science and analytics practice (business, health/medical, financial, environmental, physics, astronomy, chemistry, biology, material science, etc.)</li>
            <li>Government analytics and enterprise analytics</li>
            <li>Cloud, crowd, online, mobile, and distributed data analytics</li>
            <li>Business, economic, environmental, social impact modeling</li>
            <li>Real-world applications, case studies, and demonstrations</li>
            <li>Operationalizable infrastructures, platforms, and tools</li>
            <li>Deployment, management, and policy-making</li>
            <li>Ethics, social issues, privacy, trust, fairness, and bias</li>
            <li>Reflections and lessons for better data/analytics practices</li>
          </ul>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
            Submissions for the DSAA&apos;2026 Applications Track should very clearly specify the problem being solved, what methodologies were used to solve the problem, what data was used, how the results were evaluated, and how the solution is being used.
          </div>
        </div>

        {/* Paper Submissions */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Paper Submissions
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            All papers should be submitted electronically via OpenReview.
          </div>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 mb-3 space-y-1">
            <li>
              Full Papers: maximum 10 pages, formatted per IEEE Conference 2-column U.S. letter style.
            </li>
            <li>
              Short Papers: maximum 5 pages, same format.
            </li>
          </ul>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-2">
            For further details, see the <span className="font-semibold">IEEE Proceedings Author Guidelines.</span>
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-2">
            All submissions will be double-blind reviewed by the Program Committee based on technical quality, relevance, originality, significance, and clarity. Submissions not complying with formatting or anonymity will be rejected.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
            <span className="font-semibold">Note:</span> Non-anonymous technical reports cannot be considered. Exceptions apply for arXiv papers posted at least one month before DSAA&apos;2026 submission deadline, provided the title/abstract differ from the arXiv version.
          </div>
        </div>

        {/* Proceedings and Indexing */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Proceedings and Indexing
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
            All accepted full-length papers and short papers will be published by <span className="font-semibold">IEEE</span>, submitted for inclusion in the <span className="font-semibold">IEEE Xplore Digital Library</span>, and for <span className="font-semibold">EI indexing</span>. through.<span className="font-semibold">INSPEC</span>.
          </div>
        </div>

        {/* Important Policies */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Important Policies
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            All papers should be submitted electronically via OpenReview.
          </div>
          <ol className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-decimal pl-5 mb-3 space-y-1">
            <li><span className="font-semibold">Reproducibility & Supplementary</span> – optional 2-page appendix allowed.</li>
            <li><span className="font-semibold">Authorship</span> – no changes after submission.</li>
            <li><span className="font-semibold">Dual Submissions</span> – strictly prohibited.</li>
            <li><span className="font-semibold">Conflicts of Interest (COI)</span> – must be declared at submissions</li>
            <li><span className="font-semibold">Attendance</span> – at least one author must register and present, or paper will be excluded from IEEE Xplore.</li>
            <li><span className="font-semibold">AI Generated Text</span> – must be disclosed in acknowledgements, with citation to AI system used.</li>
          </ol>
        </div>

        {/* Enquiries */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Enquiries
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            General enquiries about Research Track submissions should be directed to Track Chairs.
          </div>
          <div className="font-inter font-semibold text-[16px] md:text-[18px] text-[#232B3A] mb-2">
            Applications Track Chairs
          </div>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 space-y-1">
            <li>Partha Pratim Roy, Indian Institute of Technology, Dhanbad </li>
            <li>Ladjel Bellatreche,  University of Poitiers, France </li>
          </ul>
          {/* <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 space-y-1">
            <li>Barbara Hammer, Bielefeld University, Germany</li>
            <li>Reza Zafarani, Syracuse University, NY</li>
          </ul> */}
        </div>
      </div>
    </section>
  );
}
export default AboutApplicationsTrack;