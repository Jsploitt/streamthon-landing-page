"use client"

import { useState, type ReactNode } from "react"
import { Plus, Minus } from "lucide-react"

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "When will the Streamathon take place?",
    answer: "It will take place on April 15 and 16, with both days being on-site.",
  },
  {
    question: "What should I bring to the Streamathon?",
    answer:
      "Bring your laptop, chargers, any preferred development tools, and enthusiasm. Comfortable clothing is recommended for the long working hours.",
  },
  {
    question: "Will there be meals provided during the Streamathon?",
    answer: "Yes. Meals, snacks, and drinks will be available during all times of the contest.",
  },
  {
    question: "What is the difference between both application tracks?",
    answer:
      "The university students track is for university students across Saudi Arabia from all regions, while the developer track is for graduates or employees in the industry.",
  },
  {
    question: "Where will the Streamathon take place?",
    answer: "It will take place at KFUPM, Building 68.",
  },
  {
    question: "What technologies should I be using?",
    answer:
      "You are free to use any technology stack or framework, as long as your solution uses Stream's API.",
  },
  {
    question: "Who can join the developer track?",
    answer:
      "Anyone who is not a university student and is older than 18 years old with passion for coding is welcome to apply.",
  },
  {
    question: "Can I join if I am not a KFUPM student?",
    answer: "Students from all universities across all cities of Saudi Arabia are welcome to participate.",
  },
  {
    question: "Will travel or transportation expenses be covered?",
    answer:
      "No, travel and transportation expenses are not covered. Students can seek sponsorship from their universities, and others can seek sponsorship from other entities or self-cover their trip.",
  },
  {
    question: "What are the team requirements?",
    answer: "Teams must contain 4-5 members, and all members should be either all male or all female.",
  },
  {
    question: "Is the prize pool for each track or split between the tracks?",
    answer: "The prize pool is split between both the university and developer tracks.",
  },
  {
    question: "What should my solution be related to?",
    answer: "Any business model or fintech idea that utilizes Stream's API is a valid solution.",
  },
  {
    question: "Where can I read more about Stream and Replit?",
    answer: (
      <>
        You can visit {" "}
        <a href="https://streampay.sa" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Stream&apos;s website</a>,{" "}
        <a href="https://docs.streampay.sa" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Stream&apos;s API documentation</a>,{" "}
        and {" "}
        <a href="https://replit.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Replit&apos;s website</a>. You can also apply using the {" "}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfreh5bIeGLaOlCDle6uecHngN1W54-jY4rBi69MizvsbpkWw/viewform" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">official registration form</a>.
      </>
    ),
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
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <h2 className="section-heading text-3xl sm:text-[40px] lg:text-[44px] font-medium text-gold">
              FAQs
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
