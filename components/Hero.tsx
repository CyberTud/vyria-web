'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import WaitlistForm from './WaitlistForm'

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-emerald-600/20"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-7xl md:text-8xl font-black text-white mb-4 tracking-tight">
            VYRIA
          </h1>
          <p className="text-2xl md:text-3xl text-gray-400 font-light">
            Chat. Learn. Speak.
          </p>
        </motion.div>

        {/* App Screenshot - Main Focus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          className="relative max-w-5xl w-full"
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

            {/* Image container */}
            <div className="relative bg-gradient-to-b from-gray-900 to-black p-1 rounded-2xl">
              <Image
                src="/vyria.png"
                alt="Vyria App"
                width={1400}
                height={900}
                className="w-full h-auto rounded-xl"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm mb-6">
            Real conversations. Real languages. Real progress.
          </p>
          <WaitlistForm />
        </motion.div>
      </div>

      {/* Floating language labels */}
      <motion.div
        className="absolute top-32 left-10 text-white/20 text-4xl font-bold"
        animate={{ y: [0, -20, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        Hola
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-10 text-white/20 text-4xl font-bold"
        animate={{ y: [0, 20, 0], rotate: [5, -5, 5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        Bonjour
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-20 text-white/20 text-4xl font-bold"
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        こんにちは
      </motion.div>
    </section>
  )
}