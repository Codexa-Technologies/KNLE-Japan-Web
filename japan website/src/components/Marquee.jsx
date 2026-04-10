const DEFAULT_ITEMS = [
  'JLPT N5 — N2 Classes',
  'Student Visa Processing',
  'Documentation Support',
  'Interview Preparation',
  'Part-time Job Assistance',
  'Japan Job Guidance',
  'Accommodation Support',
]

export default function Marquee({ items = DEFAULT_ITEMS }) {
  const marqueeItems = [...items, ...items]

  return (
    <div className="relative overflow-hidden bg-[#C8102E]">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#C8102E] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#C8102E] to-transparent" />

      <div className="group">
        <div className="flex animate-marquee whitespace-nowrap items-center gap-8 py-4 text-white text-[11px] uppercase tracking-widest font-semibold group-hover:[animation-play-state:paused]">
          {marqueeItems.map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center gap-3">
              {index > 0 && <span className="hidden md:inline-block h-1 w-1 rounded-full bg-white/80" aria-hidden="true" />}
              <span className="transition duration-300 hover:text-white/90">{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
