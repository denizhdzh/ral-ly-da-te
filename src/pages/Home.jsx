import { useState } from 'react'
import { Link } from 'react-router-dom'

const marqueeItems = [
  'No like limits', '100 profiles daily', 'Zero manipulation',
  'Free forever', 'Real connections', 'Icebreaker games', 'Same-day likes', 'Random feed',
]

const icebreakerOptions = [
  { label: 'Coffee & a long walk', active: true },
  { label: 'Rooftop bar, obviously', active: false },
  { label: 'Museum or gallery', active: false },
  { label: 'Wherever, just hang', active: false },
]

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const scrollToWaitlist = (e) => {
    e.preventDefault()
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>

      {/* ══════════════════════════════════════════
          HERO  —  Profile card stack
      ══════════════════════════════════════════ */}
      <section className="h-[100svh] flex flex-col pt-[62px] overflow-hidden">

        {/* Two-col grid */}
        <div className="flex-1 grid md:grid-cols-2 items-center gap-4 px-5 sm:px-8 md:px-14 lg:px-20 py-12 md:py-16">

          {/* ── Left: Copy ── */}
          <div>
            <div
              className="inline-flex items-center gap-2 glass-dark rounded-full px-3.5 py-1.5 mb-10 w-fit animate-fade-in"
              style={{ animationDelay: '0s' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-semibold text-blue-200 tracking-widest uppercase">Beta — limited spots</span>
            </div>

            <div className="mb-8">
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
              className="text-blue-300/70 text-[15px] max-w-[300px] leading-relaxed mb-10 animate-fade-in"
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
                Get early access
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <span className="text-blue-500 text-xs font-medium">iOS & Android · Free forever</span>
            </div>
          </div>

          {/* ── Right: Card stack (desktop only) ── */}
          <div className="hidden md:flex relative items-center justify-center" style={{ height: '520px' }}>

            {/* Card — back */}
            <div
              className="absolute rounded-[32px] overflow-hidden"
              style={{ width: 192, height: 322, transform: 'rotate(13deg) translate(80px, 8px)', zIndex: 1, opacity: 0.3 }}
            >
              <img
                src="/hero3.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card — middle */}
            <div
              className="absolute rounded-[32px] overflow-hidden"
              style={{ width: 204, height: 342, transform: 'rotate(-10deg) translate(-54px, 12px)', zIndex: 2, opacity: 0.52 }}
            >
              <img
                src="/hero2.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card — front */}
            <div
              className="relative rounded-[32px] overflow-hidden animate-float"
              style={{ width: 224, height: 368, zIndex: 3 }}
            >
              <img
                src="/hero1.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
              {/* Info + action overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 pt-20 pb-4 px-4"
                style={{ background: 'linear-gradient(to top, rgba(5,14,46,0.95) 0%, rgba(5,14,46,0.5) 55%, transparent 100%)' }}
              >
                <p className="text-white font-bold text-[15px] leading-tight">Emma, 24</p>
                <p className="text-blue-200/70 text-[11px] mt-0.5 mb-3">1 mile away</p>
                {/* Action buttons */}
                <div className="flex gap-2">
                  <button className="w-11 h-11 rounded-full bg-white/12 border border-white/20 flex items-center justify-center shrink-0">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M2 2L11 11M11 2L2 11" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  <button className="flex-1 h-11 rounded-full bg-white flex items-center justify-center gap-1.5 font-bold text-blue-900 text-[13px]">
                    Like
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                      <path d="M6.5 10.5C6.5 10.5 1 7.2 1 3.8C1 2.25 2.25 1 3.8 1C4.87 1 5.8 1.6 6.5 2.6C7.2 1.6 8.13 1 9.2 1C10.75 1 12 2.25 12 3.8C12 7.2 6.5 10.5 6.5 10.5Z" fill="#1e3a8a" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Badge: liked */}
            <div
              className="absolute top-8 right-4 glass-dark rounded-2xl px-3 py-2 animate-float"
              style={{ zIndex: 5, animationDelay: '0.8s' }}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm leading-none">❤️</span>
                <div>
                  <p className="text-white text-[11px] font-semibold leading-snug">Alex liked you</p>
                  <p className="text-blue-400 text-[9px]">just now</p>
                </div>
              </div>
            </div>

            {/* Badge: match */}
            <div
              className="absolute bottom-16 left-2 glass-dark rounded-2xl px-3 py-2 animate-float"
              style={{ zIndex: 5, animationDelay: '1.9s' }}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm leading-none">🎉</span>
                <div>
                  <p className="text-white text-[11px] font-semibold leading-snug">{"It's a match!"}</p>
                  <p className="text-blue-400 text-[9px]">with Jordan</p>
                </div>
              </div>
            </div>

            {/* Counter */}
            <div
              className="absolute top-16 left-4 glass-dark rounded-2xl px-3 py-2.5 animate-float"
              style={{ zIndex: 5, animationDelay: '1.3s' }}
            >
              <p className="text-blue-400 text-[9px] font-semibold uppercase tracking-wider mb-1">Today</p>
              <p className="text-white text-xl font-bold leading-none tracking-tight">
                47<span className="text-blue-400 text-xs font-normal">/100</span>
              </p>
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
          FEATURES
      ══════════════════════════════════════════ */}
      <section className="py-20 border-t border-white/10">
        <div className="px-5 sm:px-8 md:px-14 lg:px-20">

          <div className="flex items-end justify-between pb-8 border-b border-white/10">
            <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-widest">Why Rally</span>
            <h2 className="text-heading text-white text-right leading-tight">
              Dating,<br />the way it should work.
            </h2>
          </div>

          {[
            { num: '01', title: 'No limits, ever.', desc: 'No like caps, no daily resets, no paywalls. We never charge you to meet people.', stat: '∞' },
            { num: '02', title: '100 people a day.', desc: 'Fresh profiles every day, picked entirely at random. Focused, not overwhelming.', stat: '100' },
            { num: '03', title: 'Zero manipulation.', desc: 'No secret scores, no hidden boosts. Everyone gets a fair shot, always.', stat: '0' },
          ].map((f) => (
            <div
              key={f.num}
              className="grid grid-cols-[28px_1fr_auto] items-center gap-5 md:gap-10 py-7 border-b border-white/8 group"
            >
              <span className="text-[10px] font-mono font-semibold text-blue-500">{f.num}</span>
              <div>
                <h3 className="text-heading text-white leading-none mb-2">{f.title}</h3>
                <p className="text-sm text-blue-200 leading-relaxed max-w-lg">{f.desc}</p>
              </div>
              <span
                className="hidden md:block font-bold text-white/8 leading-none group-hover:text-white/[0.14] transition-colors"
                style={{ fontSize: 'clamp(44px, 6vw, 88px)', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
              >
                {f.stat}
              </span>
            </div>
          ))}
        </div>
      </section>


      {/* ══════════════════════════════════════════
          CALLOUT
      ══════════════════════════════════════════ */}
      <section className="bg-white/5 border-t border-b border-white/10 py-0">
        <div className="grid md:grid-cols-2 min-h-[480px]">

          {/* Left: text */}
          <div className="flex flex-col justify-center px-5 sm:px-8 md:px-14 lg:px-20 py-16">
            <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-widest mb-6">Different by design</span>
            <h2 className="text-heading text-white leading-tight mb-6">
              Other apps limit you.<br />We don't.
            </h2>
            <p className="text-sm text-blue-200 leading-relaxed mb-8 max-w-sm">
              Bumble, Hinge, Tinder — they all cap your likes, hide features behind paywalls,
              and manipulate your feed. Rally is built on the opposite idea: total transparency,
              total freedom.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm group"
            >
              Read our story
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M2 7H12M8 3.5L12 7L8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Right: photo */}
          <div className="hidden md:block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80"
              alt="Using Rally"
              className="w-full h-full object-cover opacity-50"
            />
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
          ICEBREAKERS
      ══════════════════════════════════════════ */}
      <section className="py-20 border-t border-white/10">
        <div className="px-5 sm:px-8 md:px-14 lg:px-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

            <div className="pt-2">
              <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-widest">Icebreakers & Challenges</span>
              <h2 className="text-heading text-white leading-tight mt-4 mb-6">
                Matches that<br />actually go<br />somewhere.
              </h2>
              <p className="text-sm text-blue-200 leading-relaxed mb-4">
                When you match, we kick off with a fun multiple-choice game. No more blank chat screens.
              </p>
              <p className="text-sm text-blue-200 leading-relaxed">
                Each match gets one challenge — pick a topic and see how you two really compare.
              </p>
            </div>

            <div className="bg-white/8 rounded-3xl p-7 border border-white/10">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-[10px] font-semibold text-blue-300 uppercase tracking-widest">New match with Alex</span>
              </div>
              <p className="font-semibold text-white text-sm mb-5 leading-snug">
                {"What's your vibe for a first date?"}
              </p>
              <div className="space-y-2.5">
                {icebreakerOptions.map((opt) => (
                  <div
                    key={opt.label}
                    className={`rounded-2xl px-4 py-3.5 text-sm font-medium ${
                      opt.active ? 'bg-white text-blue-900' : 'bg-white/[0.06] text-blue-200 border border-white/10'
                    }`}
                  >
                    {opt.label}
                  </div>
                ))}
              </div>
              <p className="text-xs text-blue-400 mt-5">Waiting for Alex to answer...</p>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          STATS
      ══════════════════════════════════════════ */}
      <section className="py-16 border-t border-b border-white/10">
        <div className="px-5 sm:px-8 md:px-14 lg:px-20">
          <div className="grid grid-cols-3 gap-6 md:gap-20">
            {[
              { val: '100', unit: '/day', label: 'fresh profiles' },
              { val: '0',   unit: ' caps', label: 'on your likes' },
              { val: '1',   unit: '',      label: 'challenge per match' },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="leading-none text-white font-extrabold"
                  style={{ fontSize: 'clamp(36px, 6.5vw, 96px)', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", letterSpacing: '-0.04em' }}
                >
                  {s.val}
                  {s.unit && (
                    <span
                      className="text-blue-400"
                      style={{ fontSize: '0.32em', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 500 }}
                    >
                      {s.unit}
                    </span>
                  )}
                </p>
                <p className="text-xs text-blue-300 mt-2 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          WAITLIST — blue-900 bg, split layout
      ══════════════════════════════════════════ */}
      <section id="waitlist" className="bg-blue-900 py-24">
        <div className="px-5 sm:px-8 md:px-14 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">

            <h2
              className="text-white leading-[0.84]"
              style={{ fontSize: 'clamp(72px, 11vw, 160px)', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              Be<br />first.
            </h2>

            <div className="md:max-w-[340px] md:pb-1">
              <p className="text-blue-300 text-sm leading-relaxed mb-6">
                Join the waitlist and {"we'll"} let you know when Rally launches in your area.
              </p>
              <form
                onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true) }}
                className="flex flex-col sm:flex-row gap-3"
              >
                {!submitted ? (
                  <>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 min-w-0 rounded-full px-5 py-3 text-sm bg-white/10 border border-white/20 text-white placeholder-blue-400 outline-none focus:border-white/40 transition-colors"
                    />
                    <button
                      type="submit"
                      className="shrink-0 bg-white text-blue-900 font-semibold text-sm px-6 py-3 rounded-full hover:bg-blue-50 transition-colors"
                    >
                      Join
                    </button>
                  </>
                ) : (
                  <p className="text-white text-sm font-medium">{"You're on the list. We'll be in touch."}</p>
                )}
              </form>
              <p className="text-blue-600/80 text-xs mt-5">iOS and Android — coming soon.</p>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
