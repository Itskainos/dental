import React from 'react'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

const StickyCallButton = () => {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-8 left-6 right-6 lg:hidden z-[1000]"
    >
      <a 
        href="tel:6105550123" 
        className="flex items-center justify-center gap-4 bg-teal-accent text-deep-navy px-10 py-6 rounded-[32px] font-black text-2xl shadow-[0_25px_50px_-12px_rgba(20,184,166,0.5)] border-4 border-white active:scale-95 transition-all"
      >
        <div className="w-10 h-10 bg-deep-navy rounded-xl flex items-center justify-center text-white">
          <Phone size={24} fill="currentColor" stroke="none" />
        </div>
        Call Clinic Now
      </a>
    </motion.div>
  )
}

export default StickyCallButton
