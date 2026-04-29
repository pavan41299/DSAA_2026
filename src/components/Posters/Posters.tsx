"use client";
import React from "react";
import { Download, FileText } from "lucide-react";

function Posters() {
  const files = [
    {
      name: "DSAA'2026 CFP A4 Poster",
      path: "/pdf/A4 Poster IEEE.pdf",
      type: "PDF",
    },
    {
      name: "DSAA'2026 CFP A3 Poster",
      path: "/pdf/A3 Poster IEEE.pdf",
      type: "PDF",
    },
    {
      name: "DSAA'2026 CFP A2 Poster",
      path: "/pdf/A2 Poster IEEE.pdf",
      type: "PDF",
    },
    {
      name: "DSAA'2026 CFP",
      path: "/pdf/CFP IEEE DSAA.txt",
      type: "TXT",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 flex justify-center">
      <div className="max-w-3xl w-full">

        {/* Heading */}
        <h2 className="font-inter font-bold text-[34px] md:text-[42px] text-center text-[#0B1B2B] mb-3">
          Download Posters & CFP
        </h2>
        <p className="text-center text-gray-500 mb-12 text-[16px]">
          Official IEEE DSAA 2026 Call for Papers and Poster Materials
        </p>

        {/* Cards */}
        <div className="flex flex-col gap-6">

          {files.map((file, index) => (
            <a
              key={index}
              href={file.path}
              download
              className="group flex items-center justify-between bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Left Section */}
              <div className="flex items-center gap-5">

                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition">
                  <FileText size={22} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-semibold text-[18px] text-[#1A2B3C]">
                    {file.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {file.type} Document
                  </p>
                </div>
              </div>

              {/* Right Section (CTA) */}
              <div className="flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:text-blue-700 transition">
                <Download size={18} />
                Download
              </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Posters;