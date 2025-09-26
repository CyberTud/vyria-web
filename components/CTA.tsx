'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
            Stop Learning.<br/>
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Start Speaking.
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Join thousands waiting for the language learning revolution
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-lg font-bold rounded-full hover:scale-105 transition-transform shadow-2xl">
            Get Early Access
          </button>
          <p className="text-gray-600 text-sm mt-6">
            No spam. No credit card. Just updates.
          </p>
        </motion.div>
      </div>
    </section>
  )
}