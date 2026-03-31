import { useState, useEffect } from 'react'

const links = ['About', 'Services', 'Why Us', 'Testimonials', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white border-b border-gray-100 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className={`w-9 h-9 flex items-center justify-center font-display font-black text-lg transition-colors ${scrolled ? 'bg-[#C8102E] text-white' : 'bg-white text-[#C8102E]'}`}>
            K
          </div>
          <div>
            <p className={`font-display font-bold text-base leading-none transition-colors ${scrolled ? 'text-ink' : 'text-white'}`}>KNL</p>
            <p className={`text-[10px] tracking-[0.15em] uppercase leading-none mt-0.5 transition-colors ${scrolled ? 'text-gray-400' : 'text-white/60'}`}>Japanese College</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(' ', '-')}`}
              className={`text-xs font-semibold tracking-[0.15em] uppercase transition-colors hover:text-[#C8102E] ${scrolled ? 'text-gray-600' : 'text-white/80'}`}
            >
              {l}
            </a>
          ))}
          <a href="#contact" className={`text-xs font-semibold tracking-[0.15em] uppercase px-5 py-2.5 transition-all ${scrolled ? 'bg-[#C8102E] text-white hover:bg-[#a00d24]' : 'bg-white text-[#C8102E] hover:bg-white/90'}`}>
            Apply Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className={`md:hidden flex flex-col gap-1.5 p-1 ${scrolled ? 'text-ink' : 'text-white'}`}>
          <span className={`block w-6 h-px bg-current transition-all origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all ${open ? 'opacity-0 w-0' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-5">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`}
              onClick={() => setOpen(false)}
              className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-600 hover:text-[#C8102E] transition-colors">
              {l}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-red text-center justify-center mt-2">
            Apply Now
          </a>
        </div>
      </div>
    </header>
  )
}
