const rules = [
  "All participants must register through the official registration form before the deadline.",
  "Teams can consist of 2–4 members. Solo participation is also allowed.",
  "All projects must utilize Stream APIs and be built using Replit.",
  "Projects must be original work created during the hackathon period.",
  "Participants retain ownership of their intellectual property.",
  "Final submissions must include a working demo and documentation.",
]

export function Rules() {
  return (
    <section id="rules" data-scroll-section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <h2 className="section-heading text-3xl sm:text-[40px] lg:text-[44px] font-bold text-gold">
              RULES
            </h2>
            <div className="section-heading-line flex-1 h-px hidden sm:block" />
          </div>

          <ol className="space-y-5">
            {rules.map((rule, index) => (
              <li
                key={index}
                className="rule-item flex items-start gap-5 border-t border-white/10 pt-5 first:border-t-0 first:pt-0"
              >
                <span className="text-gold font-bold text-xl min-w-[40px] leading-none mt-0.5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed">
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
