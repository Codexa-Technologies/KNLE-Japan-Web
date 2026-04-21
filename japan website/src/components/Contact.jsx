import { useState, useRef } from 'react'

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
  const formRef = useRef(null)

  const validate = () => {
    if (!form.name.trim() || !form.phone.trim() || !form.service.trim()) {
      setError('Please fill in all required fields.')
      setSent(false)
      return false
    }
    return true
  }

  const handleWhatsApp = (e) => {
    e.preventDefault()
    if (!validate()) return
    const message = `New Appointment - KNLE Website\n\n Full Name: ${form.name}\n Phone: ${form.phone}\n Service: ${form.service}\n\n Message:\n${form.message || 'N/A'}`
    window.open(`https://wa.me/94750326062?text=${encodeURIComponent(message)}`, '_blank')
    setForm({ name: '', phone: '', service: '', message: '' })
    setError('')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }



  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="py-24 bg-stone overflow-hidden scroll-mt-[120px] animate-on-scroll">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">

          {/* Left image block */}
          <div className="relative animate-on-scroll animate-slide-left">
            <div className="relative h-[500px] lg:h-full min-h-[500px]">
              <img
                src="https://res.cloudinary.com/dcdt4tfgs/image/upload/v1776783935/WhatsApp_Image_2026-04-21_at_20.33.33_bh6sts.jpg"
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
              {sent && <p className="text-sm text-green-600 font-medium">Message sent successfully!</p>}

              <div className="grid grid-cols-1 gap-3">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center gap-2 rounded-[1.5rem] bg-[#C8102E] px-4 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#a00d24]"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </button>
              </div>

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

