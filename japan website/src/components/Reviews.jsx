const reviews = [
  {
    name: 'Kasun Perera',
    role: 'Now studying in Tokyo',
    initials: 'KP',
    color: '#C8102E',
    quote: 'KNLE didn\'t just teach me Japanese they handled everything. My visa, my documents, my school placement. I landed in Tokyo with zero stress.',
  },
  {
    name: 'Nimasha Silva',
    role: 'Language school, Osaka',
    initials: 'NS',
    color: '#2d6a4f',
    quote: 'I passed JLPT N4 in 6 months. The teachers here actually care. They push you, they support you. I couldn\'t have done it without KNLE.',
  },
  {
    name: 'Tharindu Bandara',
    role: 'Working in Kyoto',
    initials: 'TB',
    color: '#1a1a2e',
    quote: 'The visa process felt impossible until KNLE took over. They knew exactly what was needed. My visa was approved first try.',
  },
  {
    name: 'Dilini Jayawardena',
    role: 'University student, Nagoya',
    initials: 'DJ',
    color: '#7b2d8b',
    quote: 'From the first consultation to arriving in Japan, KNLE was there. Professional, honest, and genuinely invested in my success.',
  },
]

export default function Reviews() {
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
        <div className="grid gap-6 lg:grid-cols-2">
          {reviews.map((t, index) => (
            <article
              key={t.name}
              className={`group relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-8 shadow-[0_20px_70px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-on-scroll ${index % 2 === 1 ? 'animate-delay-1' : ''}`}
            >
              <div className="absolute -right-6 top-6 h-24 w-24 rounded-full bg-[#C8102E]/10 blur-3xl opacity-70" />
              <div className="relative z-10">
                <div className="mb-2 -mt-2 text-6xl text-[#C8102E] font-display leading-none">“</div>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-3xl text-lg font-black text-white"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{t.name}</p>
                    <p className="text-gray-500 text-xs tracking-[0.2em] uppercase">{t.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
