import React from "react";

function AboutApplicationsTrack() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6 max-w-5xl mx-auto">
      <div className="max-w-[1700px] mx-auto text-justify font-inter text-[15px] md:text-[16px] text-[#232B3A] space-y-4">
        
        {/* Heading */}
        {/* <h2 className="font-bold text-[32px] md:text-[40px] text-center text-[#101828] mb-3">
          Call for Papers - Application, Data and Benchmark Track
        </h2> */}

        {/* About Track */}
        <p>
          <strong>About DSAA Application, Data and Benchmark Track</strong><br/>
          <br></br>
          The DSAA'2026 Application, Data and Benchmark Track solicits high-quality, original papers presenting applications and best practices of Data Science and Advanced Analytics across various disciplines and domains, including business, government, health and medical science, physical sciences, arts, humanity, and social sciences.
        </p>

        <p>
          Submissions are expected to address problems on real-life data and the results can ideally be reproducible through a public git repository. Furthermore, submitted papers are expected to provide interesting, insightful results to policy-makers, end-users, or practitioners of Data Science and Advanced Analytics or to highlight new challenges for researchers motivated by the specific needs and characteristics of application areas.
        </p>

        {/* Topics */}
        <p><strong>Topics of interests</strong> include but are not limited to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Generative AI applications</li>
          <li>Domain-specific data science and analytics practice, including customer analytics, business analytics, financial analytics, risk analytics, operational analytics, and management analytics</li>
          <li>Data science for health, care, medicine, biomedical science, humanity, and human science</li>
          <li>Data science for scientific domains, such as physics, astronomy, chemistry, biology and material science</li>
          <li>Data science for engineering such as electrical, mechanical, manufacturing, mining, and environmental engineering</li>
          <li>Government analytics and enterprise analytics</li>
          <li>Data science for social and public good</li>
          <li>Cloud, crowd, online, mobile, decentralized, edge and distributed data analytics</li>
          <li>Business, economic, environmental, social and sustainable impact modeling</li>
          <li>Impactful real-world applications, case studies and demonstrations</li>
          <li>Operationalizable infrastructures, platforms, and tools</li>
          <li>Deployment, management and policy-making</li>
          <li>Ethics, social issues, privacy, trust, fairness and bias</li>
          <li>Reflections and lessons for better data/analytics practices</li>
        </ul>

        <p>
          Submissions for the DSAA'2026 Application, Data and Benchmark Track should very clearly specify the problem being solved, what methodologies were used to solve the problem, what data was used, how the results were evaluated, and how the solution is being used (ideally in production). Applying new data science and analytics methods to public data or data downloaded from competition sites (such as Kaggle), without a real problem (and problem owner) will not be accepted in this track.
        </p>

        {/* Important Dates */}
        <p><strong>Important Dates</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Paper Submission: 30 April, 2026</li>
          <li>Paper Notification: July 18, 2026</li>
          <li>Paper Camera-ready: August 1, 2026</li>
        </ul>

        {/* Paper Submission */}
        <p><strong>Paper Submission</strong></p>
        <p>
          All papers should be submitted electronically via Open Review (under the "Application, Data and Benchmark" Track).
        </p>
        <p>
          The length of each paper submitted to the Research tracks should be no more than seven (7) pages of technical content plus additional pages solely for references and should be formatted following the standard 2-column U.S. letter style of IEEE Conference template. For further information and instructions, see the IEEE Proceedings Author Guidelines.
        </p>
        <p>
          All submissions will be blind reviewed by the Program Committee on the basis of technical quality, relevance to the conference's topics of interest, originality, significance, and clarity. Author names and affiliations must not appear in the submissions, and bibliographic references must be adjusted to preserve author anonymity. Submissions failing to comply with paper formatting and authors anonymity will be rejected without reviews. Because of the double-blind review process, non-anonymous papers that have been issued as technical reports or similar cannot be considered for DSAA'2026. An exception to this rule applies to arXiv papers that were published in arXiv at least a month prior to DSAA'2026 submission deadline. Authors can submit these arXiv papers to DSAA provided that the submitted paper's title and abstract are different from the one appearing in arXiv.
        </p>

        {/* Proceedings */}
        <p><strong>Proceedings and Indexing</strong></p>
        <p>
          All accepted full-length papers will be published by IEEE and will be submitted for inclusion in the IEEE Xplore Digital Library. The conference proceedings will be submitted for EI indexing through INSPEC by IEEE.
        </p>

        {/* Important Policies */}
        <p><strong>Important Policies</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Reproducibility & supplementary:</strong> The advancement of data science and analytics depends heavily on reproducibility. We strongly recommend that the authors release their code and data to the public. Authors can provide an optional two (2) page supplement at the end of their submitted paper (it needs to be in the same PDF file after the paper's references). This supplement can only be used to include (i) information necessary for reproducing the experimental results reported in the paper (e.g., various algorithmic and model parameters and configurations, hyper-parameter search spaces, details related to dataset filtering and train/test splits, software versions, detailed hardware configuration, etc.), and (ii) any data, pseudo-code and proofs that due to space limitations, could not be included in the main manuscript.</li>
          <li><strong>Authorship:</strong> The list of authors at the time of submission is final and cannot be changed.</li>
          <li><strong>Dual submissions:</strong> DSAA is an archival publication venue as such submissions that have been previously published, accepted, or are currently under-review at peer-review publication venues (i.e., journals, conferences, workshops with published proceedings, etc.) are not permitted. DSAA has a strict no dual submission policy.</li>
          <li><strong>Conflicts of interest (COI):</strong> COIs must be declared at the time of submission in the submission system. COIs include employment at the same institution at the time of submission or in the past three years, collaborations during the past three years, advisor/advisee relationships, plus family and close friends. Program chairs are not allowed to submit any papers. Track chairs and special session chairs and other function chairs are not allowed to make submissions to their own tracks.</li>
          <li><strong>Attendance:</strong> At least one author of each accepted paper must register in full and attend the conference to present the paper. No-show papers will be removed from the IEEE Xplore proceedings.</li>
          <li><strong>AI-generated Text:</strong> The use of artificial intelligence (AI)-generated text in an article shall be disclosed in the acknowledgements section of any paper submitted to an IEEE Conference or Periodical. The sections of the paper that use AI-generated text shall have a citation to the AI system used to generate the text.</li>
        </ul>

        {/* Enquiries */}
        <p><strong>Enquiries</strong></p>
        <p>General enquiries about Application, Data and Benchmark Track paper submissions should be submitted to Track Chairs.</p>

        {/* Chairs */}
        <p><strong>Application, Data and Benchmark Chairs</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Partha Pratim Roy, Indian Institute of Technology, India</li>
          <li>Ladjel Bellatreche, National Engineering School for Mechanics and Aerotechnics, France</li>
        </ul>

      </div>
    </section>
  );
}

export default AboutApplicationsTrack;
