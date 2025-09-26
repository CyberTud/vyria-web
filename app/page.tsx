import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Simple from '@/components/Simple'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Simple />
        <Footer />
      </main>
    </>
  )
}