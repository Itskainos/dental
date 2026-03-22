import React from 'react'
import { motion } from 'framer-motion'
import { Stethoscope, Sparkles, Zap, Activity } from 'lucide-react'

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="services" className="py-24 md:py-32 bg-soft-pearl relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 max-w-2xl">
          <span className="text-sage-green font-semibold tracking-widest uppercase text-xs mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-deep-charcoal mb-6 tracking-tight">Comprehensive Care In A Curated Environment.</h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
        >
          {/* Emergency - Spans 2 columns */}
          <motion.div variants={cardVariants} className="bento-card p-10 md:col-span-2 relative overflow-hidden group flex flex-col justify-end bg-deep-charcoal">
            <div className="absolute top-10 right-10 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-soft-pearl group-hover:scale-110 transition-transform duration-500">
              <Activity size={30} strokeWidth={1.5} />
            </div>
            <div className="relative z-10 w-2/3">
              <h3 className="text-3xl font-bold text-soft-pearl mb-4">Emergency Care</h3>
              <p className="text-soft-pearl/60 font-light leading-relaxed">Immediate attention for acute dental trauma and severe pain. We are here when you need us most.</p>
            </div>
          </motion.div>

          {/* Cosmetic */}
          <motion.div variants={cardVariants} className="bento-card p-10 relative overflow-hidden group flex flex-col justify-end bg-sage-green">
            <div className="absolute top-10 right-10 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
              <Sparkles size={30} strokeWidth={1.5} />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">Cosmetic</h3>
              <p className="text-white/80 font-light leading-relaxed text-sm">Veneers, whitening, and aesthetic bonding for a brilliant smile.</p>
            </div>
          </motion.div>

          {/* Implants */}
          <motion.div variants={cardVariants} className="bento-card p-10 relative overflow-hidden group flex flex-col justify-end bg-white">
            <div className="absolute top-10 left-10 w-16 h-16 bg-soft-pearl rounded-full flex items-center justify-center text-deep-charcoal group-hover:scale-110 transition-transform duration-500">
              <Zap size={30} strokeWidth={1.5} />
            </div>
            <div className="relative z-10 mt-auto text-right">
              <h3 className="text-3xl font-bold text-deep-charcoal mb-4">Implants</h3>
              <p className="text-deep-charcoal/60 font-light leading-relaxed text-sm ml-auto max-w-[200px]">Permanent, natural-looking restoration with surgical precision.</p>
            </div>
          </motion.div>

          {/* General Dentistry - Spans 2 columns */}
          <motion.div variants={cardVariants} className="bento-card p-10 md:col-span-2 relative overflow-hidden group flex flex-col justify-end bg-white">
            <div className="absolute top-10 left-10 w-16 h-16 bg-soft-pearl rounded-full flex items-center justify-center text-sage-green group-hover:scale-110 transition-transform duration-500">
              <Stethoscope size={30} strokeWidth={1.5} />
            </div>
            <div className="relative z-10 mt-auto sm:ml-auto text-left sm:text-right w-full sm:w-2/3">
              <h3 className="text-3xl font-bold text-deep-charcoal mb-4">General Dentistry</h3>
              <p className="text-deep-charcoal/60 font-light leading-relaxed">Preventative care and comprehensive checkups to maintain your optimal oral health foundation.</p>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  )
}

export default Services
