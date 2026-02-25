import QRPlaceholder from './QRPlaceholder'

export default function PreorderSection() {
  return (
    <section id="waitlist" className="border-t border-white/10 py-28">
      <div className="px-5 sm:px-8 md:px-14 lg:px-20 flex flex-col items-center text-center">

        <span className="text-[10px] font-semibold text-blue-500 uppercase tracking-widest mb-6">Pre-order on App Store</span>

        <h2
          className="text-white leading-[0.88] mb-6"
          style={{ fontSize: 'clamp(52px, 9vw, 130px)', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 800, letterSpacing: '-0.04em' }}
        >
          Your people<br />
          <span className="italic text-blue-300">are waiting.</span>
        </h2>

        <p className="text-blue-300/70 text-sm leading-relaxed mb-10 max-w-xs">
          Scan with your iPhone camera to pre-order Rally on the App Store. Free — and {"you'll"} get first access when we launch.
        </p>

        <div className="flex flex-col items-center gap-4 mb-8">
          <QRPlaceholder size={160} />
          <p className="text-xs text-blue-500 font-medium">Scan with iPhone camera</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-medium text-blue-500">
          <span>✓ Free to pre-order</span>
          <span>✓ iPhone only</span>
          <span>✓ First access on launch</span>
        </div>

      </div>
    </section>
  )
}
