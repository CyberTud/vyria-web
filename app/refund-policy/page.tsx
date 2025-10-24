import Link from 'next/link'

export default function RefundPolicyPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This Refund Policy explains our policy regarding refunds for purchases made through the Vyria mobile application. All purchases are processed through the Apple App Store and are subject to Apple's terms and conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. App Store Purchases</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Since Vyria is distributed through the Apple App Store, all purchases and refunds are handled by Apple according to their policies:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Refunds are processed by Apple, not directly by Vyria</li>
              <li>You must request refunds through Apple's system</li>
              <li>Apple's refund policy applies to all transactions</li>
              <li>We cannot process refunds directly</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How to Request a Refund</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Through Apple</h3>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
              <li>Visit <a href="https://reportaproblem.apple.com" className="text-yellow-600 hover:text-yellow-700" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a></li>
              <li>Sign in with your Apple ID</li>
              <li>Find the purchase you want to refund</li>
              <li>Click "Report" and follow the instructions</li>
              <li>Select "Request a refund" and provide a reason</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Through iPhone/iPad</h3>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
              <li>Open the App Store app</li>
              <li>Tap your profile picture</li>
              <li>Tap "Purchased"</li>
              <li>Find Vyria and tap "Report a Problem"</li>
              <li>Follow the prompts to request a refund</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Refund Eligibility</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Apple typically considers refunds for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Accidental purchases</li>
              <li>App doesn't work as described</li>
              <li>Technical issues preventing app usage</li>
              <li>Duplicate purchases</li>
              <li>Unauthorized purchases</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Subscription Cancellation</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can cancel your subscription at any time:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
              <li>Open your iPhone/iPad Settings</li>
              <li>Tap your name at the top</li>
              <li>Tap "Subscriptions"</li>
              <li>Find Vyria and tap on it</li>
              <li>Tap "Cancel Subscription"</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Important:</strong> Canceling a subscription stops future charges but does not refund the current billing period. You'll continue to have access until the end of your current period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Processing Time</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Refund processing times vary:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Apple typically processes refunds within 24-48 hours</li>
              <li>Refunds appear on your payment method within 5-10 business days</li>
              <li>Processing time depends on your bank or payment provider</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Our Support</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we cannot process refunds directly, we can help with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Technical issues that may be causing problems</li>
              <li>Questions about app features</li>
              <li>Account-related issues</li>
              <li>General support and guidance</li>
            </ul>
            <p className="text-gray-700">
              <strong>Contact us:</strong> <a href="mailto:tudor@vyria.app" className="text-yellow-600 hover:text-yellow-700">tudor@vyria.app</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Refund Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this Refund Policy, please contact us at:
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



