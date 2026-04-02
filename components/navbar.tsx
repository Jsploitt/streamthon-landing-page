"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#problems", label: "Problems" },
  { href: "#prizes", label: "Prizes" },
  { href: "#rules", label: "Rules" },
  { href: "#faq", label: "FAQ" },
]

function StreamLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col gap-[3px]">
        <div className="w-5 h-[2px] bg-white" />
        <div className="w-5 h-[2px] bg-white" />
        <div className="w-5 h-[2px] bg-white" />
      </div>
      <span className="text-white font-medium text-lg tracking-tight">stream</span>
    </div>
  )
}

function ReplitLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 5.5C7 4.67157 7.67157 4 8.5 4H15.5C16.3284 4 17 4.67157 17 5.5V12H8.5C7.67157 12 7 11.3284 7 10.5V5.5Z" fill="#F26207"/>
        <path d="M17 12H25.5C26.3284 12 27 12.6716 27 13.5V18.5C27 19.3284 26.3284 20 25.5 20H17V12Z" fill="#F5B200"/>
        <path d="M7 21.5C7 20.6716 7.67157 20 8.5 20H17V26.5C17 27.3284 16.3284 28 15.5 28H8.5C7.67157 28 7 27.3284 7 26.5V21.5Z" fill="#0079F2"/>
      </svg>
      <span className="text-white font-medium text-lg">Replit</span>
    </div>
  )
}

function KFUPMLogo() {
  return (
    <div className="flex items-center gap-1">
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M16 6L16 26M10 12L22 12M10 20L22 20" stroke="white" strokeWidth="1.5"/>
      </svg>
      <span className="text-white font-medium text-sm">KFUPM</span>
    </div>
  )
}

function ComputerClubLogo() {
  return (
    <div className="flex items-center gap-1">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="12" rx="1" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M8 20H16M12 16V20" stroke="white" strokeWidth="1.5"/>
      </svg>
      <span className="text-white font-medium text-xs hidden lg:block">Computer Club</span>
    </div>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logos */}
          <div className="flex items-center gap-4 lg:gap-6">
            <StreamLogo />
            <div className="h-6 w-px bg-white/20" />
            <ReplitLogo />
          </div>

          {/* Center - Navigation (Desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white text-sm font-normal transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="hidden md:flex items-center gap-4">
              <KFUPMLogo />
              <ComputerClubLogo />
            </div>
            
            <Link
              href="#apply"
              className="hidden sm:block bg-gold text-black px-5 py-2 text-sm font-medium hover:bg-gold/90 transition-colors"
              style={{ borderRadius: '2px' }}
            >
              Apply Now
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white text-base font-normal transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#apply"
                onClick={() => setIsOpen(false)}
                className="bg-gold text-black px-5 py-2.5 text-sm font-medium text-center hover:bg-gold/90 transition-colors mt-2"
                style={{ borderRadius: '2px' }}
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
