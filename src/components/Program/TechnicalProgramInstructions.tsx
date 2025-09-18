import React from 'react'

function TechnicalProgramInstructions() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6 max-w-5xl mx-auto">
      <div className="max-w-[1700px] mx-auto">
        {/* <h2 className="font-inter font-bold text-[32px] md:text-[40px] text-center text-[#101828] mb-3">Technical Program</h2> */}
        <div className="font-inter text-[16px] md:text-[18px] text-[#4A5565] mb-8">All accepted papers will be presented as talks at the conference and included in the proceedings upon registration of at least one author and presentation of the paper at the conference.</div>

        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A] mb-3">The exact duration of talks will be communicated closer to the time of the conference, when the Technical Program is assembled and released.</div>
          <div className="font-inter text-[15px] md:text-[16px] text-[#232B3A]">Papers accepted as ‘Poster’ may expect a slightly shorter time slot than papers accepted as ‘Oral’. Consequently, there will be no poster presentations for this edition.</div>
        </div>

        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[22px] md:text-[26px] text-[#232B3A] mb-3">Accepted Papers</h3>
          <div className="flex flex-col py-8">
            <h2 className="font-inter font-normal text-[20px] md:text-[24px] text-left text-[#101828] mb-2">TBA</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalProgramInstructions
