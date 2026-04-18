function AcceptedSpecialSessions() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:py-16 sm:px-6 max-w-5xl mx-auto">
      <div className="max-w-[1700px] mx-auto">

        {/* Heading */}
        <h2 className="font-inter font-bold text-[32px] md:text-[40px] text-center text-[#101828] mb-6">
          Accepted Special Sessions
        </h2>

        {/* Sessions List */}
        <div className="border border-[#D1D5DB] rounded-xl p-6 md:p-8 mb-8 max-w-5xl mx-auto">

        <ul className="list-disc pl-5 font-inter text-[15px] md:text-[16px] text-[#232B3A] space-y-6 marker:text-lg">

            <li>
              <a
                href="https://dsaa-2026.vercel.app/attend"
                className="text-blue-600 font-semibold hover:underline"
                target="_blank"
              >
                Computational Imaging, Vision, and Language (CIVIL)
              </a>
              <div className="text-gray-600">
                Organized by : Yaping Zhao
              </div>
            </li>

            <li>
              <a
                href="https://sites.google.com/view/ds4sg2026/home"
                className="text-blue-600 font-semibold hover:underline"
                target="_blank"
              >
                DS4SG: Data Science for Social Good
              </a>
              <div className="text-gray-600">
                Organized by : Abdul Wahid*, Ioanna Miliou, Lauri Lovén, Rimjhim, Kainat Khan
              </div>
            </li>

            <li>
              <a
                href="https://dsaa-2026.vercel.app/attend"
                className="text-blue-600 font-semibold hover:underline"
                target="_blank"
              >
                From Theory to Practice: Special Session on Large Language and Foundation Models (LLFM 2026)
              </a>
              <div className="text-gray-600">
                Organized by : Rafet Sifa*, Wei Liu, Dhaval Patel, Lorenz Sparrenberg, Priya Priya
              </div>
            </li>

            <li>
              <a
                href="https://sites.google.com/view/dsaa-scda/home"
                className="text-blue-600 font-semibold hover:underline"
                target="_blank"
              >
                Maritime and Other Applications of Deep Learning Techniques: Challenges and Opportunities (MADL 2026)
              </a>
              <div className="text-gray-600">
                Organized by : Youcef Djenouri, Gautam Srivastava*, Mohit Kumar
              </div>
            </li>

            <li>
              <a
                href="https://dsaa-2026.vercel.app/attend"
                className="text-blue-600 font-semibold hover:underline"
                target="_blank"
              >
                Scalable Data Science: Integration with Cloud and Distributed Systems (SDS 2026)
              </a>
              <div className="text-gray-600">
                Organized by : Tanvi Chawla*, Mamta Dahiya
              </div>
            </li>

          </ul>
        </div>

      </div>
    </section>
  );
}

export default AcceptedSpecialSessions;