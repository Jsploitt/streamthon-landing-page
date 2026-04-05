import { TrophyIcon } from "lucide-react";

export function Prizes() {
  return (
    <section
      id="prizes"
      data-scroll-section
      className="py-16 md:py-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl ml-auto text-right w-full">
          <div className="flex items-center justify-end gap-4 mb-10 md:mb-12">
            <div className="section-heading-line flex-1 h-px hidden sm:block" />
            <h2 className="section-heading text-3xl sm:text-[40px] lg:text-[44px] font-bold text-gold">
              PRIZES
            </h2>
            <TrophyIcon className="w-7 h-7 text-gold flex-shrink-0" />
          </div>

          <div className="space-y-6">
            {/* Cash Prizes */}
            <div className="group rounded-[2px] border border-white/10 bg-white/[0.01] p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.03] hover:border-gold/30 hover:shadow-[0_0_40px_-10px_rgba(255,215,0,0.15)] relative overflow-hidden">
              <div className="absolute inset-0 translate-x-full bg-gradient-to-l from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
              <div className="relative z-10">
                <p className="text-[13px] text-white/60 mb-2 tracking-widest uppercase">
                  Cash Prizes
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  SAR <span className="text-gold">40,000</span>
                </p>
                <p className="text-base text-white/70 mt-1">
                  Split between the university and developer tracks
                </p>
              </div>
            </div>

            {/* Replit Subscriptions */}
            <div className="group rounded-[2px] border border-white/10 bg-white/[0.01] p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.03] hover:border-gold/30 hover:shadow-[0_0_40px_-10px_rgba(255,215,0,0.15)] relative overflow-hidden">
              <div className="absolute inset-0 translate-x-full bg-gradient-to-l from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
              <div className="relative z-10">
                <p className="text-[13px] text-white/60 mb-2 tracking-widest uppercase">
                  Platform Benefits
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  Replit <span className="text-gold">Subscriptions</span>
                </p>
                <p className="text-base text-white/70 mt-1">
                  Provided to everyone accepted into Streamathon
                </p>
              </div>
            </div>

            {/* Mini Contests */}
            <div className="group rounded-[2px] border border-white/10 bg-white/[0.01] p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.03] hover:border-gold/30 hover:shadow-[0_0_40px_-10px_rgba(255,215,0,0.15)] relative overflow-hidden">
              <div className="absolute inset-0 translate-x-full bg-gradient-to-l from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
              <div className="relative z-10">
                <p className="text-[13px] text-white/60 mb-2 tracking-widest uppercase">
                  During The Event
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-white">
                  Mini Contests <span className="text-gold">& More</span>
                </p>
                <p className="text-base text-white/70 mt-1">
                  Extra prizes, coupons, and merchandise up for grabs throughout
                  Streamathon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
