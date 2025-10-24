'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface FeedbackEntry {
  id: number
  name: string | null
  email: string
  category: string
  message: string
  status: string
  created_at: string
  updated_at: string
}

export default function FeedbackResponse() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [feedback, setFeedback] = useState<FeedbackEntry[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<{ [key: number]: string }>({})

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
      const response = await fetch(`${apiUrl}/api/feedback/all`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()

      if (data.feedback) {
        setIsAuthenticated(true)
        setFeedback(data.feedback)
        // Initialize status tracking
        const statusMap: { [key: number]: string } = {}
        data.feedback.forEach((entry: FeedbackEntry) => {
          statusMap[entry.id] = entry.status
        })
        setSelectedStatus(statusMap)
      } else {
        setError(data.error || 'Invalid password')
      }
    } catch (error) {
      setError('Failed to authenticate. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleStatusUpdate = async (id: number, newStatus: string) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
      const response = await fetch(`${apiUrl}/api/feedback/status`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password,
          id,
          status: newStatus,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSelectedStatus(prev => ({
          ...prev,
          [id]: newStatus
        }))
        // Update the feedback array
        setFeedback(prev => prev.map(entry => 
          entry.id === id 
            ? { ...entry, status: newStatus, updated_at: new Date().toISOString() }
            : entry
        ))
      } else {
        alert('Failed to update status: ' + data.error)
      }
    } catch (error) {
      alert('Failed to update status. Please try again.')
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'reviewed': return 'bg-yellow-100 text-yellow-800'
      case 'in-progress': return 'bg-orange-100 text-orange-800'
      case 'completed': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (!isAuthenticated) {
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

        <div className="max-w-md mx-auto px-6 py-16">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Admin Access
            </h1>
            <p className="text-gray-600 mb-8 text-center">
              Enter admin password to view feedback responses
            </p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 transition"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-500 text-white font-bold py-3 px-6 rounded-xl hover:bg-yellow-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Authenticating...' : 'Access Feedback'}
              </button>
            </form>
          </div>
        </div>
      </div>
    )
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
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                {feedback.length} feedback entries
              </span>
              <Link 
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Feedback Responses
          </h1>
          <p className="text-gray-600">
            Manage and respond to user feedback
          </p>
        </div>

        <div className="space-y-6">
          {feedback.map((entry) => (
            <div key={entry.id} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {entry.name || 'Anonymous'}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedStatus[entry.id] || entry.status)}`}>
                      {selectedStatus[entry.id] || entry.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <span>{entry.email}</span>
                    <span>•</span>
                    <span className="capitalize">{entry.category}</span>
                    <span>•</span>
                    <span>{formatDate(entry.created_at)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={selectedStatus[entry.id] || entry.status}
                    onChange={(e) => handleStatusUpdate(entry.id, e.target.value)}
                    className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:ring-yellow-500 focus:border-yellow-500"
                  >
                    <option value="new">New</option>
                    <option value="reviewed">Reviewed</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 whitespace-pre-wrap">{entry.message}</p>
              </div>

              {entry.updated_at !== entry.created_at && (
                <div className="mt-3 text-xs text-gray-500">
                  Last updated: {formatDate(entry.updated_at)}
                </div>
              )}
            </div>
          ))}

          {feedback.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No feedback yet</h3>
              <p className="text-gray-600">Feedback submissions will appear here once users start submitting.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
