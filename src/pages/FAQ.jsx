import { useState } from 'react'

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
    a: "You can pre-order Rally right now on the App Store — just scan the QR code on the home page. We'll notify you the moment it goes live in your area.",
  },
  {
    q: 'Is there a premium tier?',
    a: "We'll have optional paid features down the road, but the core experience — browsing, liking, matching, and chatting — will always be free. No like caps, no forced upgrades to meet people.",
  },
  {
    q: 'What platforms is Rally on?',
    a: 'iPhone only. Rally is exclusively on iOS and is not available on Android.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/[0.07] last:border-0">
      <button
        className="w-full flex items-start justify-between gap-6 py-6 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-white text-sm leading-snug">{q}</span>
        <span
          className={`shrink-0 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center mt-0.5 transition-transform ${
            open ? 'rotate-45' : ''
          }`}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 2V8M2 5H8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="text-blue-200/70 text-sm leading-relaxed pb-6 max-w-xl">{a}</p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <main className="pt-[76px] overflow-hidden">

      {/* ══════════════════════════════════════════
          HEADER
      ══════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="px-5 sm:px-8 md:px-14 lg:px-20 max-w-2xl">
          <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-widest block mb-8">FAQ</span>
          <h1
            className="text-white leading-[0.9] mb-6"
            style={{ fontSize: 'clamp(40px, 7vw, 90px)', fontWeight: 800, letterSpacing: '-0.04em', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            Got<br />
            <span className="italic text-blue-300">questions?</span>
          </h1>
          <p className="text-blue-200/70 text-sm leading-relaxed">
            Everything you need to know about how Rally works. Can't find what you're looking for?{' '}
            <a href="mailto:hello@rallydating.app" className="text-blue-300 hover:text-white transition-colors underline underline-offset-2">
              Reach out.
            </a>
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          FAQ LIST
      ══════════════════════════════════════════ */}
      <section className="border-t border-white/10 py-12 pb-24">
        <div className="px-5 sm:px-8 md:px-14 lg:px-20 max-w-3xl">
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </section>



    </main>
  )
}
