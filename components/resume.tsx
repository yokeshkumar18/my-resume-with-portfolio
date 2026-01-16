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
                Frontend Developer with 1+ year of hands-on internship experience building production-grade web and
                desktop applications. Strong expertise in React.js, Next.js 15, and TypeScript, with real-world
                experience delivering ERP systems, appointment booking platforms, and POS applications. Focused on
                scalable UI architecture, performance, and maintainable frontend systems.
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
                  <span className="text-slate-700"> Component-Based Design, SSR, RBAC, Offline-first</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Libraries:</span>
                  <span className="text-slate-700"> Context API, RESTful APIs, Electron.js</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Tools:</span>
                  <span className="text-slate-700"> Git, GitHub, GitHub Actions (CI/CD)</span>
                </div>
              </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-5">
              <h2 className="text-sm font-bold text-primary uppercase tracking-wide mb-2">Professional Experience</h2>

              {/* Primora */}
              <div className="mb-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-slate-900">Frontend Developer Intern</h3>
                  <span className="text-xs text-slate-600">Nov 2024 - Present</span>
                </div>
                <p className="text-sm font-semibold text-slate-700 mb-1">Primora Technologies</p>
                <ul className="list-disc list-inside space-y-0.5 text-sm text-slate-700 ml-1">
                  <li>Developed production-ready frontend applications using Next.js 15 and TypeScript</li>
                  <li>Built multi-tenant Appointment Booking System with dynamic subdomains and QR-based check-in</li>
                  <li>
                    Engineered frontend of complete ERP system covering inventory, sales, customers, and analytics
                  </li>
                  <li>Configured CI/CD pipelines using GitHub Actions</li>
                  <li>Mentored junior developers and reviewed frontend code quality</li>
                </ul>
              </div>

              {/* Unityr */}
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-slate-900">Frontend Developer Intern</h3>
                  <span className="text-xs text-slate-600">Feb 2024 - Oct 2024</span>
                </div>
                <p className="text-sm font-semibold text-slate-700 mb-1">Unityr Technologies</p>
                <ul className="list-disc list-inside space-y-0.5 text-sm text-slate-700 ml-1">
                  <li>Built Conference Management Website with real-time REST API integration</li>
                  <li>Developed Waitr Restaurant POS using Electron.js and React with offline-first architecture</li>
                  <li>Implemented offline-first UI architecture for seamless user experience</li>
                  <li>Worked in Agile development cycles delivering features on schedule</li>
                </ul>
              </div>
            </section>

            {/* Key Projects - Simplified */}
            <section className="mb-5">
              <h2 className="text-sm font-bold text-primary uppercase tracking-wide mb-2">Key Projects</h2>

              <div className="mb-3">
                <h3 className="font-bold text-slate-900 text-sm">Appointment Booking System</h3>
                <p className="text-xs text-slate-600 mb-1">Next.js 15, TypeScript, Tailwind CSS</p>
                <p className="text-sm text-slate-700">
                  Dynamic subdomains, QR-based check-in, role-based access control for visitor, customer, admin, and
                  owner portals.
                </p>
              </div>

              <div className="mb-3">
                <h3 className="font-bold text-slate-900 text-sm">ERP Management System</h3>
                <p className="text-xs text-slate-600 mb-1">React, Context API, Tailwind CSS</p>
                <p className="text-sm text-slate-700">
                  Complete frontend for inventory, sales, customers, and analytics modules with interactive dashboards.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-sm">Waitr Restaurant POS</h3>
                <p className="text-xs text-slate-600 mb-1">Electron.js, React, Offline-first Architecture</p>
                <p className="text-sm text-slate-700">
                  Desktop POS application with order-taking, table management, and kitchen display system.
                </p>
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
          }
          @page {
            margin: 0.4cm;
            size: A4;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:bg-white {
            background-color: white !important;
          }
          .print\\:py-0 {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:p-8 {
            padding: 0.5rem !important;
          }
          html,
          body {
            width: 100%;
            height: 100%;
          }
          .max-w-3xl {
            max-width: 100% !important;
            margin: 0 !important;
          }
          .shadow-lg {
            box-shadow: none !important;
          }
          .py-8 {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          .min-h-screen {
            min-height: auto !important;
          }
        }
      `}</style>
    </>
  )
}
