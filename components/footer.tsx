import Image from "next/image"

function StreamLogo() {
  return (
    <Image
      src="/streamlogo.png"
      alt="Stream logo"
      width={1527}
      height={329}
      className="h-5 w-auto object-contain sm:h-6"
    />
  )
}

function ReplitLogo() {
  return (
    <Image
      src="/replit.png"
      alt="Replit logo"
      width={180}
      height={180}
      className="h-8 w-auto rounded-[3px] object-contain sm:h-10 lg:h-12"
    />
  )
}

function KFUPMLogo() {
  return (
    <Image
      src="/kfupm.png"
      alt="KFUPM logo"
      width={380}
      height={133}
      className="h-7 w-auto object-contain sm:h-8"
    />
  )
}

function ComputerClubLogo() {
  return (
    <Image
      src="/ccLogo.png"
      alt="Computer Club logo"
      width={180}
      height={60}
      className="h-8 w-auto object-contain sm:h-10 lg:h-12"
    />
  )
}

export function Footer() {
  return (
    <footer className="py-16 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Sponsor logos bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 mb-8">
          <StreamLogo />
          <div className="w-px h-4 bg-white/20" />
          <ReplitLogo />
          <div className="w-px h-4 bg-white/20" />
          <KFUPMLogo />
          <div className="w-px h-4 bg-white/20" />
          <ComputerClubLogo />
        </div>

        {/* Sponsored by line */}
        <p className="text-center text-white/40 text-sm mb-6">
          Sponsored by <span className="text-white/60">STREAM × REPLIT</span>
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-6" />

        {/* Copyright */}
        <p className="text-center text-white/30 text-sm">
          © 2026 STREAMATHON. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
