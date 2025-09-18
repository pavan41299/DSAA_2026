function CameraReadyInstructions() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-[1700px] mx-auto">
        <h2 className="font-inter font-bold text-[32px] md:text-[40px] text-center text-[#101828] mb-3">Camera-ready submission (authors)</h2>
        <div className="font-inter text-[16px] md:text-[18px] text-center text-[#4A5565] mb-8">Important instructions for submitting camera-ready papers and registering authors.</div>

        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">Note: This page is for accepted authors after the conference review. Authors of the Journal Track accepted papers will submit their camera-ready to their journal, not this website – for deadline please enquire the journal track chairs.</div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-2">Dear Authors of IEEE DSAA 2026 Accepted papers,</div>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 space-y-2">
            <li>Please revise your papers taking into account the reviewers’ comments.</li>
            <li>Please format your final manuscript using the Manuscript Templates for Conference Proceedings: <a href="https://www.ieee.org/conferences/publishing/templates.html" className="text-[#155DFC]">IEEE Templates</a></li>
            <li>Please add the author names as they appear in your OpenReview submission.</li>
            <li>Make sure that all Figures and Tables are of high quality and their content is easily readable.</li>
            <li>Make sure also that your paper contains no headers, no footers, and no page numbers. This information will be added by the conference publication team.</li>
          </ul>
        </div>

        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">Page limits</h3>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 mb-3 space-y-2">
            <li>10 pages for full papers in the Research, Application, and Special Session tracks (PaperID 1-172)</li>
            <li>4 pages for full papers in the Industry track (PaperID 1-172)</li>
            <li>5 pages for short papers in the Research, Application, and Special Session tracks (PaperID 173-233)</li>
            <li>2 pages for short papers in the Industry track (PaperID 173-233)</li>
            <li>Up to 2 extra pages may be purchased for a fee (£75 per page)</li>
          </ul>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">Upload the PDF of your camera-ready paper in OpenReview. You can update it until this deadline, <span className="font-semibold">28 August 2026, AOE</span>.</div>
        </div>

        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">eCopyright Form (eCF)</h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">The IEEE eCopyright is now integrated into OpenReview. The corresponding author (or the first author) should see a button “Copyright Submission” in the Authors console (not in each paper’s submission page). Click on it to complete the form. Important: The eCopyright release form MUST be completed when you submit your paper, and one eCopyright Form is required for each paper.</div>
        </div>

        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">Registration</h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">Please don’t forget to register! NOTE: At least one author must register at a full (non-student) rate by <span className="font-semibold">8 September 2026</span>, for a full or short paper. Papers without a full registration will not be published in the proceedings.</div>
        </div>

        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">No-Show Policy</h3>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">Each paper MUST be presented at the conference by an author of that paper, unless prior approval is obtained from the PC Chairs to allow a well-qualified alternative presenter who is able to present the paper and answer questions. Papers that are NOT presented may be removed from IEEE Xplore Digital Library and be excluded from distribution after the conference.</div>
        </div>
      </div>
    </section>
  )
}

export default CameraReadyInstructions
