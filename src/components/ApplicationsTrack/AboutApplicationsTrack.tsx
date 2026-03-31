import React from "react";

function AboutApplicationsTrack() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6 max-w-5xl mx-auto">
      <div className="max-w-[1700px] mx-auto">
        {/* Header */}
        <h2 className="font-inter font-bold text-[28px] md:text-[40px] text-center text-[#101828] mb-3">
        Call for Papers - Application, Data and Benchmark Track
        </h2>
        {/* <div className="font-inter text-[16px] md:text-[18px] text-center text-[#4A5565] mb-8">
          Important deadlines and milestones for DSAA 2026. Mark your calendar and stay updated.
        </div> */}

        {/* About Section */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-8 max-w-5xl mx-auto">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-4">
            Important Dates
          </h3>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] space-y-2">
            <li><b>Paper Submission:</b> May 1, 2026</li>
            <li><b>Paper Notification:</b> July 24, 2026</li>
            <li><b>Paper Camera-Ready:</b> August 21, 2026</li>
          </ul>
        </div>

        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6 max-w-5xl mx-auto">
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            The DSAA&apos;2026 Application, Data and Benchmark Track solicits
            high-quality, original papers presenting applications and best practices
            of Data Science and Advanced Analytics across various disciplines and
            domains, including business, government, health and medical science,
            physical sciences, arts, humanity, and social sciences.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            Submissions are expected to address problems on real-life data and the
            results can ideally be reproducible through a public git repository.
            Furthermore, submitted papers are expected to provide interesting,
            insightful results to policy-makers, end-users, or practitioners of Data
            Science and Advanced Analytics or to highlight new challenges for
            researchers motivated by the specific needs and characteristics of
            application areas.
          </div>

          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            <span className="font-semibold"></span>Topics of interests include but are not limited to:
          </div>

          <ul className="list-disc list-inside font-inter text-[15px] md:text-[16px] text-[#232B3A] space-y-2">
            <li>Generative AI applications</li>
            <li>
              Domain-specific data science and analytics practice, including customer analytics,
              business analytics, financial analytics, risk analytics, operational analytics,
              and management analytics
            </li>
            <li>
              Data science for health, care, medicine, biomedical science, humanity,
              and human science
            </li>
            <li>
              Data science for scientific domains, such as physics, astronomy,
              chemistry, biology and material science
            </li>
            <li>
              Data science for engineering such as electrical, mechanical,
              manufacturing, mining, and environmental engineering
            </li>
            <li>Government analytics and enterprise analytics</li>
            <li>Data science for social and public good</li>
            <li>
              Cloud, crowd, online, mobile, decentralized, edge and distributed
              data analytics
            </li>
            <li>
              Business, economic, environmental, social and sustainable impact modeling
            </li>
            <li>Impactful real-world applications, case studies and demonstrations</li>
            <li>Operationalizable infrastructures, platforms, and tools</li>
            <li>Deployment, management and policy-making</li>
            <li>Ethics, social issues, privacy, trust, fairness and bias</li>
            <li>Reflections and lessons for better data/analytics practices</li>
          </ul>

          <br />

          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
            Submissions for the DSAA&apos;2026 Application, Data and Benchmark Track
            should very clearly specify the problem being solved, what methodologies
            were used to solve the problem, what data was used, how the results were
            evaluated, and how the solution is being used (ideally in production).
            Applying new data science and analytics methods to public data or data
            downloaded from competition sites (such as Kaggle), without a real
            problem (and problem owner) will not be accepted in this track.
          </div>
        </div>

        {/* Important Dates */}
        {/* <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-8 max-w-5xl mx-auto">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-4">
            Important Dates
          </h3>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] space-y-2">
            <li><b>Paper Submission:</b> April 30, 2026</li>
            <li><b>Paper Notification:</b> July 18, 2026</li>
            <li><b>Paper Camera-Ready:</b> August 1, 2026</li>
          </ul>
        </div> */}

        {/* Paper Submissions */}
        {/* <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6 max-w-5xl mx-auto">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-4">
            Paper Submissions
          </h3>

          <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            All papers should be submitted electronically via <b>Open Review</b>
            (under the Application, Data and Benchmark Track).
          </p>

          <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            The length of each paper submitted to the Research tracks should be no
            more than <b>seven (7) pages</b> of technical content plus additional
            pages solely for references and should be formatted following the
            standard 2-column U.S. letter style of the <b>IEEE Conference template</b>.
            For further information and instructions, see the
            <b> IEEE Proceedings Author Guidelines</b>.
          </p>

          <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            All submissions will be blind reviewed by the Program Committee on the
            basis of:
          </p>

          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 mb-4 space-y-2">
            <li>Technical quality</li>
            <li>Relevance to the conference&apos;s topics of interest</li>
            <li>Originality</li>
            <li>Significance</li>
            <li>Clarity</li>
          </ul>

          <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            Author names and affiliations must not appear in the submissions, and
            bibliographic references must be adjusted to preserve author anonymity.
            Submissions failing to comply with paper formatting and authors anonymity
            will be <b>rejected without review</b>.
          </p>

          <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
            Because of the <b>double-blind review process</b>, non-anonymous papers
            that have been issued as technical reports or similar cannot be considered
            for DSAA&apos;2026. An exception to this rule applies to
            <b> arXiv papers</b> that were published in arXiv at least a month prior
            to DSAA&apos;2026 submission deadline, provided that the submitted paper&apos;s
            <b> title</b> and <b>abstract</b> differ from the arXiv version.
          </p>
        </div> */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6 max-w-5xl mx-auto">
  <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-4">
    Paper Submissions
  </h3>

  <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
    All papers should be submitted electronically via <b>Open Review</b> (under the Research Track).
  </p>

  <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
    The length of each paper submitted to the Research tracks should be no more than 
    seven (7) pages of technical content plus additional pages solely for references 
    and should be formatted following the standard 2-column U.S. letter style of the 
    IEEE Conference template. For further information and instructions, see the 
    <a
    href="https://www.ieee.org/conferences/publishing/templates"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#1D4ED8] hover:underline"
    > IEEE Proceedings Author Guidelines.</a>
    
  </p>

  <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
    All submissions will be blind reviewed by the Program Committee on the basis of:
  </p>

  <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 mb-4 space-y-2">
    <li>Technical quality</li>
    <li>Relevance to the conference&apos;s topics of interest</li>
    <li>Originality</li>
    <li>Significance</li>
    <li>Clarity</li>
  </ul>

  <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
    Author names and affiliations must not appear in the submissions, and bibliographic references 
    must be adjusted to preserve author anonymity. Submissions failing to comply with formatting 
    or anonymity will be rejected without review.
  </p>

  <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
    Because of the double-blind review process, non-anonymous papers that have been issued 
    as technical reports or similar cannot be considered for DSAA&apos;2026. An exception applies 
    to arXiv papers that were published in arXiv at least one month prior to the DSAA&apos;2026 
    submission deadline, provided that the submitted paper&apos;s title and abstract differ from the arXiv version.
  </p>
</div>
        {/* Proceedings and Indexing */}
        {/* <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6 max-w-5xl mx-auto">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Proceedings and Indexing
          </h3>
          <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] leading-relaxed">
            All accepted <b>full-length papers</b> will be published by <b>IEEE</b>
            and will be submitted for inclusion in the
            <b> IEEE Xplore Digital Library</b>. The conference proceedings will also
            be submitted for <b>EI indexing</b> through <b>INSPEC by IEEE</b>.
          </p>
        </div> */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6 max-w-5xl mx-auto">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Proceedings and Indexing
          </h3>
            <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] leading-relaxed">
              All accepted full-length papers will be published by IEEE and will be submitted 
              for inclusion in the IEEE Xplore Digital Library. The conference proceedings will also be 
              submitted for EI indexing through INSPEC by IEEE.
            </p>
          {/* <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
            All accepted full-length papers and short papers will be published by <span className="font-semibold">IEEE</span>, submitted for inclusion in the <span className="font-semibold">IEEE Xplore Digital Library</span>, and for EI indexing. through.<span className="font-semibold">INSPEC</span>.
          </div> */}
        </div>
        {/* Important Policies */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6 max-w-5xl mx-auto">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Important Policies
          </h3>
          <ol className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-decimal pl-5 mb-3 space-y-1">
            <li>
              <span className="font-semibold">Reproducibility & Supplementary </span>  
              The advancement of data science and analytics depends heavily on reproducibility.
              We strongly recommend that the authors release their code and data to the public.
              Authors can provide an optional two (2) page supplement at the end of their submitted
              paper (it needs to be in the same PDF file after the paper&apos;s references). This
              supplement can only be used to include (i) information necessary for reproducing the
              experimental results reported in the paper (e.g., various algorithmic and model
              parameters and configurations, hyper-parameter search spaces, details related to
              dataset filtering and train/test splits, software versions, detailed hardware
              configuration, etc.), and (ii) any data, pseudo-code and proofs that due to space
              limitations, could not be included in the main manuscript.
            </li>
            <li>
              <span className="font-semibold">Authorship</span> The list of authors at the time
              of submission is final and cannot be changed.
            </li>
            <li>
              <span className="font-semibold">Dual Submissions</span> DSAA is an archival
              publication venue; submissions that have been previously published, accepted,
              or are currently under-review at peer-review publication venues (i.e., journals,
              conferences, workshops with published proceedings, etc.) are not permitted.
              DSAA has a strict no dual submission policy.
            </li>
            <li>
              <span className="font-semibold">Conflicts of Interest (COI)</span> COIs must be
              declared at the time of submission in the submission system. COIs include employment
              at the same institution at the time of submission or in the past three years,
              collaborations during the past three years, advisor/advisee relationships, plus
              family and close friends. Program chairs are not allowed to submit any papers.
              Track chairs and special session chairs and other function chairs are not allowed
              to make submissions to their own tracks.
            </li>
            <li>
              <span className="font-semibold">Attendance</span> At least one author of each
              accepted paper must register in full and attend the conference to present the
              paper. No-show papers will be removed from the IEEE Xplore proceedings.
            </li>
            <li>
              <span className="font-semibold">AI-Generated Text</span> The use of artificial
              intelligence (AI)-generated text in an article shall be disclosed in the
              acknowledgements section of any paper submitted to an IEEE Conference or
              Periodical. The sections of the paper that use AI-generated text shall have
              a citation to the AI system used to generate the text.
            </li>
          </ol>
        </div>

        {/* Enquiries */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6 max-w-5xl mx-auto">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Enquiries
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            General enquiries about Application, Data and Benchmark Track paper submissions
            should be directed to Track Chairs.
          </div>
          <div className="font-inter font-semibold text-[16px] md:text-[18px] text-[#232B3A] mb-2">
            Application, Data and Benchmark Chairs
          </div>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 space-y-1">
            <li>Partha Pratim Roy, Indian Institute of Technology, India</li>
            <li>
              Ladjel Bellatreche, National Engineering School for Mechanics and
              Aerotechnics, France
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutApplicationsTrack;

