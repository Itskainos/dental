import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    { name: "Sarah J.", text: "The most serene dental experience I've ever had. Truly feels like a spa." },
    { name: "Michael T.", text: "Incredible attention to detail. My veneers look perfectly natural." },
    { name: "Eleanor W.", text: "I used to have dental anxiety. XYZ Dental changed everything for me. Gentle, precise, and luxurious." },
    { name: "David R.", text: "The emergency implant procedure was flawless. Highly recommended." },
    { name: "Jessica K.", text: "Beautiful clinic and an even more beautiful team. 5 stars." },
    { name: "Emily L.", text: "Professional, clean, and top-tier technology. They really care." },
  ]

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white relative overflow-hidden border-y border-sage-green/10">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-sage-green font-semibold tracking-widest uppercase text-xs mb-4 block flex items-center gap-2">
              Google Reviews
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-deep-charcoal tracking-tight max-w-md leading-[1.1]">Patient Experiences.</h2>
          </div>
          <div className="flex bg-soft-pearl px-6 py-4 rounded-full items-center gap-4 border border-sage-green/20">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} className="fill-sage-green text-sage-green" />)}
            </div>
            <div className="font-bold text-deep-charcoal">
              4.9 <span className="font-light text-deep-charcoal/60 ml-1">Google Rating</span>
            </div>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-soft-pearl p-8 rounded-[30px] border border-sage-green/10 break-inside-avoid shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-sage-green text-sage-green" />)}
              </div>
              <p className="text-deep-charcoal/80 font-light leading-relaxed mb-6">"{t.text}"</p>
              <div className="font-medium text-deep-charcoal flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sage-green/20 flex items-center justify-center text-sage-green text-sm font-bold">
                  {t.name[0]}
                </div>
                {t.name}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
