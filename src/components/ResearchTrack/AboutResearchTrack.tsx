import React from "react";

function AboutResearchTrack() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-[1700px] mx-auto">
        {/* ...existing About section... */}
        <h2 className="font-inter font-bold text-[28px] md:text-[40px] text-center text-[#101828] mb-3">
          About DSAA Research Track
        </h2>
        <div className="font-inter text-[16px] md:text-[18px] text-center text-[#4A5565] mb-8">
          Important deadlines and milestones for DSAA 2026. Mark your calendar and stay updated.
        </div>
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            The DSAA&apos;2026 Research Track solicits high-quality, original papers presenting novel issues of Data Science and Advanced Analytics across various disciplines and domains, including business, government, health and medical science, physical sciences, and social sciences. Topics of interest include but are not limited to:
          </div>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 mb-4 space-y-1">
            <li>Data science foundations and theories</li>
            <li>Mathematics and statistics for data science and analytics</li>
            <li>Understanding data characteristics and complexities</li>
            <li>Machine/deep/statistical learning-based algorithms</li>
            <li>Advanced analytics and knowledge discovery methods</li>
            <li>Computer vision and pattern recognition</li>
            <li>Computer vision and pattern recognition</li>
            <li>Optimization theories and methods</li>
            <li>Large-scale databases, big-data processing, distributed processing, and ethical analytics</li>
            <li>Model explainability and provenance</li>
            <li>Theories and methods for evaluation, explanation, visualization, and presentation</li>
            <li>Survey and review</li>
            <li>Trustworthy and responsible data analytics</li>
            <li>Data analytics for social good</li>
          </ul>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
            Submissions for the DSAA&apos;2026 Research Track should very clearly specify the problem being solved, what methodologies were used to solve the problem, what data was used, how the results were evaluated, and how the solution is being used.
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
            All submissions will be double-blind reviewed by the Program Committee based on <span className="font-semibold">technical quality, relevance, originality, significance, and clarity.</span> Submissions not complying with formatting or anonymity will be rejected.
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
            All accepted full-length papers and short papers will be published by <span className="font-semibold">IEEE</span>, submitted for inclusion in the <span className="font-semibold">IEEE Xplore Digital Library</span>, and for EI indexing. through.<span className="font-semibold">INSPEC</span>.
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
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-2">
            For further details, see the <span className="font-semibold">IEEE Proceedings Author Guidelines.</span>
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-2">
            All submissions will be double-blind reviewed by the Program Committee based on <span className="font-semibold">technical quality, relevance, originality, significance, and clarity.</span> Submissions not complying with formatting or anonymity will be rejected.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
            <span className="font-semibold">Note:</span> Non-anonymous technical reports cannot be considered. Exceptions apply for arXiv papers posted at least one month before DSAA&apos;2026 submission deadline, provided the title/abstract differ from the arXiv version.
          </div>
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
            Research Track Chairs
          </div>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 space-y-1">
            <li>Tanmoy Chakraborty, IIT Delhi</li>
            <li>Sharma Chakravarthy, The University of Texas at Arlington</li>
            <li>Longbing Cao, Macquarie University at Sydney </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutResearchTrack;