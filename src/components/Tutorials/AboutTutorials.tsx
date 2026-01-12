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
                  <li><b>Tutorial Proposal Submission :</b>   April 20th, 2026</li>
                  <li><b>Tutorial Notification :</b> May 16th, 2026</li>
                  <li><b>Survey Paper Submission :</b> July 4, 2026</li>
                  <li><b>Survey Paper Notification :</b> July 24, 2026</li>
                  <li><b>Survey Paper Camera-Ready :</b> August 21, 2026</li>
                </ul>
              </div>

        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-4">
            About DSAA Tutorials
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            We solicit proposals for tutorials at the 2026 IEEE International Conference on Data Science and Advanced Analytics  (DSAA&apos;2026) on theoretical foundations, algorithms and techniques, and hands-on data science and analytics. The goal of the tutorials is to reach a wide audience and thus should not only provide a basic introduction, but also cover the most important topics in depth.. To further maximize knowledge mobilization, presenters of the accepted tutorials have the option to submit a maximum of 10-page survey paper on the same topic of tutorial. The survey paper will be published as part of the DSAA proceedings.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-2">
            Example areas of interest include, but are not limited to:
          </div>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 mb-4 space-y-1">
            <li>Data science foundations and theories</li>
            <li>Mathematics and statistics for data science</li>
            <li>Retrieval-augmented generation (RAG) with LLM</li>
            <li>Data quality and misinformation challenges</li>
            <li>Trustworthy analytics</li>
            <li>Explainable artificial intelligence</li>
            <li>Ethics: bias, fairness, transparency and privacy</li>
            <li>Visual analytics</li>
            <li>Graph/network analytics</li>
            <li>Time series / data stream mining</li>
            <li>Anomaly or imbalanced domain learning analytics</li>
            <li>Data science for cybersecurity</li>
            <li>Sustainability and AI</li>
            <li>Interdisciplinary data science (data science applications in physics, energy, material science, astronomy, or other sciences)</li>
          </ul>
        </div>

        {/* Tutorial Proposal Requirements */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Tutorial Proposal
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
          Tutorial proposals should be no more than 2 pages and formatted following the standard 2-column U.S. letter style of IEEE Conference template. See the IEEE proceedings author guidelines 
          <a href="https://www.ieee.org/conferences/publishing/templates" target="_blank" rel="noopener noreferrer" className="text-[#1D4ED8] hover:underline"> IEEE Proceedings Author Guidelines.</a> for further instructions.
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            The recommended duration of a tutorial is half-day: 2hours:45 minutes.
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
          All tutorials must be delivered in-person. Online presentations are not acceptable. Presenters will be required to make their tutorial slides available at least one week before the event, which will then be published on the DSAA 2026 website, and thus be made available to the conference attendees free of charge. Accepted tutorials will be presented during the main DSAA conference as parallel sessions. The decisions on the accepted tutorials are final and are not dependent on the outcome of the survey papers described below.
        </div>

        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
          Survey Paper
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
          Presenters of the accepted tutorials have the option to submit a survey paper by the deadline specified at the top of this call. Should the presenters choose to submit a survey paper, the list of authors on the survey paper must be identical to the list of presenters in the accepted tutorial. No new authors could be added. The survey paper should be no more than seven (7) pages of technical content plus additional pages solely for references and should be formatted following the standard 2-column U.S. letter style of the IEEE Conference template. See the IEEE Proceedings Author Guidelines 
          <a href="https://www.ieee.org/conferences/publishing/templates" target="_blank" rel="noopener noreferrer" className="text-[#1D4ED8] hover:underline"> IEEE Proceedings Author Guidelines.</a> for further instructions. The accepted survey paper will be published as part of the DSAA proceedings. The Tutorial Chairs reserve the rights to reject the survey paper if the quality does not meet the publication standard, and to withdraw the survey paper from the proceedings if the presenter(s) fail to deliver the in-person tutorial in the DSAA conference.
          </div>
        </div>

        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
          Registration
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
          If the tutorial presenters choose to publish a survey paper, at least one of the presenters must register the DSAA conference in full. If the tutorial presenters choose to deliver the tutorials without publishing a survey paper, then DSAA will provide one free registration.
          </div>
        </div>

        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
          Enquiries
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
          General enquiries about Tutorials submissions should be sent to the Tutorials Chairs. Please also refer to the DSAA 2026 website for more information about the conference: <a href="https://dsaa2026.dsaa.co/" target="_blank" rel="noopener noreferrer" className="text-[#1D4ED8] hover:underline">https://dsaa2026.dsaa.co/</a>
          </div>
        </div>

        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
          Submission Instructions
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
          Tutorial proposals should be submitted via email to the Tutorials Chairs at 
          <a href="mailto:DSAA2026TutorialChairs@gmail.com" className="text-[#1D4ED8] hover:underline"> DSAA2026TutorialChairs(at)gmail.com</a>. 
          </div>
        </div>

        {/* Submission Instructions */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
          Tutorials Chairs
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">           
            <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 space-y-1">
                      
            <li>Benjamin C. M. Fung, McGill University, Canada</li>
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
