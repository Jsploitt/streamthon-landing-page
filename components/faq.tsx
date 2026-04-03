"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Who can participate in STREAMATHON?",
    answer:
      "STREAMATHON is open to undergraduate students enrolled in Saudi universities (Track 1) and developers, tech enthusiasts, and AI enthusiasts from across Saudi Arabia (Track 2).",
  },
  {
    question: "What technologies should I use?",
    answer:
      "All projects must utilize Stream APIs for fintech solutions and be built using Replit as the development platform. You can use any programming language or framework supported by Replit.",
  },
  {
    question: "Can I participate individually or do I need a team?",
    answer:
      "Both options are available. You can participate solo or form a team of 2–4 members. Team formation support will be available during the event.",
  },
  {
    question: "What kind of projects should I build?",
    answer:
      "Projects should focus on innovative solutions, products, or tools in the fintech sector. Think about ways to build a smarter financial world and solve real challenges using AI and Stream's APIs.",
  },
  {
    question: "How will projects be judged?",
    answer:
      "Projects will be evaluated based on innovation, technical implementation, use of Stream APIs, potential impact in the fintech sector, and presentation quality.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" data-scroll-section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <h2 className="section-heading text-3xl sm:text-[40px] lg:text-[44px] font-bold text-gold">
              FAQ
            </h2>
            <div className="section-heading-line flex-1 h-px hidden sm:block" />
          </div>

          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item border-b border-white/10">
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-5 sm:py-6 flex items-center justify-between text-left group transition-colors duration-300 hover:bg-white/[0.03]"
                  aria-expanded={openIndex === index}
                >
                  <span
                    className="text-base sm:text-lg text-white transition-colors duration-200 pr-6 group-hover:text-gold"
                    style={{ color: openIndex === index ? "#f4c461" : undefined }}
                  >
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={1.5} />
                  ) : (
                    <Plus className="w-5 h-5 text-white/40 group-hover:text-gold flex-shrink-0 transition-colors duration-200" strokeWidth={1.5} />
                  )}
                </button>

                {/* Smooth height via CSS grid trick */}
                <div className={`accordion-body${openIndex === index ? " open" : ""}`}>
                  <div className="accordion-inner">
                    <p className="text-white/60 leading-relaxed pb-6 text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
