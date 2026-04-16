import { useEffect, useState } from 'react'

const reviews = [
  {
    name: 'AMILA DASUN',
    school: 'kitakyushu school',
    initials: 'KP',
    color: '#C8102E',
    image: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776332049/WhatsApp_Image_2026-04-16_at_14.53.01_wdldrz.jpg',
    quote: 'KNLE didn\'t just teach me Japanese they handled everything. My visa, my documents, my school placement. I landed in Tokyo with zero stress.',
  },
  {
    name: 'CHATHUNI DEWMINI',
    school: 'Fukuoka school',
    initials: 'NS',
    color: '#2d6a4f',
    image: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776332134/WhatsApp_Image_2026-04-16_at_14.53.01_qun0sc.jpg',
    quote: 'I passed JLPT N4 in 6 months. The teachers here actually care. They push you, they support you. I couldn\'t have done it without KNLE.',
  },
  {
    name: 'AMANDI THATHSARANI',
    school: 'osaka school',
    initials: 'TB',
    color: '#1a1a2e',
    image: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776332209/WhatsApp_Image_2026-04-16_at_14.53.02_suwfd8.jpg',
    quote: 'The visa process felt impossible until KNLE took over. They knew exactly what was needed. My visa was approved first try.',
  },
  {
    name: 'RASHINI DIYANA',
    school: 'sendai school',
    initials: 'DJ',
    color: '#7b2d8b',
    image: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776332260/WhatsApp_Image_2026-04-16_at_14.53.02_a72cxa.jpg',
    quote: 'From the first consultation to arriving in Japan, KNLE was there. Professional, honest, and genuinely invested in my success.',
  },
   {
    name: 'PATHUM DILSHAN',
    school: 'tokyo school',
    initials: 'DJ',
    color: '#7b2d8b',
    image: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776332359/WhatsApp_Image_2026-04-16_at_14.53.03_hxulgf.jpg',
    quote: 'I started from zero Japanese. With KNLE guidance and daily practice, I gained confidence, passed my interviews, and joined my Tokyo school smoothly.',
  },
   {
    name: 'RAVINDI SANJULA',
    school: 'nagoya college',
    initials: 'DJ',
    color: '#7b2d8b',
    image: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776332410/WhatsApp_Image_2026-04-16_at_14.53.04_vvg9uj.jpg',
    quote: 'KNLE made the visa and documentation process simple for me. Every step was clearly explained, and I arrived in Nagoya without confusion or stress.',
  },
]

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(() => (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 2))

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth < 768 ? 1 : 2)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, reviews.length - cardsPerView)

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex))
  }, [maxIndex])

  const scrollReviews = (direction) => {
    setCurrentIndex((prev) => {
      if (direction > 0) return Math.min(prev + 1, maxIndex)
      return Math.max(prev - 1, 0)
    })
  }

  return (
    <section id="reviews" className="py-24 bg-[#f7f5f2] animate-on-scroll">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 animate-on-scroll">
          <div className="max-w-2xl">
            <span className="tag">Student Stories</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-ink leading-tight">
              Real students.<br />
              <span className="text-[#C8102E]">Real stories.</span>
            </h2>
          </div>
        </div>

        {/* Review cards */}
        <div className="relative">
          <button
            type="button"
            onClick={() => scrollReviews(-1)}
            aria-label="Previous reviews"
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 z-20 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f7f5f2] bg-[#f7f5f2] text-gray-700 shadow-none transition-all duration-300 hover:border-[#C8102E] hover:text-[#C8102E] disabled:cursor-not-allowed disabled:opacity-40 md:-left-2"
          >
            <svg className="mx-auto h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="overflow-hidden bg-[#f7f5f2]">
            <div
              className="flex -mx-3 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
            >
              {reviews.map((t, index) => (
                <article
                  key={t.name}
                  style={{ flex: `0 0 ${100 / cardsPerView}%` }}
                  className={`px-3 bg-[#f7f5f2] ${index % 2 === 1 ? 'animate-delay-1' : ''}`}
                >
                  <div className="group relative h-full overflow-hidden rounded-[2rem] border border-gray-200 bg-[#f7f5f2] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-on-scroll">
                    <div className="absolute -right-6 top-6 h-24 w-24 rounded-full bg-[#C8102E]/10 blur-3xl opacity-70" />
                    <div className="relative z-10">
                      <div className="mb-2 -mt-2 text-6xl text-[#C8102E] font-display leading-none">“</div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        {t.quote}
                      </p>
                      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                        <div className="h-14 w-14 overflow-hidden rounded-3xl ring-2 ring-white shadow-md">
                          <img
                            src={t.image}
                            alt={t.name}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-ink">{t.name}</p>
                          <p className="text-gray-500 text-xs tracking-[0.2em] uppercase">{t.school}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => scrollReviews(1)}
            aria-label="Next reviews"
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 z-20 h-12 w-12 translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f7f5f2] bg-[#f7f5f2] text-gray-700 shadow-none transition-all duration-300 hover:border-[#C8102E] hover:text-[#C8102E] disabled:cursor-not-allowed disabled:opacity-40 md:-right-2"
          >
            <svg className="mx-auto h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
