const journeyImages = [
  
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
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {journeyImages.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] animate-on-scroll ${
                index === 1 ? 'animate-delay-2' : index === 2 ? 'animate-delay-3' : 'animate-delay-1'
              }`}
            >
              <div className="h-[240px] md:h-[300px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
