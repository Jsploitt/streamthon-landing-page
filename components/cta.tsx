import Link from "next/link"

export function CTA() {
  return (
    <section
      id="apply"
      data-scroll-section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 0% 60%, rgba(244, 196, 97, 0.1) 0%, transparent 55%), #000000",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="cta-content text-center max-w-3xl mx-auto">
          <p className="text-sm text-white/40 tracking-widest uppercase mb-8">
            Registration
          </p>

          <h2 className="section-heading text-[36px] sm:text-[48px] lg:text-[60px] font-bold text-white leading-tight mb-6">
            Apply to
            <br />
            Streamathon 2026.
          </h2>

          <div className="section-heading-line h-px w-full max-w-md mx-auto mb-8" />

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfreh5bIeGLaOlCDle6uecHngN1W54-jY4rBi69MizvsbpkWw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-black px-10 py-4 text-base font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(244,196,97,0.35),0_14px_30px_rgba(244,196,97,0.2)] mb-8"
            style={{ borderRadius: "2px" }}
          >
            Open Registration Form
          </Link>

          <p className="text-base text-white/40">
            April 15-16, 2026 | KFUPM Building 68 | On-site only
          </p>
        </div>
      </div>
    </section>
  )
}
