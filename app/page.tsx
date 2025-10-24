import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AppPreview from '@/components/AppPreview'
import FeedbackSection from '@/components/FeedbackSection'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <AppPreview />
        <FeedbackSection />
        <Testimonials />
        <Footer />
      </main>
    </>
  )
}
