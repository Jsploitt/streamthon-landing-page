export function About() {
  return (
    <section id="about" data-scroll-section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <h2 className="section-heading text-3xl sm:text-[40px] lg:text-[44px] font-medium text-gold">
                THE BRIEF
              </h2>
              <div className="section-heading-line flex-1 h-px hidden sm:block" />
            </div>

            <p className="section-stagger text-lg sm:text-xl text-white/70 leading-relaxed mb-10 md:mb-12">
              Streamathon is an in-person hackathon where teams build a
              functional prototype during the event only. You can use any stack,
              framework, or library, but your solution must be built using{" "}
              <a
                href="https://replit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Replit
              </a>{" "}
              and{" "}
              <a
                href="https://getstream.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                Stream&apos;s API
              </a>{" "}
              to address a problem and monetize the solution.
            </p>

            <div className="section-stagger border-t border-white/10 pt-6">
              <p className="text-sm text-white/40 mb-2 tracking-wide uppercase">
                Event Details
              </p>
              <p className="text-lg text-white mb-2">
                <span className="text-gold">Date:</span> April 15-16 (both days
                on-site)
              </p>
              <p className="text-lg text-white mb-2">
                <span className="text-gold">Location:</span> KFUPM, Building 68
              </p>
              <p className="text-lg text-white mb-2">
                <span className="text-gold">Organized by:</span> Computer Club
                and Student Fund at KFUPM
              </p>
              <p className="text-lg text-white">
                <span className="text-gold">Sponsored by:</span>{" "}
                <a
                  href="https://getstream.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  Stream
                </a>
                {" & "}
                <a
                  href="https://replit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  Replit
                </a>
              </p>
            </div>
          </div>

          {/* Spline 3D Embed */}
          <div className="w-full h-[400px] lg:h-[600px] relative rounded-lg overflow-hidden pointer-events-none">
            {/* Increased offset to push the watermark completely out of view */}
            <iframe
              src="https://my.spline.design/pixeltextsetcopycopy-2FyNgWGtAsu6qENePHcwBnMX-JUI/"
              frameBorder="0"
              loading="lazy"
              className="absolute top-0 left-0 w-full h-[calc(100%+80px)] pointer-events-auto"
              title="Spline 3D Animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
