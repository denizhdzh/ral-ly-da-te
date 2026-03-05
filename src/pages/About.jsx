import { Link } from 'react-router-dom'

const values = [
  {
    label: '01',
    title: 'Fairness',
    desc: 'Everyone on Rally gets the same shot. Your feed is never ranked, boosted, or manipulated based on hidden scores. Just people.',
    flip: false,
  },
  {
    label: '02',
    title: 'Balance',
    desc: '100 profiles a day is enough to find someone interesting — not so many it becomes a mindless habit. We designed for that on purpose.',
    flip: true,
  },
  {
    label: '03',
    title: 'Speed',
    desc: 'When you like someone, they see you in their batch that same day. No waiting, no sitting in a queue. Real-time momentum.',
    flip: false,
  },
  {
    label: '04',
    title: 'Real connection',
    desc: 'Icebreakers and challenges exist to make matches actually go somewhere. We care less about match count and more about conversations that stick.',
    flip: true,
  },
]

export default function About() {
  return (
    <main className="pt-[76px] overflow-hidden">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="px-5 sm:px-8 md:px-14 lg:px-20">

          <div className="flex items-center justify-between mb-10">
            <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-widest">About Rally</span>
            <Link
              to="/faq"
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-blue-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              FAQ
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div
            className="inline-flex items-center gap-2 backdrop-blur-xl bg-white/[0.07] border border-white/[0.12] rounded-full px-3.5 py-1.5 mb-10 w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-semibold text-blue-200 tracking-widest uppercase">Now on App Store</span>
          </div>

          <h1
            className="text-white leading-[0.88]"
            style={{ fontSize: 'clamp(44px, 8vw, 120px)', fontWeight: 800, letterSpacing: '-0.04em', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            We got tired<br />
            of apps that<br />
            <span className="italic text-blue-300">work against you.</span>
          </h1>

          <p className="text-blue-200/60 text-sm leading-relaxed mt-8 max-w-sm">
            Dating apps were supposed to make things easier. Instead they became slot machines — artificial scarcity, hidden algorithms, and paywalls deciding who you meet. We chose a different path.
          </p>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════════ */}
      <section className="border-t border-white/10 border-b border-white/10 py-10">
        <div className="px-5 sm:px-8 md:px-14 lg:px-20">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {[
              { stat: '∞', label: 'Free likes' },
              { stat: '100', label: 'Daily profiles' },
              { stat: '0', label: 'Algorithms' },
            ].map(({ stat, label }) => (
              <div key={label} className="flex flex-col items-center py-4 gap-1">
                <span
                  className="font-extrabold italic text-white leading-none tracking-tight"
                  style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                >
                  {stat}
                </span>
                <span className="text-[10px] font-semibold text-blue-500 uppercase tracking-widest">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          MISSION
      ══════════════════════════════════════════ */}
      <section className="py-20 border-b border-white/10">
        <div className="px-5 sm:px-8 md:px-14 lg:px-20 grid md:grid-cols-2 gap-12 md:gap-20">

          <div>
            <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-widest block mb-6">Our Mission</span>
            <h2
              className="text-white leading-tight"
              style={{ fontSize: 'clamp(26px, 3.5vw, 52px)', fontWeight: 800, letterSpacing: '-0.035em', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              Genuine connections,<br />
              <span className="italic text-blue-300">free from the games.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-center gap-5 md:border-l md:border-white/10 md:pl-12">
            <p className="text-blue-200/70 text-sm leading-relaxed">
              Dating apps have become addictive by design — endless swiping, pay-to-win features, and opaque algorithms that reward engagement over connection. The result is an exhausting loop that rarely leads anywhere real.
            </p>
            <p className="text-blue-200/70 text-sm leading-relaxed">
              Rally is different. We cap your daily feed not to frustrate you, but to make each profile feel worth your attention. We randomize everything because everyone deserves a fair shot. And we never put artificial limits on your ability to connect.
            </p>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          VALUES — Diagonal bands
      ══════════════════════════════════════════ */}
      <section className="overflow-hidden">

        <div className="px-5 sm:px-8 md:px-14 lg:px-20 pt-20 pb-12">
          <div className="flex items-end justify-between">
            <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-widest">What We Stand For</span>
            <h2 className="text-heading text-white text-right leading-tight">
              Four things we<br />never compromise.
            </h2>
          </div>
        </div>

        {values.map((v, i) => (
          <div key={v.label} className="relative">
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
            <div className={`relative py-12 md:py-16 px-5 sm:px-8 md:px-14 lg:px-20 flex items-center gap-6 md:gap-16 ${v.flip ? 'flex-row-reverse' : ''}`}>
              <span
                className="font-extrabold italic text-white/[0.055] leading-none select-none shrink-0 hidden sm:block"
                style={{ fontSize: 'clamp(80px, 14vw, 200px)', letterSpacing: '-0.05em', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
              >
                {v.label}
              </span>
              <div className={v.flip ? 'text-right' : ''}>
                <h3 className="text-heading text-white leading-tight mb-3">{v.title}</h3>
                <p className="text-sm text-blue-200/80 leading-relaxed max-w-sm">{v.desc}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="h-12" />
      </section>


      {/* ══════════════════════════════════════════
          STORY
      ══════════════════════════════════════════ */}
      <section className="border-t border-white/10 py-20">
        <div className="px-5 sm:px-8 md:px-14 lg:px-20 grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
              alt="Team working"
              className="w-full h-full object-cover opacity-70"
            />
          </div>

          <div>
            <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-widest block mb-6">The Story</span>
            <h2 className="text-heading text-white leading-tight mb-6">
              Tired of the same<br />
              <span className="italic text-blue-300">broken experience.</span>
            </h2>
            <div className="space-y-4">
              <p className="text-blue-200/70 text-sm leading-relaxed">
                Rally started from a simple frustration: every dating app felt like it was working against you. Like limits that reset unless you paid. Profiles buried by ranking systems you couldn't see. Matches that went nowhere because there was no easy way to break the ice.
              </p>
              <p className="text-blue-200/70 text-sm leading-relaxed">
                We set out to build something honest. A place where the mechanics are transparent, the connections are fair, and the experience is actually enjoyable.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
