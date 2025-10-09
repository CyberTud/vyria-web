'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      let lastScroll = 0
      const handleScroll = () => {
        const currentScroll = window.scrollY
        if (currentScroll > lastScroll && currentScroll > 100) {
          gsap.to(navRef.current, { y: -100, duration: 0.3 })
        } else {
          gsap.to(navRef.current, { y: 0, duration: 0.3 })
        }
        lastScroll = currentScroll
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, navRef)

    return () => ctx.revert()
  }, [])

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/vyria_logo.png"
              alt="Vyria"
              width={40}
              height={40}
              className="rounded-lg group-hover:scale-110 transition-transform"
            />
            <span className="text-2xl font-bold text-gray-900">Vyria</span>
          </a>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#vision" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Vision
            </a>
            <a href="#app" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              App
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Testimonials
            </a>
          </div>

          {/* CTA */}
          <a
            href="#waitlist"
            className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-xl hover:bg-yellow-600 transition-all hover:scale-105 shadow-lg shadow-yellow-500/20"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  )
}
