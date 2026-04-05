"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#problems", label: "Tracks" },
  { href: "#prizes", label: "Prizes" },
  { href: "#rules", label: "Rules" },
  { href: "#faq", label: "FAQ" },
];

function StreamLogo() {
  return (
    <Image
      src="/streamlogo.png"
      alt="Stream logo"
      width={1527}
      height={329}
      priority
      className="h-5 w-auto object-contain sm:h-6"
    />
  );
}

function ReplitLogo() {
  return (
    <Image
      src="/replit.png"
      alt="Replit logo"
      width={180}
      height={180}
      className="h-12 w-auto object-contain sm:h-14"
    />
  );
}

function KFUPMLogo() {
  return (
    <Image
      src="/kfupm.png"
      alt="KFUPM logo"
      width={380}
      height={133}
      className="h-10 w-auto object-contain sm:h-12"
    />
  );
}

function ComputerClubLogo() {
  return (
    <Image
      src="/ccLogo.png"
      alt="Computer Club logo"
      width={180}
      height={60}
      className="h-[60px] w-auto object-contain sm:h-[72px]"
    />
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gold/15 bg-black/55 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
      {/* Main bar — constrained width */}
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
              className="hidden sm:block bg-gold text-black px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(244,196,97,0.35),0_12px_24px_rgba(244,196,97,0.2)]"
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
      </div>

      {/* Mobile menu — full viewport width, outside the constrained container */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl">
          <div className="px-6 py-6 flex flex-col gap-5">
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
              className="bg-gold text-black px-5 py-3 text-sm font-medium rounded-lg text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(244,196,97,0.35),0_12px_24px_rgba(244,196,97,0.2)] mt-2"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
