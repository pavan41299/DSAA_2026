function AboutTutorials() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6 max-w-5xl mx-auto">
      <div className="max-w-[1700px] mx-auto">
        {/* Heading and subtitle */}
        <h2 className="font-inter font-bold text-[32px] md:text-[40px] text-center text-[#101828] mb-3">
          Call for Tutorials
        </h2>
        {/* <div className="font-inter text-[16px] md:text-[18px] text-center text-[#4A5565] mb-8">
          Important deadlines and milestones for DSAA 2026. Mark your calendar and stay updated.
        </div> */}

        {/* About Card */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-8 max-w-5xl mx-auto">
                <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-4">
                  Important Dates
                </h3>
                <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] space-y-2">
                  <li><b>Tutorials Submission :</b>   April 20th, 2026</li>
                  <li><b>Tutorials Notification :</b> May 16th, 2026</li>
                  {/* <li><b>Paper Camera-Ready:</b> August 21, 2026</li> */}
                </ul>
              </div>

        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            We solicit proposals for tutorials at The 13th IEEE International Conference on Data Science and Advanced Analytics  (DSAA&apos;2026) on theoretical foundations, algorithms and techniques, and hands-on data science and analytics. The goal of the tutorials is to reach a wide audience and thus should not only provide a basic introduction, but also cover the most important topics in depth.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-2">
            Example areas of interest include, but are not limited to:
          </div>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 mb-4 space-y-1">
            <li>Data science foundations and theories</li>
            <li>Mathematics and statistics for data science</li>
            <li>Data quality and misinformation challenges</li>
            <li>Trustworthy analytics</li>
            <li>Explainable artificial intelligence</li>
            <li>Ethics: bias, fairness, transparency and privacy</li>
            <li>Visual analytics</li>
            <li>Graph/network analytics</li>
            <li>Time series / data stream mining</li>
            <li>Anomaly or imbalanced domain learning analytics</li>
            <li>Intersection of epidemiology and data science</li>
            <li>Interdisciplinary data science (data science applications in physics, energy, material science, astronomy, or other sciences)</li>
          </ul>
        </div>

        {/* Tutorial Proposal Requirements */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Tutorial Proposal Requirements
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            Tutorial proposals should be no more than 2 pages in double column format with font size 10pt + up to 2 pages for references, following the standard IEEE template.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            The recommended duration of a tutorial is half-day: 2h:45 min.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-2">
            The tutorial proposal should include the following information:
          </div>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 mb-3 space-y-1">
            <li>Tutorial title, presenters&apos; names, affiliations, addresses, and emails.</li>
            <li>Abstract.</li>
            <li>Introduction with motivation, specific objectives, intended target audience(s) and prerequisite knowledge / background.</li>
            <li>A detailed table of contents providing a sense of both the scope of material to be covered and the depth to which it will be covered.</li>
            <li>Each presenter&apos;s short biographical sketch, emphasizing relevant qualifications and lecturing experience.</li>
            <li>Reference (and provide links if available) previously given relevant tutorials, from the same authors or others. If (part of) the intended tutorial material has been presented elsewhere, the proposal should indicate those respective events (and dates) and describe how much the proposal tutorial is similar / different from previous editions.</li>
          </ul>
        </div>

        {/* Submission Instructions */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Submission Instructions
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
            Tutorial proposals should be submitted via email to the Tutorials Chairs.
            <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 space-y-1">
            
            
            <li>Benjamin Fung, McGill University, Canada</li>
            <li>P. Radha Krishna, NIT Warangal, India</li>
            <li>Sanjay Madria, Missouri University of Science and Technology, USA</li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTutorials;
