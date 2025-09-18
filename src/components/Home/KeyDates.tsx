import React from "react";
import {
  AlertCircle,
  Calendar,
  Clock,
} from "lucide-react";

const keyDates = [
  {
    icon: <AlertCircle className="text-[#FF3B3B] w-6 h-6" />,
    title: "Full Paper Submission (up to 10 pages)",
    date: "To be Announced ",
    time: "23:59 AOE",
    border: "border-[#155DFC]",
  },
  {
    icon: <Clock className="text-[#155DFC] w-6 h-6" />,
    title: "Short Paper Submission (up to 5 pages)",
    date: "To be Announced ",
    time: "23:59 AOE",
    border: "border-[#155DFC]",
  },
  {
    icon: <Calendar className="text-[#A259FF] w-6 h-6" />,
    title: "Paper Notification",
    date: "To be Announced ",
    time: "23:59 AOE",
    border: "border-[#155DFC]",
  },
  {
    icon: <AlertCircle className="text-[#FF3B3B] w-6 h-6" />,
    title: "Paper Camera-Ready",
    date: "To be Announced ",
    time: "23:59 AOE",
    border: "border-[#155DFC]",
  },
];

const newsItems = Array(4).fill(
  "To be Announced Important deadlines and milestones for DSAA 2026. Mark your calendar and stay updated."
);

function KeyDates() {
  return (
    <section className="w-full bg-[#F8FAFE] py-10 px-4 sm:py-16 sm:px-6">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-8 sm:gap-14">
        {/* Left: Dates */}
        <div className="flex-1">
          <h2 className="font-inter font-semibold text-[28px] sm:text-[32px] md:text-[40px] leading-[110%] text-black mb-2">
            Key Dates
          </h2>
          <p className="font-inter text-[16px] sm:text-[16px] md:text-[16px] text-[#777D86] mb-6 sm:mb-8">
            Important deadlines and milestones for DSAA 2026. Mark your calendar and stay updated.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
            {keyDates.map((item, idx) => (
              <div
                key={idx}
                className={
                  `rounded-xl bg-white p-4 sm:p-6 flex flex-col gap-2 shadow-sm`
                }
                style={{
                  borderStyle: "solid",
                  borderColor: "#155DFC",
                  borderWidth: "1.34px 1.34px 1.34px 5.34px"
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  {item.icon}
                  <span className="font-inter font-semibold text-[16px] sm:text-[16px] md:text-[16px] text-[#232B3A]">
                    {item.title}
                  </span>
                </div>
                <div className="font-inter font-[500] text-[18px] sm:text-[20px] md:text-[24px] text-[#232B3A]">
                  {item.date}
                </div>
                <div className="font-inter text-[13px] sm:text-[15px] md:text-[16px] text-[#777D86]">
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: News */}
        <div className="w-full lg:w-[420px]">
          <div className="rounded-xl bg-[#EAF2FF] overflow-hidden" style={{ boxShadow: "0px 0px 40.06px 4.01px #00000012" }}>
            <div className="font-inter font-bold text-[18px] sm:text-[20px] md:text-[24px] text-[#232B3A] px-4 sm:px-6 py-3 sm:py-4 border-b border-[#E5E7EB] bg-[#EAF2FF]">
              News
            </div>
            <div className="max-h-[300px] sm:max-h-[400px] overflow-y-auto bg-white">
              {newsItems.map((news, idx) => (
                <div
                  key={idx}
                  className="font-inter text-justify text-[14px] sm:text-[15px] md:text-[16px] text-[#232B3A] px-4 sm:px-6 py-3 sm:py-4 border-b border-[#E5E7EB] last:border-b-0"
                >
                  {news}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeyDates;
