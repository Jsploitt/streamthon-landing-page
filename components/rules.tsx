import type { ReactNode } from "react"

const rules: ReactNode[] = [
  <>Teams must contain <span className="text-white font-medium">4-5 members</span> to participate.</>,
  <>Teams must be able to attend <span className="text-white font-medium">in person</span>; transportation is not supported.</>,
  <>Team members must be <span className="text-white font-medium">all male or all female</span>.</>,
  <>Projects must be developed during the hackathon only. Any proof of prior coding on a prototype before the hackathon will result in immediate <span className="text-white font-medium">disqualification</span>.</>,
  <>Pre-existing libraries and frameworks are allowed.</>,
  <>The solution must utilize <span className="text-white font-medium">Stream&apos;s API</span> in any possible way.</>,
  <>The final prototype must be functional, and teams must submit a documented GitHub repository along with a presentation at the end of the contest.</>,
  <>Teams retain full ownership of their projects.</>,
]

export function Rules() {
  return (
    <section id="rules" data-scroll-section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <h2 className="section-heading text-3xl sm:text-[40px] lg:text-[44px] font-medium text-gold">
              RULES & ELIGIBILITY
            </h2>
            <div className="section-heading-line flex-1 h-px hidden sm:block" />
          </div>

          <ol className="space-y-5">
            {rules.map((rule, index) => (
              <li
                key={index}
                className="rule-item flex items-start gap-5 border-t border-white/10 pt-5 first:border-t-0 first:pt-0"
              >
                <span className="text-gold font-medium text-xl min-w-[40px] leading-none mt-0.5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
                  {rule}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
