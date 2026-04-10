import { useState } from 'react'

const services = [
  'Japanese Language Classes',
  'Student Visa Processing',
  'Documentation Support',
  'Japan Job & Study Guidance',
  'Full Package (All Services)',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim() || !form.service.trim()) {
      setError('Please fill in all required fields.')
      setSent(false)
      return
    }

    const message = `📩 New Inquiry - KNL Website\n\n👤 Full Name: ${form.name}\n📞 Phone: ${form.phone}\n🎯 Service: ${form.service}\n\n💬 Message:\n${form.message || 'N/A'}`
    const url = `https://wa.me/94740667457?text=${encodeURIComponent(message)}`

    window.open(url, '_blank')
    setForm({ name: '', phone: '', service: '', message: '' })
    setError('')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-stone overflow-hidden scroll-mt-[120px] animate-on-scroll">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">

          {/* Left image block */}
          <div className="relative animate-on-scroll animate-slide-left">
            <div className="relative h-[500px] lg:h-full min-h-[500px]">
              <img
                src="https://res.cloudinary.com/dcdt4tfgs/image/upload/v1775794112/sophie-keen-iYjerlfwBhA-unsplash_h2yfug.jpg"
                alt="Japan city night"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
            </div>
          </div>

          {/* Right content block */}
          <div className="bg-white px-8 lg:px-14 py-14 flex flex-col justify-center animate-on-scroll animate-delay-1 animate-slide-right">
            <span className="tag">Contact Us</span>
            <h2 className="font-display text-4xl lg:text-5xl font-black text-ink leading-tight mb-6">
              Ready to start your<br />
              <span className="text-[#C8102E]">Japan journey?</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">Full Name *</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="mt-3 w-full rounded-[1.5rem] border border-gray-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">Phone Number *</span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+94 7X XXX XXXX"
                    className="mt-3 w-full rounded-[1.5rem] border border-gray-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">Service *</span>
                <div className="relative mt-3">
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full rounded-[1.5rem] border border-gray-200 bg-white px-4 py-3 pr-12 text-sm text-ink outline-none transition focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 appearance-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">Message</span>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your Japan goals..."
                  className="mt-3 w-full rounded-[1.5rem] border border-gray-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 resize-none"
                />
              </label>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-[1.5rem] bg-[#C8102E] px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-[#a00d24]"
              >
                {sent ? 'Message sent successfully!' : 'Send via WhatsApp →'}
              </button>

              <p className="text-center text-xs text-gray-500">
                Free consultation • No commitment required
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

