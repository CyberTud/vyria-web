import Link from 'next/link'

export default function DataProtectionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Vyria
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Data Protection Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This Data Protection Policy explains how Vyria ("we," "our," or "us") collects, uses, stores, and protects your personal data when you use our language learning application. We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data Controller</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vyria is the data controller for the personal data we collect through our application. Our contact information:
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> <a href="mailto:tudor@vyria.app" className="text-yellow-600 hover:text-yellow-700">tudor@vyria.app</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Data We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Personal Information</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Email address (for account creation and communication)</li>
              <li>Name or display name (optional)</li>
              <li>Age and language preferences</li>
              <li>Learning progress and preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Usage Data</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Conversation history and learning interactions</li>
              <li>Time spent using the app</li>
              <li>Features used and frequency</li>
              <li>Device information and operating system</li>
              <li>App performance and crash reports</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Audio Data</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Voice recordings for pronunciation practice (optional)</li>
              <li>Speech recognition data for feedback</li>
              <li>Audio is processed locally when possible</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Legal Basis for Processing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We process your personal data based on the following legal grounds:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Consent:</strong> For optional features like voice recording</li>
              <li><strong>Contract:</strong> To provide our language learning services</li>
              <li><strong>Legitimate Interest:</strong> To improve our services and user experience</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. How We Use Your Data</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use your personal data to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Provide personalized language learning experiences</li>
              <li>Track your learning progress and achievements</li>
              <li>Deliver AI-powered feedback and corrections</li>
              <li>Improve our algorithms and service quality</li>
              <li>Send important updates and notifications</li>
              <li>Provide customer support</li>
              <li>Ensure app security and prevent fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement comprehensive security measures to protect your data:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>End-to-end encryption for sensitive data</li>
              <li>Secure cloud storage with industry-standard encryption</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication systems</li>
              <li>Data anonymization where possible</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal data. We may share data with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Service Providers:</strong> Third-party services that help us operate our app</li>
              <li><strong>Analytics Providers:</strong> To understand usage patterns and improve our service</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Partners:</strong> Only with your explicit consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under applicable data protection laws, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Access:</strong> Request copies of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Restriction:</strong> Limit how we process your data</li>
              <li><strong>Objection:</strong> Object to certain types of processing</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for optional features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal data only as long as necessary:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Account data: Until you delete your account</li>
              <li>Learning data: 3 years after last activity</li>
              <li>Usage analytics: 2 years</li>
              <li>Audio recordings: Deleted immediately after processing</li>
              <li>Legal compliance data: As required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, including standard contractual clauses and adequacy decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our app is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Data Protection Policy from time to time. We will notify you of any material changes through the app or via email. The updated policy will be effective upon posting.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this Data Protection Policy or wish to exercise your rights, please contact us at:
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> <a href="mailto:tudor@vyria.app" className="text-yellow-600 hover:text-yellow-700">tudor@vyria.app</a>
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Data Protection Officer:</strong> tudor@vyria.app
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-yellow-600 hover:text-yellow-700 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
