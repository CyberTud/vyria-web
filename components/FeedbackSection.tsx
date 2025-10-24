'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function FeedbackSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feedback-header', {
        scrollTrigger: {
          trigger: '.feedback-header',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
      })

      gsap.from('.feedback-card', {
        scrollTrigger: {
          trigger: '.feedback-cards',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="feedback-header text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-100 border border-yellow-200 rounded-lg mb-4">
            <span className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Your Voice Matters</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Help Shape Vyria's Future
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your feedback directly influences our product roadmap. Share your ideas, report issues, or suggest new features that could help thousands of language learners worldwide.
          </p>
        </div>

        {/* Feedback Cards */}
        <div className="feedback-cards grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">💡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Feature Requests</h3>
            <p className="text-gray-600 mb-6">
              Have an idea for a new feature? We regularly implement user suggestions and credit contributors on our website.
            </p>
            <div className="text-sm text-yellow-600 font-semibold">
              ✓ Featured on our roadmap
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🐛</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Bug Reports</h3>
            <p className="text-gray-600 mb-6">
              Found a bug? Help us improve by reporting issues. We prioritize fixes based on user feedback and impact.
            </p>
            <div className="text-sm text-blue-600 font-semibold">
              ✓ Fast response guaranteed
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">UI/UX Improvements</h3>
            <p className="text-gray-600 mb-6">
              Suggestions for better design or user experience? We value your input on making Vyria more intuitive and beautiful.
            </p>
            <div className="text-sm text-green-600 font-semibold">
              ✓ Design team reviews all feedback
            </div>
          </div>
        </div>

        {/* Recent Examples */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Recent Community Feedback</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-yellow-600 font-bold text-lg">A</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-gray-900">Alex M.</span>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Feature Request</span>
                </div>
                <p className="text-gray-700 italic">"Would love to see voice recognition for pronunciation practice. This would make the app even more immersive!"</p>
                <div className="text-xs text-gray-500 mt-2">✓ Under review by development team</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-yellow-600 font-bold text-lg">S</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-gray-900">Sarah K.</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">UI/UX</span>
                </div>
                <p className="text-gray-700 italic">"The conversation flow is great, but could we have a dark mode option? I use the app mostly at night."</p>
                <div className="text-xs text-gray-500 mt-2">✓ Added to next update</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/feedback"
            className="inline-flex items-center gap-3 bg-yellow-500 text-white font-bold py-4 px-8 rounded-xl hover:bg-yellow-600 transition-colors"
          >
            <span className="text-xl">💬</span>
            Share Your Feedback
          </Link>
          <p className="text-gray-600 mt-4">
            Or email us directly at <a href="mailto:tudor@vyria.app" className="text-yellow-600 hover:text-yellow-700 font-medium">tudor@vyria.app</a>
          </p>
        </div>
      </div>
    </section>
  )
}
