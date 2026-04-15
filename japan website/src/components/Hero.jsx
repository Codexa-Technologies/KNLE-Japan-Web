import { useEffect, useRef } from 'react'
import Marquee from './Marquee'

const sakuraPetals = [
  { left: '4%', delay: '0s', duration: '13s', size: '16px' },
  { left: '12%', delay: '2.1s', duration: '15s', size: '12px' },
  { left: '20%', delay: '1.3s', duration: '14s', size: '18px' },
  { left: '29%', delay: '3.4s', duration: '16s', size: '13px' },
  { left: '38%', delay: '0.8s', duration: '12.8s', size: '15px' },
  { left: '46%', delay: '2.8s', duration: '15.8s', size: '11px' },
  { left: '55%', delay: '1.8s', duration: '13.6s', size: '17px' },
  { left: '64%', delay: '4s', duration: '16.2s', size: '14px' },
  { left: '73%', delay: '0.4s', duration: '12.5s', size: '12px' },
  { left: '82%', delay: '2.4s', duration: '14.7s', size: '16px' },
  { left: '90%', delay: '1.1s', duration: '15.4s', size: '13px' },
  { left: '96%', delay: '3.2s', duration: '13.9s', size: '18px' },
]

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

      {/* Sakura petals */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {sakuraPetals.map((petal, index) => (
          <span
            key={`${petal.left}-${index}`}
            className="sakura-flower"
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
              width: petal.size,
              height: petal.size,
            }}
          >
            <svg className="sakura-flower-svg" viewBox="0 0 100 100" aria-hidden="true">
              <ellipse className="sakura-flower-petal" cx="50" cy="24" rx="14" ry="23" />
              <ellipse className="sakura-flower-petal" cx="74" cy="41" rx="14" ry="23" transform="rotate(72 74 41)" />
              <ellipse className="sakura-flower-petal" cx="65" cy="70" rx="14" ry="23" transform="rotate(144 65 70)" />
              <ellipse className="sakura-flower-petal" cx="35" cy="70" rx="14" ry="23" transform="rotate(216 35 70)" />
              <ellipse className="sakura-flower-petal" cx="26" cy="41" rx="14" ry="23" transform="rotate(288 26 41)" />
              <circle className="sakura-flower-core" cx="50" cy="50" r="8" />
            </svg>
          </span>
        ))}
      </div>

      
      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full pt-36 pb-20">
          <div className="max-w-3xl">

            {/* Headline */}
            <h1 className="font-display text-white leading-[1.05] mb-6 animate-on-load animate-delay-1">
              <span className="block text-5xl md:text-7xl lg:text-8xl font-black">Your Japan</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl font-black text-[#C8102E]">Journey</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl font-black">Starts Here.</span>
            </h1>

            {/* Sub */}
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10 animate-on-load animate-delay-2">
              Expert Japanese Language Training & Student Visa Support helping Sri Lankan students successfully live, study, and build careers in Japan.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16 animate-on-load animate-delay-3">
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
            <div ref={counterRef} className="flex flex-wrap gap-10 animate-on-load animate-delay-4">
              {[
                { count: 500, suffix: '+', label: 'Students Placed' },
                { count: 100, suffix: '%', label: 'Visa Success Rate' },
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
