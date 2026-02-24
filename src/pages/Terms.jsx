export default function Terms() {
  return (
    <main className="pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="py-16">
          <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-5">Legal</p>
          <h1 className="text-5xl font-extrabold text-blue-900 tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="space-y-10 text-gray-500">
          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-3">1. Acceptance of Terms</h2>
            <p className="text-sm leading-relaxed">
              By accessing or using Rally ("the Service"), you agree to be bound by these Terms of
              Service. If you do not agree to these terms, please do not use the Service.
              You must be at least 18 years old to use Rally.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-3">2. Use of the Service</h2>
            <p className="text-sm leading-relaxed mb-3">
              You agree to use Rally only for lawful purposes and in a way that does not infringe
              the rights of others. You must not:
            </p>
            <ul className="text-sm space-y-2 list-disc list-inside">
              <li>Create a false identity or impersonate any person</li>
              <li>Post misleading, fraudulent, or inappropriate content</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Use the Service for any commercial or advertising purpose without our consent</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Collect or harvest any user data without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-3">3. User Content</h2>
            <p className="text-sm leading-relaxed">
              You retain ownership of the content you submit to Rally. By posting content, you grant
              us a non-exclusive, royalty-free license to use, display, and distribute that content
              solely for the purpose of operating and improving the Service. You are responsible for
              ensuring your content does not violate any third-party rights or applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-3">4. Account Termination</h2>
            <p className="text-sm leading-relaxed">
              We reserve the right to suspend or terminate your account at our discretion if you
              violate these Terms or engage in conduct we determine to be harmful to other users or
              the Service. You may delete your account at any time through the app settings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-3">5. Disclaimer of Warranties</h2>
            <p className="text-sm leading-relaxed">
              Rally is provided on an "as is" and "as available" basis without any warranties of any
              kind, either express or implied. We do not guarantee that the Service will be
              uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-3">6. Limitation of Liability</h2>
            <p className="text-sm leading-relaxed">
              To the fullest extent permitted by law, Rally shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages resulting from your use of or
              inability to use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-3">7. Changes to Terms</h2>
            <p className="text-sm leading-relaxed">
              We may modify these Terms at any time. We will notify you of material changes by
              posting the updated terms and revising the date at the top of this page. Continued
              use of the Service after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-3">8. Contact</h2>
            <p className="text-sm leading-relaxed">
              Questions about these Terms? Contact us at{' '}
              <a href="mailto:legal@rallydating.app" className="text-blue-700 hover:underline">
                legal@rallydating.app
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
