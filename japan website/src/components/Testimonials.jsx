const testimonials = [
  {
    name: 'Kasun Perera',
    role: 'Now studying in Tokyo',
    initials: 'KP',
    color: '#C8102E',
    quote: 'KNL didn\'t just teach me Japanese — they handled everything. My visa, my documents, my school placement. I landed in Tokyo with zero stress.',
  },
  {
    name: 'Nimasha Silva',
    role: 'Language school, Osaka',
    initials: 'NS',
    color: '#2d6a4f',
    quote: 'I passed JLPT N4 in 6 months. The teachers here actually care. They push you, they support you. I couldn\'t have done it without KNL.',
  },
  {
    name: 'Tharindu Bandara',
    role: 'Working in Kyoto',
    initials: 'TB',
    color: '#1a1a2e',
    quote: 'The visa process felt impossible until KNL took over. They knew exactly what was needed. My visa was approved first try.',
  },
  {
    name: 'Dilini Jayawardena',
    role: 'University student, Nagoya',
    initials: 'DJ',
    color: '#7b2d8b',
    quote: 'From the first consultation to arriving in Japan, KNL was there. Professional, honest, and genuinely invested in my success.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-stone">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <span className="tag">Student Stories</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display text-4xl lg:text-5xl font-black text-ink leading-tight">
              Real Students.<br />
              <span className="text-[#C8102E]">Real Results.</span>
            </h2>
            <div className="flex items-center gap-3 md:pb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500 text-sm">4.9 / 5 from 200+ students</span>
            </div>
          </div>
        </div>

        {/* Testimonials grid — asymmetric */}
        <div className="grid md:grid-cols-2 gap-px bg-gray-200">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`bg-white p-8 lg:p-10 ${i === 0 ? 'md:row-span-1' : ''}`}>
              {/* Quote mark */}
              <div className="font-display text-7xl leading-none text-gray-100 mb-4 select-none">"</div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 -mt-6">
                {t.quote}
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div
                  className="w-12 h-12 flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-ink text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs tracking-wide">{t.role}</p>
                </div>
                <div className="ml-auto">
                  <svg className="w-6 h-6 text-gray-200" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
