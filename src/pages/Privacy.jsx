export default function Privacy() {
  return (
    <main className="pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="py-16">
          <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-5">Legal</p>
          <h1 className="text-5xl font-extrabold text-blue-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="prose prose-sm max-w-none space-y-10 text-gray-500 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-3">1. Introduction</h2>
            <p className="text-sm">
              This Privacy Policy explains how Rally ("we", "us", or "our") collects, uses, and protects
              your personal information when you use our mobile application and website. By using Rally,
              you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-3">2. Information We Collect</h2>
            <p className="text-sm mb-3">We may collect the following types of information:</p>
            <ul className="text-sm space-y-2 list-disc list-inside">
              <li>Account information (name, email address, date of birth)</li>
              <li>Profile information (photos, bio, preferences)</li>
              <li>Usage data (interactions, matches, app activity)</li>
              <li>Device information (device type, operating system, unique identifiers)</li>
              <li>Location data (approximate location for matching purposes, with your permission)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-3">3. How We Use Your Information</h2>
            <p className="text-sm mb-3">We use the information we collect to:</p>
            <ul className="text-sm space-y-2 list-disc list-inside">
              <li>Provide and improve the Rally service</li>
              <li>Generate your daily profile batches</li>
              <li>Facilitate matches and in-app communication</li>
              <li>Send service-related communications and updates</li>
              <li>Ensure the safety and security of our platform</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-3">4. Data Sharing</h2>
            <p className="text-sm">
              We do not sell your personal information to third parties. We may share data with service
              providers who assist in operating the app (e.g., cloud hosting, analytics), always under
              strict data processing agreements. We may disclose information when required by law or to
              protect the rights and safety of our users.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-3">5. Data Retention</h2>
            <p className="text-sm">
              We retain your personal information for as long as your account is active or as needed to
              provide services. You may request deletion of your account and associated data at any time
              through the app settings or by contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-3">6. Your Rights</h2>
            <p className="text-sm mb-3">Depending on your location, you may have the right to:</p>
            <ul className="text-sm space-y-2 list-disc list-inside">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-3">7. Security</h2>
            <p className="text-sm">
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-3">8. Changes to This Policy</h2>
            <p className="text-sm">
              We may update this Privacy Policy from time to time. We will notify you of any significant
              changes by posting the new policy on this page and updating the date at the top.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-3">9. Contact</h2>
            <p className="text-sm">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@rallydating.app" className="text-blue-700 hover:underline">
                privacy@rallydating.app
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
