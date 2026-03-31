import Link from "next/link"
import { ExternalLink, Mail, MapPin } from "lucide-react"

type LinkItem = {
  label: string
  href: string
  external?: boolean
}

const quickLinks: LinkItem[] = [
  { label: "Research Track", href: "/calls/research-track" },
  { label: "Application Track", href: "/calls/application-track" },
  { label: "Industry Track", href: "/calls/industry-track" },
  { label: "LLM Track", href: "/calls/llm-track" },
  { label: "Survey and Vision Track", href: "/calls/survey-track" },
  { label: "Doctoral Consortium Track", href: "/calls/doctoral-track" },
  { label: "Journal Track", href: "/calls/journal-track" },
  { label: "Special sessions ", href: "/calls/special-sessions" },
  { label: "Tutorials", href: "/calls/tutorials" },
  

  // { label: "Program", href: "/program/technical-program" },
  // { label: "Key Dates", href: "/key-dates" },
  // { label: "Attend / Registration", href: "/attend" },
  // { label: "Sponsor", href: "/sponsor" },
]

const resources: LinkItem[] = [
  // { label: "Submission Guidelines", href: "/for-authors" },
  // { label: "Camera-Ready Instructions", href: "/program/camera-ready-instructions" },
  { label: "Registration & Travel", href: "/attend" },
  { label: "Conference Venue", href: "/venue" },
]

const organizationLinks: LinkItem[] = [
  { label: "Organizing Committee", href: "/organizing-committee" },
  { label: "Program Committee", href: "/program-committee" },
]

function ExternalMark() {
  return <ExternalLink aria-hidden="true" className="ml-1 inline-block h-3.5 w-3.5 align-[-2px] text-slate-400" />
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto w-full max-w-[1550px] px-6 py-14 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <section aria-labelledby="footer-about">
            <h2 id="footer-about" className="text-balance text-xl font-semibold text-white">
              IEEE DSAA 2026
            </h2>
            <p className="mt-2 text-md text-slate-400">Data Sciences and Analytics Center</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-9 w-9 text-slate-400" aria-hidden="true" />
                  <address className="not-italic leading-6">
                   International Institute of Information Technology (IIIT-H) <br />
                    Prof. C R Rao Road<br />
                    Gachibowli, Hyderabad, Telangana, India  500032
                  </address>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-slate-400" aria-hidden="true" />
                  <a
                    href="mailto:dsaa2026india@gmail.com"
                    className="underline-offset-2 hover:text-sky-400 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-400/50"
                  >
                    dsaa2026india@gmail.com
                  </a>
                </li>
              </ul>
          </section>

          {/* Quick Links */}
          <nav aria-labelledby="footer-quick">
            <h2 id="footer-quick" className="text-lg font-semibold text-white">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((item) => (
                <li key={`${item.href}-${Math.floor(Math.random() * 1000000)}`}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-labelledby="footer-resources">
            <h2 id="footer-resources" className="text-lg font-semibold text-white">
              Resources
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {resources.map((item) => (
                <li key={`${item.href}-${Math.floor(Math.random() * 1000000)}`}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center transition-colors hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
                    >
                      {item.label}
                      <ExternalMark />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Organization */}
          <nav aria-labelledby="footer-organization">
            <h2 id="footer-organization" className="text-lg font-semibold text-white">
              Organized by
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {organizationLinks.map((item) => (
                <li key={`${item.href}-${Math.floor(Math.random() * 1000000)}`}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <hr className="my-10 border-slate-800" />

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <p className="leading-6">
            © 2026 IEEE International Conference on Data Science and Advanced Analytics. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {/* <li>
              <Link
                href=""
                className="hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
              >
                Privacy Policy
              </Link>
            </li> */}
            {/* <li>
              <Link href="" className="hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50">
                Terms of Use
              </Link>
            </li> */}
            <li>
              <Link
                href="https://www.ieee.org/about/corporate/governance/code-of-conduct#:~:text=The%20IEEE%20Code%20of%20Conduct%20describes%20IEEE%20members%E2%80%99,the%20IEEE%20Board%20of%20Directors%20in%20June%202014."
                className="hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
              >
                IEEE Code of Conduct
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}