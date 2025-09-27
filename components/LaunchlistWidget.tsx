'use client'

import { useEffect, useState } from 'react'

export default function LaunchlistWidget() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Reinitialize Launchlist widgets after mount
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).launchlist) {
        (window as any).launchlist.init()
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Show placeholder during SSR
  if (!mounted) {
    return (
      <div className="h-[180px] flex items-center justify-center">
        <button className="px-6 py-3 bg-white text-black font-bold rounded-full">
          Join Waitlist
        </button>
      </div>
    )
  }

  // Render the actual widget on client side
  return (
    <div
      className="launchlist-widget"
      data-key-id="joHpKT"
      data-height="180px"
      dangerouslySetInnerHTML={{ __html: '' }}
    />
  )
}