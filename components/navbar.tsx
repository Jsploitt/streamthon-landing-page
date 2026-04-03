"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#problems", label: "Tracks" },
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
    <div className="flex items-center gap-1.5">
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="13" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M16 6L16 26M10 12L22 12M10 20L22 20" stroke="white" strokeWidth="1.5"/>
      </svg>
      <span className="text-white font-medium text-sm">KFUPM</span>
    </div>
  )
}

function ComputerClubLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="12" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M8 20H16M12 16V20" stroke="white" strokeWidth="1.5"/>
      </svg>
      <span className="text-white font-medium text-xs hidden lg:block">Computer Club</span>
    </div>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gold/15 bg-black/55 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left — sponsor logos */}
          <div className="flex items-center gap-4 lg:gap-6">
            <StreamLogo />
            <div className="h-5 w-px bg-white/20" />
            <ReplitLogo />
          </div>

          {/* Center — nav links (desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/65 hover:text-gold text-sm font-normal transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right — org logos + CTA */}
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="hidden md:flex items-center gap-4">
              <KFUPMLogo />
              <ComputerClubLogo />
            </div>

            <Link
              href="#apply"
              className="hidden sm:block bg-gold text-black px-5 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(244,196,97,0.35),0_12px_24px_rgba(244,196,97,0.2)]"
              style={{ borderRadius: "2px" }}
            >
              Apply Now
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-white/10 bg-black/70 backdrop-blur-xl">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-gold text-base font-normal transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#apply"
                onClick={() => setIsOpen(false)}
                className="bg-gold text-black px-5 py-3 text-sm font-medium text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(244,196,97,0.35),0_12px_24px_rgba(244,196,97,0.2)] mt-2"
                style={{ borderRadius: "2px" }}
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
