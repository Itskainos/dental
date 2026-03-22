import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-soft-pearl text-deep-charcoal font-sans selection:bg-sage-green selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
