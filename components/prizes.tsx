import { Trophy } from "lucide-react"

export function Prizes() {
  return (
    <section id="prizes" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            {/* Section title with icon */}
            <div className="flex items-center gap-4 mb-12">
              <Trophy className="w-8 h-8 text-gold" />
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-gold">
                PRIZES
              </h2>
              <div className="flex-1 h-px bg-gold/30 hidden sm:block" />
            </div>

            {/* Prize items */}
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-gold mt-3 flex-shrink-0" />
                <p className="text-xl text-white leading-relaxed">
                  Cash prizes totaling <span className="text-gold font-medium">SAR 50,000</span>
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-gold mt-3 flex-shrink-0" />
                <p className="text-xl text-white leading-relaxed">
                  Free subscriptions provided by Replit for the winners
                </p>
              </li>
            </ul>
          </div>

          {/* Right - Retro computer illustration */}
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              {/* Stylized retro computer */}
              <div className="w-72 h-56 bg-gradient-to-b from-gray-300 to-gray-400 rounded-sm p-4">
                {/* Screen */}
                <div className="w-full h-40 bg-black rounded-sm flex items-center justify-center overflow-hidden">
                  <div className="text-green-400 font-mono text-sm opacity-80">
                    <div>&gt; STREAMTHON 2026</div>
                    <div>&gt; Loading prizes...</div>
                    <div>&gt; SAR 50,000 ready_</div>
                  </div>
                </div>
                {/* Base details */}
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="w-16 h-1 bg-gray-500 rounded-full" />
                </div>
              </div>
              {/* Stand */}
              <div className="w-20 h-8 bg-gray-400 mx-auto" />
              <div className="w-32 h-2 bg-gray-500 mx-auto rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
