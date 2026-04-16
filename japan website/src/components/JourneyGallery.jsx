import { useEffect, useState } from 'react'

const journeyImages = [
  {
    src: '',
    alt: 'KNLE team with students in Japan',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776333027/WhatsApp_Image_2026-04-16_at_14.53.04_iptrzt.jpg',
    alt: 'KNLE students celebration banner in Japan',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776332934/WhatsApp_Image_2026-04-16_at_14.53.05_wcthnd.jpg',
    alt: 'KNLE group photo at Fukuoka airport',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776332939/WhatsApp_Image_2026-04-16_at_14.53.04_z22bcl.jpg',
    alt: 'KNLE welcome and arrival moment in Japan',
  },
]

export default function JourneyGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % journeyImages.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [])

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % journeyImages.length)
  }

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + journeyImages.length) % journeyImages.length)
  }

  return (
    <section className="py-20 bg-[#f7f5f2] animate-on-scroll">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8102E] mb-3">Journey Highlights</p>
            <h2 className="font-display text-4xl md:text-5xl font-black text-ink leading-tight">
              From Sri Lanka to Japan.
              <span className="block text-[#C8102E]">Real moments, real success.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="h-11 w-11 rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:border-[#C8102E] hover:text-[#C8102E]"
            >
              <svg className="mx-auto h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="h-11 w-11 rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:border-[#C8102E] hover:text-[#C8102E]"
            >
              <svg className="mx-auto h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {journeyImages.map((image) => (
              <div key={image.src} className="w-full shrink-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-[280px] w-full object-cover md:h-[430px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {journeyImages.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show image ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-8 bg-[#C8102E]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
