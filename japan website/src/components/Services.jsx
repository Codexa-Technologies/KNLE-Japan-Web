const services = [
  {
    num: '01',
    title: 'Japanese Language Classes',
    desc: 'Structured JLPT N5 to N2 curriculum taught by experienced instructors. Morning, evening, and weekend batches. Small class sizes for focused learning.',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
    tags: ['JLPT N5–N2', 'Small Batches', 'Certified Teachers'],
  },
  {
    num: '02',
    title: 'Student Visa Processing',
    desc: 'Complete student visa application management with a 95%+ success rate. We handle the paperwork, you focus on your future.',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
    tags: ['95% Success Rate', 'Fast Processing', 'Expert Guidance'],
  },
  {
    num: '03',
    title: 'Documentation Support',
    desc: 'Professional preparation of all required documents — certificates, translations, financial statements, and official paperwork done right.',
    img: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80',
    tags: ['Translations', 'Verification', 'Official Docs'],
  },
  {
    num: '04',
    title: 'Japan Job & Study Guidance',
    desc: 'Curated guidance on top Japanese universities, language schools, and part-time job opportunities. We match you with the right institution.',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    tags: ['University Placement', 'Job Matching', 'School Selection'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-gray-100">
          <div>
            <span className="tag">What We Offer</span>
            <h2 className="font-display text-4xl lg:text-5xl font-black text-ink leading-tight">
              Everything You Need<br />
              <span className="text-[#C8102E]">To Get to Japan.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-xs text-sm leading-relaxed md:text-right">
            Four core services, one goal — getting you to Japan with confidence.
          </p>
        </div>

        {/* Services list */}
        <div className="space-y-0">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`group grid md:grid-cols-[80px_1fr_280px] gap-0 border-b border-gray-100 py-8 hover:bg-stone transition-colors duration-300 -mx-6 px-6 cursor-default`}
            >
              {/* Number */}
              <div className="hidden md:flex items-start pt-1">
                <span className="font-display text-5xl font-black text-gray-100 group-hover:text-[#C8102E]/20 transition-colors leading-none">
                  {s.num}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center pr-8">
                <h3 className="font-display text-2xl font-bold text-ink mb-3 group-hover:text-[#C8102E] transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-lg">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-semibold tracking-widest uppercase bg-gray-100 text-gray-500 px-3 py-1 group-hover:bg-[#C8102E]/10 group-hover:text-[#C8102E] transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="hidden md:block overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-36 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
