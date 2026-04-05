"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "When will the Streamathon take place?",
    answer:
      "It will take place on April 15 and 16, with both days being on-site.",
  },
  {
    question: "What should I bring to the Streamathon?",
    answer:
      "Bring your laptop, chargers, any preferred development tools, and enthusiasm! Comfortable clothing is recommended for the long working hours.",
  },
  {
    question: "Will there be meals provided during the Streamathon?",
    answer:
      "Of course, meals, snacks, and drinks will be available during all times of the contest.",
  },
  {
    question: "What is the difference between both application tracks?",
    answer:
      "The university students track is aimed towards university students across Saudi Arabia, from all regions. While the developer track is aimed towards graduates or employees in the industry.",
  },
  {
    question: "Where will the Streamathon take place?",
    answer: "It will take place in KFUPM, Building 68.",
  },
  {
    question: "What technologies should I be using?",
    answer:
      "You are free to use whatever technology stack or framework you want, as long as you use Stream's API and Replit eventually.",
  },
  {
    question: "Who can join the developer track?",
    answer:
      "Anyone that is not a university student and older than 18 years old with passion to coding is welcome to apply.",
  },
  {
    question: "Can I join if I am not a KFUPM student?",
    answer:
      "Students from all universities across all cities of Saudi Arabia are welcome to participate.",
  },
  {
    question: "Will travel or transportation expenses be covered?",
    answer:
      "No, travel or transportation expenses are not covered in the competition. In case you are a student, you can seek sponsorship from your university. Otherwise, you can seek sponsorship from other entities or self-cover your trip.",
  },
  {
    question: "What are the team requirements?",
    answer:
      "Team members should contain 4 - 5 members that are all male or all female.",
  },
  {
    question:
      "Is the prize pool for each track or is it split between the tracks?",
    answer:
      "The prize pool is split between both university and developers tracks.",
  },
  {
    question: "What should my work's solution be related to?",
    answer:
      "Any business model or a fintech idea that utilizes Stream's API and Replit is a valid solution.",
  },
  {
    question: "Where can I read more about Stream and Replit?",
    answer:
      "You can check Stream's website here, the API documentation here, and Replit's website here.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      data-scroll-section
      className="pt-12 pb-16 md:pt-16 md:pb-24 bg-black"
    >
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
                    style={{
                      color: openIndex === index ? "#f4c461" : undefined,
                    }}
                  >
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus
                      className="w-5 h-5 text-gold flex-shrink-0"
                      strokeWidth={1.5}
                    />
                  ) : (
                    <Plus
                      className="w-5 h-5 text-white/40 group-hover:text-gold flex-shrink-0 transition-colors duration-200"
                      strokeWidth={1.5}
                    />
                  )}
                </button>

                {/* Smooth height via CSS grid trick */}
                <div
                  className={`accordion-body${openIndex === index ? " open" : ""}`}
                >
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
  );
}
