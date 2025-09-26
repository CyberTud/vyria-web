'use client'

import { motion } from 'framer-motion'

const conversations = [
  {
    lang: 'Spanish',
    messages: [
      { user: true, text: 'Necesito encontrar un apartamento' },
      { user: false, text: '¿En qué zona estás buscando?' },
      { user: true, text: 'Cerca del centro, con dos habitaciones' }
    ]
  },
  {
    lang: 'French',
    messages: [
      { user: true, text: 'Je voudrais un café, s\'il vous plaît' },
      { user: false, text: 'Avec du lait ou noir?' },
      { user: true, text: 'Avec un peu de lait' }
    ]
  },
  {
    lang: 'Japanese',
    messages: [
      { user: true, text: 'すみません、駅はどこですか' },
      { user: false, text: 'まっすぐ行って、右に曲がってください' },
      { user: true, text: 'ありがとうございます' }
    ]
  }
]

export default function Demo() {
  return (
    <section id="demo" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-normal mb-8 text-gray-800">
          Live conversations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {conversations.map((convo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-4"
            >
              <div className="text-xs text-gray-500 mb-3">{convo.lang}</div>
              <div className="space-y-2">
                {convo.messages.map((msg, i) => (
                  <div key={i} className={`text-sm ${msg.user ? 'text-right' : 'text-left'}`}>
                    <span className={`inline-block px-3 py-1 rounded-lg ${
                      msg.user ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
                    }`}>
                      {msg.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}