export function About() {
  return (
    <section id="about" data-scroll-section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <h2 className="section-heading text-3xl sm:text-[40px] lg:text-[44px] font-bold text-gold">
              THE CHALLENGE
            </h2>
            <div className="section-heading-line flex-1 h-px hidden sm:block" />
          </div>

          <p className="section-stagger text-lg sm:text-xl text-white/70 leading-relaxed mb-10 md:mb-12">
            Participants will develop innovative solutions, products, or tools in the
            fintech sector to build a smarter financial world — solving real challenges
            using Stream&apos;s APIs and Replit.
          </p>

          <div className="section-stagger border-t border-white/10 pt-6">
            <p className="text-sm text-white/40 mb-2 tracking-wide uppercase">
              Organized and supported by
            </p>
            <p className="text-lg text-white">
              <span className="text-gold">the Computer Club</span>
              {" "}and{" "}
              <span className="text-gold">the Student Fund at KFUPM</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
