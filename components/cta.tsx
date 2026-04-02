import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function CTA() {
  return (
    <section id="apply" className="py-32 golden-spotlight-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <ArrowUpRight className="w-12 h-12 text-gold" />
          </div>

          {/* Section title */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gold/30 hidden sm:block" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gold">
              REGISTRATION
            </h2>
            <div className="h-px w-16 bg-gold/30 hidden sm:block" />
          </div>

          {/* Main headline */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 text-balance">
            Shape the future of fintech in the Kingdom
          </h3>

          {/* Date */}
          <p className="text-xl text-white/70 mb-12">
            Hackathon Dates: <span className="text-gold font-medium">April 15-16, 2026</span>
          </p>

          {/* CTA Button */}
          <Link
            href="https://forms.google.com/streamthon2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-black px-10 py-4 text-lg font-medium hover:bg-gold/90 transition-colors"
            style={{ borderRadius: '2px' }}
          >
            Register Now
          </Link>
        </div>
      </div>
    </section>
  )
}
