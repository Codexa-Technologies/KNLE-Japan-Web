const languageRequirements = [
  {
    badge: 'N5',
    title: 'JLPT N5',
    description: 'Basic Japanese proficiency accepted',
  },
  {
    badge: 'N4',
    title: 'JLPT N4',
    description: 'Elementary Japanese proficiency accepted',
  },
  {
    badge: 'NAT',
    title: 'NAT-TEST',
    description: 'N5 or N4 level certification accepted',
  },
]

const basicRequirements = [
  'Age: Below 25 years old',
  'Education: Completed 12 years of formal education',
  'Financial: Proof of sufficient funds for study period',
]

export default function VisaEligibility() {
  return (
    <section className="py-24 bg-white animate-on-scroll">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-[2rem] border border-gray-200 bg-[#f7f5f2] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] animate-on-scroll">
            <span className="tag">Student Visa</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-ink leading-tight mb-5">
              Student Visa Eligibility
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Check if you meet the requirements for a Japan student visa application.
            </p>

            <div className="rounded-2xl border border-white/80 bg-white p-6 md:p-7">
              <p className="text-xs tracking-[0.2em] uppercase text-[#C8102E] font-semibold mb-4">
                Student Visa
              </p>
              <p className="text-gray-700 font-medium mb-6">
                For Japanese language schools and universities in Kyushu
              </p>

              <p className="text-sm tracking-[0.18em] uppercase text-gray-500 font-semibold mb-4">
                Basic Requirements
              </p>
              <div className="space-y-3">
                {basicRequirements.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#C8102E] text-white">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 animate-on-scroll animate-delay-1">
            <div className="rounded-[2rem] border border-gray-200 bg-[#0a0a0a] p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
              <p className="text-xs tracking-[0.2em] uppercase text-white/60 font-semibold mb-4">
                Japanese Language Requirements
              </p>

              <div className="space-y-3">
                {languageRequirements.map((item) => (
                  <div
                    key={item.badge}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C8102E] font-black tracking-wide text-sm">
                      {item.badge}
                    </span>
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="text-white/70 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-gray-200 bg-white p-7 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
              <p className="text-gray-700 leading-relaxed mb-5">
                Not sure if you qualify? Contact us for a free eligibility assessment.
                We will review your documents and guide you through the process.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 btn-red rounded-xl">
                Free Eligibility Check
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
