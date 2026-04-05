import Link from "next/link"

export function CTA() {
  return (
    <section
      id="apply"
      data-scroll-section
      className="relative py-32 overflow-hidden bg-transparent"
    >
      {/* Custom Keyframes for Animations */}
      <style>{`
        @keyframes drift-1 {
          0% { background-position: 0 0; }
          100% { background-position: 400px 400px; }
        }
        @keyframes drift-2 {
          0% { background-position: 0 0; }
          100% { background-position: -500px 500px; }
        }
        @keyframes drift-3 {
          0% { background-position: 0 0; }
          100% { background-position: 600px -600px; }
        }
        @keyframes pulse-opacity {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>

      {/* Dramatic Lighting Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[120%] bg-[#3356f6]/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[50%] h-[50%] bg-gold/10 blur-[100px] rounded-full" />
      </div>

      {/* Performance-friendly Moving Starlight */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100 mix-blend-screen" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}>
        {/* Layer 1: Dense, tiny stars */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.8) 1px, transparent 1px), radial-gradient(circle at 75px 125px, rgba(255,255,255,0.8) 1px, transparent 1px), radial-gradient(circle at 135px 65px, rgba(255,255,255,0.8) 1px, transparent 1px), radial-gradient(circle at 185px 185px, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '200px 200px',
            animation: 'drift-1 50s linear infinite, pulse-opacity 4s ease-in-out infinite'
          }}
        />
        {/* Layer 2: Medium stars, some gold */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 50px 150px, rgba(255,255,255,1) 1.5px, transparent 1.5px), radial-gradient(circle at 150px 50px, rgba(255,255,255,1) 1.5px, transparent 1.5px), radial-gradient(circle at 220px 240px, #f4c461 1.5px, transparent 1.5px)',
            backgroundSize: '250px 250px',
            animation: 'drift-2 70s linear infinite, pulse-opacity 3s ease-in-out infinite 1s'
          }}
        />
        {/* Layer 3: Larger, sparse stars */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 100px 100px, rgba(255,255,255,1) 2px, transparent 2px), radial-gradient(circle at 275px 80px, #f4c461 2px, transparent 2px)',
            backgroundSize: '300px 300px',
            animation: 'drift-3 90s linear infinite, pulse-opacity 5s ease-in-out infinite 2.5s'
          }}
        />
      </div>

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
