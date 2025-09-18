import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function ProgramSpecialSessionsBanner() {
  return (
    <section className="w-full bg-[#F1F5FC] py-10 px-4 flex flex-col items-center justify-center md:h-[276px]">
      <h1 className="font-inter font-semibold text-[28px] sm:text-[36px] md:text-[40px] text-center text-black mb-3">
        Special Sessions
      </h1>
      <nav aria-label="breadcrumb" className="w-full flex justify-center">
        <ol className="flex items-center gap-2 text-[14px] sm:text-[16px] md:text-[18px] text-[#6B7280]">
          <li>
            <Link href="/" className="hover:text-[#155DFC]">Home</Link>
          </li>
          <li>
            <Image src="/chevrons-right.svg" alt=">" width={16} height={16} className="opacity-60" />
          </li>
          <li className="font-medium text-[#111827]">Special Sessions</li>
        </ol>
      </nav>
    </section>
  )
}

export default ProgramSpecialSessionsBanner
