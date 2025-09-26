'use client'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-normal text-gray-800">
            Vyria
          </div>

          <div className="flex gap-6">
            <a href="#scenarios" className="text-gray-600 hover:text-gray-900 transition">
              Scenarios
            </a>
            <a href="#demo" className="text-gray-600 hover:text-gray-900 transition">
              Demo
            </a>
            <button className="px-4 py-1.5 bg-gray-900 text-white rounded text-sm hover:bg-gray-800 transition">
              Waitlist
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}