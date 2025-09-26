import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Scenarios from '@/components/Scenarios'
import Demo from '@/components/Demo'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Scenarios />
        <Demo />
        <CTA />
        <Footer />
      </main>
    </>
  )
}