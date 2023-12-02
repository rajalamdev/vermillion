import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className='h-screen bg-rose-900 text-white'>
      <Navbar />
      <Hero />
      <Profile />
      <Footer />
    </main>
  )
}
