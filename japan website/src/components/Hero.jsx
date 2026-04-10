import { useEffect, useRef } from 'react'
import Marquee from './Marquee'

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
          src="https://res.cloudinary.com/dcdt4tfgs/image/upload/v1775794245/wei-AeYjrcT5Jhc-unsplash_kk8eqj.jpg"
          alt="Tokyo Japan"
          className="w-full h-full object-cover"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      
      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full pt-36 pb-20">
          <div className="max-w-3xl">

            {/* Headline */}
            <h1 className="font-display text-white leading-[1.05] mb-6">
              <span className="block text-5xl md:text-7xl lg:text-8xl font-black">Your Japan</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl font-black text-[#C8102E]">Journey</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl font-black">Starts Here.</span>
            </h1>

            {/* Sub */}
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10">
              Expert Japanese Language Training & Student Visa Support helping Sri Lankan students successfully live, study, and build careers in Japan.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16">
              <a href="#contact" className="btn-red rounded-full">
                Apply Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#about" className="btn-outline-white rounded-full">
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
                <div key={s.label} className="text-center">
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

      {/* Marquee strip */}
      <div className="relative z-10">
        <Marquee />
      </div>
    </section>
  )
}
