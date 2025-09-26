'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Software Engineer',
    avatar: '👩‍💻',
    content: "Vyria transformed my Spanish learning journey. The AI conversations feel so natural, it's like chatting with a patient native speaker!",
    rating: 5,
    language: 'Learning Spanish'
  },
  {
    name: 'Marcus Johnson',
    role: 'Business Consultant',
    avatar: '👨‍💼',
    content: "I needed to learn French for work. Vyria's adaptive learning helped me go from beginner to conversational in just 3 months.",
    rating: 5,
    language: 'Learning French'
  },
  {
    name: 'Yuki Tanaka',
    role: 'College Student',
    avatar: '👩‍🎓',
    content: "The grammar explanations are clear and the cultural context tips are invaluable. Best language app I've ever used!",
    rating: 5,
    language: 'Learning Korean'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="text-gradient">Language Learners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users who are mastering new languages with Vyria
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Quote className="w-8 h-8 text-primary-200 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-xs text-primary-500 font-medium">{testimonial.language}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}