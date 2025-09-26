'use client'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-black text-white">
            V
          </div>

          <div className="flex gap-8 items-center">
            <a href="#scenarios" className="text-gray-400 hover:text-white transition text-sm">
              Scenarios
            </a>
            <a href="#demo" className="text-gray-400 hover:text-white transition text-sm">
              Examples
            </a>
            <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-sm font-bold rounded-full hover:scale-105 transition-transform">
              Get Access
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}