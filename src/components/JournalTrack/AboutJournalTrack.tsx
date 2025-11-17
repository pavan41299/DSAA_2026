import React from "react";

function AboutJournalTrack() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6 max-w-5xl mx-auto">
      <div className="max-w-[1700px] mx-auto">
        {/* ...existing About section... */}
        <h2 className="font-inter font-bold text-[28px] md:text-[40px] text-center text-[#101828] mb-3">
        Call for Paper - Journals
        </h2>
        {/* <div className="font-inter text-[16px] md:text-[18px] text-center text-[#4A5565] mb-8">
          Important deadlines and milestones for DSAA 2026. Mark your calendar and stay updated.
        </div> */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-8 max-w-5xl mx-auto">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-4">
            Important Dates
          </h3>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] space-y-2">
          <li><b>Call for Papers :</b> September, 2025</li>
            <li><b>Manuscript submission deadline:</b></li>
            <li><b>1. First round:</b> February 15, 2026</li>
            <li><b>2. Second round:</b> March 15, 2026</li>
            <li><b>3. Third round:</b> April 15, 2026</li>
            <li><b>Final decision notification:</b> July 15, 2026</li>
            <li><b>Revised manuscript deadline:</b> August 1, 2026</li>
          </ul>
        </div>
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6 max-w-5xl mx-auto">
        <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-4">
        About DSAA Journal Track
        </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
            
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
          We invite submissions to the journal track of the 2026 IEEE International Conference on Data Science and Advanced Analytics (DSAA&apos;2026). This journal track is implemented in partnership with two Springer&apos;s journals, namely: Machine Learning Journal and International Journal of Data Science and Analytics (JDSA). A paper can only be submitted to either, but not both, journals. Accepted papers will be published in the corresponding journal, each with an extended abstract included in the DSAA&apos;2026 proceedings.

          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
          <ul className="list-disc list-inside font-inter text-[15px] md:text-[16px] text-[#232B3A] space-y-2">            
            <li>Machine Learning Journal (MLJ)</li>            
          </ul>
          <span className="font-semibold"></span>
          The DSAA&apos;2026 Journal Track with the Machine Learning Journal will consolidate original submissions to the Special Issue on Large Language Modelling for Data Science. The Special Issue explores the intersection between LLMs and data science, addressing foundational advances and real-world applications. We invite high-quality contributions that extend the methodological, practical, and theoretical boundaries of how LLMs can accelerate discovery, enhance interpretability, and enable novel paradigms in data-driven science and engineering.
          For the full call for papers and submissions, please refer 
          <a
          href="https://link.springer.com/collections/jgifhigcbd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1D4ED8] hover:underline"
          > Guidelines Here.</a>
          </div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
          <ul className="list-disc list-inside font-inter text-[15px] md:text-[16px] text-[#232B3A] space-y-2">            
            <li>International Journal of Data Science and Analytics (JDSA)</li>            
          </ul>
          <span className="font-semibold"></span>
          A priority consideration is given to Data Science and Generative AI. This theme explores the bidirectional relationship between data science and generative AI. We invite contributions that advance the foundations of data science to support the development, training, evaluation, and responsible deployment of generative AI models, including work on data representation, curation, quality, interpretability, fairness, and governance. At the same time, we welcome research that leverages generative AI to transform data science practices, such as data preparation, augmentation, simulation, automated analysis, hypothesis generation, and scientific discovery. Submissions may cover theoretical advances, methodological innovations, system development, or novel applications that highlight how data science and generative AI mutually reinforce each other in both research and practice.
          For the full call for papers and submissions, please refer   
          <a
          href="https://link.springer.com/journal/41060/updates/27811948"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1D4ED8] hover:underline"
          > Guidelines Here.</a>
          
          </div>
          
{/*           
          <br></br> */}

          {/* <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">
            Submissions for the DSAA&apos;2026 Journal Track should very clearly specify the problem being solved, what methodologies were used to solve the problem, what data was used, how the results were evaluated, and how the solution is being used.
          </div> */}
        </div>
        
        {/* Paper Submissions */}
        {/* <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6 max-w-5xl mx-auto">
  <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-4">
    Paper Submissions
  </h3>

  <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
    All papers should be submitted electronically via <b>Open Review</b> (under the Journal Track).
  </p>

  <p className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-4">
    Each paper submitted to the Journal tracks should be formatted by following the standard 2-column U.S. letter style of the 
    IEEE Conference template. For further information and instructions, see the 
    <a
    href="https://www.ieee.org/conferences/publishing/templates"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#1D4ED8] hover:underline"
    > IEEE Proceedings Author Guidelines.</a>
    <br>
    
    </br>
    For details regarding the length of each paper in the Journal Track, please contact the DSAA&apos;2026 Secretariat.
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
</div> */}

        {/* <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6 max-w-5xl mx-auto">
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
        </div> */}

        {/* Proceedings and Indexing */}
       
        {/* Important Policies */}
      
        {/* Enquiries */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6 max-w-5xl mx-auto">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">
            Enquiries
          </h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">
            General enquiries about Journal Track submissions should be directed to Track Chairs.
          </div>
          <div className="font-inter font-semibold text-[16px] md:text-[18px] text-[#232B3A] mb-2">
            Journal Track Chairs
          </div>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 space-y-1">
            <li>Hady Lauw, Singapore Management University, Singapore</li>
            <li>Lan Du, Monash University, Australia</li>
            <li>Benjamin Fung, McGill University, Canada</li>
            <li>Dr. Kalidas Yeturu, IIT Tirupati, India</li>
            <li>Longbing Cao, Macquarie University, Australia</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutJournalTrack;