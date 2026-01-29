"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github } from "lucide-react"

export default function Resume() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <div className="min-h-screen bg-slate-50 py-8 print:bg-white print:py-0">
        <div className="max-w-3xl mx-auto bg-white shadow-lg print:shadow-none">
          {/* Print Button */}
          <div className="p-4 print:hidden">
            <Button onClick={handlePrint} className="w-full bg-primary hover:bg-primary-light">
              Download as PDF
            </Button>
          </div>

          {/* Resume Content */}
          <div className="p-8 md:p-10 print:p-8">
            {/* Header - Compact */}
            <header className="mb-5">
              <h1 className="text-3xl font-bold text-primary mb-1">YOKESH KUMAR T R</h1>
              <p className="text-lg font-semibold text-slate-700 mb-3">Frontend Developer</p>

              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+91 7010509091</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>yokeshk868@gmail.com</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>India</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Github className="w-4 h-4 flex-shrink-0" />
                  <a
                    href="https://github.com/yokeshkumar18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary hover:underline"
                  >
                    github.com/yokeshkumar18
                  </a>
                </div>
              </div>
            </header>

            <div className="border-b-2 border-primary mb-5"></div>

            {/* Professional Summary - Concise */}
            <section className="mb-5">
              <h2 className="text-sm font-bold text-primary uppercase tracking-wide mb-2">Professional Summary</h2>
              <p className="text-sm text-slate-700 leading-relaxed">
               Frontend Developer with 1+ year of hands-on experience building and shipping production-grade web and desktop applications. Strong expertise in React.js, Next.js 15, TypeScript, and modern UI architecture. Proven experience developing ERP systems, appointment booking platforms, and POS applications with a focus on scalability, performance, and maintainability.
              </p>
            </section>

            {/* Technical Skills - Organized */}
            <section className="mb-5">
              <h2 className="text-sm font-bold text-primary uppercase tracking-wide mb-2">Technical Skills</h2>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="font-semibold text-slate-900">Frontend:</span>
                  <span className="text-slate-700"> React.js, Next.js 15, TypeScript, Tailwind CSS</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Architecture:</span>
                  <span className="text-slate-700"> Component-Based Architecture, Server-Side Rendering (SSR), Role-Based Access Control (RBAC), Offline-First Architecture, State Management, REST API Integration</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Libraries:</span>
                  <span className="text-slate-700"> Context API, Electron.js</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Tools:</span>
                  <span className="text-slate-700"> Git, GitHub, GitHub Actions (CI/CD)</span>
                </div>
              </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-5">
              <h2 className="text-sm font-bold text-primary uppercase tracking-wide mb-4">Professional Experience</h2>

              {/* Primora */}
              <div className="mb-6">
                <h3 className="text-base font-bold text-slate-900 uppercase mb-1">FRONTEND DEVELOPER INTERN</h3>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-sm font-bold text-slate-700">Softnix Solutions <span className="font-normal text-slate-600">| Nov 2024 – Present</span></span>
                </div>
                <ul className="list-disc list-outside space-y-1 text-sm text-slate-700 ml-5">
                  <li>Worked on frontend development for production web applications using <span className="font-bold text-slate-900">Next.js and TypeScript</span></li>
                  <li>Contributed to an <span className="font-bold text-slate-900">appointment booking system</span>, including user flows, UI components, and QR-based check-in features</li>
                  <li>Developed multiple modules for an <span className="font-bold text-slate-900">ERP frontend</span>, supporting inventory, sales, customer management, and reporting screens</li>
                  <li>Collaborated with backend and design teams to integrate REST APIs and improve application usability</li>
                  <li>Participated in deployment workflows and assisted with <span className="font-bold text-slate-900">CI/CD processes using GitHub Actions</span></li>
                  <li>Performed code reviews and collaborated with team members to maintain frontend code quality</li>
                </ul>
              </div>

              {/* Unityr */}
              <div>
                <h3 className="text-base font-bold text-slate-900 uppercase mb-1">FRONTEND DEVELOPER INTERN</h3>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-sm font-bold text-slate-700">Unityr Techlabs<span className="font-normal text-slate-600">| Feb 2024 – Oct 2024</span></span>
                </div>
                <ul className="list-disc list-outside space-y-1 text-sm text-slate-700 ml-5">
                  <li>Built and maintained frontend features for a <span className="font-bold text-slate-900">conference management web application</span> with real-time API integration</li>
                  <li>Developed a <span className="font-bold text-slate-900">restaurant POS application</span> using React and Electron.js to support desktop usage</li>
                  <li>Implemented <span className="font-bold text-slate-900">offline-first UI behavior</span> to ensure basic functionality during network interruptions</li>
                  <li>Worked in an <span className="font-bold text-slate-900">Agile development environment</span>, delivering assigned tasks within sprint timelines</li>
                  <li>Coordinated with team members to test, debug, and enhance user experience</li>
                </ul>
              </div>
            </section>

            {/* Key Projects - Simplified */}
            <section className="mb-5">
              <h2 className="text-sm font-bold text-primary uppercase tracking-wide mb-2">Key Projects</h2>

              <div className="mb-3">
                <h3 className="font-bold text-slate-900 text-sm">Appointment Booking System</h3>
                <p className="text-xs italic text-slate-600 mb-1">Next.js 15, TypeScript, Tailwind CSS</p>
                <ul className="list-disc list-outside space-y-1 text-sm text-slate-700 ml-5">
                  <li>Multi-tenant platform with dynamic subdomains</li>
                  <li>QR-based visitor check-in system</li>
                  <li>Role-based dashboards for admin, owner, staff, and customers</li>
                </ul>
              </div>

              <div className="mb-3">
                <h3 className="font-bold text-slate-900 text-sm">ERP Management System</h3>
                <p className="text-xs italic text-slate-600 mb-1">React.js, Context API, Tailwind CSS</p>
                <ul className="list-disc list-outside space-y-1 text-sm text-slate-700 ml-5">
                  <li>Complete frontend implementation for inventory, sales, customer management, and analytics</li>
                  <li>Interactive dashboards with real-time data rendering</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-sm">Waitr Restaurant POS</h3>
                <p className="text-xs italic text-slate-600 mb-1">Electron.js, React, Offline-First Architecture</p>
                <ul className="list-disc list-outside space-y-1 text-sm text-slate-700 ml-5">
                  <li>Desktop POS system with order management, table handling, and kitchen display</li>
                  <li>Designed to function seamlessly without internet connectivity</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-sm font-bold text-primary uppercase tracking-wide mb-2">Education</h2>
              <div className="text-sm flex justify-between items-start">
                <h3 className="font-bold text-slate-900">B.Tech - Computer Science and Business Systems (CSBS)</h3>
                <p className="text-slate-700 whitespace-nowrap">2022 - 2026</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            margin: 0;
            padding: 0;
            -webkit-print-color-adjust: exact;
          }
          @page {
            margin: 0.3cm;
            size: A4;
          }
          
          /* Hide non-print elements */
          .print\\:hidden { display: none !important; }
          
          /* Container resets */
          .print\\:bg-white { background-color: white !important; }
          .print\\:py-0 { padding-top: 0 !important; padding-bottom: 0 !important; }
          .print\\:shadow-none { box-shadow: none !important; }
          .print\\:p-8 { padding: 0 !important; }
          
          html, body {
            width: 100%;
            height: 100%;
            overflow: visible;
          }
          
          .max-w-3xl {
            max-width: 100% !important;
            margin: 0 !important;
          }
          
          .shadow-lg { box-shadow: none !important; }
          .py-8 { padding: 0 !important; }
          .min-h-screen { min-height: auto !important; }

          /* TEXT SCALING FOR ONE PAGE */
          h1 {
            font-size: 1.5rem !important;
            margin-bottom: 0 !important;
            line-height: 1 !important;
          }
          
          /* Subtitle (Frontend Developer) */
          header > p.text-lg {
             font-size: 1rem !important;
             margin-bottom: 0.25rem !important;
          }
          
          /* Section Headers */
          h2 {
            font-size: 0.9rem !important;
            margin-bottom: 0.2rem !important;
            margin-top: 0.5rem !important;
          }
          
          /* Job Titles / Project Names */
          h3 {
            font-size: 0.85rem !important;
            margin-bottom: 0 !important;
          }

          /* General Text Reduction */
          p, li, span, div {
             font-size: 0.75rem !important; /* Equivalent to text-xs */
             line-height: 1.25 !important;
          }
          
          /* Explicitly smaller metadata */
          .text-xs {
             font-size: 0.7rem !important;
          }

          /* SPACING REDUCTION */
          section.mb-5 {
            margin-bottom: 0.4rem !important;
          }
          
          header.mb-5 {
             margin-bottom: 0.4rem !important;
          }
          
          .border-b-2 {
             margin-bottom: 0.4rem !important;
             border-bottom-width: 1px !important;
          }
          
          .mb-6 { margin-bottom: 0.25rem !important; } /* Experience blocks */
          .mb-3 { margin-bottom: 0.2rem !important; }  /* Project blocks */
          .mb-2 { margin-bottom: 0.1rem !important; }
          .mb-1 { margin-bottom: 0 !important; }
          
          /* Lists: tight packing */
          ul.space-y-1 > li + li {
             margin-top: 0 !important;
          }
          ul.space-y-1 {
             margin-top: 0.1rem !important;
          }
          
          /* Skills Grid adjustments */
          .gap-3 { gap: 0.25rem !important; }
          .grid-cols-2 { column-gap: 1rem !important; }
          
          /* Contact info row */
          .gap-y-1 { gap: 0 !important; } 
          header .flex-wrap { gap: 0.5rem !important; row-gap: 0 !important;}
        }
      `}</style>
    </>
  )
}
