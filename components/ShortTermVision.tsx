'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ShortTermVision() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section-header', {
        scrollTrigger: {
          trigger: '.section-header',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
      })

      gsap.from('.feature-item', {
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = [
    {
      title: 'Practice',
      description: 'Chat with AI in realistic scenarios — job interviews, travel, everyday conversations.',
    },
    {
      title: 'Instant Feedback',
      description: 'Get real-time corrections and suggestions. Learn from mistakes immediately.',
    },
    {
      title: 'Real-Life Scenarios',
      description: 'Navigate situations that matter — ordering food, networking, professional meetings.',
    },
    {
      title: 'AI Correction',
      description: 'Context-aware AI that helps you sound natural, not robotic.',
    },
    {
      title: 'Conversational Learning',
      description: 'Build confidence through conversation, not vocabulary lists.',
    },
    {
      title: 'Track Progress',
      description: 'Monitor your fluency, unlock new scenarios, see improvement.',
    },
  ]

  return (
    <section ref={sectionRef} id="vision" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="section-header mb-16">
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-lg mb-4">
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">0-18 Months</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 max-w-3xl">
            Start speaking confidently in any language
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Designed for immigrants, professionals, and learners who want practical fluency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="feature-item"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
