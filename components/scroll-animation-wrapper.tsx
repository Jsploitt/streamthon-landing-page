"use client"

import type { ReactNode } from "react"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const triggerDefaults = {
  start: "top 80%",
  toggleActions: "play none none none",
}

export function ScrollAnimationWrapper({ children }: { children: ReactNode }) {
  const scopeRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const root = scopeRef.current
      if (!root) return

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return
      }

      const selectAll = (selector: string, within: ParentNode = root) =>
        Array.from(within.querySelectorAll<HTMLElement>(selector))

      selectAll(".section-heading").forEach((heading) => {
        gsap.from(heading, {
          opacity: 0,
          x: -48,
          y: 20,
          duration: 0.85,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: heading,
            ...triggerDefaults,
          },
        })
      })

      selectAll(".section-heading-line").forEach((line) => {
        gsap.from(line, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.85,
          ease: "power2.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: line,
            ...triggerDefaults,
          },
        })
      })

      selectAll("section[data-scroll-section]").forEach((section) => {
        const staggerItems = selectAll(".section-stagger", section)
        if (!staggerItems.length) return

        gsap.from(staggerItems, {
          opacity: 0,
          y: 26,
          duration: 0.75,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: section,
            ...triggerDefaults,
          },
        })
      })

      selectAll(".track-card-left").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          x: -90,
          duration: 0.9,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: card,
            ...triggerDefaults,
          },
        })
      })

      selectAll(".track-card-right").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          x: 90,
          duration: 0.9,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: card,
            ...triggerDefaults,
          },
        })
      })

      const rulesSection = root.querySelector<HTMLElement>("#rules")
      if (rulesSection) {
        const ruleItems = selectAll(".rule-item", rulesSection)
        if (ruleItems.length) {
          gsap.from(ruleItems, {
            opacity: 0,
            y: 38,
            duration: 0.75,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: rulesSection,
              ...triggerDefaults,
            },
          })
        }
      }

      const faqSection = root.querySelector<HTMLElement>("#faq")
      if (faqSection) {
        const faqItems = selectAll(".faq-item", faqSection)
        if (faqItems.length) {
          gsap.from(faqItems, {
            opacity: 0,
            y: 22,
            duration: 0.72,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: faqSection,
              ...triggerDefaults,
            },
          })
        }
      }

      const ctaContent = root.querySelector<HTMLElement>(".cta-content")
      if (ctaContent) {
        gsap.from(ctaContent, {
          opacity: 0,
          scale: 1.05,
          duration: 0.9,
          ease: "power2.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: ctaContent,
            ...triggerDefaults,
          },
        })
      }

      // Refresh after fonts/layout settle to fix miscalculated trigger positions
      const t = setTimeout(() => ScrollTrigger.refresh(), 250)
      return () => clearTimeout(t)
    },
    { scope: scopeRef }
  )

  return <div ref={scopeRef}>{children}</div>
}
