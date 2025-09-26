'use client'

import { motion } from 'framer-motion'

const scenarios = [
  { emoji: '💼', title: 'Job Interview', lang: 'Practice professional conversations' },
  { emoji: '✈️', title: 'Travel', lang: 'Navigate airports and hotels' },
  { emoji: '🍽️', title: 'Restaurants', lang: 'Order food like a local' },
  { emoji: '🏥', title: 'Medical', lang: 'Explain symptoms clearly' },
  { emoji: '🏠', title: 'Real Estate', lang: 'Find your perfect home' },
  { emoji: '❤️', title: 'Dating', lang: 'Express yourself naturally' },
]

export default function Scenarios() {
  return (
    <section id="scenarios" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-white mb-4">
            Learn by Living
          </h2>
          <p className="text-xl text-gray-400">
            Practice real-world scenarios in any language
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-600/50 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">{scenario.emoji}</div>
                <h3 className="text-xl font-bold text-white mb-2">{scenario.title}</h3>
                <p className="text-gray-400 text-sm">{scenario.lang}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}