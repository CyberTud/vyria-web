'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Feedback() {
  const [formData, setFormData] = useState({
    email: '',
    feedback: '',
    category: 'general',
    name: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    if (!formData.email || !formData.feedback) {
      setStatus('error')
      setMessage('Email and feedback are required.')
      return
    }

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name || null,
          email: formData.email,
          category: formData.category,
          message: formData.feedback,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setMessage(data.message)
        setFormData({ email: '', feedback: '', category: 'general', name: '' })
      } else {
        setStatus('error')
        setMessage(data.error || 'Failed to submit feedback. Please try again later.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Failed to submit feedback. Please try again later.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-yellow-50/30 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/vyria_logo.png"
                alt="Vyria"
                className="w-10 h-10 rounded-lg group-hover:scale-110 transition-transform"
              />
              <span className="text-2xl font-bold text-gray-900">Vyria</span>
            </Link>
            <Link 
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Help Shape Vyria's Future
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your feedback directly influences our product roadmap. Share your ideas, report issues, or suggest new features.
          </p>
        </div>

        {/* Encouragement Section */}
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-200 border border-yellow-300 rounded-full px-4 py-2 mb-4">
              <span className="text-2xl">🌟</span>
              <span className="text-yellow-800 font-semibold">Featured Feedback</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Voice Matters</h2>
            <p className="text-lg text-gray-700 mb-6">
              We regularly feature user feedback on our website and social media. Your suggestions could be the next big feature that helps thousands of language learners worldwide.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-6 border border-yellow-200">
                <div className="text-3xl mb-2">📈</div>
                <h3 className="font-bold text-gray-900 mb-2">Product Roadmap</h3>
                <p className="text-sm text-gray-600">Your feedback directly influences our development priorities</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-yellow-200">
                <div className="text-3xl mb-2">🏆</div>
                <h3 className="font-bold text-gray-900 mb-2">Recognition</h3>
                <p className="text-sm text-gray-600">Featured feedback gets highlighted on our site</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-yellow-200">
                <div className="text-3xl mb-2">💡</div>
                <h3 className="font-bold text-gray-900 mb-2">Innovation</h3>
                <p className="text-sm text-gray-600">Help us build the future of language learning</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Share Your Feedback</h2>
          
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">{message}</p>
              <button
                onClick={() => setStatus('idle')}
                className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-xl hover:bg-yellow-600 transition-colors"
              >
                Submit Another Feedback
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="How should we credit you?"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                  Feedback Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="general">General Feedback</option>
                  <option value="feature">Feature Request</option>
                  <option value="bug">Bug Report</option>
                  <option value="improvement">UI/UX Improvement</option>
                  <option value="content">Content Suggestion</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="feedback" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Feedback *
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                  placeholder="Tell us what you think! What would you like to see improved? What features would help you learn better? Any bugs you've encountered?"
                />
              </div>

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-700">{message}</p>
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-yellow-500 text-white font-bold py-4 px-8 rounded-xl hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Submitting...' : 'Submit Feedback'}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Recent Feedback Examples */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recent Community Feedback</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-bold">A</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Alex M.</div>
                  <div className="text-sm text-gray-500">Feature Request</div>
                </div>
              </div>
              <p className="text-gray-700 italic">"Would love to see voice recognition for pronunciation practice. This would make the app even more immersive!"</p>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-bold">S</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah K.</div>
                  <div className="text-sm text-gray-500">UI/UX Improvement</div>
                </div>
              </div>
              <p className="text-gray-700 italic">"The conversation flow is great, but could we have a dark mode option? I use the app mostly at night."</p>
            </div>
          </div>
        </div>

        {/* Contact Alternative */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Prefer to email directly? We'd love to hear from you!
          </p>
          <a
            href="mailto:tudor@vyria.app"
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors"
          >
            <span>📧</span>
            tudor@vyria.app
          </a>
        </div>
      </div>
    </div>
  )
}
