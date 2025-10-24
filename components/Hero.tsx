'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import AppStoreButtons from './AppStoreButtons'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-badge', {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
      })
        .from('.hero-title', {
          y: 40,
          opacity: 0,
          duration: 0.8,
        }, '-=0.2')
        .from('.hero-description', {
          y: 30,
          opacity: 0,
          duration: 0.6,
        }, '-=0.4')
        .from('.hero-cta', {
          y: 20,
          opacity: 0,
          duration: 0.6,
        }, '-=0.3')
        .from('.hero-stats > *', {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.5,
        }, '-=0.2')

      // Parallax scroll effect
      gsap.to('.hero-bg-accent', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: 200,
        opacity: 0.5,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} id="download" className="relative min-h-screen bg-gradient-to-b from-white via-yellow-50/30 to-white overflow-hidden">
      {/* Background accent */}
      <div className="hero-bg-accent absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-bl-[200px] opacity-60 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          {/* Mascot Logo */}
          <div className="hero-mascot mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-yellow-400 rounded-3xl blur-2xl opacity-30 animate-pulse" />
              <Image
                src="/vyria_logo.png"
                alt="Vyria Mascot"
                width={140}
                height={140}
                className="relative rounded-3xl shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 border border-yellow-200 rounded-full mb-8">
            <span className="text-2xl">💬</span>
            <span className="text-sm font-semibold text-gray-900">The Universal Language Interface</span>
          </div>

          {/* Title */}
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Practice Real
            <br />
            <span className="text-yellow-500">Conversations</span>
          </h1>

          {/* Description */}
          <p className="hero-description text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Master any language through AI-powered conversations. Practice job interviews, travel scenarios, 
            and everyday situations with instant feedback. Download now and start your language journey!
          </p>

          {/* CTA */}
          <div className="hero-cta mb-12">
            <AppStoreButtons />
          </div>

          {/* Stats */}
          <div className="hero-stats flex flex-wrap justify-center gap-8 md:gap-12 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">AI Practice</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Scenarios</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">80+</div>
              <div className="text-sm text-gray-600">Languages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">Real-time</div>
              <div className="text-sm text-gray-600">Feedback</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  )
}
