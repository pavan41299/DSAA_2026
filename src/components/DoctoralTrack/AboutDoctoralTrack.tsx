import React from "react";

function AboutDoctoralTrack(){
  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6 max-w-5xl mx-auto text-justify">
      <div className="max-w-[1700px] mx-auto">
        {/* Heading and subtitle */}
        <h2 className="font-inter font-bold text-[32px] md:text-[40px] text-center text-[#101828] mb-3">
          Call for Paper -  Doctoral Consortium Track
        </h2>
        {/* <div className="font-inter text-[16px] md:text-[18px] text-center text-[#4A5565] mb-8">
          Opportunities for doctoral students to discuss research interests and receive guidance from established researchers in data science and analytics.
        </div> */}

        {/* About Card */}
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


        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6 text-justify">
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            The DSAA&apos;2026 Doctoral Consortium provides an opportunity for doctoral students to discuss and explore their research interests and career objectives with a panel of established researchers in data science and analytics.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            Doctoral students interact with other researchers through participation in conference events, receive feedback on current research, and guidance on future research directions. Papers accepted to the Doctoral Consortium will be published in the DSAA&apos;2026 conference proceedings.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            Submissions reflect the student&apos;s research progress in thesis development. They should clearly summarize research questions, highlight related work, analyze gaps and challenges, describe research achievements, justify contributions, and discuss future research plans.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
          Remember that the audience for your thesis summary includes people who are knowledgeable about data science, but are not necessarily experts in the specific topic of your thesis. Introduce the content at a high level so that the general data science researchers can understand, but also include sufficient low-level details so that the experts will appreciate your unique contribution.
          </div>
        </div>

        {/* Important Dates */}
        

        {/* Paper Submissions */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Paper Submissions
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            All papers should be submitted electronically via <b>OpenReview</b> (under the Doctoral Consortium).
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            Each paper should be no more than seven (7) pages of technical content plus additional pages for references, formatted in the standard 2-column U.S. letter IEEE Conference template. See the <a
    href="https://www.ieee.org/conferences/publishing/templates"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#1D4ED8] hover:underline"
    > IEEE Proceedings Author Guidelines</a> for further instructions.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            All submissions will be blind reviewed for technical quality, relevance, originality, significance, and clarity. Author names and affiliations must be omitted, and references adjusted to preserve anonymity. Non-compliant submissions will be rejected without review.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
            Non-anonymous papers previously issued as technical reports cannot be considered. An exception applies to arXiv papers published at least one month before submission, provided the title and abstract differ from the arXiv version.
          </div>
        </div>

        {/* Proceedings and Indexing */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6 text-justify">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Proceedings and Indexing
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
          All accepted full-length papers will be published by IEEE and will be submitted for inclusion in the IEEE Xplore Digital Library. The conference proceedings will also be submitted for EI indexing through INSPEC by IEEE.
          </div>
        </div>

        {/* Important Policies */}
        {/* <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Important Policies
          </h3>
          <ol className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 space-y-1">
  <li>
    <span className="font-semibold">Reproducibility & Supplementary:</span> The advancement of data science and analytics depends heavily on reproducibility. Authors are strongly encouraged to release code and data publicly. An optional two-page supplement may be included at the end of the submitted paper (same PDF after references) and can include (i) information necessary for reproducing results (algorithmic/model parameters, hyper-parameter search spaces, dataset splits, software versions, hardware configuration, etc.) and (ii) additional data, pseudo-code, or proofs that could not fit in the main manuscript.
  </li>
  <li>
    <span className="font-semibold">Authorship:</span> The list of authors at submission is final and cannot be changed.
  </li>
  <li>
    <span className="font-semibold">Dual Submissions:</span> DSAA is an archival venue; submissions previously published, accepted, or under review at other peer-reviewed venues are not permitted. DSAA enforces a strict no dual submission policy.
  </li>
  <li>
    <span className="font-semibold">Conflicts of Interest (COI):</span> COIs must be declared at submission. They include employment at the same institution at the time of submission or in the past three years, collaborations in the past three years, advisor/advisee relationships, and family or close friends. Program chairs, track chairs, special session chairs, and other function chairs cannot submit to their own tracks.
  </li>
  <li>
    <span className="font-semibold">Attendance:</span> At least one author of each accepted paper must register and attend the conference to present. No-show papers will be removed from IEEE Xplore.
  </li>
  <li>
    <span className="font-semibold">AI-generated Text:</span>The use of artificial intelligence (AI)-generated text in an article shall be disclosed in the acknowledgements section of any paper submitted to an IEEE Conference or Periodical. The sections of the paper that use AI-generated text shall have a citation to the AI system used to generate the text.
  </li>
</ol>

        </div> */}
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
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Enquiries
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            General enquiries about Doctoral Consortium paper submissions should be submitted to the Track Chairs.
          </div>
          <div className="font-inter font-semibold text-[16px] md:text-[18px] text-[#232B3A] mb-2">
            Doctoral Consortium Chairs
          </div>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 space-y-1">
            <li>Carlos Ordonez, University of Houston, USA</li>
            <li>Xudong Liu, The University of North Florida, USA</li>
            <li>Abhishek Santra, The University of Texas at Arlington, USA</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutDoctoralTrack;
