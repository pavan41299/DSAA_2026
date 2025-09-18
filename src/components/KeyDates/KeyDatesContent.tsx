import React from "react";

const keyDates = [
  { event: "Paper Submission Deadline", date: "TBA" },
  { event: "Notification of Acceptance", date: "TBA" },
  { event: "Camera Ready Submission", date: "TBA" },
  { event: "Early Bird Registration", date: "TBA" },
  { event: "Conference Dates", date: "TBA" },
  { event: "Workshop Proposal Submission", date: "TBA" },
  { event: "Tutorial Proposal Submission", date: "TBA" },
];

function KeyDatesContent() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <section className="w-full py-8 md:py-14 px-4">
        <h2
          className="font-inter font-semibold 
          text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] 
          leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] 
          text-center text-[#101828] mb-10">
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-blue-800 text-white text-left">
                <th className="px-6 py-3 border-b">Event</th>
                <th className="px-6 py-3 border-b">Date</th>
              </tr>
            </thead>
            <tbody>
              {keyDates.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition border-b">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {item.event}
                  </td>
                  <td className="px-6 py-4 text-gray-500 italic">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default KeyDatesContent;
