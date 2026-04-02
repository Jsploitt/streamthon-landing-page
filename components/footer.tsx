function StreamLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col gap-[2px]">
        <div className="w-4 h-[1.5px] bg-white" />
        <div className="w-4 h-[1.5px] bg-white" />
        <div className="w-4 h-[1.5px] bg-white" />
      </div>
      <span className="text-white font-medium text-sm tracking-tight">stream</span>
    </div>
  )
}

function ReplitLogo() {
  return (
    <div className="flex items-center gap-1">
      <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 5.5C7 4.67157 7.67157 4 8.5 4H15.5C16.3284 4 17 4.67157 17 5.5V12H8.5C7.67157 12 7 11.3284 7 10.5V5.5Z" fill="#F26207"/>
        <path d="M17 12H25.5C26.3284 12 27 12.6716 27 13.5V18.5C27 19.3284 26.3284 20 25.5 20H17V12Z" fill="#F5B200"/>
        <path d="M7 21.5C7 20.6716 7.67157 20 8.5 20H17V26.5C17 27.3284 16.3284 28 15.5 28H8.5C7.67157 28 7 27.3284 7 26.5V21.5Z" fill="#0079F2"/>
      </svg>
      <span className="text-white font-medium text-sm">Replit</span>
    </div>
  )
}

function KFUPMLogo() {
  return (
    <div className="flex items-center gap-1">
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M16 6L16 26M10 12L22 12M10 20L22 20" stroke="white" strokeWidth="1.5"/>
      </svg>
      <span className="text-white font-medium text-sm">KFUPM</span>
    </div>
  )
}

function ComputerClubLogo() {
  return (
    <div className="flex items-center gap-1">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="12" rx="1" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M8 20H16M12 16V20" stroke="white" strokeWidth="1.5"/>
      </svg>
      <span className="text-white font-medium text-sm">Computer Club</span>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Sponsors bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
          <StreamLogo />
          <ReplitLogo />
          <KFUPMLogo />
          <ComputerClubLogo />
        </div>

        {/* Sponsored by */}
        <p className="text-center text-white/40 text-sm mb-8">
          Sponsored by <span className="text-white/60">STREAM × REPLIT</span>
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-8" />

        {/* Copyright */}
        <p className="text-center text-white/40 text-sm">
          © 2026 STREAMTHON. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
