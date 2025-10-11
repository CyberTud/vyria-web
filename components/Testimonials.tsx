'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonials-header', {
        scrollTrigger: {
          trigger: '.testimonials-header',
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
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
            duration: 40,
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

  const testimonials = [
    '/testimonials/IMG_3964 2.jpg',
    '/testimonials/IMG_3965.jpg',
    '/testimonials/IMG_3966.jpg',
    '/testimonials/IMG_3967.jpg',
    '/testimonials/IMG_3968.jpg',
    '/testimonials/IMG_3977.jpg',
    '/testimonials/IMG_3978.jpg',
  ]

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="testimonials-header text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-100 border border-yellow-200 rounded-full mb-6">
            <span className="text-sm font-semibold text-gray-900">💬 LOVED BY LEARNERS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What People Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from language learners on X (Twitter)
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
              {[...testimonials, ...testimonials].map((testimonial, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-full max-w-sm mx-auto bg-white rounded-2xl border-2 border-gray-200 overflow-hidden"
                >
                  <Image
                    src={testimonial}
                    alt={`User testimonial from X/Twitter`}
                    width={400}
                    height={600}
                    className="w-full h-auto object-contain"
                    priority={i < 3}
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
