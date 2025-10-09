import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ShortTermVision from '@/components/ShortTermVision'
import AppPreview from '@/components/AppPreview'
import Testimonials from '@/components/Testimonials'
import LongTermVision from '@/components/LongTermVision'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <ShortTermVision />
        <AppPreview />
        <Testimonials />
        <LongTermVision />
        <Footer />
      </main>
    </>
  )
}
