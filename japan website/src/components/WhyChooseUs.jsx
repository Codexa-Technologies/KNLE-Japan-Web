const reasons = [
  { num: '01', title: 'Proven Results', desc: 'Over 500 students successfully placed in Japan. Our track record speaks louder than any promise.' },
  { num: '02', title: 'Japan-Experienced Teachers', desc: 'Our instructors have lived, studied, and worked in Japan. Real experience, real insights.' },
  { num: '03', title: 'Flexible Class Schedules', desc: 'Morning, evening, and weekend batches. We work around your life, not the other way around.' },
  { num: '04', title: 'Transparent, Affordable Fees', desc: 'No hidden costs. Clear pricing from day one. Quality education that doesn\'t break the bank.' },
  { num: '05', title: 'Full Journey Support', desc: 'From your first class to landing in Japan — we are with you at every single step.' },
  { num: '06', title: 'Direct School Partnerships', desc: 'We have direct ties with Japanese language schools and universities for faster, smoother placement.' },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-ink py-24 overflow-hidden animate-on-scroll">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 animate-on-scroll">
          <div>
            <span className="inline-block text-[#C8102E] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Why Choose K N L E</span>
            <h2 className="font-display text-4xl lg:text-6xl font-black text-white leading-tight">
              Why Hundreds<br />
              Choose <span className="text-[#C8102E]">KNLE</span><br />
              Over Others.
            </h2>
          </div>
          <div className="lg:pb-0 text-center animate-on-scroll animate-delay-1 animate-slide-right">
            <p className="text-gray-400 text-lg leading-relaxed text-center">
              There are many institutes. But only one that treats your Japan dream as seriously as you do.
            </p>
            <div className="mt-8 flex gap-8">
              <div>
                <p className="font-display text-5xl font-black text-white">500<span className="text-[#C8102E]">+</span></p>
                <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">Students</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="font-display text-5xl font-black text-white">95<span className="text-[#C8102E]">%</span></p>
                <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">Visa Success</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="font-display text-5xl font-black text-white">5<span className="text-[#C8102E]">+</span></p>
                <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">Years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, index) => (
            <article
              key={r.num}
              className={`group rounded-[2rem] border border-white/10 bg-[#111111] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-on-scroll ${index % 3 === 1 ? 'animate-delay-1' : index % 3 === 2 ? 'animate-delay-2' : ''}`}
            >
              <span className="font-display text-6xl font-black text-[#C8102E] leading-none block mb-4">
                {r.num}
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-[#C8102E]">
                {r.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {r.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-white/10 animate-on-scroll animate-delay-2">
          <p className="font-display text-2xl font-bold text-white">
            Ready to start your Japan journey?
          </p>
          <a href="#contact" className="btn-red rounded-xl">
            Book Free Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
