import React from 'react'
import Image from 'next/image'
import PhoneIcon from '../../../public/phone.svg'
import MailIcon from '../../../public/mail.svg'
import LocationIcon from '../../../public/location.svg'
// ...existing code...
import IIITLogo from "../../../public/IIIT LOGO.png"; 
function ContactForm() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6">
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
      
  <div className="md:h-full md:flex md:flex-col md:justify-center px-4 md:px-0">
    <h3 className="font-inter font-semibold text-[20px] md:text-[24px] leading-[100%] tracking-[0%] mb-4">Contact Details</h3>
    <p className="mb-4 font-inter text-[14px] md:text-[15px] text-[#686868]">Local & technical contacts, plus the postal address and helpdesk email.</p>

    <div className="flex items-start gap-4 mb-6">
      <div className="flex-none w-10 h-10 md:w-12 md:h-12 bg-[#E0E9FF] rounded-md flex items-center justify-center overflow-hidden">
        <Image src={LocationIcon} alt="location" width={24} height={24} className="w-4 h-4 md:w-6 md:h-6 object-contain" />
      </div>
      <address className="not-italic font-inter text-[15px] md:text-[16px] text-[#484848] leading-5">
      Prof. P. Krishna Reddy <br /> DSAA 2026 Secretariat <br />Data Sciences and Analytics Center (DSAC)<br />
        International Institute of Information Technology<br />
        Prof. C R Rao Road<br />
        Gachibowli, Hyderabad 500 032 Telangana, India
      </address>
    </div>

    <div className="flex items-center gap-4 mb-4">
      <div className="flex-none w-10 h-10 md:w-12 md:h-12 bg-[#E0E9FF] rounded-md flex items-center justify-center overflow-hidden">
        <Image src={MailIcon} alt="mail" width={24} height={24} className="w-4 h-4 md:w-6 md:h-6" />
      </div>
      <a href="mailto:dsaa2026india@gmail.com" className="font-inter font-medium text-[16px] md:text-[18px] text-[#484848] hover:text-sky-500">dsaa2026india@gmail.com</a>
    </div>

    <div className="flex items-start gap-4 mb-4">
      <div className="flex-none w-10 h-10 md:w-12 md:h-12 bg-[#E0E9FF] rounded-md flex items-center justify-center overflow-hidden">
        <Image src={PhoneIcon} alt="phone" width={24} height={24} className="w-4 h-4 md:w-6 md:h-6" />
      </div>
      <div className="font-inter text-[15px] md:text-[16px] text-[#484848] leading-5">
        <div className="font-medium">P. Krishna Reddy </div>
        <a href="tel:+919849329324" className="hover:text-sky-500">Contact +91 98493 29324 (Whats App Enabled) </a>
      </div>
    </div>

    
  </div>

        <div
          className="p-4 md:p-6 rounded-[12px]"
          style={{ boxShadow: '0px 0px 50px 4px #49494914'}}
        >
          <a
          href="https://www.iiit.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-transparent transition-all duration-500 ease-in-out
             hover:bg-blue-900 hover:shadow-[0_0_15px_6px_rgba(0,0,60,0.5)]
             border border-blue-900"
        >
          <Image
            src={IIITLogo}
            alt="IIIT Hyderabad Logo"
            width={500} // adjust size
            height={500}
            className="mx-auto"
          />
        </a>
          {/* <h3 className="font-inter font-semibold text-[20px] md:text-[24px] leading-[100%] text-[#010101] mb-4">Your Queries, Answered Here</h3> */}
          {/* <form className="space-y-4">
            <div>
              <label className="font-inter font-medium text-[16px] leading-[100%] text-[#313030] block mb-2">Full Name <span className="text-[#313030]">*</span></label>
              <input type="text" placeholder="Enter your full name" className="w-full h-[41px] rounded-[8px] p-3 bg-[#FFFFFFCC] border border-transparent focus:outline-none focus:ring-0" />
            </div>

            <div>
              <label className="font-inter font-medium text-[16px] leading-[100%] text-[#313030] block mb-2">Phone Number</label>
              <input type="tel" placeholder="Enter your phone number" className="w-full h-[41px] rounded-[8px] p-3 bg-[#FFFFFFCC] border border-transparent focus:outline-none focus:ring-0" />
            </div>

            <div>
              <label className="font-inter font-medium text-[16px] leading-[100%] text-[#313030] block mb-2">Email</label>
              <input type="email" placeholder="Enter your email" className="w-full h-[41px] rounded-[8px] p-3 bg-[#FFFFFFCC] border border-transparent focus:outline-none focus:ring-0" />
            </div>

            <div>
              <label className="font-inter font-medium text-[16px] leading-[100%] text-[#313030] block mb-2">Message</label>
              <textarea placeholder="Type here..." className="w-full h-[95px] rounded-[8px] p-3 bg-[#FFFFFFCC] border border-transparent resize-none focus:outline-none focus:ring-0"></textarea>
            </div>

            <div>
              <button type="button" className="bg-[#155DFC] text-white px-4 py-2 rounded-md w-full md:w-auto cursor-pointer">SEND</button>
            </div>
          </form> */}
        </div>
      </div>
    </section>
  )
}

export default ContactForm
