import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function VenueStayContent() {   
    return (
      <section className="w-full bg-[#F9FAFB] py-12 px-4 sm:px-8 md:py-16">
        {/* Title */}
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h1 className="font-inter font-semibold text-[28px] sm:text-[36px] md:text-[40px] text-black mb-4">
            Apex Summit Logistic Partner of DSAA 2026
          </h1>
          <p className="text-[#4B5563] text-[16px] sm:text-[18px] max-w-3xl mx-auto">
            Book your Accomodation / Cab to reach your destination by sending your details
            below to the travel desk.
          </p>
        </div>
  
        {/* Booking Template */}
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-6 md:p-8 mb-12">
          <h2 className="text-center text-[22px] sm:text-[24px] font-semibold text-[#111827] mb-4">
            Booking Template (Copy &amp; Paste)
          </h2>
          <pre className="bg-[#F3F4F6] p-4 rounded-md text-sm sm:text-base text-[#374151] overflow-x-auto whitespace-pre-wrap leading-relaxed">
  {`Arrival Date:
Arrival Time:
Flight Arrival time:

Hotel Name:
Hotel Address:
  
Vehicle type : Mid Segment or SUV :
  
  (You can copy and paste above details and send it to 
  smapexsummit@gmail.com or WhatsApp at +91 9811130391
  
  The amount can be paid at the conference at the Travel desk later)`}
          </pre>
        </div>
  
        {/* Hotel Booking */}
        <div className="max-w-5xl mx-auto mb-12 text-center">
          <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#111827] mb-6">
            Hotel Booking Guidance
          </h2>
          <p className="text-[#4B5563] mb-3">
            Book your room as per your travel itinerary at your choice of hotels
            located at or near the venue within 1–2 km.
          </p>
          <p className="text-[#4B5563] mb-3">
            The Venue hotel is <strong>Hotel Pride Plaza </strong>, Aerocity,
            New Delhi. (Cost: <strong>15,000 + GST 18%</strong> including
            breakfast)
          </p>
  
          <h3 className="text-lg sm:text-xl font-medium text-[#111827] mt-6 mb-2">
            Hotels near the venue (Prices are around 15,000 + GST 18%):
          </h3>
          <ul className="grid sm:grid-cols-2 gap-2 text-[#374151] text-left max-w-3xl mx-auto mb-4">
            
            <li>Hotel J W Marriott — 2 min walk</li>
            <li>Hotel Pullman — 1 min walk</li>
            <li>Hotel Andaz — 4 min walk</li>
            <li>Hotel Holiday Inn — 10 min walk</li>
            <li>Hotel Aloft — 5 min walk</li>
            <li>Hotel Radisson — 10 min by car/auto</li>
            <li>Hotel Sardar Sarovar — 10 min by car/auto</li>
            <li>Hotel Roseate — 10 min walk</li>
            <li>Hotel Red Fox — 10 min walk</li>            
          </ul>
  
          {/* <p className="text-[#4B5563] mb-3">
            Other premium hotels (~
            <strong>11,000 + GST 18%</strong>):
          </p>
          <ul className="list-disc list-inside text-[#374151] mb-6"> */}
            
          {/* </ul> */}
          <h3 className="text-lg sm:text-xl font-medium text-[#111827] mt-6 mb-2">
          Budget hotels (Prices are around 5,000):
          </h3>
          
          <ul className="grid sm:grid-cols-2 gap-2 text-[#374151] text-left max-w-3xl mx-auto">
            <li>Hotel Shanti Palace </li>
            <li>Hotel Park Tree — Near IGI Airport</li>
            <li>Hotel White Rose</li>
            <li>Hotel Cardinal Express Oxmo</li>
            <li>Hotel WestEnd </li>
            <li>Hotel Almati Inn </li>
            <li>Hotel Airport City </li>
          </ul>
        </div>
  
        {/* Group Sharing */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#111827] mb-4">
            Group / Vehicle Sharing
          </h2>
          <p className="text-[#4B5563]">
            Room Sharing or Car Pooling is also provided, Please write to us for detailed pricing of it.
          </p>
        </div>
  
        {/* Contact */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#111827] mb-4">
            Contact
          </h2>
          <p className="text-[#374151] mb-2">
            Email:{' '}
            <a
              href="mailto:smapexsummit@gmail.com"
              className="text-[#155DFC] hover:underline"
            >
              smapexsummit@gmail.com
            </a>
          </p>
          <p className="text-[#374151]">
            WhatsApp:{' '}
            <a
              href="https://wa.me/919811130391"
              target="_blank"
              rel="noreferrer"
              className="text-[#155DFC] hover:underline"
            >
              +91 98111 30391
            </a>
          </p>
        </div>
      </section>
    )
  }
  
  export default VenueStayContent
  