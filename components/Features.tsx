'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Brain, TrendingUp, Users, Mic, BookOpen } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Real-world scenarios',
    description: 'Practice conversations you\'ll actually use in real life.',
  },
  {
    icon: Brain,
    title: 'Adaptive learning',
    description: 'AI that adjusts to your level and learning pace.',
  },
  {
    icon: MessageSquare,
    title: 'Instant feedback',
    description: 'Get corrections without interrupting the flow.',
  },
  {
    icon: Mic,
    title: 'Voice & text',
    description: 'Practice speaking or typing at your comfort level.',
  },
  {
    icon: BookOpen,
    title: 'Contextual learning',
    description: 'Learn grammar and vocabulary through conversation.',
  },
  {
    icon: TrendingUp,
    title: 'Track progress',
    description: 'See your improvement over time.',
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold mb-4 text-slate-900">
            Features
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to learn a language naturally
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-xl h-full">
                <feature.icon className="w-8 h-8 text-teal-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}