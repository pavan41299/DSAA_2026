import React from "react";

function AboutIndustryTrack() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-[1700px] mx-auto">
        {/* Heading and subtitle */}
        <h2 className="font-inter font-bold text-[32px] md:text-[40px] text-center text-[#101828] mb-3">
          About DSAA Industry Track
        </h2>
        <div className="font-inter text-[16px] md:text-[18px] text-center text-[#4A5565] mb-8">
          Important deadlines and milestones for DSAA 2026. Mark your calendar and stay updated.
        </div>

        {/* About Card */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            The DSAA&apos;2026 Industry Track solicits industry contributions in data science and analytics, in any business domain, to be presented as a talk or poster in a dedicated session.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            We seek industrial research, innovative and impactful applications of data science and analytics in industry, including case studies, best practices, insights, impacts, lessons learned, or interesting and challenging problems with a potential to spark new collaborations with academia.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            Accepted contributions will be presented as a talk or poster in a dedicated industry session at the conference.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
            To qualify for the Industry Track, the submission is expected to address real-world problems using real-world data, and demonstrate innovation, insight, and technical depth.
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
              <span className="font-semibold">Regular Papers:</span> maximum 4 pages (including references, excluding appendix if any), formatted per IEEE Conference 2-column U.S. letter style.
            </li>
            <li>
              <span className="font-semibold">Short Papers:</span> maximum 2 pages (including references, excluding appendix if any), same format.
            </li>
          </ul>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-2">
            For further details, see the <span className="font-semibold">IEEE Proceedings Author Guidelines.</span>
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-2">
            <span className="font-semibold">Double-blind review:</span> DSAA&apos;2026 operates a double-blind review process. Submissions must not include author names or other identifying information. These will be added only after acceptance.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
            <span className="font-semibold">Note:</span> Works issued as technical reports or similar cannot be considered for DSAA&apos;2026. An exception applies for arXiv papers published at least one month before the DSAA&apos;2026 submission deadline, provided the title and abstract differ from the arXiv version. Papers appearing on arXiv after the DSAA&apos;2026 submission deadline until the end of review are not allowed.
          </div>
        </div>

        {/* Proceedings and Indexing */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Proceedings and Indexing
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
            All accepted regular and short papers will be published by <span className="font-semibold">IEEE</span>, submitted for inclusion in the <span className="font-semibold">IEEE Xplore Digital Library</span>, and for <span className="font-semibold">EI indexing</span> through <span className="font-semibold">INSPEC</span>.
          </div>
        </div>

        {/* Important Policies */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Important Policies
          </h3>
          <ol className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-decimal pl-5 mb-3 space-y-1">
            <li><span className="font-semibold">Reproducibility & Supplementary</span> – Authors may provide an optional 2-page appendix (starting on page 5 in the same PDF).</li>
            <li><span className="font-semibold">Authorship</span> – No changes allowed after submission.</li>
            <li><span className="font-semibold">Dual Submissions</span> – Strictly prohibited.</li>
            <li><span className="font-semibold">Conflicts of Interest (COI)</span> – Must be declared at submission.</li>
            <li><span className="font-semibold">Attendance</span> – At least one author must register and present, or the paper will be excluded from IEEE Xplore.</li>
            <li><span className="font-semibold">AI-Generated Text</span> – Must be disclosed in acknowledgements, with citation to the AI system used.</li>
          </ol>
        </div>

        {/* Enquiries */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Enquiries
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            General enquiries about Industry Track submissions should be directed to the Track Chairs.
          </div>
          <div className="font-inter font-semibold text-[16px] md:text-[18px] text-[#232B3A] mb-2">
            Industry Track Chairs
          </div>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 space-y-1">
            <li>To be announced</li>
            <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 space-y-1">
            <li>Arvindh Agrawal, IBM India </li>
            <li>Mounia Lalmas, Spotify </li>
          </ul>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutIndustryTrack;
