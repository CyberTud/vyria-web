'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AppStoreButtons() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        {/* Available Now Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 border-2 border-green-200 rounded-full">
          <span className="text-2xl">🎉</span>
          <span className="text-lg font-bold text-green-700">Available Now!</span>
        </div>

        {/* App Store Button */}
        <div className="space-y-4">
          <a
            href="https://apps.apple.com/us/app/vyria-language-learning/id6753706880"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-4 hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
            >
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">📱</span>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </motion.div>
          </a>

          {/* Google Play Coming Soon */}
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-200 text-gray-500 px-8 py-4 rounded-2xl flex items-center gap-4 cursor-not-allowed opacity-75"
            >
              <div className="w-8 h-8 bg-gray-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🤖</span>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-400">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </motion.div>
            
            {/* Coming Soon Badge */}
            <div className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Coming Soon
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center space-y-2">
          <p className="text-gray-600 text-sm">
            Start practicing conversations in 80+ languages
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Free to download
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Premium features available
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
