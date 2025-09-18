import React from 'react'
import Image from 'next/image'
import ComingSoonImage from '../../../public/coming soon2.png'

function SponsorContent() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-[1700px] mx-auto">
        <div className="flex justify-center mb-8">
        <section className="w-full py-8 md:py-14 px-4">
          <h2 className="font-inter font-semibold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-[36px] sm:leading-[42px] md:leading-[48px] lg:leading-[60px] text-center text-[#101828] mb-6 md:mb-10">
          Coming Soon
          </h2>
        </section>
        </div>
      </div>
    </section>
  )
}

export default SponsorContent
