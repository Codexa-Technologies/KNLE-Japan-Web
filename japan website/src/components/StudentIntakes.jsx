import { useState, useEffect, useRef } from 'react'

const intakeImages = [
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776788657/WhatsApp_Image_2026-04-21_at_21.31.46_kn6fmy.jpg',
    alt: 'Student certificate 1',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776788656/WhatsApp_Image_2026-04-21_at_21.31.45_gjawmm.jpg',
    alt: 'Student certificate 2',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776788656/WhatsApp_Image_2026-04-21_at_21.31.45_2_cswuqi.jpg',
    alt: 'Student certificate 3',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776788655/WhatsApp_Image_2026-04-21_at_21.31.45_1_giiyya.jpg',
    alt: 'Student certificate 4',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776788655/WhatsApp_Image_2026-04-21_at_21.31.44_ukg8ng.jpg',
    alt: 'Student certificate 5',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776788654/WhatsApp_Image_2026-04-21_at_21.31.44_2_wtel9w.jpg',
    alt: 'Student certificate 6',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776788654/WhatsApp_Image_2026-04-21_at_21.31.44_1_bagoyt.jpg',
    alt: 'Student certificate 7',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776788654/WhatsApp_Image_2026-04-21_at_21.31.43_n4monl.jpg',
    alt: 'Student certificate 8',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776788653/WhatsApp_Image_2026-04-21_at_21.31.43_2_m4gcl1.jpg',
    alt: 'Student certificate 9',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776788653/WhatsApp_Image_2026-04-21_at_21.31.43_1_vpsg0c.jpg',
    alt: 'Student certificate 10',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776788652/WhatsApp_Image_2026-04-21_at_21.31.42_t7969g.jpg',
    alt: 'Student certificate 11',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776788652/WhatsApp_Image_2026-04-21_at_21.31.42_1_cuwfsh.jpg',
    alt: 'Student certificate 12',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776788651/WhatsApp_Image_2026-04-21_at_21.31.41_bmijc3.jpg',
    alt: 'Student certificate 13',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776788651/WhatsApp_Image_2026-04-21_at_21.31.41_1_dtu16r.jpg',
    alt: 'Student certificate 14',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776788651/WhatsApp_Image_2026-04-21_at_21.31.40_2_fzwxvg.jpg',
    alt: 'Student certificate 15',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776788650/WhatsApp_Image_2026-04-21_at_21.31.39_vzjrfg.jpg',
    alt: 'Student certificate 16',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776788650/WhatsApp_Image_2026-04-21_at_21.31.38_1_zzejmk.jpg',
    alt: 'Student certificate 17',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776788650/WhatsApp_Image_2026-04-21_at_21.31.36_komigy.jpg',
    alt: 'Student certificate 18',
  },
  {
    src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776788650/WhatsApp_Image_2026-04-21_at_21.31.38_pwhh7l.jpg',
    alt: 'Student certificate 19',
  },
]

const IMAGES_PER_SLIDE = 4

export default function StudentIntakes() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const autoplayRef = useRef(null)
  const sectionRef = useRef(null)

  const totalSlides = Math.ceil(intakeImages.length / IMAGES_PER_SLIDE)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isHovered) return

    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 4000)

    return () => clearInterval(autoplayRef.current)
  }, [isHovered, totalSlides])

  const goToSlide = (index) => {
    setCurrentIndex(index % totalSlides)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const startIndex = currentIndex * IMAGES_PER_SLIDE
  const visibleImages = intakeImages.slice(startIndex, startIndex + IMAGES_PER_SLIDE)

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-stone overflow-hidden scroll-mt-[120px]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="tag">Student Success</span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-ink leading-tight mt-3 mb-4">
            Student Intake<br />
            <span className="text-[#C8102E]">Certificates &amp; Achievements</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Meet our 2026 April batch of successful students who have completed their visa processing and are now studying in Japan.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="animate-on-scroll"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Images Grid */}
          <div className="relative mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {visibleImages.map((image, idx) => (
                <div
                  key={startIndex + idx}
                  className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-[400px] overflow-hidden bg-gray-200">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 z-10 w-12 h-12 rounded-full bg-[#C8102E] hover:bg-[#a00d24] text-white items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 z-10 w-12 h-12 rounded-full bg-[#C8102E] hover:bg-[#a00d24] text-white items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-3">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? 'bg-[#C8102E] w-10 h-3'
                    : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
