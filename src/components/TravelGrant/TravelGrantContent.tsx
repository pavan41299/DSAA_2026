import React from 'react'
import Link from 'next/link'

function TravelGrantContent() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-[1700px] mx-auto">
        <h2 className="font-inter font-bold text-[32px] md:text-[40px] text-center text-[#101828] mb-3">
          IEEE CIS Travel Grant
        </h2>
        <div className="font-inter text-[16px] md:text-[18px] text-center text-[#4A5565] mb-8">
          The IEEE Computational Intelligence Society (CIS) offers travel grants to support members presenting their papers in-person at DSAA 2026.
        </div>

        {/* Types of Travel Grants */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[20px] md:text-[24px] text-[#232B3A] mb-3">Types of Travel Grants</h3>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 space-y-2">
            <li>
              <strong>IEEE CIS Conference Travel Grant for Students</strong> — supports IEEE CIS Student Members to attend CIS conferences and present their accepted papers.
            </li>
            <li>
              <strong>IEEE CIS Conference Travel Grant for Researchers from Developing Countries</strong> — available for IEEE CIS Members (above Student grade) from developing countries to attend CIS conferences and present their papers.
            </li>
            <li>
              <strong>IEEE CIS “Industry Early Career” Travel Grant</strong> — supports IEEE CIS Members working in industry within 2 years of graduation to attend CIS conferences and present their papers.
            </li>
            <li>
              <strong>IEEE CIS “Conference Participation and Travel Grant”</strong> — waives or discounts the student early registration fee for non-lead Student Authors and Non-Author Students attending CIS conferences.
            </li>
          </ul>
        </div>

        {/* Grant Details */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[20px] md:text-[24px] text-[#232B3A] mb-3">Grant Details</h3>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 space-y-2">
            <li>Grants are provided as digital reimbursement after in-person participation as a registered attendee.</li>
            <li>
              <strong>Approved amounts:</strong>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>USD $600 — intra-continental travel (within the same continent).</li>
                <li>USD $1,200 — inter-continental travel (outside the continent).</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Application Process */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[20px] md:text-[24px] text-[#232B3A] mb-3">Application Process</h3>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 space-y-2">
            <li>Applications open after paper notifications are sent.</li>
            <li>Submission deadline: <strong>24 August</strong> (AOE, tentative).</li>
            <li>Notification of results: <strong>8 September</strong> (tentative).</li>
            <li>
              Application details and submission link: <Link
                href="https://cis.ieee.org/activities/membership-activities/travel-grants"
                target="_blank"
                rel="noreferrer noopener"
                className="text-sky-500 hover:underline"
              >IEEE CIS Conference Participation and Travel Grants</Link> (see IEEE CIS for the official form).
            </li>
            <li>For queries, contact the CIS Travel Grants Subcommittee Chair: <a href="mailto:yi.mei@ecs.vuw.ac.nz" className="text-sky-500 hover:underline">Dr. Yi Mei</a>.</li>
          </ul>
        </div>

        {/* How to Become a Member */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-6">
          <h3 className="font-inter font-semibold text-[20px] md:text-[24px] text-[#232B3A] mb-3">How to Become an IEEE CIS Member</h3>
          <ul className="font-inter text-[15px] md:text-[16px] text-[#232B3A] list-disc pl-5 space-y-2">
            <li>
              <Link
                href="https://www.ieee.org/membership-catalog/productdetail/showProductDetailPage.html?product=MEMIEEE500"
                target="_blank"
                rel="noreferrer noopener"
                className="text-sky-500 hover:underline"
              >
                Join IEEE
              </Link>
            </li>
            <li>
              <Link
                href="https://www.ieee.org/membership-catalog/productdetail/showProductDetailPage.html?product=MEMCIS011"
                target="_blank"
                rel="noreferrer noopener"
                className="text-sky-500 hover:underline"
              >
                Join IEEE Computational Intelligence Society (CIS)
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TravelGrantContent
