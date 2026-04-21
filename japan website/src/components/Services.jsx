const services = [
  {
    num: '01',
    title: 'Japanese Language Classes',
    desc: 'JLPT N5 to N2 classes with experienced instructors, flexible schedules, and small cohorts for better progress.',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80',
    tags: ['JLPT N5–N2', 'Small Batches', 'Certified Teachers'],
  },
  {
    num: '02',
    title: 'Student Visa Processing',
    desc: 'Complete student visa management from document checks to submission, so you can move to Japan with confidence.',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80',
    tags: ['100% Success Rate', 'Fast Processing', 'Expert Guidance'],
  },
  {
    num: '03',
    title: 'Documentation Support',
    desc: 'Professional document preparation, translations, and verification for a smooth application journey.',
    img: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=900&q=80',
    tags: ['Translations', 'Verification', 'Official Docs'],
  },
  {
    num: '04',
    title: 'Japan Job & Study Guidance',
    desc: 'Customized guidance for language schools, university placement, and part-time job options in Japan.',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80',
    tags: ['University Placement', 'Job Matching', 'School Selection'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#f7f5f2] animate-on-scroll">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 pb-10 border-b border-gray-200 animate-on-scroll">
          <div className="max-w-2xl">
            <span className="tag">What We Offer</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-ink leading-tight">
              Everything You Need<br />
              <span className="text-[#C8102E]">To Reach Japan.</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-md text-sm leading-relaxed text-center animate-on-scroll animate-delay-1 animate-slide-right">
            Polite, modern support for every step of your Japan journey study, visa, documents, and work guidance.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.num}
              className={`group rounded-[2rem] border border-white shadow-[0_20px_80px_rgba(0,0,0,0.08)] bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-on-scroll ${index % 3 === 1 ? 'animate-delay-1' : index % 3 === 2 ? 'animate-delay-2' : ''}`}
            >
              <div className="relative overflow-hidden h-64 sm:h-72 lg:h-80">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>

              <div className="p-8 md:p-10">
                <h3 className="font-display text-2xl md:text-3xl font-black text-ink mb-4 transition-colors duration-300 group-hover:text-[#C8102E]">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6 text-sm md:text-base">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gray-600 transition-colors duration-300 group-hover:border-[#C8102E] group-hover:text-[#C8102E]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
