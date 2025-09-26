'use client'

import { motion } from 'framer-motion'

const scenarios = [
  'Job interview in Spanish',
  'Ordering at a French café',
  'Apartment viewing in German',
  'Doctor visit in Japanese',
  'Airport check-in in Italian',
  'Hotel booking in Portuguese',
  'Shopping in Korean',
  'Small talk in Mandarin',
  'Customer service in Russian',
  'Dating in Dutch',
  'Business meeting in Arabic',
  'Emergency situations in Hindi'
]

export default function Scenarios() {
  return (
    <section id="scenarios" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-normal mb-8 text-gray-800">
            Practice real situations
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                viewport={{ once: true }}
                className="text-sm text-gray-600 py-2"
              >
                {scenario}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}