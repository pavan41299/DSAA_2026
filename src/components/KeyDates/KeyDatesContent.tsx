import React from "react";
import Link from "next/link";

const keyDates = [
  { event: "Paper Submission Deadline", date: "May 1st, 2026" },
  { event: "Paper Notification", date: "July 24th, 2026" },
  { event: "Paper Camera-Ready", date: "August 21st, 2026" },

  { event: "Special Session Proposals Due", date: "March 16th, 2026" },
  { event: "Special Session Proposals Notification", date: "March 30th, 2026" },

  { event: "Special Session Paper Submission", date: "May 2nd, 2026" },
  { event: "Special Session Paper Notification", date: "July 24th, 2026" },
  { event: "Special Session Paper Camera-Ready", date: "August 21st, 2026" },

  { event: "Tutorials Submission", date: "April 20th, 2026" },
  { event: "Tutorials Notification", date: "May 16th, 2026" },

  // { event: "Early Bird Registration", date: "TBA" },
  { event: "Conference Dates", date: "6-9 October 2026" },
];

function KeyDatesContent() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h3 className="font-inter text-center font-semibold text-[40px] md:text-[40px] leading-[100%] tracking-[0%] mb-8">
        Key Dates
      </h3>

      <section className="w-full py-8 md:py-1 px-4">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-blue-600 text-white text-left">
                <th className="px-6 py-3 border-b">Event</th>
                <th className="px-6 py-3 border-b">Date</th>
              </tr>
            </thead>
            <tbody>
              {keyDates.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition border-b border-[#101828]/40 mt-2"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {item.event}
                  </td>
                  <td className="px-6 py-4 text-gray-500 italic">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4 className="mt-4">
            Time Zone :{" "}
            <a
              href="https://www.timeanddate.com/time/zones/aoe"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              Anywhere on Earth (AOE)
            </a>
          </h4>
        </div>
      </section>
    </div>
  );
}

export default KeyDatesContent;
