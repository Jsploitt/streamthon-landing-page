import Link from "next/link"

export function CTA() {
  return (
    <section
      id="apply"
      data-scroll-section
      className="relative py-32 overflow-hidden bg-transparent"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="cta-content text-center max-w-3xl mx-auto">
          {/* Event details badge */}
          <div className="inline-flex items-center bg-white/15 text-white px-5 py-2.5 rounded-lg text-sm sm:text-base font-medium tracking-wide mb-10">
            April 15-16, 2026&nbsp;&nbsp;·&nbsp;&nbsp;KFUPM Building 68&nbsp;&nbsp;·&nbsp;&nbsp;On-site only
          </div>

          {/* Headline */}
          <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-medium text-white leading-tight mb-10">
            Apply to
            <br />
            Streamathon 2026.
          </h2>

          {/* CTA button */}
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfreh5bIeGLaOlCDle6uecHngN1W54-jY4rBi69MizvsbpkWw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-black px-10 py-4 text-base font-medium rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.25)]"
          >
            Open Registration Form
          </Link>
        </div>
      </div>
    </section>
  )
}
