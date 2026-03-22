import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-semibold tracking-tighter text-deep-charcoal">
            XYZ <span className="font-light text-sage-green">Dental</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-12">
          <a href="#services" className="text-sm font-medium tracking-wide text-deep-charcoal/80 hover:text-sage-green transition-colors">Services</a>
          <a href="#testimonials" className="text-sm font-medium tracking-wide text-deep-charcoal/80 hover:text-sage-green transition-colors">Testimonials</a>
          <a href="#contact" className="text-sm font-medium tracking-wide text-deep-charcoal/80 hover:text-sage-green transition-colors">Location</a>
          <button className="bg-deep-charcoal text-soft-pearl px-6 py-3 rounded-full text-sm font-medium hover:bg-sage-green hover:text-soft-pearl transition-all duration-300 shadow-sm">
            Schedule
          </button>
        </div>

        <div className="lg:hidden flex items-center">
          <button className="text-deep-charcoal p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Minimalist Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[100%] left-0 w-full bg-soft-pearl/95 backdrop-blur-xl border-b border-sage-green/10 lg:hidden shadow-2xl shadow-deep-charcoal/5"
          >
            <div className="flex flex-col gap-8 p-10 text-center">
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-light tracking-wide text-deep-charcoal">Services</a>
              <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-light tracking-wide text-deep-charcoal">Testimonials</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-light tracking-wide text-deep-charcoal">Location</a>
              <button className="mx-auto mt-4 bg-deep-charcoal text-soft-pearl px-10 py-4 rounded-full font-medium tracking-wide w-full max-w-xs hover:bg-sage-green transition-colors">
                Schedule Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
