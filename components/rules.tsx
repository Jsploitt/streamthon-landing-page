const rules = [
  "Teams must contain 4 - 5 members to participate.",
  "The teams should be able to attend in-person as transportation is not supported.",
  "Team members should be all male or all female.",
  "Projects must be developed during the hackathon only. Any proof of previous coding on a prototype before the hackathon will lead to a disqualification immediately.",
  "Pre-existing libraries and frameworks are allowed to be used.",
  "The solution must utilize Stream's API in any possible way.",
  "The prototype should be functional and a documented GitHub repo along a presentation should be submitted at the end of the contest.",
  "Teams retain full ownership of their projects.",
];

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
  );
}
