import { useEffect, useRef } from 'react'

const journeyImages = [
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776333027/WhatsApp_Image_2026-04-16_at_14.53.04_iptrzt.jpg',
    alt: 'KNLE students celebration banner in Japan',
    label: 'Celebration Day',
    rotate: '-rotate-2',
    delay: 'animate-delay-1',
    accent: 'from-rose-500/80 to-[#C8102E]/60',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776332934/WhatsApp_Image_2026-04-16_at_14.53.05_wcthnd.jpg',
    alt: 'KNLE group photo at Fukuoka airport',
    label: 'Fukuoka Airport',
    rotate: 'rotate-0 md:-translate-y-6',
    delay: 'animate-delay-2',
    accent: 'from-orange-500/80 to-rose-600/60',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776332939/WhatsApp_Image_2026-04-16_at_14.53.04_z22bcl.jpg',
    alt: 'KNLE welcome and arrival moment in Japan',
    label: 'Arrival in Japan',
    rotate: 'rotate-2',
    delay: 'animate-delay-3',
    accent: 'from-pink-500/80 to-[#C8102E]/60',
  },
]

export default function JourneyGallery() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.15 }
    )
    const els = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-[#f7f5f2] animate-on-scroll">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8102E] mb-3">Journey Highlights</p>
            <h2 className="font-display text-4xl md:text-5xl font-black text-ink leading-tight">
              From Sri Lanka to Japan.
              <span className="block text-[#C8102E]">Real moments, real success.</span>
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3 md:items-center">
          {journeyImages.map((image) => (
            <div
              key={image.src}
              className={`animate-on-scroll ${image.delay} ${image.rotate} transition-transform duration-700`}
            >
              {/* Card wrapper */}
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.13)]">

                {/* Image */}
                <div className="h-[300px] md:h-[360px] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
