export function Tracks() {
  return (
    <section id="problems" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section title */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-gold">
            TARGET AUDIENCE
          </h2>
          <div className="flex-1 h-px bg-gold/30 hidden sm:block" />
        </div>

        {/* Two tracks */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Track 1 */}
          <div>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-5xl lg:text-6xl font-light text-gold italic">01</span>
              <div className="flex-1 h-px bg-gold/30" />
            </div>
            <h3 className="text-lg font-medium text-white mb-3">Track 1</h3>
            <p className="text-xl text-white/70 leading-relaxed">
              Undergraduate students enrolled in Saudi universities
            </p>
          </div>

          {/* Track 2 */}
          <div>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-5xl lg:text-6xl font-light text-gold italic">02</span>
              <div className="flex-1 h-px bg-gold/30" />
            </div>
            <h3 className="text-lg font-medium text-white mb-3">Track 2</h3>
            <p className="text-xl text-white/70 leading-relaxed">
              Developers, tech enthusiasts, and AI enthusiasts from across Saudi Arabia
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
