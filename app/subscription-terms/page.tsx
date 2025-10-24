import Link from 'next/link'

export default function SubscriptionTermsPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Subscription Terms</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Subscription Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vyria offers premium subscription plans that provide access to advanced features, unlimited conversations, and enhanced learning tools. These terms govern your subscription to Vyria's premium services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Available Plans</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Monthly Subscription</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Price: $4.99 USD per month</li>
              <li>Billing: Monthly recurring</li>
              <li>Access to all premium features</li>
              <li>Unlimited AI conversations</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Annual Subscription</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Price: $44.49 USD per year</li>
              <li>Billing: Annual recurring</li>
              <li>25% savings compared to monthly</li>
              <li>Access to all premium features</li>
              <li>Priority customer support</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Premium Features</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your subscription includes access to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Unlimited AI conversations in all languages</li>
              <li>Advanced pronunciation feedback</li>
              <li>Detailed progress analytics</li>
              <li>Priority response times</li>
              <li>Exclusive roleplay scenarios</li>
              <li>Ad-free experience</li>
              <li>Offline conversation history</li>
              <li>Custom learning goals</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Billing and Payment</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Payment Processing</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All payments are processed through the Apple App Store using your Apple ID account. You authorize Apple to charge your chosen payment method for subscription fees.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Automatic Renewal</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Subscriptions automatically renew unless you cancel at least 24 hours before the end of the current period. Your account will be charged for renewal within 24 hours prior to the end of the current period.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Price Changes</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may change subscription prices at any time. Price changes will be communicated in advance and will apply to your next billing cycle.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cancellation Policy</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 How to Cancel</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can cancel your subscription at any time:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
              <li>Open Settings on your iOS device</li>
              <li>Tap your name at the top</li>
              <li>Tap "Subscriptions"</li>
              <li>Find Vyria and tap on it</li>
              <li>Tap "Cancel Subscription"</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Effect of Cancellation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Canceling your subscription:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Stops future billing cycles</li>
              <li>Maintains access until the end of the current period</li>
              <li>Does not provide refunds for unused time</li>
              <li>Reverts to free tier features after expiration</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Free Trial</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may offer free trials for new subscribers:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Free trials provide full access to premium features</li>
              <li>No payment required during trial period</li>
              <li>Subscription automatically begins after trial ends</li>
              <li>You can cancel before the trial ends to avoid charges</li>
              <li>One free trial per Apple ID</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Refund Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Refunds are handled by Apple according to their App Store policies. Please see our <Link href="/refund-policy" className="text-yellow-600 hover:text-yellow-700">Refund Policy</Link> for detailed information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Availability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We strive to maintain 99.9% uptime for our services. However, we do not guarantee uninterrupted access and may experience:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Scheduled maintenance windows</li>
              <li>Technical difficulties</li>
              <li>Third-party service interruptions</li>
              <li>Force majeure events</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Account Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to terminate subscriptions for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Violation of our Terms of Use</li>
              <li>Fraudulent activity</li>
              <li>Payment disputes or chargebacks</li>
              <li>Abuse of our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Subscription Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may modify these subscription terms at any time. Material changes will be communicated via email or through the app. Continued use of the service constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about your subscription, please contact us at:
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



