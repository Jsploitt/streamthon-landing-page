export function Rules() {
  const rules = [
    "All participants must register through the official registration form before the deadline.",
    "Teams can consist of 2-4 members. Solo participation is also allowed.",
    "All projects must utilize Stream APIs and be built using Replit.",
    "Projects must be original work created during the hackathon period.",
    "Participants retain ownership of their intellectual property.",
    "Final submissions must include a working demo and documentation.",
  ]

  return (
    <section id="rules" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Section title */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-gold">
              RULES
            </h2>
            <div className="flex-1 h-px bg-gold/30 hidden sm:block" />
          </div>

          {/* Rules list */}
          <ol className="space-y-6">
            {rules.map((rule, index) => (
              <li key={index} className="flex items-start gap-6">
                <span className="text-gold font-light text-2xl min-w-[40px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg text-white/70 leading-relaxed pt-1">
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
