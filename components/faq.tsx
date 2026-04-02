"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Who can participate in STREAMTHON?",
    answer: "STREAMTHON is open to undergraduate students enrolled in Saudi universities (Track 1) and developers, tech enthusiasts, and AI enthusiasts from across Saudi Arabia (Track 2)."
  },
  {
    question: "What technologies should I use?",
    answer: "All projects must utilize Stream APIs for fintech solutions and be built using Replit as the development platform. You can use any programming language or framework supported by Replit."
  },
  {
    question: "Can I participate individually or do I need a team?",
    answer: "Both options are available. You can participate solo or form a team of 2-4 members. Team formation support will be available during the event."
  },
  {
    question: "What kind of projects should I build?",
    answer: "Projects should focus on innovative solutions, products, or tools in the fintech sector. Think about ways to build a smarter financial world and solve real challenges using AI and Stream's APIs."
  },
  {
    question: "How will projects be judged?",
    answer: "Projects will be evaluated based on innovation, technical implementation, use of Stream APIs, potential impact in the fintech sector, and presentation quality."
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Section title */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-gold">
              FAQ
            </h2>
            <div className="flex-1 h-px bg-gold/30 hidden sm:block" />
          </div>

          {/* Accordion */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:text-gold transition-colors group"
                >
                  <span className="text-lg text-white group-hover:text-gold transition-colors pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gold flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-white/50 group-hover:text-gold flex-shrink-0 transition-colors" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="pb-6">
                    <p className="text-white/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
