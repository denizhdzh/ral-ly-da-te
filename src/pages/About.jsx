import { Link } from 'react-router-dom'

const values = [
  {
    label: '01',
    title: 'Fairness',
    desc: 'Everyone on Rally gets the same shot. Your feed is never ranked, boosted, or manipulated based on hidden scores. Just people.',
  },
  {
    label: '02',
    title: 'Balance',
    desc: '100 profiles a day is enough to find someone interesting — not so many it becomes a mindless habit. We designed for that on purpose.',
  },
  {
    label: '03',
    title: 'Speed',
    desc: 'When you like someone, they see you in their batch that same day. No waiting, no sitting in a queue. Real-time momentum.',
  },
  {
    label: '04',
    title: 'Real connection',
    desc: 'Icebreakers and challenges exist to make matches actually go somewhere. We care less about match count and more about conversations that stick.',
  },
]

export default function About() {
  return (
    <main className="pt-24 overflow-hidden">
      {/* Hero */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-6">
              About Rally
            </p>
            <h1 className="text-5xl font-extrabold text-blue-900 leading-tight tracking-tight mb-6">
              Built for real people,<br />not engagement metrics.
            </h1>
            <p className="text-gray-400 leading-relaxed text-sm">
              Dating apps were supposed to make things easier. Instead they became slot machines —
              infinite scrolls, artificial scarcity, and hidden algorithms deciding who you meet.
              We built Rally because we believe there's a better way.
            </p>
          </div>
          <div className="glass-card rounded-3xl overflow-hidden aspect-video md:aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
              alt="People connecting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-6">
            Our Mission
          </p>
          <h2 className="text-4xl font-extrabold text-blue-900 tracking-tight mb-8">
            Genuine connections,<br />free from the games.
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm mb-5">
            Dating apps have become addictive by design — endless swiping, pay-to-win features,
            and opaque algorithms that reward engagement over connection. The result is an
            exhausting loop that rarely leads anywhere real.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm">
            Rally is different. We cap your daily feed not to frustrate you, but to make each
            profile feel worth your attention. We randomize everything because everyone deserves
            a fair shot. And we never put artificial limits on your ability to connect.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-4">
              What We Stand For
            </p>
            <h2 className="text-4xl font-extrabold text-blue-900 tracking-tight">
              Our values, plainly stated.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.label} className="glass-card rounded-3xl p-8">
                <p className="text-xs font-mono font-bold text-blue-200 mb-5">{v.label}</p>
                <h3 className="text-lg font-bold text-blue-900 mb-3">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo + story */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div className="glass-card rounded-3xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-5">
              The Story
            </p>
            <h2 className="text-3xl font-extrabold text-blue-900 tracking-tight mb-5">
              Tired of the same broken experience.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Rally started from a simple frustration: every dating app felt like it was
              working against you. Like limits that reset unless you paid. Profiles buried
              by ranking systems you couldn't see. Matches that went nowhere because
              there was no easy way to break the ice.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              We set out to build something honest. A place where the mechanics are transparent,
              the connections are fair, and the experience is actually enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">
            Ready to try it?
          </h2>
          <p className="text-blue-300 text-sm mb-8">
            Join the waitlist and be first to know when Rally launches near you.
          </p>
          <Link
            to="/"
            onClick={() =>
              setTimeout(() => {
                document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
              }, 100)
            }
            className="inline-block bg-white text-blue-900 font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-blue-50 transition-colors"
          >
            Get Early Access
          </Link>
        </div>
      </section>
    </main>
  )
}
