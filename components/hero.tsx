import Link from "next/link";
import Image from "next/image";
import FloatingLines from "./FloatingLines";

const HERO_LINES_GRADIENT = ["#f4c461", "#000000", "#f4c461"];

// Hero entrance animations are CSS-driven (globals.css .hero-* classes).
// No GSAP dependency — guarantees content is always visible above the fold.

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <FloatingLines
          linesGradient={HERO_LINES_GRADIENT}
          animationSpeed={1}
          interactive
          bendRadius={3}
          bendStrength={1.3}
          mouseDamping={0.12}
          parallax
          parallaxStrength={0.4}
        />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/70 via-black/50 to-transparent" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 md:py-24 lg:py-0">
        <div className="max-w-4xl">
          {/* Sponsor logos */}
          <div className="hero-icon mb-10 flex items-center gap-4">
            <Image
              src="/streamlogo.png"
              alt="Stream"
              width={1527}
              height={329}
              priority
              className="h-7 w-auto object-contain sm:h-8"
            />
            <div className="h-6 w-px bg-white/30" />
            <Image
              src="/replit.png"
              alt="Replit"
              width={180}
              height={180}
              priority
              className="h-16 w-auto object-contain sm:h-20"
            />
          </div>

          {/* Main headline — cinematic film-title scale */}
          <h1 className="hero-title text-[42px] sm:text-[60px] lg:text-[78px] font-bold text-white tracking-tight leading-none mb-6">
            Streamathon
          </h1>

          {/* Subtitle in gold, light weight */}
          <p className="hero-subtitle text-xl sm:text-2xl lg:text-[30px] font-light text-gold mb-8 leading-snug">
            Fintech Hackathon | April 15-16
          </p>

          {/* Tagline */}
          <p className="hero-tagline text-base sm:text-lg text-white/70 max-w-lg mb-12 leading-relaxed">
            Build any business or fintech solution using Stream&apos;s API.
            Streamathon is on-site at KFUPM (Building 68), with Replit
            subscriptions for all accepted participants. Organized by the
            Computer Club and the Student Fund at KFUPM.
          </p>

          {/* CTA */}
          <Link
            href="#apply"
            className="hero-cta hero-apply-pulse inline-block bg-gold text-black px-8 py-4 text-base font-medium rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(244,196,97,0.35),0_14px_28px_rgba(244,196,97,0.22)]"
          >
            Apply to Streamathon
          </Link>
        </div>
      </div>
    </section>
  );
}
