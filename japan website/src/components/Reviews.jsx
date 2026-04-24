import { useEffect, useState } from 'react'

const reviews = [
  {
    name: 'AMILA DASUN',
    school: 'kitakyushu school',
    initials: 'KP',
    color: '#C8102E',
    image: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776332049/WhatsApp_Image_2026-04-16_at_14.53.01_wdldrz.jpg',
    quote: 'KNLE didn’t just teach me Japanese — they handled everything, from visa and documents to my Kitakyushu placement. After studies, I moved to Tokyo with zero stress.',
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
  const [cardsPerView, setCardsPerView] = useState(() => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth < 768) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsPerView(1)
      else if (window.innerWidth < 1024) setCardsPerView(2)
      else setCardsPerView(3)
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

        {/* Review cards — scroller untouched, only card design updated */}
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
                  className={`px-3 ${index % 2 === 1 ? 'animate-delay-1' : ''}`}
                >
                  {/* ── CARD ── */}
                  <div className="group relative h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-400 hover:-translate-y-1 animate-on-scroll">

                    <div className="p-7 flex flex-col h-full">



                      {/* Quote */}
                      <div className="relative flex-1 mb-6">
                        <svg className="absolute -top-1 -left-1 w-8 h-8 text-rose-100 fill-rose-100" viewBox="0 0 32 32">
                          <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.5c0-1.38 1.12-2.5 2.5-2.5V8zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.5c0-1.38 1.12-2.5 2.5-2.5V8z" />
                        </svg>
                        <p className="relative text-gray-600 text-[0.95rem] leading-relaxed pl-3">
                          {t.quote}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gray-100 mb-5" />

                      {/* Author row */}
                      <div className="flex items-center gap-3">
                        {/* Avatar with verified badge */}
                        <div className="relative flex-shrink-0">
                          <div className="w-12 h-12 rounded-2xl overflow-hidden ring-2 ring-rose-100">
                            <img
                              src={t.image}
                              alt={t.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        <div className="min-w-0">
                          <p className="font-bold text-gray-900 text-sm truncate">{t.name}</p>
                          <p className="text-[#C8102E] text-xs font-semibold tracking-widest uppercase mt-0.5 truncate">{t.school}</p>
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
