import Link from "next/link"

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center golden-spotlight pt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Pixel robot icon */}
          <div className="mb-8">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold">
              <rect x="8" y="8" width="8" height="8" fill="currentColor"/>
              <rect x="32" y="8" width="8" height="8" fill="currentColor"/>
              <rect x="8" y="16" width="32" height="8" fill="currentColor"/>
              <rect x="16" y="24" width="16" height="8" fill="currentColor"/>
              <rect x="8" y="32" width="8" height="8" fill="currentColor"/>
              <rect x="32" y="32" width="8" height="8" fill="currentColor"/>
            </svg>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[78px] font-bold text-white tracking-tight leading-none mb-6">
            STREAMTHON
          </h1>

          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-gold mb-8">
            AI Applications in Fintech Hackathon
          </p>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-white/70 max-w-xl mb-12 leading-relaxed">
            Build innovative solutions using Stream APIs and Replit, powered by AI. Sponsored by STREAM × REPLIT. Organized and supported by the Computer Club and the Student Fund at KFUPM.
          </p>

          {/* CTA Button */}
          <Link
            href="#apply"
            className="inline-block bg-gold text-black px-8 py-4 text-lg font-medium hover:bg-gold/90 transition-colors"
            style={{ borderRadius: '2px' }}
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-sm">Scroll</span>
        <div className="w-px h-8 bg-white/20" />
      </div>
    </section>
  )
}
