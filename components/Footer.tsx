import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-3">Vyria</h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Practice real conversations in any language. From learning to understanding — 
              building the future of communication.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#vision" className="text-gray-400 hover:text-white transition-colors">Vision</a></li>
              <li><a href="#app" className="text-gray-400 hover:text-white transition-colors">App</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://apps.apple.com/us/app/vyria-language-learning/id6753706880" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Download App</a></li>
              <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            Vyria @ 2025
          </p>
          <div className="flex gap-4 text-sm text-gray-500 flex-wrap">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/data-protection" className="hover:text-white transition-colors">Data Protection</Link>
            <Link href="/subscription-terms" className="hover:text-white transition-colors">Subscription Terms</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
