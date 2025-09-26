'use client'

import { motion } from 'framer-motion'

export default function AppInfo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Vyria
          </h1>
          <p className="text-2xl md:text-3xl text-slate-600 mb-8">
            Chat and Learn Any Language
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
            Master languages through real conversations. Practice job interviews, travel scenarios,
            restaurant orders, and dozens of other real-life situations with an AI that adapts to your level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
              Join Waitlist
            </button>
            <button className="px-8 py-3 bg-teal-50 text-teal-700 rounded-lg font-medium hover:bg-teal-100 transition">
              Learn More
            </button>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            Coming to iOS & Android • Q1 2025
          </p>
        </motion.div>
      </div>
    </section>
  )
}