
import React from "react";
import Image from "next/image"; // ✅ Import Next.js Image
import IIITLogo from "../../../public/IIIT LOGO.png"; // <-- Replace with your logo path

function About() {
  return (
    <section className="max-w-[1600px] py-10 px-4 sm:py-14 sm:px-8 bg-white mx-auto">
      <div className="mx-auto text-center">
        <h2 className="font-inter font-semibold text-[26px] sm:text-[28px] md:text-[28px] leading-[110%] sm:leading-[100%] tracking-[0%] text-center align-middle text-black mb-6 sm:mb-10">
          About IEEE DSAA 2026
        </h2>

        <p className="font-inter text-black text-justify font-medium text-[16px] sm:text-[16px] md:text-[16px] leading-[24px] sm:leading-[28px] md:leading-[32.05px] text-[#777D86] tracking-[0%] max-w-5xl mx-auto mb-8">
          The 13th IEEE International Conference on Data Science and Advanced
          Analytics (DSAA) will be held in New Delhi, India on October 6-9, 2026.
          It features its strong interdisciplinary synergy between statistics,
          computing and information/intelligence sciences, and cross-domain
          interactions between academia and business for data science and
          analytics. DSAA sets up a high standard for its organizing committee,
          keynote speeches, submissions to main conference and special sessions,
          and a competitive rate for paper acceptance. DSAA has been widely
          recognized as a dedicated flagship annual meeting in data science and
          analytics such as by the Google Metrics and China Computer Foundation.
          DSAA’2026 provides a premier forum that brings together researchers,
          industry and government practitioners, as well as developers and users
          of big data solutions for the exchange of the latest theoretical
          developments in Data Science and the best practice for a wide range of
          applications. DSAA’2026 invites submissions of papers describing
          innovative research on all aspects of data science and advanced
          analytics as well as application-oriented papers that make significant,
          original, and reproducible contributions to improving the practice of
          data science and analytics in real-world scenarios.
        </p>

        {/* ✅ Clickable Logo */}
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
      </div>
    </section>
  );
}

export default About;
