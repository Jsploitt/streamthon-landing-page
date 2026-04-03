import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Tracks } from "@/components/tracks"
import { Prizes } from "@/components/prizes"
import { Rules } from "@/components/rules"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { ScrollAnimationWrapper } from "@/components/scroll-animation-wrapper"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <ScrollAnimationWrapper>
        <Hero />
        <About />
        <Tracks />
        <Prizes />
        <Rules />
        <FAQ />
        <CTA />
        <Footer />
      </ScrollAnimationWrapper>
    </main>
  )
}
