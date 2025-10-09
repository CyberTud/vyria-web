'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LongTermVision() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.long-term-header', {
        scrollTrigger: {
          trigger: '.long-term-header',
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
      })

      gsap.from('.vision-point', {
        scrollTrigger: {
          trigger: '.vision-points',
          start: 'top 85%',
        },
        opacity: 0,
        x: -20,
        stagger: 0.1,
        duration: 0.5,
      })

      gsap.from('.evolution-box', {
        scrollTrigger: {
          trigger: '.evolution-box',
          start: 'top 85%',
        },
        opacity: 0,
        scale: 0.98,
        duration: 0.8,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const visionPoints = [
    {
      title: 'Multilingual Identity',
      description: 'Enable people to maintain their native language while communicating globally',
    },
    {
      title: 'AI Communication Layer',
      description: 'Real-time speech and text translation powered by advanced AI models',
    },
    {
      title: 'B2B Solutions',
      description: 'Enterprise-grade tools for global companies to enable seamless multilingual collaboration',
    },
    {
      title: 'Borderless Workforce',
      description: 'Companies can hire and work with talent from anywhere, regardless of language barriers',
    },
    {
      title: 'Education & Support',
      description: 'Break down language barriers in schools, hospitals, and government services',
    },
    {
      title: 'Cultural Preservation',
      description: 'Support lesser-known languages while enabling global communication',
    },
    {
      title: 'Real-Time Infrastructure',
      description: 'Low-latency translation built into communication platforms at the OS level',
    },
    {
      title: 'Global Customer Support',
      description: 'Enable businesses to provide support in any language without hiring multilingual staff',
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="long-term-header mb-12">
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-lg mb-4">
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">2-5 Years</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 max-w-3xl">
            The Universal Language Interface
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mb-4">
            Building infrastructure for a borderless world where people speak naturally 
            and are instantly understood across any language.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl">
            Our goal is to become the communication layer for global interaction — enabling real-time 
            multilingual conversations, cross-language collaboration, and seamless integration with 
            education, work, and support systems worldwide.
          </p>
        </div>

        {/* Vision Points */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Focus Areas</h3>
          <div className="vision-points grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visionPoints.map((point, i) => (
              <div key={i} className="vision-point">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-500 flex-shrink-0 mt-1 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{point.title}</h4>
                    <p className="text-sm text-gray-600">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Evolution Statement */}
        <div className="evolution-box bg-white rounded-xl p-8 md:p-12 border border-gray-200">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Evolution</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Vyria evolves from a <strong>language-learning tool</strong> into a{' '}
              <strong>language-understanding infrastructure</strong>, powered by AI that{' '}
              <strong>connects people</strong>, not just teaches them.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We're not just building an app — we're building the foundation for human 
              communication in a multilingual world. Where language is no longer a barrier 
              to opportunity, collaboration, or connection.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
