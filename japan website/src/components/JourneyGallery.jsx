import { useEffect, useRef } from 'react'

const collageImage = {
  src: 'https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776784494/photo-collage.png_shgq8p.png',
  alt: 'KNLE Journey Collage',
}

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
        <div className="flex flex-col items-center justify-center text-center gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C8102E] mb-3">Journey Highlights</p>
            <h2 className="font-display text-4xl md:text-5xl font-black text-ink leading-tight">
              From Sri Lanka to Japan.
              <span className="block text-[#C8102E]">Real moments, real success.</span>
            </h2>
          </div>
        </div>

        {/* Collage Image */}
        <div className="flex justify-center animate-on-scroll">
          <div className="relative overflow-hidden rounded-[1rem] shadow-[0_20px_60px_rgba(0,0,0,0.13)] max-w-2xl w-full">
            <img
              src={collageImage.src}
              alt={collageImage.alt}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
