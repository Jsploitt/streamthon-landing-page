export function Tracks() {
  return (
    <section id="problems" data-scroll-section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-10 md:mb-12">
          <h2 className="section-heading text-3xl sm:text-[40px] lg:text-[44px] font-medium text-gold">
            APPLICATION TRACKS
          </h2>
          <div className="section-heading-line flex-1 h-px hidden sm:block" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <div className="track-card-left rounded-lg border border-white/10 bg-white/[0.01] p-6 md:p-7 transition-colors duration-300 hover:border-gold/40">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-[56px] lg:text-[72px] font-medium text-gold leading-none">
                01
              </span>
              <div className="section-heading-line flex-1 h-px self-center" />
            </div>
            <h3 className="text-base font-medium text-white/50 mb-3 tracking-widest uppercase">
              University Students Track
            </h3>
            <p className="text-lg sm:text-xl text-white leading-relaxed">
              Open to university students from all regions and universities across
              Saudi Arabia.
            </p>
          </div>

          <div className="track-card-right rounded-lg border border-white/10 bg-white/[0.01] p-6 md:p-7 transition-colors duration-300 hover:border-gold/40">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-[56px] lg:text-[72px] font-medium text-gold leading-none">
                02
              </span>
              <div className="section-heading-line flex-1 h-px self-center" />
            </div>
            <h3 className="text-base font-medium text-white/50 mb-3 tracking-widest uppercase">
              Developer Track
            </h3>
            <p className="text-lg sm:text-xl text-white leading-relaxed">
              Open to anyone older than 18 who is not currently a university
              student, including graduates and industry employees.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
