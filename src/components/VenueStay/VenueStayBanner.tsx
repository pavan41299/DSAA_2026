import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function VenueStayBanner() {
    return (
      <section className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md font-sans">
        <h1 className="font-inter font-semibold text-[28px] sm:text-[36px] md:text-[40px] text-center text-black mb-6">Logistic Partner of DSAA 2026</h1>
        <p className="text-center text-[#111827] mb-8">
          Book your cab to reach to your destination by simply sending your details below to the travel desk.
        </p>
  
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#111827] text-center">Booking template (copy &amp; paste)</h2>
          <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto text-sm whitespace-pre-wrap text-[#374151]">
  {`Arrival Date:
  Arrival Time:
  Flight number:
  Flight Arrival time:
  Hotel Name:
  Hotel Address:
  
  Car type : Mid Segment or SUV :
  
  (You can copy and paste above details and send it to smapexsummit@gmail.com or 
  whatsapp at +91 9811130391
  
  The amount can be paid at the conference at Travel desk later`}
          </pre>
        </div>
  
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#111827] text-center">Hotel booking guidance</h2>
          <p className="mb-2 text-[#374151] text-center">Book your room as per your travel itinerary at choice of your hotels located at venue/closeby and 1-2 kms from the venue.</p>
          <p className="mb-2 text-[#374151] text-center">The Venue hotel is <strong>Hotel Pride Plaza *****</strong>, Aerocity, New Delhi. (the cost of above hotels are over <strong>15,000 + GST 18% including Breakfast</strong>)</p>
          <p className="mb-4 text-[#374151] text-center">The other hotels are as hereunder in the vicinity of venue hotel:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6 text-[#374151]">
            <li>Hotel Holiday Inn **** — 10 minutes walking distance</li>
            <li>Hotel J W Marriott ***** — 2 Minutes walking distance</li>
            <li>Hotel Pullman ***** — 1 minute walking distance</li>
            <li>Hotel Andaz ***** — 4 minutes walking distance</li>
            <li>Hotel Aloft **** — 5 minutes walking distance</li>
            <li>Hotel Radisson ***** — 10 minutes by car / auto</li>
            <li>Hotel Sardar Sarovar **** — 10 minutes by car / auto</li>
            <li>Hotel Roseate **** — 10 minutes walking distance</li>
          </ul>
          <p className="mb-2 text-[#374151] text-center">(the cost of below hotels are over <strong>11,000 + GST 18%</strong>)</p>
          <ul className="list-disc pl-6 space-y-1 mb-6 text-[#374151]">
            <li>Hotel Red Fox *** — 10 minutes walking distance near Venue</li>
          </ul>
          <p className="mb-2 text-[#374151] text-center">Other Hotels are slightly far from Venue Hotel that takes 10 minutes by Car or Auto which is maximum 2 kms from the venue at Mahipalpur Location:</p>
          <ul className="list-disc pl-6 space-y-1 mb-6 text-[#374151]">
            <li>Hotel Shanti Palace ***</li>
            <li>Hotel Park Tree ** — Near IGI Airport Delhi</li>
            <li>Hotel White Rose **</li>
            <li>Hotel Cardinal Express Oxmo ***</li>
            <li>Hotel WestEnd **</li>
            <li>Hotel Almati Inn **</li>
            <li>Hotel Airport City **</li>
          </ul>
          <p className="mb-6 text-[#374151] text-center">The Prices are approx. <strong>3500-5000</strong> for above Hotels including taxes and breakfast.</p>
        </div>
  
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#111827] text-center">Group / Vehicle sharing</h2>
          <p className="text-[#374151] text-center">Please write to us for costing, cost can be shared if there are 3-4 persons in a Car or group in a private Van or bus.</p>
        </div>
  
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#111827] text-center">Contact</h2>
          <p className="text-[#374151] text-center">Email: <a href="mailto:smapexsummit@gmail.com" className="text-blue-600 hover:underline">smapexsummit@gmail.com</a></p>
          <p className="text-[#374151] text-center">WhatsApp: <a href="https://wa.me/919811130391" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">+91 98111 30391</a></p>
        </div>
  
        <footer className="text-sm text-gray-600 text-center">&copy; DSAA 2026 — Logistic Partner information</footer>
      </section>
    )
  }
  
  export default VenueStayBanner