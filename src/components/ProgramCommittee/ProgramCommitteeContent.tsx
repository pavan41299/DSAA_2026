import React from 'react'
import Image from 'next/image'

function ProgramCommitteeContent() {
  return (
    // <div className="max-w-6xl mx-auto py-12 px-4">
    //   <div className="w-full flex justify-center">
    //   <section className="w-full py-8 md:py-14 px-4">
    //     <h2 className="font-inter font-semibold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-[36px] sm:leading-[42px] md:leading-[48px] lg:leading-[60px] text-center text-[#101828] mb-6 md:mb-10">
    //     Coming Soon
    //     </h2>
    //   </section>
    //   </div>
    // </div>
    <section className="w-full bg-white py-1 px-4 sm:py-2 sm:px-6 max-w-5xl mx-auto">
      
      <div className="max-w-6xl mx-auto py-12 px-4">
      <h3 className="font-inter text-center font-semibold text-[36px] md:text-[44px] leading-tight mb-12 text-[#101828]">
  Program Committee
</h3>
</div>

<section className="w-full py-1 md:py-4 px-4">
  <div className="max-w-6xl mx-auto">
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 text-left text-[16px] md:text-[18px] text-[#344054]">
      
      <li><span className="font-semibold">Sandeep Kumar Shukla</span><br/>Director, IIIT Hyderabad, India</li>
      <li><span className="font-semibold">Debabratha Das</span><br/>Director, IIIT Bangalore, India</li>
      <li><span className="font-semibold">P. Krishna Reddy</span><br/>IIIT Hyderabad, India</li>
      <li><span className="font-semibold">Jaideep Srivastava</span><br/>University of Minnesota, USA</li>
      <li><span className="font-semibold">Masaru Kitsuregawa</span><br/>The University of Tokyo, Japan</li>
      <li><span className="font-semibold">Tanmoy Chakraborty</span><br/>IIT Delhi, India</li>
      <li><span className="font-semibold">Sharma Chakravarthy</span><br/>University of Texas at Arlington, USA</li>
      <li><span className="font-semibold">Longbing Cao</span><br/>Macquarie University, Australia</li>
      <li><span className="font-semibold">Partha Pratim Roy</span><br/>IIT (ISM) Dhanbad, India</li>
      <li><span className="font-semibold">Ladjel Bellatreche</span><br/>ENSMA, France</li>
      <li><span className="font-semibold">Arvind Agarwal</span><br/>IBM, India</li>
      <li><span className="font-semibold">Rajeev Gupta</span><br/>Microsoft, India</li>
      <li><span className="font-semibold">Qingsong Wen</span><br/>Squirrel Ai Learning, USA</li>
      <li><span className="font-semibold">Erol Gelenbe</span><br/>Institute of Theoretical and Applied Informatics, Polish Academy of Sciences, Poland</li>
      <li><span className="font-semibold">Satish Narayana Srirama</span><br/>University of Hyderabad, India</li>
      <li><span className="font-semibold">Linsey Pang</span><br/>PayPal AI, USA</li>
      <li><span className="font-semibold">Naresh Manwani</span><br/>IIIT Hyderabad, India</li>
      <li><span className="font-semibold">Chenlei Leng</span><br/>Hong Kong Polytechnic University, China</li>
      <li><span className="font-semibold">Carlos Ordonez</span><br/>University of Houston, USA</li>
      <li><span className="font-semibold">Xudong Liu</span><br/>University of North Florida, USA</li>
      <li><span className="font-semibold">Abhishek Santra</span><br/>University of Texas at Arlington, USA</li>

    </ul>
  </div>
</section>

{/* Technical Program Committee Subsection */}
<section className="w-full py-6 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <h4 className="font-inter font-semibold text-[24px] md:text-[30px] leading-tight mb-6 text-[#101828]">
      Technical Program Committee
    </h4>

    <p className="text-[18px] md:text-[20px] text-[#667085] font-medium">
      To Be Announced (TBA)
    </p>
  </div>
</section>

    </section>
  )
}

export default ProgramCommitteeContent




