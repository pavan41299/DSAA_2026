import React from "react";
import Image from "next/image";
import Link from "next/link";
import arrow from "../../../public/arrow-up-right.svg";

const items = [
  { label: "Research Track", href: "/calls/research-track" },
  { label: "Application Track", href: "/calls/application-track" },
  { label: "Industry Track", href: "/calls/industry-track" },
  { label: "Special Sessions", href: "/calls/special-sessions" },
  { label: "Tutorials", href: "/calls/tutorials" },
];

function ExploreCalls() {
  return (
    <section className="w-full py-14 px-4 bg-[#FBFCFF]">
      {/* Heading */}
      <h2 className="font-inter font-semibold text-[32px] md:text-[40px] leading-[130%] text-center text-black mb-10">
        Explore Calls for Participation
      </h2>
      {/* Items Row */}
      <div className="flex flex-col xl:flex-row justify-center items-center gap-[24px] xl:gap-[130.05px]">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="group flex items-center cursor-pointer transition xl:pl-0 pl-5"
          >
            <span className="font-inter font-semibold text-[20px] xl:text-[20px] leading-[40.06px] text-[#818181] group-hover:text-[#155DFC] transition-colors duration-200">
              {item.label}
            </span>
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Image src={arrow} alt="arrow" width={28} height={28} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ExploreCalls;
