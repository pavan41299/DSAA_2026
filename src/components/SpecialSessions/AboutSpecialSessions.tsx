function AboutSpecialSessions() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-[1700px] mx-auto">
        {/* Heading and subtitle */}
        <h2 className="font-inter font-bold text-[32px] md:text-[40px] text-center text-[#101828] mb-3">
          About DSAA Special Sessions
        </h2>
        <div className="font-inter text-[16px] md:text-[18px] text-center text-[#4A5565] mb-8">
          Important deadlines and milestones for DSAA 2026. Mark your calendar and stay updated.
        </div>

        {/* About Card */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            The DSAA&apos;2026 Special Sessions are an important part of the main conference program. They bring together researchers, industry experts, practitioners, and potential users who are interested in cultivating specialized and important aspects of data science and analytics.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            Special Sessions are intended to include and promote emerging data science research areas that are not yet well established or covered in the main conference tracks, while featuring high quality papers. The same evaluation criteria and quality levels apply as for the main conference, but papers must adhere to the scope of the session they are submitted to, and reviewers will be experts in that area.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-2 font-semibold">
            We welcome proposals that encourage intensive interaction between different communities or interdisciplinary problem-solving. Possible foci include:
          </div>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 mb-4 space-y-1">
            <li>Topics on the border of the data science research area</li>
            <li>Advanced topics within the data science research area</li>
            <li>Specific application areas for data science</li>
          </ul>
        </div>

        {/* Special Session Proposal Submission and Review */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Special Session Proposal Submission and Review
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            Proposals for hosting special sessions at DSAA 2026 are welcome. Proposals must address:
          </div>
          <ol className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-decimal pl-5 mb-3 space-y-1">
            <li>Title of the special session</li>
            <li>Abstract (≤100 words, accessible to conference attendees)</li>
            <li>Aims and Scope</li>
            <li>Rationale (novelty, timeliness, relevance to DSAA community)</li>
            <li>Related sessions organized previously (with statistics)</li>
            <li>Special Session Organizers (names, affiliations, short bio, contact details, with one designated contact person)</li>
            <li>Potential Committee Members</li>
            <li>Expected number of submissions</li>
          </ol>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-2">
            Special session proposals will be reviewed based on novelty, quality, and relationship to DSAA&apos;s scope. Preference is given to timely topics with potential to generate high impact and discussions.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
            <b>Submission:</b> All proposals should be submitted electronically via OpenReview.
          </div>
        </div>

        {/* After Acceptance of a Special Session */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            After Acceptance of a Special Session
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-2">
            Once a proposal is accepted:
          </div>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 mb-3 space-y-1">
            <li>Organizers should create a session webpage and publicize their Call for Papers.</li>
            <li>Special Session papers follow exactly the same submission specifications, deadlines, formatting, and policies as the main conference.</li>
            <li>Reviews are organized by the session chairs, but the process is fully aligned with the main conference.</li>
            <li>All papers will be double-blind reviewed.</li>
            <li>Final acceptance decisions are validated by the DSAA Program Chairs for consistency and quality.</li>
          </ul>
        </div>

        {/* Proceedings and Indexing */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Proceedings and Indexing
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-2">
            All accepted full-length and short special session papers will be published by IEEE in the DSAA 2026 main proceedings under the Special Sessions scheme, and submitted for inclusion in the IEEE Xplore Digital Library and EI indexing through INSPEC.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
            Special Session organizers may additionally arrange for journal special issues for extended versions of selected papers.
          </div>
        </div>

        {/* Enquiries */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Enquiries
          </h3>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 mb-3 space-y-1">
            <li>General enquiries about Special Session proposals should be sent to the Special Sessions Chairs.</li>
            <li>Specific inquiries about individual sessions should go to the respective session organizers (who are advised to set up a joint email contact).</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSpecialSessions;
