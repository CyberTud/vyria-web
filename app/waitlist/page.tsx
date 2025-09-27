'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface WaitlistEntry {
  id: number
  email: string
  created_at: string
}

export default function WaitlistPage() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [entries, setEntries] = useState<WaitlistEntry[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
      const response = await fetch(`${apiUrl}/api/waitlist/all`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()

      if (response.ok) {
        setEntries(data.entries)
        setIsAuthenticated(true)
      } else {
        setError('Invalid password')
      }
    } catch (error) {
      setError('Failed to fetch waitlist')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
  }

  const exportCSV = () => {
    const csv = [
      ['ID', 'Email', 'Signup Date'],
      ...entries.map(entry => [
        entry.id.toString(),
        entry.email,
        formatDate(entry.created_at)
      ])
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute('download', 'vyria-waitlist.csv')
    a.click()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">Waitlist Admin</h1>

          {!isAuthenticated ? (
            <form onSubmit={handleSubmit} className="max-w-md">
              <div className="space-y-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition disabled:opacity-50"
                >
                  {loading ? 'Loading...' : 'Access Waitlist'}
                </button>
                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-semibold">
                    Total signups: <span className="text-blue-400">{entries.length}</span>
                  </p>
                </div>
                <button
                  onClick={exportCSV}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition"
                >
                  Export CSV
                </button>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-6 py-4 text-left text-gray-400">#</th>
                      <th className="px-6 py-4 text-left text-gray-400">Email</th>
                      <th className="px-6 py-4 text-left text-gray-400">Signup Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {entries.map((entry, index) => (
                      <motion.tr
                        key={entry.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-white/5 hover:bg-white/5 transition"
                      >
                        <td className="px-6 py-4 text-gray-500">{entry.id}</td>
                        <td className="px-6 py-4 font-medium">{entry.email}</td>
                        <td className="px-6 py-4 text-gray-400">
                          {formatDate(entry.created_at)}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>

                {entries.length === 0 && (
                  <div className="px-6 py-12 text-center text-gray-500">
                    No signups yet
                  </div>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}