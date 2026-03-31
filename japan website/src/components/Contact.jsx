import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', interest: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hi KNL Japanese Language College!\n\nName: ${form.name}\nPhone: ${form.phone}\nInterested in: ${form.interest}\n\n${form.message}`
    )
    window.open(`https://wa.me/94740667457?text=${msg}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[600px]">

          {/* Left — dark panel */}
          <div className="bg-ink px-8 lg:px-14 py-16 flex flex-col justify-between">
            <div>
              <span className="inline-block text-[#C8102E] text-xs font-semibold tracking-[0.3em] uppercase mb-6">Get In Touch</span>
              <h2 className="font-display text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                Start Your<br />
                Japan Journey<br />
                <span className="text-[#C8102E]">Today.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-10">
                Book a free consultation. No commitment, no pressure — just honest guidance on your path to Japan.
              </p>
            </div>

            <div className="space-y-6">
              <a href="tel:+94740667457" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#C8102E] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs tracking-widest uppercase">Call / WhatsApp</p>
                  <p className="text-white font-semibold group-hover:text-[#C8102E] transition-colors">+94 74 066 7457</p>
                </div>
              </a>

              <a href="https://wa.me/94740667457" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs tracking-widest uppercase">WhatsApp</p>
                  <p className="text-white font-semibold group-hover:text-[#25D366] transition-colors">Chat with us now</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs tracking-widest uppercase">Location</p>
                  <p className="text-white font-semibold">Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="px-8 lg:px-14 py-16 bg-stone">
            <h3 className="font-display text-2xl font-bold text-ink mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">Full Name</label>
                  <input
                    type="text" required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-sm text-ink placeholder-gray-300 focus:outline-none focus:border-[#C8102E] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">Phone Number</label>
                  <input
                    type="tel" required
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="+94 7X XXX XXXX"
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-sm text-ink placeholder-gray-300 focus:outline-none focus:border-[#C8102E] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">I'm Interested In</label>
                <select
                  value={form.interest}
                  onChange={e => setForm({ ...form, interest: e.target.value })}
                  className="w-full bg-white border border-gray-200 px-4 py-3 text-sm text-ink focus:outline-none focus:border-[#C8102E] transition-colors appearance-none"
                >
                  <option value="">Select a service...</option>
                  <option>Japanese Language Classes</option>
                  <option>Student Visa Processing</option>
                  <option>Documentation Support</option>
                  <option>Japan Job & Study Guidance</option>
                  <option>Full Package (All Services)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your Japan goals..."
                  className="w-full bg-white border border-gray-200 px-4 py-3 text-sm text-ink placeholder-gray-300 focus:outline-none focus:border-[#C8102E] transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-red w-full justify-center py-4">
                {sent ? '✓ Message Sent — We\'ll be in touch!' : 'Send via WhatsApp →'}
              </button>

              <p className="text-gray-400 text-xs text-center">
                Free consultation • No commitment required
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
