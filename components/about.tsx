export function About() {
  return (
    <section id="about" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Section title */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-gold">
              THE CHALLENGE
            </h2>
            <div className="flex-1 h-px bg-gold/30 hidden sm:block" />
          </div>

          {/* Body text */}
          <p className="text-xl sm:text-2xl text-white/70 leading-relaxed mb-16">
            Participants will develop innovative solutions, products, or tools in the fintech sector to build a smarter financial world, solving real challenges using Stream&apos;s APIs and Replit.
          </p>

          {/* Organized by */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-sm text-white/40 mb-2">Organized and supported by</p>
            <p className="text-lg text-white">
              <span className="text-blue">the Computer Club</span> and{" "}
              <span className="text-blue">the Student Fund at KFUPM</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
