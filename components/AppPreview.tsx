'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function AppPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.app-preview-header', {
        scrollTrigger: {
          trigger: '.app-preview-header',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      })

      // Infinite scroll animation - always up
      if (carouselRef.current) {
        const carousel = carouselRef.current
        
        // Wait for images to load to get accurate height
        setTimeout(() => {
          const halfHeight = carousel.scrollHeight / 2
          carousel.scrollTop = halfHeight

          gsap.to(carousel, {
            scrollTop: 0,
            duration: 60,
            ease: 'none',
            repeat: -1,
            repeatDelay: 0,
            onRepeat: () => {
              carousel.scrollTop = halfHeight
            }
          })
        }, 100)
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const screenshots = [
    '/vyria_app0 2.jpg',
    '/vyria_app1.jpg',
    '/vyria_app2.jpg',
    '/vyria_app3.jpg',
    '/vyria_app4.jpg',
    '/vyria_app82.jpg',
    '/vyria_app83.jpg',
    '/vyria_app84.jpg',
    '/vyria_app85.jpg',
    '/vyria_app87.jpg',
  ]

  return (
    <section ref={sectionRef} id="app" className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="app-preview-header text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-100 border border-yellow-200 rounded-lg mb-4">
            <span className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Coming Soon</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            See Vyria in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            A beautiful, intuitive interface designed to make language learning natural and engaging
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-lg">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-500">Download on the</div>
                <div className="text-sm font-bold text-gray-900">App Store</div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-lg">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-500">Get it on</div>
                <div className="text-sm font-bold text-gray-900">Google Play</div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 font-medium">
            iOS and Android release almost ready • Join waitlist for early access
          </p>
        </div>

        {/* Vertical Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div 
            ref={carouselRef}
            className="h-[600px] overflow-hidden rounded-3xl bg-gradient-to-b from-gray-50 to-white border-2 border-gray-200 shadow-2xl"
            style={{ pointerEvents: 'none' }}
          >
            <div className="flex flex-col gap-4 p-6">
              {[...screenshots, ...screenshots].map((screenshot, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-full max-w-sm mx-auto bg-white rounded-2xl border-2 border-gray-200 overflow-hidden"
                >
                  <Image
                    src={screenshot}
                    alt={`Vyria App Screenshot`}
                    width={300}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none rounded-t-3xl z-10" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none rounded-b-3xl z-10" />
        </div>
      </div>
    </section>
  )
}
