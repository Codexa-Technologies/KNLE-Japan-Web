export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-12 gap-10">

          {/* Brand — wide column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 overflow-hidden rounded-full bg-white">
                <img
                  src="https://res.cloudinary.com/dcdt4tfgs/image/upload/v1775712110/WhatsApp_Image_2026-04-09_at_10.46.43-removebg-preview_qbsawu.png"
                  alt="KNLE logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-display font-bold text-lg leading-none">K N L E</p>
                <p className="text-gray-500 text-xs tracking-widest uppercase mt-0.5">Japanese College</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
              Sri Lanka's trusted institute for Japanese language education and student visa guidance. We've helped 500+ students build their lives in Japan.
            </p>
            <a href="tel:+94740667457" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#C8102E] transition-colors">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C8102E] text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              +94 74 066 7457
            </a>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-5">Quick Links</p>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Why Choose Us', 'Reviews', 'Contact'].map(l => (
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
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook"
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-gray-500 hover:border-[#C8102E] hover:text-[#C8102E] transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99h-2.54v-2.888h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.99 22 12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram"
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-gray-500 hover:border-[#C8102E] hover:text-[#C8102E] transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  title="YouTube"
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-gray-500 hover:border-[#C8102E] hover:text-[#C8102E] transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
                    <path d="M9.75 15.02V8.98l6.5 3.02-6.5 3.02z" fill="white" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/94740667457"
                  target="_blank"
                  rel="noreferrer"
                  title="WhatsApp"
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-gray-500 hover:border-[#C8102E] hover:text-[#C8102E] transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16.75 13.25c-.25 0-1.47-.36-1.7-.4-.23-.05-.4-.08-.58.25s-.65.4-1.27.05a4.7 4.7 0 0 1-1.38-.85 5.1 5.1 0 0 1-.85-1.25c-.09-.16 0-.3.05-.4.05-.09.12-.23.18-.34.06-.12.08-.25.12-.4.04-.16.02-.3-.01-.42-.05-.11-.58-1.39-.8-1.91-.21-.5-.43-.43-.58-.44h-.5c-.16 0-.4.05-.61.25s-.8.78-.8 1.91.82 2.2.93 2.36c.12.16 1.6 2.45 3.88 3.43.54.23.96.37 1.29.47.54.17 1.03.15 1.42.09.43-.07 1.32-.54 1.51-1.06.19-.52.19-.98.13-1.06-.05-.07-.2-.12-.42-.18a3.02 3.02 0 0 1-.5-.18z" />
                    <path d="M12 2.01C6.5 2.01 2 6.5 2 12c0 2.12.64 4.09 1.73 5.74L2 22l4.32-1.13A9.94 9.94 0 0 0 12 22c5.5 0 10-4.49 10-10 0-5.5-4.5-9.99-10-9.99z" />
                  </svg>
                </a>
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
