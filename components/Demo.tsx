'use client'

import { motion } from 'framer-motion'

export default function Demo() {
  return (
    <section id="demo" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-white mb-4">
            Conversations That Matter
          </h2>
          <p className="text-xl text-gray-400">
            Learn through context, not memorization
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-black rounded-2xl p-8 border border-gray-800">
            <div className="space-y-6">
              {/* Spanish Example */}
              <div className="space-y-3">
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white px-5 py-3 rounded-2xl rounded-br-sm max-w-xs">
                    I need to schedule an interview
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-800 text-white px-5 py-3 rounded-2xl rounded-bl-sm max-w-xs">
                    Necesito programar una entrevista
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-emerald-900/50 text-emerald-400 px-5 py-3 rounded-2xl max-w-md italic">
                    ✓ Great! "Programar" is perfect here. You could also say "agendar" in some countries.
                  </div>
                </div>
              </div>

              {/* French Example */}
              <div className="space-y-3 pt-4 border-t border-gray-800">
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white px-5 py-3 rounded-2xl rounded-br-sm max-w-xs">
                    Where is the nearest metro?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-800 text-white px-5 py-3 rounded-2xl rounded-bl-sm max-w-xs">
                    Où est le métro le plus proche?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500">
            Instant feedback • Grammar tips • Cultural context
          </p>
        </motion.div>
      </div>
    </section>
  )
}