import { Trophy } from "lucide-react"

export function Prizes() {
  return (
    <section id="prizes" data-scroll-section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-10 md:mb-12">
            <Trophy className="w-7 h-7 text-gold flex-shrink-0" strokeWidth={1.5} />
            <h2 className="section-heading text-3xl sm:text-[40px] lg:text-[44px] font-bold text-gold">
              PRIZES
            </h2>
            <div className="section-heading-line flex-1 h-px hidden sm:block" />
          </div>

          <div className="space-y-6">
            <div className="section-stagger rounded-[2px] border border-white/10 bg-white/[0.01] p-6 md:p-7">
              <p className="text-[13px] text-white/40 mb-2 tracking-widest uppercase">
                Cash Prizes
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-white">
                SAR <span className="text-gold">50,000</span>
              </p>
              <p className="text-base text-white/50 mt-1">
                Distributed across winning teams
              </p>
            </div>

            <div className="section-stagger rounded-[2px] border border-white/10 bg-white/[0.01] p-6 md:p-7">
              <p className="text-[13px] text-white/40 mb-2 tracking-widest uppercase">
                Platform Benefits
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-white">
                Replit <span className="text-gold">Subscriptions</span>
              </p>
              <p className="text-base text-white/50 mt-1">
                Free subscriptions provided by Replit for the winners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
