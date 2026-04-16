import { useEffect, useRef } from 'react'

const requirements = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    label: 'Age',
    text: 'Below 25 years old',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-3.5 2M12 20l3.5-2" />
      </svg>
    ),
    label: 'Education',
    text: 'Completed 12 years of formal education (A/Levels or equivalent)',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    label: 'Japanese Language',
    text: 'JLPT N5 or N4 / NAT-TEST N5 or N4 level certification',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    label: 'Finances',
    text: 'Proof of sufficient funds to cover the full study period',
  },
]

const benefits = [
  {
    number: '01',
    title: 'High Success Rate',
    text: 'Thorough document preparation and attention to detail for maximum visa approval success.',
  },
  {
    number: '02',
    title: 'Clear & Transparent Process',
    text: 'No hidden fees. We explain every step of the application process clearly and honestly.',
  },
  {
    number: '03',
    title: 'Direct Kyushu School Network',
    text: 'Local presence in Fukuoka and Kitakyushu with direct connections to regional language schools.',
  },
]

export default function VisaEligibility() {
  const sectionRef = useRef(null)

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

  return (
    <section
      ref={sectionRef}
      id="eligibility"
      className="relative py-28 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#C8102E]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C8102E]/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-20 animate-on-scroll">
          <span className="tag">Student Visa</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-2 mb-4 leading-tight">
            Do You Meet the<br />
            <span className="text-[#C8102E]">Eligibility Requirements?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Check if you qualify for a Japan student visa — for language schools &amp; universities across Kyushu.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">

          {/* Requirements card */}
          <div className="animate-on-scroll bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#C8102E]/15 flex items-center justify-center text-[#C8102E]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-white tracking-tight">Basic Requirements</h3>
            </div>

            <div className="space-y-5">
              {requirements.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#C8102E]/30 hover:bg-[#C8102E]/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#C8102E]/10 flex items-center justify-center text-[#C8102E]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm mb-0.5">{item.label}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
                  </div>
                  <div className="ml-auto flex-shrink-0 w-6 h-6 rounded-full bg-[#C8102E]/10 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[#C8102E]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why choose us card */}
          <div className="animate-on-scroll animate-delay-1 flex flex-col gap-5">
            {benefits.map((item) => (
              <div
                key={item.number}
                className="group flex items-start gap-5 p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#C8102E]/40 hover:bg-[#C8102E]/5 transition-all duration-300 cursor-default"
              >
                <span className="flex-shrink-0 font-black text-4xl text-white/[0.06] group-hover:text-[#C8102E]/20 transition-colors duration-300 leading-none select-none">
                  {item.number}
                </span>
                <div>
                  <p className="text-white font-bold text-base mb-1">{item.title}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}

            {/* Free assessment accent card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#C8102E] to-[#7a0a1c] p-6 flex items-center gap-5">
              <div className="absolute right-0 top-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
              <div className="absolute right-8 bottom-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2" />
              <div className="relative flex-shrink-0 w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                </svg>
              </div>
              <div className="relative">
                <p className="text-white font-black text-lg leading-tight">Not sure if you qualify?</p>
                <p className="text-white/70 text-sm mt-1">Contact us for a free eligibility assessment</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div className="animate-on-scroll animate-delay-2 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 md:p-12">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-[#C8102E]/60 to-transparent" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                Ready to Apply?
              </h3>
              <p className="text-white/50 text-base max-w-md">
                Start your Japan study journey today. Contact us for a free consultation and we'll guide you every step of the way.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
              <a
                href="https://wa.me/94740667457"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#C8102E] hover:bg-[#a00d24] text-white px-7 py-4 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-[#C8102E]/20 hover:shadow-[#C8102E]/40 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
              <a
                href="mailto:knle.jp@gmail.com"
                className="inline-flex items-center gap-3 border border-white/15 hover:border-white/30 text-white/80 hover:text-white px-7 py-4 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
