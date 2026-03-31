export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-12 gap-10">

          {/* Brand — wide column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#C8102E] flex items-center justify-center font-display font-black text-xl">K</div>
              <div>
                <p className="font-display font-bold text-lg leading-none">KNL Japanese Language College</p>
                <p className="text-gray-500 text-xs tracking-widest uppercase mt-0.5">K N L E Japanese Language College</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
              Sri Lanka's trusted institute for Japanese language education and student visa guidance. We've helped 500+ students build their lives in Japan.
            </p>
            <a href="tel:+94740667457" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#C8102E] transition-colors">
              <span className="text-[#C8102E]">→</span> +94 74 066 7457
            </a>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-5">Quick Links</p>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Why Choose Us', 'Testimonials', 'Contact'].map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(/ /g, '-')}`}
                    className="text-gray-400 text-sm hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-5">Our Services</p>
            <ul className="space-y-3">
              {[
                'Japanese Language Classes',
                'Student Visa Processing',
                'Documentation Support',
                'Japan Job & Study Guidance',
              ].map(s => (
                <li key={s}>
                  <a href="#services" className="text-gray-400 text-sm hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>

            {/* Social */}
            <div className="mt-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { label: 'FB', href: '#', title: 'Facebook' },
                  { label: 'IG', href: '#', title: 'Instagram' },
                  { label: 'YT', href: '#', title: 'YouTube' },
                  { label: 'WA', href: 'https://wa.me/94740667457', title: 'WhatsApp' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.title}
                    className="w-9 h-9 border border-white/10 flex items-center justify-center text-gray-500 text-xs font-bold hover:border-[#C8102E] hover:text-[#C8102E] transition-all"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} KNL Japanese Language College. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs tracking-widest uppercase">
            Sri Lanka → Japan
          </p>
        </div>
      </div>

    </footer>
  )
}
