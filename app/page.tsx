"use client"

import { useState } from "react"
import Resume from "@/components/resume"
import Portfolio from "@/components/portfolio"
import { Button } from "@/components/ui/button"

export default function Page() {
  const [activeTab, setActiveTab] = useState<"resume" | "portfolio">("resume")

  return (
    <>
      <div className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm print:hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 py-4">
            <Button
              onClick={() => setActiveTab("resume")}
              variant={activeTab === "resume" ? "default" : "ghost"}
              className="rounded-md"
            >
              Resume
            </Button>
            <Button
              onClick={() => setActiveTab("portfolio")}
              variant={activeTab === "portfolio" ? "default" : "ghost"}
              className="rounded-md"
            >
              Portfolio
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      {activeTab === "resume" ? <Resume /> : <Portfolio />}
    </>
  )
}
