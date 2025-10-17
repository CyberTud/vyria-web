import Link from 'next/link'

export default function SupportPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Support</h1>
        <p className="text-gray-600 mb-8">We're here to help you get the most out of Vyria</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Have a question or need assistance? Our support team is ready to help you.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:tudor@vyria.app" className="text-yellow-600 hover:text-yellow-700">tudor@vyria.app</a>
              </p>
              <p className="text-gray-700">
                <strong>Response time:</strong> We typically respond within 24 hours
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What is Vyria?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vyria is an AI-powered language learning platform that helps you practice real conversations 
                  in over 80 languages. Our advanced AI provides instant feedback on grammar, pronunciation, 
                  and natural language usage.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How does Vyria work?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Simply select your target language and proficiency level, then start chatting! Our AI adapts 
                  to your level, provides real-time feedback, and creates engaging scenarios to help you improve 
                  naturally through conversation.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What languages are supported?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vyria supports over 80 languages including Spanish, French, German, Japanese, Korean, 
                  Mandarin Chinese, Arabic, Portuguese, Italian, Russian, and many more.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is Vyria available on all platforms?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vyria is currently available on iOS and Android devices. We're working on bringing Vyria 
                  to more platforms in the future.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How much does Vyria cost?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vyria offers various subscription plans to fit your learning needs. You can view our pricing 
                  options within the app. We also offer a free trial so you can experience Vyria before subscribing.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I cancel my subscription?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, you can cancel your subscription at any time through your device's subscription settings 
                  (App Store for iOS or Google Play for Android). Your access will continue until the end of 
                  your current billing period.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I delete my account?</h3>
                <p className="text-gray-700 leading-relaxed">
                  You can delete your account directly from the app settings. Go to Settings → Account → 
                  Delete Account. Alternatively, you can contact us at{' '}
                  <a href="mailto:support@vyria.app" className="text-yellow-600 hover:text-yellow-700">support@vyria.app</a>{' '}
                  to request account deletion.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my data secure?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, we take data security very seriously. All your conversations and learning data are 
                  encrypted and stored securely. We never share your personal information with third parties. 
                  Read our <Link href="/privacy" className="text-yellow-600 hover:text-yellow-700">Privacy Policy</Link> for more details.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">I found a bug. How do I report it?</h3>
                <p className="text-gray-700 leading-relaxed">
                  We appreciate bug reports! Please email us at{' '}
                  <a href="mailto:support@vyria.app" className="text-yellow-600 hover:text-yellow-700">support@vyria.app</a>{' '}
                  with details about the issue, including your device model, OS version, and steps to reproduce the bug.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Inquiries</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For partnerships, press inquiries, or other business-related matters, please contact:
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> <a href="mailto:tudor@vyria.app" className="text-yellow-600 hover:text-yellow-700">tudor@vyria.app</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal & Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions related to our policies and legal matters:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <Link href="/privacy" className="text-yellow-600 hover:text-yellow-700">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-yellow-600 hover:text-yellow-700">Terms of Service</Link>
              </li>
            </ul>
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

