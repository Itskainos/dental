import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden bg-soft-pearl">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Bold Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="max-w-xl xl:max-w-2xl"
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
            className="inline-block px-4 py-1.5 rounded-full border border-sage-green/30 text-sage-green text-xs font-semibold tracking-widest uppercase mb-8"
          >
            West Chester, PA
          </motion.div>

          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-deep-charcoal leading-[1.05] tracking-tight mb-8"
          >
            Dentistry, <br />
            <span className="text-sage-green font-light italic">Refined.</span>
          </motion.h1>
          
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-deep-charcoal/60 mb-12 leading-relaxed font-light max-w-md"
          >
            Experience a new standard of oral care. A sanctuary where advanced clinical precision meets a tranquil, spa-like atmosphere.
          </motion.p>
          
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            <button className="bg-deep-charcoal text-soft-pearl px-8 py-4 md:px-10 md:py-5 rounded-full font-medium tracking-wide flex items-center justify-center gap-3 hover:bg-sage-green hover:text-soft-pearl transition-all duration-300 group shadow-lg shadow-deep-charcoal/10">
              Schedule Appointment 
              <ArrowUpRight size={20} strokeWidth={2} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <a href="#services" className="text-sm font-semibold tracking-widest uppercase text-deep-charcoal/60 hover:text-sage-green py-2 transition-colors border-b border-transparent hover:border-sage-green relative group">
              Explore Services
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-sage-green transition-all duration-300 group-hover:w-full"></span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: High-Res Image */}
        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10% round 30px)' }}
          animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 30px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-[40px] shadow-2xl shadow-sage-green/5"
        >
          <img 
            src="/assets/images/smiling_patient_spa.png" 
            alt="Smiling patient in luxury dental spa" 
            className="absolute inset-0 w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-[2s] ease-out"
          />
          {/* Subtle Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/30 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
