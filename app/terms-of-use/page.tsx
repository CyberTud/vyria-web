import Link from 'next/link'

export default function TermsOfUsePage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Use</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By downloading, installing, or using the Vyria mobile application ("App"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, do not use the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vyria is an AI-powered language learning application that provides conversational practice, pronunciation feedback, and personalized learning experiences across multiple languages. The service includes both free and premium features accessible through in-app purchases.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Eligibility</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You must be at least 13 years old to use this App. If you are between 13 and 18 years old, you must have parental or guardian consent to use the App. By using the App, you represent and warrant that you meet these age requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Account Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To access certain features, you may need to create an account. You are responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Providing accurate and complete information</li>
              <li>Maintaining the security of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Acceptable Use Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to use the App to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Transmit harmful, threatening, or offensive content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the service</li>
              <li>Use automated systems to access the App without permission</li>
              <li>Share your account with others</li>
              <li>Reverse engineer or attempt to extract source code</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The App and its content, including but not limited to text, graphics, logos, and software, are owned by Vyria and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without our written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. In-App Purchases and Subscriptions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The App offers premium features through in-app purchases and subscriptions:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Subscriptions automatically renew unless cancelled</li>
              <li>Payment will be charged to your App Store account</li>
              <li>You can manage subscriptions in your device settings</li>
              <li>No refunds for unused portions of subscriptions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacy and Data Protection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your privacy is important to us. Please review our <Link href="/privacy" className="text-yellow-600 hover:text-yellow-700">Privacy Policy</Link> to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The App is provided "as is" without warranties of any kind. We do not guarantee that the App will be uninterrupted, error-free, or meet your requirements. While we strive for accuracy, we cannot guarantee the correctness of AI-generated content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, Vyria shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may terminate or suspend your access to the App at any time, with or without notice, for any reason, including violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. We will notify users of material changes through the App or via email. Continued use of the App after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about these Terms of Use, please contact us at:
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> <a href="mailto:tudor@vyria.app" className="text-yellow-600 hover:text-yellow-700">tudor@vyria.app</a>
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



