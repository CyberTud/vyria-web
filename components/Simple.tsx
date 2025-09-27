'use client'

import { motion } from 'framer-motion'
import WaitlistForm from './WaitlistForm'

export default function Simple() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-24"
        >
          {/* What it does */}
          <div className="text-white">
            <p className="text-lg text-gray-500 mb-4">What it does</p>
            <h2 className="text-3xl font-light leading-relaxed">
              Practice real conversations in any language.
              Job interviews, travel, dating - whatever you need.
              The AI adapts to your level and gives instant feedback.
            </h2>
          </div>

          {/* How it works */}
          <div className="text-white">
            <p className="text-lg text-gray-500 mb-4">How it works</p>
            <h2 className="text-3xl font-light leading-relaxed">
              You chat. It responds.
              You learn through context, not memorization.
              Like texting a friend who happens to be fluent.
            </h2>
          </div>

          {/* When it launches */}
          <div className="text-white">
            <p className="text-lg text-gray-500 mb-4">When</p>
            <h2 className="text-3xl font-light leading-relaxed">
              Q1 2025. iOS and Android.
            </h2>
          </div>

          {/* Join */}
          <div className="pt-16 border-t border-gray-900" id="waitlist">
            <WaitlistForm />
          </div>
        </motion.div>
      </div>
    </section>
  )
}