'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function InteractiveDemo() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeScenario, setActiveScenario] = useState(0)

  const scenarios = [
    {
      title: 'Job Interview',
      description: 'Practice professional conversations',
      emoji: '💼',
      color: 'yellow',
    },
    {
      title: 'Travel',
      description: 'Navigate airports and hotels',
      emoji: '✈️',
      color: 'yellow',
    },
    {
      title: 'Social',
      description: 'Make friends naturally',
      emoji: '🎭',
      color: 'yellow',
    },
    {
      title: 'Daily Life',
      description: 'Handle everyday tasks',
      emoji: '🏪',
      color: 'yellow',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.demo-section-header', {
        scrollTrigger: {
          trigger: '.demo-section-header',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      })

      gsap.from('.scenario-card', {
        scrollTrigger: {
          trigger: '.scenarios-grid',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
      })

      gsap.from('.demo-preview', {
        scrollTrigger: {
          trigger: '.demo-preview',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="demo-section-header text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Choose Your Scenario
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practice conversations that matter to you. From professional to personal, we've got you covered.
          </p>
        </div>

        {/* Scenario Cards */}
        <div className="scenarios-grid grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {scenarios.map((scenario, i) => (
            <button
              key={i}
              onClick={() => setActiveScenario(i)}
              className={`scenario-card p-6 rounded-xl border-2 transition-all text-left ${
                activeScenario === i
                  ? 'border-yellow-500 bg-yellow-50 shadow-lg scale-105'
                  : 'border-gray-200 bg-white hover:border-yellow-200 hover:shadow-md'
              }`}
            >
              <div className="text-5xl mb-4">{scenario.emoji}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {scenario.title}
              </h3>
              <p className="text-sm text-gray-600">{scenario.description}</p>
            </button>
          ))}
        </div>

        {/* Demo Preview */}
        <div className="demo-preview bg-gradient-to-br from-gray-50 to-yellow-50/30 rounded-2xl p-8 md:p-12 border border-gray-200">
          <div className="max-w-3xl mx-auto">
            {/* Chat Header */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
              <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center text-3xl">
                {scenarios[activeScenario].emoji}
              </div>
              <div>
                <div className="font-bold text-xl text-gray-900">AI Instructor</div>
                <div className="text-sm text-gray-500">{scenarios[activeScenario].title} Practice</div>
              </div>
              <div className="ml-auto">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                  ● Live
                </span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0" />
                <div className="bg-white rounded-2xl rounded-tl-sm px-5 py-3 shadow-sm max-w-md">
                  <p className="text-gray-800">Hi! Ready to practice your {scenarios[activeScenario].title.toLowerCase()} scenario?</p>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <div className="bg-yellow-500 rounded-2xl rounded-tr-sm px-5 py-3 shadow-sm max-w-md">
                  <p className="text-white">Yes, let's start!</p>
                </div>
                <div className="w-8 h-8 bg-yellow-200 rounded-full flex-shrink-0" />
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0" />
                <div className="bg-white rounded-2xl rounded-tl-sm px-5 py-3 shadow-sm max-w-md">
                  <p className="text-gray-800">Perfect! I'll give you instant feedback and corrections as we chat.</p>
                </div>
              </div>

              {/* Typing indicator */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0" />
                <div className="bg-white rounded-2xl rounded-tl-sm px-5 py-3 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="mt-8 flex gap-3">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-5 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-yellow-500"
                disabled
              />
              <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-xl hover:bg-yellow-600 transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
