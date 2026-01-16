"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github } from "lucide-react"

export default function CoverLetter() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8 print:bg-white print:py-0">
        <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none">
          {/* Print Button - Hidden during print */}
          <div className="p-4 print:hidden">
            <Button onClick={handlePrint} className="w-full">
              Download as PDF / Print
            </Button>
          </div>

          {/* Cover Letter Content */}
          <div className="p-8 md:p-12">
            {/* Header */}
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">YOKESH KUMAR T R</h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 7010509091</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>yokeshk868@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Paramakudi, Ramanathapuram, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <a
                    href="https://github.com/yokeshkumar18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    github.com/yokeshkumar18
                  </a>
                </div>
              </div>
            </header>

            {/* Date */}
            <div className="mb-6 text-gray-700">
              <p>{new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
            </div>

            {/* Recipient */}
            <div className="mb-6 text-gray-700">
              <p className="font-semibold">Hiring Manager</p>
              <p>Wipro Limited</p>
              <p>Bangalore, India</p>
            </div>

            {/* Subject */}
            <div className="mb-6">
              <p className="font-semibold text-gray-900">Subject: Application for Software Engineer Position</p>
            </div>

            {/* Salutation */}
            <div className="mb-6 text-gray-700">
              <p>Dear Hiring Manager,</p>
            </div>

            {/* Body */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I am writing to express my strong interest in the Software Engineer position at Wipro Limited. As a
                dedicated Frontend Developer with hands-on experience in building scalable web applications using
                React.js, Next.js, and TypeScript, I am excited about the opportunity to contribute to Wipro&apos;s
                innovative projects and work alongside talented professionals.
              </p>

              <p>
                Currently, I am working as a Frontend Developer at Primora Technologies, where I have been developing
                production-ready applications since November 2025. I have successfully built comprehensive systems
                including an Appointment Booking Platform with dynamic subdomain routing and role-based portals, and a
                complete ERP Management System handling inventory, sales, and analytics modules. My expertise in Next.js
                15 App Router, server-side rendering, and modern component architecture aligns well with the technical
                requirements of this role.
              </p>

              <p>
                Prior to this, I gained valuable experience as a Frontend Developer Intern at Unityr Technologies (Feb
                2024 - Oct 2024), where I built a Conference Management Website and developed the Waitr Restaurant POS
                System using Electron.js. These projects strengthened my ability to create real-time applications with
                offline-first architecture and responsive UI design. I have consistently delivered applications that
                meet both functional requirements and user experience standards.
              </p>

              <p>
                What sets me apart is my comprehensive skill set that extends beyond frontend development. I have
                practical experience with DevOps practices including CI/CD pipeline automation using GitHub Actions,
                Docker containerization, and infrastructure management. I have configured automated testing and
                deployment workflows, collaborated with cross-functional teams using Agile methodology, and provided
                technical support for production releases. This holistic understanding allows me to contribute
                effectively across the development lifecycle.
              </p>

              <p>
                I am particularly drawn to Wipro&apos;s reputation for fostering innovation and creating solutions that make
                a real difference. The opportunity to collaborate with application architects, design complex system
                components, and support production deployments aligns perfectly with my career aspirations. I am a fast
                learner with strong problem-solving abilities and thrive in collaborative environments where I can
                contribute fresh perspectives to challenging projects.
              </p>

              <p>
                I am confident that my technical expertise in React.js, Next.js, TypeScript, along with my DevOps
                knowledge and proven track record of delivering production applications, make me a strong candidate for
                this position. I am eager to bring my skills and passion for creating innovative solutions to the Wipro
                team.
              </p>

              <p>
                Thank you for considering my application. I have attached my resume for your review and would welcome
                the opportunity to discuss how my experience and skills can contribute to Wipro&apos;s continued success. I
                am available for an interview at your earliest convenience.
              </p>
            </div>

            {/* Closing */}
            <div className="mt-8 text-gray-700">
              <p className="mb-1">Sincerely,</p>
              <p className="font-semibold text-gray-900 mt-6">Yokesh Kumar T R</p>
            </div>
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
            margin: 0.5cm;
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
        }
      `}</style>
    </>
  )
}
