'use client'

export default function CTA() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-normal mb-4 text-white">
          Join the waitlist
        </h2>
        <p className="text-gray-400 mb-6">
          Get early access when we launch
        </p>
        <button className="px-6 py-2 bg-white text-gray-900 rounded text-sm hover:bg-gray-100 transition">
          Sign up
        </button>
      </div>
    </section>
  )
}