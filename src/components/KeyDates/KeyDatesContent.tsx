import React from "react";
import Link from "next/link";

const keyDates = [
  { event: "Paper Submission Deadline", oldDate: "May 1, 2026", newDate: "May 30, 2026" },
  { event: "Paper Notification", oldDate: "July 24, 2026", newDate: "August 10, 2026" },
  { event: "Paper Camera-Ready", oldDate: "August 21, 2026", newDate: "August 30, 2026" },

  { event: "Special Session Proposals Due", date: "April 8, 2026 (Applications Closed)" },
  { event: "Special Session Proposals Notification", date: "April 14, 2026 (Applications Closed)" },

  { event: "Special Session Paper Submission", oldDate: "May 1, 2026", newDate: "May 30, 2026" },
  { event: "Special Session Paper Notification", oldDate: "July 24, 2026", newDate: "August 10, 2026" },
  { event: "Special Session Paper Camera-Ready", oldDate: "August 21, 2026", newDate: "August 30, 2026" },

  { event: "Tutorials Submission", oldDate: "April 20, 2026", newDate: "May 23, 2026" },    
  { event: "Tutorials Notification", oldDate: "May 16, 2026", newDate: "June 3, 2026" },  

  { event: "Journal Call for Papers", date: "September, 2025" },
  { event: "Journal - First round : Manuscript submission", date: "February 15, 2026 (Applications Closed)" },
  { event: "Journal - Second round : Manuscript submission", date: "March 15, 2026 (Applications Closed)" },
  { event: "Journal - Third round : Manuscript submission", date: "April 15, 2026 (Applications Closed)" },
  { event: "Journal - Final decision notification", date: "July 15, 2026" },
  { event: "Journal - Revised manuscript deadline", date: "August 1, 2026" },

  { event: "Conference Dates", date: "October 6-9, 2026" },
];
  // { event: "Early Bird Registration", date: "TBA" },

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
                  {/* <td className="px-6 py-4 text-gray-500 italic">{item.date}</td> */}
                  
                  <td className="px-6 py-4 italic">
                    {item.event === "Conference Dates" ? (
                      <span className="bg-yellow-200 text-gray-900 px-2 py-1 rounded font-semibold">
                        {item.date}
                      </span>
                    ) : item.newDate ? (
                      <>
                        <span className="line-through text-gray-400 mr-2">
                          {item.oldDate}
                        </span>
                        <span className="text-green-600 font-semibold">
                          {item.newDate}
                        </span>
                      </>
                    ) : (
                      <span className="text-black-500">{item.date}</span>
                    )}
                  </td>
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
