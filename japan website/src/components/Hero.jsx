import { useEffect, useRef } from 'react'

export default function Hero() {
  const counterRef = useRef(null)

  useEffect(() => {
    const els = counterRef.current?.querySelectorAll('[data-count]')
    els?.forEach(el => {
      const target = parseInt(el.dataset.count)
      let count = 0
      const step = Math.ceil(target / 60)
      const timer = setInterval(() => {
        count = Math.min(count + step, target)
        el.textContent = count + (el.dataset.suffix || '')
        if (count >= target) clearInterval(timer)
      }, 30)
    })
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      {/* Full bleed image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=90"
          alt="Tokyo Japan"
          className="w-full h-full object-cover"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Vertical text decoration */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-10">
        <div className="w-px h-16 bg-white/20" />
        <p className="text-white/30 text-[10px] tracking-[0.4em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          日本語学校
        </p>
        <div className="w-px h-16 bg-white/20" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full pt-28 pb-20">
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#C8102E]" />
              <span className="text-[#C8102E] text-xs font-semibold tracking-[0.3em] uppercase">
                Sri Lanka's #1 Japan Education Institute
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-white leading-[1.05] mb-6">
              <span className="block text-5xl md:text-7xl lg:text-8xl font-black">Your Japan</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl font-black text-[#C8102E]">Journey</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl font-black">Starts Here.</span>
            </h1>

            {/* Sub */}
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10">
              Japanese Language Classes & Student Visa Guidance — trusted by hundreds of Sri Lankan students who now live, study, and work in Japan.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16">
              <a href="#contact" className="btn-red">
                Apply Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#about" className="btn-outline-white">
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div ref={counterRef} className="flex flex-wrap gap-10">
              {[
                { count: 500, suffix: '+', label: 'Students Placed' },
                { count: 95, suffix: '%', label: 'Visa Success Rate' },
                { count: 5, suffix: '+', label: 'Years Experience' },
              ].map(s => (
                <div key={s.label}>
                  <p className="font-display text-4xl font-black text-white">
                    <span data-count={s.count} data-suffix={s.suffix}>0{s.suffix}</span>
                  </p>
                  <p className="text-white/40 text-xs tracking-widest uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="relative z-10 bg-[#C8102E]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center gap-6 md:gap-12">
          {['JLPT N5 — N2 Classes', 'Student Visa Processing', 'Documentation Support', 'Japan Job Guidance'].map((item, i) => (
            <div key={item} className="flex items-center gap-3">
              {i > 0 && <span className="hidden md:block w-px h-4 bg-white/30" />}
              <span className="text-white text-xs font-semibold tracking-widest uppercase">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
