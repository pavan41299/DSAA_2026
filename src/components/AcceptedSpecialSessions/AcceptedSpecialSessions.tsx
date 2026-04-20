"use client";
import React from "react";

function DownloadFiles() {
  const files = [
    {
      name: "A2 Poster DSAA IEEE",
      path: "/pdf/A2 Poster IEEE.pdf",
      type: "PDF",
    },
    {
      name: "A3 Poster IEEE",
      path: "/pdf/A3 Poster IEEE.pdf",
      type: "PDF",
    },
    {
      name: "A4 Poster IEEE",
      path: "/pdf/A4 Poster IEEE.pdf",
      type: "PDF",
    },
    {
      name: "CFP IEEE DSAA",
      path: "/pdf/CFP IEEE DSAA.txt", // text file
      type: "TXT",
    },
  ];

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 flex justify-center">
      <div className="max-w-5xl w-full">

        {/* Heading */}
        <h2 className="font-inter font-bold text-[32px] md:text-[40px] text-center text-[#101828] mb-10">
          Download Posters & CFP
        </h2>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {files.map((file, index) => (
            <a
              key={index}
              href={file.path}
              download
              className="group relative border border-[#D1D5DB] rounded-2xl p-6 flex flex-col items-center justify-center text-center bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* File Icon */}
              <div className="text-5xl mb-3">
                {file.type === "PDF" ? "📄" : "📝"}
              </div>

              {/* Title */}
              <div className="font-semibold text-[18px] text-[#232B3A]">
                {file.name}
              </div>

              {/* File Type */}
              <div className="text-sm text-gray-500 mt-1">
                {file.type} File
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-2xl transition duration-300">
                <span className="text-white text-[16px] font-medium">
                  Click to download
                </span>
              </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}

export default DownloadFiles;