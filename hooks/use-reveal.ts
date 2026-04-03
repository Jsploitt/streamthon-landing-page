"use client"

import { useEffect, useRef } from "react"

interface RevealOptions {
  threshold?: number
  rootMargin?: string
}

/**
 * Progressive-enhancement scroll reveal.
 * Elements start VISIBLE by default (no CSS opacity:0).
 * Only after JS runs does the hook set initial animation state,
 * so if JS fails the content is always readable.
 *
 * Usage: add data-reveal (or data-reveal="left"|"right") to children.
 *        Optionally add data-delay="150" (ms) for stagger.
 */
export function useReveal(options: RevealOptions = {}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container || typeof IntersectionObserver === "undefined") return

    const items = Array.from(
      container.querySelectorAll<HTMLElement>("[data-reveal]")
    )
    if (!items.length) return

    // Set initial hidden state AFTER JS loads (progressive enhancement)
    items.forEach((el) => {
      const direction = el.getAttribute("data-reveal")
      const delayMs = el.getAttribute("data-delay") ?? "0"

      el.style.opacity = "0"
      el.style.transition = `opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)`
      el.style.transitionDelay = `${delayMs}ms`

      if (direction === "left") {
        el.style.transform = "translateX(-48px)"
      } else if (direction === "right") {
        el.style.transform = "translateX(48px)"
      } else {
        el.style.transform = "translateY(36px)"
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          el.style.opacity = "1"
          el.style.transform = "none"
          // Clean up delay after animation so it doesn't affect hover transitions
          el.addEventListener(
            "transitionend",
            () => {
              el.style.transitionDelay = ""
            },
            { once: true }
          )
          observer.unobserve(el)
        })
      },
      {
        threshold: options.threshold ?? 0.08,
        rootMargin: options.rootMargin ?? "0px 0px -8% 0px",
      }
    )

    items.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}
