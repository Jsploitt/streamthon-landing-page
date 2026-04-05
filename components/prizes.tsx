import { TrophyIcon } from "lucide-react"

export function Prizes() {
  return (
    <section id="prizes" data-scroll-section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Centered heading */}
        <div className="flex items-center justify-center gap-3 mb-10 md:mb-12">
          <h2 className="section-heading text-3xl sm:text-[40px] lg:text-[44px] font-medium text-gold">
            PRIZES
          </h2>
          <TrophyIcon className="w-7 h-7 text-gold flex-shrink-0" />
        </div>

        {/* Prize cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <div className="section-stagger group rounded-lg border border-white/10 bg-white/[0.01] p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.03] hover:border-gold/30 hover:shadow-[0_0_40px_-10px_rgba(255,215,0,0.15)]">
            <p className="text-[13px] text-white/60 mb-2 tracking-widest uppercase">
              Cash Prizes
            </p>
            <p className="text-2xl sm:text-3xl font-medium text-white mb-1">
              SAR <span className="text-gold">40,000</span>
            </p>
            <p className="text-base text-white/70">
              Split between the university and developer tracks
            </p>
          </div>

          <div className="section-stagger group rounded-lg border border-white/10 bg-white/[0.01] p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.03] hover:border-gold/30 hover:shadow-[0_0_40px_-10px_rgba(255,215,0,0.15)]">
            <p className="text-[13px] text-white/60 mb-2 tracking-widest uppercase">
              Platform Benefits
            </p>
            <p className="text-2xl sm:text-3xl font-medium text-white mb-1">
              Replit <span className="text-gold">Subscriptions</span>
            </p>
            <p className="text-base text-white/70">
              Provided to everyone accepted into Streamathon
            </p>
          </div>

          <div className="section-stagger group rounded-lg border border-white/10 bg-white/[0.01] p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.03] hover:border-gold/30 hover:shadow-[0_0_40px_-10px_rgba(255,215,0,0.15)]">
            <p className="text-[13px] text-white/60 mb-2 tracking-widest uppercase">
              During The Event
            </p>
            <p className="text-2xl sm:text-3xl font-medium text-white mb-1">
              Mini Contests <span className="text-gold">&amp; More</span>
            </p>
            <p className="text-base text-white/70">
              Extra prizes, coupons, and merchandise up for grabs throughout Streamathon
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
