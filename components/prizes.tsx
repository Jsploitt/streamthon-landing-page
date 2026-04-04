import { Trophy, TrophyIcon } from "lucide-react"

export function Prizes() {
  return (
    <section id="prizes" data-scroll-section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: 3D Spline Diamond */}
          <div className="w-full h-[400px] lg:h-[600px] relative rounded-lg overflow-hidden pointer-events-none order-2 lg:order-1">
            <iframe 
              src="https://my.spline.design/diamond3dcopycopy-CuXx3Ck0roCICQQBGjtNtONn-L8K/" 
              frameBorder="0" 
              className="absolute top-0 left-0 w-full h-[calc(100%+80px)] pointer-events-auto"
              title="Spline 3D Diamond Animation"
            />
          </div>

          {/* Right Side: Prizes Content */}
          <div className="max-w-xl ml-auto text-right w-full order-1 lg:order-2">
            <div className="flex items-center justify-end gap-4 mb-10 md:mb-12">
              <div className="section-heading-line flex-1 h-px hidden sm:block" />
              <h2 className="section-heading text-3xl sm:text-[40px] lg:text-[44px] font-bold text-gold">
                PRIZES
              </h2>
              <TrophyIcon className="w-7 h-7 text-gold flex-shrink-0" />
            </div>

            <div className="space-y-6">
              <div className="section-stagger group rounded-[2px] border border-white/10 bg-white/[0.01] p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.03] hover:border-gold/30 hover:shadow-[0_0_40px_-10px_rgba(255,215,0,0.15)] relative overflow-hidden opacity-100 z-20">
                <div className="absolute inset-0 translate-x-full bg-gradient-to-l from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                
                <div className="relative z-10">
                  <p className="text-[13px] text-white/60 mb-2 tracking-widest uppercase">
                    Cash Prizes
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    SAR <span className="text-gold">50,000</span>
                  </p>
                  <p className="text-base text-white/70 mt-1">
                    Distributed across winning teams
                  </p>
                </div>
              </div>

              <div className="section-stagger group rounded-[2px] border border-white/10 bg-white/[0.01] p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.03] hover:border-gold/30 hover:shadow-[0_0_40px_-10px_rgba(255,215,0,0.15)] relative overflow-hidden opacity-100 z-20">
                <div className="absolute inset-0 translate-x-full bg-gradient-to-l from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                
                <div className="relative z-10">
                  <p className="text-[13px] text-white/60 mb-2 tracking-widest uppercase">
                    Platform Benefits
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    Replit <span className="text-gold">Subscriptions</span>
                  </p>
                  <p className="text-base text-white/70 mt-1">
                    Free subscriptions provided by Replit for the winners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
