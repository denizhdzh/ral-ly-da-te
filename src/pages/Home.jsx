import { useState } from 'react'
import { Link } from 'react-router-dom'
import PreorderSection from '../components/PreorderSection'

const marqueeItems = [
  'No like limits', '100 profiles daily', 'Zero manipulation',
  'Free forever', 'Real connections', 'Icebreaker games', 'Same-day likes', 'Random feed',
]

const profiles = [
  { name: 'Emma', age: 24, dist: '1 mile away', img: '/hero1.jpeg' },
  { name: 'Mia', age: 22, dist: '3 miles away', img: '/hero2.jpeg' },
  { name: 'Zoe', age: 26, dist: '0.5 miles away', img: '/hero3.jpeg' },
]

export default function Home() {
  const [swipe, setSwipe] = useState({ idx: 0, dir: null })
  const [remaining, setRemaining] = useState(47)

  const scrollToWaitlist = (e) => {
    e.preventDefault()
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSwipe = (dir) => {
    if (swipe.dir) return
    setSwipe(s => ({ ...s, dir }))
    setTimeout(() => {
      setSwipe(s => ({ dir: null, idx: (s.idx + 1) % profiles.length }))
      setRemaining(r => Math.max(0, r - 1))
    }, 400)
  }

  return (
    <main>

      {/* ══════════════════════════════════════════
          HERO  —  Interactive swipe demo
      ══════════════════════════════════════════ */}
      <section className="h-[100svh] flex flex-col pt-[76px] overflow-hidden">

        {/* Two-col grid */}
        <div className="flex-1 grid md:grid-cols-[3fr_2fr] content-center items-center gap-6 md:gap-16 px-5 sm:px-8 md:px-14 lg:px-20 py-8 md:py-14">

          {/* ── Left: Copy ── */}
          <div>
            <div
              className="inline-flex items-center gap-2 glass-dark rounded-full px-3.5 py-1.5 mb-4 md:mb-6 w-fit animate-fade-in"
              style={{ animationDelay: '0s' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-semibold text-blue-200 tracking-widest uppercase">Now on App Store</span>
            </div>

            <div className="mb-3 md:mb-5">
              <div className="overflow-hidden">
                <p
                  className="text-display text-white leading-[0.86] tracking-[-0.03em] animate-slide-up"
                  style={{ animationDelay: '0.04s' }}
                >Dating</p>
              </div>
              <div className="overflow-hidden">
                <p
                  className="text-display italic text-blue-300 leading-[0.86] tracking-[-0.03em] animate-slide-up"
                  style={{ animationDelay: '0.11s' }}
                >without</p>
              </div>
              <div className="overflow-hidden">
                <p
                  className="text-display text-white leading-[0.86] tracking-[-0.03em] animate-slide-up"
                  style={{ animationDelay: '0.18s' }}
                >the algo.</p>
              </div>
            </div>

            <p
              className="text-blue-300/70 text-[15px] max-w-sm leading-relaxed mb-5 md:mb-7 animate-fade-in"
              style={{ animationDelay: '0.32s' }}
            >
              100 real people every day. No like limits. No manipulation. Just genuine connections.
            </p>

            <div
              className="flex flex-wrap items-center gap-4 animate-fade-in"
              style={{ animationDelay: '0.42s' }}
            >
              <a
                href="#waitlist"
                onClick={scrollToWaitlist}
                className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold text-sm px-7 py-3.5 rounded-full hover:bg-blue-50 transition-colors"
              >
                Pre-order on App Store
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <span className="text-blue-500 text-xs font-medium">iPhone only · Free forever</span>
            </div>
          </div>

          {/* ── Right: Interactive swipe demo — desktop only ── */}
          <div className="hidden md:flex flex-col items-center justify-center gap-5">

            {/* Card stack */}
            <div className="relative" style={{ width: 240, height: 380 }}>

              {/* Back card */}
              <div
                className="absolute rounded-[28px] overflow-hidden"
                style={{ inset: 0, transform: 'rotate(6deg) translateY(8px)', opacity: 0.28, zIndex: 1 }}
              >
                <img src={profiles[(swipe.idx + 2) % profiles.length].img} alt="" className="w-full h-full object-cover" />
              </div>

              {/* Middle card */}
              <div
                className="absolute rounded-[28px] overflow-hidden"
                style={{ inset: 0, transform: 'rotate(-4deg) translateY(4px)', opacity: 0.55, zIndex: 2 }}
              >
                <img src={profiles[(swipe.idx + 1) % profiles.length].img} alt="" className="w-full h-full object-cover" />
              </div>

              {/* Front card — animates on swipe */}
              <div
                key={swipe.idx}
                className={`absolute rounded-[28px] overflow-hidden ${
                  swipe.dir === 'left' ? 'animate-swipe-left' :
                  swipe.dir === 'right' ? 'animate-swipe-right' : ''
                }`}
                style={{ inset: 0, zIndex: 3 }}
              >
                <img src={profiles[swipe.idx].img} alt="" className="w-full h-full object-cover" />
                <div
                  className="absolute bottom-0 left-0 right-0 pt-16 pb-4 px-4"
                  style={{ background: 'linear-gradient(to top, rgba(5,14,46,0.95) 0%, rgba(5,14,46,0.4) 60%, transparent 100%)' }}
                >
                  <p className="text-white font-bold text-[15px] leading-tight">{profiles[swipe.idx].name}, {profiles[swipe.idx].age}</p>
                  <p className="text-blue-200/60 text-[11px] mt-0.5">{profiles[swipe.idx].dist}</p>
                </div>
              </div>
            </div>

            {/* Action buttons + counter */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleSwipe('left')}
                className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2L12 12M12 2L2 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              <div className="glass-dark rounded-2xl px-4 py-2 text-center min-w-[80px]">
                <p className="text-blue-400 text-[9px] font-semibold uppercase tracking-wider">Today</p>
                <p className="text-white text-lg font-bold leading-none tracking-tight mt-0.5">
                  {remaining}<span className="text-blue-400 text-[10px] font-normal">/100</span>
                </p>
              </div>

              <button
                onClick={() => handleSwipe('right')}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-blue-50 transition-colors"
              >
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
                  <path d="M7 11.5C7 11.5 1 8 1 4.3C1 2.6 2.6 1 4.3 1C5.5 1 6.5 1.7 7 2.8C7.5 1.7 8.5 1 9.7 1C11.4 1 13 2.6 13 4.3C13 8 7 11.5 7 11.5Z" fill="#1e3a8a" />
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Marquee */}
        <div className="border-t border-white/10 py-3 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[0, 1].map((i) => (
              <span key={i} className="flex shrink-0">
                {marqueeItems.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center text-[10px] font-semibold text-blue-400 uppercase tracking-[0.18em] px-5"
                  >
                    {item}
                    <span className="ml-5 text-blue-700">·</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          MOBILE SWIPE DEMO — below hero, hidden on desktop
      ══════════════════════════════════════════ */}
      <section className="md:hidden border-t border-white/10 py-12">
        <div className="flex flex-col items-center gap-4 px-5">
          <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-widest mb-2">Try it out</span>

          <div className="relative" style={{ width: 220, height: 320 }}>
            <div className="absolute rounded-[28px] overflow-hidden" style={{ inset: 0, transform: 'rotate(6deg) translateY(8px)', opacity: 0.28, zIndex: 1 }}>
              <img src={profiles[(swipe.idx + 2) % profiles.length].img} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute rounded-[28px] overflow-hidden" style={{ inset: 0, transform: 'rotate(-4deg) translateY(4px)', opacity: 0.55, zIndex: 2 }}>
              <img src={profiles[(swipe.idx + 1) % profiles.length].img} alt="" className="w-full h-full object-cover" />
            </div>
            <div
              key={`m-${swipe.idx}`}
              className={`absolute rounded-[28px] overflow-hidden ${swipe.dir === 'left' ? 'animate-swipe-left' : swipe.dir === 'right' ? 'animate-swipe-right' : ''}`}
              style={{ inset: 0, zIndex: 3 }}
            >
              <img src={profiles[swipe.idx].img} alt="" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 pt-16 pb-4 px-4" style={{ background: 'linear-gradient(to top, rgba(5,14,46,0.95) 0%, rgba(5,14,46,0.4) 60%, transparent 100%)' }}>
                <p className="text-white font-bold text-[15px] leading-tight">{profiles[swipe.idx].name}, {profiles[swipe.idx].age}</p>
                <p className="text-blue-200/60 text-[11px] mt-0.5">{profiles[swipe.idx].dist}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => handleSwipe('left')} className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2L12 12M12 2L2 12" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
            </button>
            <div className="glass-dark rounded-2xl px-4 py-2 text-center min-w-[80px]">
              <p className="text-blue-400 text-[9px] font-semibold uppercase tracking-wider">Today</p>
              <p className="text-white text-lg font-bold leading-none tracking-tight mt-0.5">{remaining}<span className="text-blue-400 text-[10px] font-normal">/100</span></p>
            </div>
            <button onClick={() => handleSwipe('right')} className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-blue-50 transition-colors">
              <svg width="14" height="13" viewBox="0 0 14 13" fill="none"><path d="M7 11.5C7 11.5 1 8 1 4.3C1 2.6 2.6 1 4.3 1C5.5 1 6.5 1.7 7 2.8C7.5 1.7 8.5 1 9.7 1C11.4 1 13 2.6 13 4.3C13 8 7 11.5 7 11.5Z" fill="#1e3a8a" /></svg>
            </button>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          FEATURES — Diagonal bands
      ══════════════════════════════════════════ */}
      <section className="border-t border-white/10 overflow-hidden">

        {/* Header */}
        <div className="px-5 sm:px-8 md:px-14 lg:px-20 pt-20 pb-12">
          <div className="flex items-end justify-between">
            <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-widest">Why Rally</span>
            <h2 className="text-heading text-white text-right leading-tight">
              Built<br />different.
            </h2>
          </div>
        </div>

        {[
          { num: '01', title: 'No like limits, ever.', desc: "You shouldn't have to pay to meet people. No caps, no daily resets, no paywalls — just unlimited connections.", stat: '∞', flip: false },
          { num: '02', title: '100 fresh faces daily.', desc: 'Every day, 100 new profiles land in your queue. Completely random. No algorithm deciding who makes the cut.', stat: '100', flip: true },
          { num: '03', title: 'What you see is what you get.', desc: 'No hidden scores, no boost mechanics, no shadow-ranking. Every profile gets the exact same fair shot.', stat: '0', flip: false },
        ].map((f, i) => (
          <div key={f.num} className="relative">
            {/* Skewed background band */}
            <div
              className="absolute inset-x-0"
              style={{
                top: '-8px',
                bottom: '-8px',
                transform: 'skewY(-1.5deg)',
                background: i % 2 !== 0 ? 'rgba(255,255,255,0.035)' : 'transparent',
                borderTop: '1px solid rgba(255,255,255,0.07)',
              }}
            />
            {/* Content */}
            <div className={`relative py-12 md:py-16 px-5 sm:px-8 md:px-14 lg:px-20 flex items-center gap-6 md:gap-16 ${f.flip ? 'flex-row-reverse' : ''}`}>
              {/* Ghost stat */}
              <span
                className="font-extrabold italic text-white/[0.055] leading-none select-none shrink-0 hidden sm:block"
                style={{ fontSize: 'clamp(80px, 14vw, 200px)', letterSpacing: '-0.05em', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
              >
                {f.stat}
              </span>
              {/* Text */}
              <div className={f.flip ? 'text-right' : ''}>
                <span className="text-[10px] font-mono font-semibold text-blue-500 mb-3 block">{f.num}</span>
                <h3 className="text-heading text-white leading-tight mb-3">{f.title}</h3>
                <p className="text-sm text-blue-200/80 leading-relaxed max-w-sm">{f.desc}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="h-12" />
      </section>


      {/* ══════════════════════════════════════════
          CALLOUT — Comparison table
      ══════════════════════════════════════════ */}
      <section className="border-t border-white/10 py-20">
        <div className="px-5 sm:px-8 md:px-14 lg:px-20">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <h2 className="text-heading text-white leading-tight">
              The difference<br />is obvious.
            </h2>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-blue-300 hover:text-white font-semibold text-sm group transition-colors self-start md:self-auto"
            >
              Read our story
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M2 7H12M8 3.5L12 7L8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Table */}
          <div className="rounded-3xl overflow-hidden border border-white/10">

            {/* Column headers */}
            <div className="grid grid-cols-2 border-b border-white/10">
              <div className="px-6 py-4 flex items-center gap-2.5 border-r border-white/10">
                <span className="text-[11px] font-bold text-red-400/70 uppercase tracking-widest">Other apps</span>
              </div>
              <div className="px-6 py-4 flex items-center gap-2.5 bg-white/[0.04]">
                <img src="/favicon.png" alt="Rally" className="w-4 h-4 rounded-md" />
                <span className="text-[11px] font-bold text-white uppercase tracking-widest">rally</span>
              </div>
            </div>

            {[
              { bad: 'Like limits & daily caps',    good: 'Unlimited likes, always' },
              { bad: 'Paywalls to meet people',     good: 'Free forever, no exceptions' },
              { bad: 'Hidden scores & rankings',    good: 'Fully transparent, no scores' },
              { bad: 'Algorithmic feed manipulation', good: '100% random, nobody gets boosted' },
              { bad: 'Dark patterns & fake urgency', good: 'No dark patterns, ever' },
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2 border-b border-white/[0.06] last:border-0"
              >
                <div className="px-6 py-4 flex items-start gap-3 border-r border-white/[0.06]">
                  <span className="text-red-400/60 font-bold text-sm mt-0.5 shrink-0">✕</span>
                  <span className="text-sm text-blue-300/50 leading-snug">{row.bad}</span>
                </div>
                <div className="px-6 py-4 flex items-start gap-3 bg-white/[0.025]">
                  <span className="text-emerald-400 font-bold text-sm mt-0.5 shrink-0">✓</span>
                  <span className="text-sm text-white/90 leading-snug font-medium">{row.good}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section className="py-20 border-t border-white/10">
        <div className="px-5 sm:px-8 md:px-14 lg:px-20">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-10 border-b border-white/10">
            <h2 className="text-heading text-white leading-tight">
              From swipe<br />to spark.
            </h2>
            <p className="text-blue-300 text-sm max-w-xs leading-relaxed mb-1">
              Five steps from zero to a real connection.
            </p>
          </div>

          {[
            { num: '01', title: 'Create your profile', desc: 'Set up in minutes. No endless questionnaires.' },
            { num: '02', title: "Browse today's 100", desc: 'Fresh profiles every day, selected entirely at random.' },
            { num: '03', title: 'Like someone', desc: 'They see your profile in their batch that same day.' },
            { num: '04', title: 'Match & play', desc: 'Break the ice with a fun multiple-choice game.' },
            { num: '05', title: 'Send a challenge', desc: 'Pick a topic. See how you two really compare.' },
          ].map((step) => (
            <div
              key={step.num}
              className="grid grid-cols-[28px_1fr] md:grid-cols-[28px_1fr_auto] items-center gap-5 md:gap-10 py-6 border-b border-white/8"
            >
              <span className="text-[10px] font-mono font-semibold text-blue-500">{step.num}</span>
              <div>
                <p className="font-semibold text-white text-sm md:text-base">{step.title}</p>
                <p className="text-blue-200 text-xs mt-0.5 leading-relaxed">{step.desc}</p>
              </div>
              <p
                className="hidden md:block font-normal text-white/[0.06] leading-none"
                style={{ fontSize: 'clamp(32px, 4vw, 60px)', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
              >
                {step.num}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* ══════════════════════════════════════════
          ICEBREAKERS — Two-card full-width
      ══════════════════════════════════════════ */}
      <section className="py-20 border-t border-white/10">
        <div className="px-5 sm:px-8 md:px-14 lg:px-20">

          {/* Header */}
          <div className="mb-12">
            <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-widest">Icebreakers & Challenges</span>
            <h2 className="text-heading text-white leading-tight mt-3">
              Matches that actually<br />go somewhere.
            </h2>
          </div>

          {/* Two cards */}
          <div className="grid md:grid-cols-2 gap-4 items-start">

            {/* Card 1: Icebreaker */}
            <div className="bg-white/[0.05] rounded-3xl p-7 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-semibold text-blue-300 uppercase tracking-widest">New match with Alex</span>
                </div>
                <span className="text-[10px] font-semibold text-blue-500 uppercase tracking-widest">Icebreaker</span>
              </div>
              <p className="font-bold text-white text-base mb-5 leading-snug">
                {"What's your vibe for a first date?"}
              </p>
              <div className="space-y-2.5">
                {[
                  { label: 'Coffee & a long walk', active: true },
                  { label: 'Rooftop bar, obviously', active: false },
                  { label: 'Museum or gallery', active: false },
                  { label: 'Wherever, just hang', active: false },
                ].map((opt) => (
                  <div
                    key={opt.label}
                    className={`rounded-2xl px-4 py-3.5 text-sm font-medium flex items-center gap-3 ${
                      opt.active ? 'bg-white text-blue-900' : 'bg-white/[0.05] text-blue-200/70 border border-white/[0.08]'
                    }`}
                  >
                    {opt.active && (
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                    )}
                    {opt.label}
                  </div>
                ))}
              </div>
              <p className="text-xs text-blue-500 mt-5">Waiting for Alex to answer...</p>
            </div>

            {/* Card 2: Challenge result */}
            <div className="bg-white/[0.05] rounded-3xl p-7 border border-white/10 md:mt-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-[10px] font-semibold text-blue-300 uppercase tracking-widest">Challenge vs Jordan</span>
                </div>
                <span className="text-[10px] font-semibold text-blue-500 uppercase tracking-widest">Results</span>
              </div>
              <p className="font-bold text-white text-base mb-6 leading-snug">
                Travel or stay home?
              </p>

              {/* Comparison rows */}
              <div className="space-y-3 mb-6">
                {[
                  { topic: 'Weekend plans', you: 'Pack a bag', them: 'Stay in', match: false },
                  { topic: 'Dream trip', you: 'Southeast Asia', them: 'Southeast Asia', match: true },
                  { topic: 'Ideal Saturday', you: 'New city', them: 'Home & chill', match: false },
                ].map((row) => (
                  <div key={row.topic} className="rounded-2xl bg-white/[0.04] border border-white/[0.07] px-4 py-3">
                    <p className="text-[10px] font-semibold text-blue-500 uppercase tracking-wider mb-2">{row.topic}</p>
                    <div className="flex items-center gap-2">
                      <span className={`flex-1 text-xs font-medium px-2.5 py-1.5 rounded-xl text-center ${row.match ? 'bg-emerald-500/15 text-emerald-300' : 'bg-white/[0.06] text-blue-200'}`}>
                        You: {row.you}
                      </span>
                      <span className="text-blue-600 text-[10px]">{row.match ? '=' : '≠'}</span>
                      <span className={`flex-1 text-xs font-medium px-2.5 py-1.5 rounded-xl text-center ${row.match ? 'bg-emerald-500/15 text-emerald-300' : 'bg-white/[0.06] text-blue-200'}`}>
                        Jordan: {row.them}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <p className="text-xs text-blue-400">1 match out of 3 — opposites attract?</p>
                <span className="text-lg">🙃</span>
              </div>
            </div>

          </div>
        </div>
      </section>




      <PreorderSection />

    </main>
  )
}
