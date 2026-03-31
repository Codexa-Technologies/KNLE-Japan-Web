export default function About() {
  return (
    <section id="about" className="py-24 bg-stone overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-0 items-stretch">

          {/* Image block */}
          <div className="relative">
            <div className="relative h-[500px] lg:h-full min-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&q=85"
                alt="Japanese Language Class"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay badge — overlaps onto image */}
              <div className="absolute bottom-8 -right-6 lg:-right-10 bg-[#C8102E] text-white p-6 w-44 z-10 shadow-2xl">
                <p className="font-display text-4xl font-black leading-none">95%</p>
                <p className="text-white/80 text-xs tracking-widest uppercase mt-1">Visa Success</p>
              </div>
              {/* Year badge */}
              <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-3">
                <p className="text-xs tracking-widest uppercase text-white/60">Established</p>
                <p className="font-display text-2xl font-bold">2019</p>
              </div>
            </div>
          </div>

          {/* Content block */}
          <div className="bg-white px-8 lg:px-14 py-14 flex flex-col justify-center">
            <span className="tag">About KNL</span>
            <h2 className="font-display text-4xl lg:text-5xl font-black text-ink leading-tight mb-6">
              We Don't Just Teach Japanese.<br />
              <span className="text-[#C8102E]">We Build Futures.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              KNL Japanese Language College was founded with one mission — to give Sri Lankan students a real, reliable path to Japan. Not just language lessons, but complete guidance from day one to landing in Japan.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our instructors have lived and studied in Japan. Our visa team knows every document, every requirement, every deadline. We've helped over 500 students make Japan their home.
            </p>

            {/* Feature list */}
            <div className="space-y-3 mb-10">
              {[
                'JLPT certified training from N5 to N2',
                'Direct partnerships with Japanese language schools',
                'End-to-end visa & documentation support',
                'Post-arrival support network in Japan',
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#C8102E] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-red self-start">
              Get Free Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
