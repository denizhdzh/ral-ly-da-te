import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'Is Rally free to use?',
    a: "Yes. Rally's core experience is completely free. Unlike other apps, we don't put your ability to like people behind a paywall. You can swipe and match without any paid subscription.",
  },
  {
    q: 'How does the 100 people per day limit work?',
    a: "Every day, you get a fresh batch of 100 profiles. Once you've gone through them, that's it until tomorrow. We designed this intentionally — it keeps the experience focused and makes each profile feel worth your attention rather than being one of thousands you mindlessly scroll past.",
  },
  {
    q: 'Are the profiles I see random?',
    a: "Yes, completely. There's no ranking system, no hidden score, no algorithm deciding you'd prefer someone because of what you viewed last week. Everyone in the app has an equal chance of showing up in your daily batch.",
  },
  {
    q: 'What happens when I like someone?',
    a: "When you like someone, they'll see your profile in their own batch that same day. So if they open the app and go through their 100, you'll be in there. This creates real-time momentum — your likes reach people quickly, not after days of sitting in a queue.",
  },
  {
    q: 'What are icebreakers?',
    a: "When you match with someone, Rally kicks off a multiple-choice game so you both have something fun to respond to. It's a low-pressure way to start a conversation and learn something about each other without the awkward blank chat screen.",
  },
  {
    q: 'What are challenges?',
    a: "Each match comes with one challenge: you pick a topic and we create a short head-to-head question to see how you compare. Think of it as a lightweight compatibility check that's actually fun. One challenge per match keeps it simple.",
  },
  {
    q: 'When will Rally be available?',
    a: "We're in beta right now and rolling out gradually. Sign up for the waitlist and we'll notify you as soon as we launch in your area.",
  },
  {
    q: 'Is there a premium tier?',
    a: "We'll have optional paid features, but the core experience — browsing, liking, matching, and chatting — will always be free. No like caps, no forced upgrades to meet people.",
  },
  {
    q: 'What platforms will Rally be on?',
    a: 'iOS and Android. Both are in development and launching soon.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-6 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-blue-900 text-sm leading-snug">{q}</span>
        <span
          className={`shrink-0 w-5 h-5 rounded-full border border-blue-200 flex items-center justify-center mt-0.5 transition-transform ${
            open ? 'rotate-45' : ''
          }`}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 2V8M2 5H8" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="text-gray-400 text-sm leading-relaxed pb-6">{a}</p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <main className="pt-24 overflow-hidden">
      {/* Header */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-5">FAQ</p>
          <h1 className="text-5xl font-extrabold text-blue-900 tracking-tight mb-5">
            Got questions?
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Everything you need to know about how Rally works. Can't find what you're looking for?{' '}
            <a href="mailto:hello@rallydating.app" className="text-blue-700 hover:underline">
              Reach out.
            </a>
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-8 pb-24 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="glass-card rounded-3xl px-8 py-2">
            {faqs.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">
            Still curious?
          </h2>
          <p className="text-blue-300 text-sm mb-8">
            Join the waitlist and try it for yourself when we launch.
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
