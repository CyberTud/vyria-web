'use client'

import { motion } from 'framer-motion'

const steps = [
  { number: '1', title: 'Sign up', description: 'Create your account and choose your target language' },
  { number: '2', title: 'Pick a scenario', description: 'Select from dozens of real-life situations' },
  { number: '3', title: 'Start chatting', description: 'Have natural conversations with instant feedback' },
  { number: '4', title: 'Track progress', description: 'Watch your fluency improve over time' }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold mb-4 text-slate-900">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Four simple steps to speaking a new language
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">{step.title}</h3>
              <p className="text-slate-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}