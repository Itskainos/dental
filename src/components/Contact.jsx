import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, ShieldCheck, Send } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-deep-navy rounded-[60px] p-10 md:p-20 relative overflow-hidden shadow-2xl">
          {/* Accent Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

          <div className="grid lg:grid-cols-2 gap-20 relative z-10">
            <div className="flex flex-col justify-center">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-teal-accent font-black tracking-widest uppercase text-sm mb-6 block"
              >
                Join Our Family
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight"
              >
                Ready for your <br />
                <span className="text-teal-accent italic font-serif">Perfect Smile?</span>
              </motion.h2>
              
              <div className="space-y-10 mt-12">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-teal-accent group-hover:bg-teal-accent group-hover:text-deep-navy transition-all duration-300">
                    <Phone size={32} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-white/40 font-black text-xs uppercase tracking-widest mb-1">Call Us Directly</p>
                    <p className="text-2xl font-black text-white">(610) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-teal-accent group-hover:bg-teal-accent group-hover:text-deep-navy transition-all duration-300">
                    <MapPin size={32} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-white/40 font-black text-xs uppercase tracking-widest mb-1">Visit Our Clinic</p>
                    <p className="text-2xl font-black text-white">123 West Chester Pike, PA</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[48px] border border-white/10 shadow-2xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 font-black text-xs mb-3 px-2 uppercase tracking-widest">First Name</label>
                    <input type="text" placeholder="John" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-teal-accent transition-all font-bold placeholder:text-white/20" />
                  </div>
                  <div>
                    <label className="block text-white/80 font-black text-xs mb-3 px-2 uppercase tracking-widest">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-teal-accent transition-all font-bold placeholder:text-white/20" />
                  </div>
                </div>
                <div>
                  <label className="block text-white/80 font-black text-xs mb-3 px-2 uppercase tracking-widest">Direct Phone</label>
                  <input type="tel" placeholder="(610) 000-0000" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-teal-accent transition-all font-bold placeholder:text-white/20" />
                </div>
                <div>
                  <label className="block text-white/80 font-black text-xs mb-3 px-2 uppercase tracking-widest">Service</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-teal-accent transition-all font-bold appearance-none cursor-pointer">
                    <option className="bg-deep-navy text-white">General Consultation</option>
                    <option className="bg-deep-navy text-white">Dental Implants</option>
                    <option className="bg-deep-navy text-white">Invisalign®</option>
                    <option className="bg-deep-navy text-white">Cosmetic Whitening</option>
                  </select>
                </div>
                
                <button className="w-full bg-teal-accent text-deep-navy px-8 py-5 rounded-3xl font-black text-xl flex items-center justify-center gap-3 hover:bg-white hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-teal-accent/20 mt-8">
                  Request Private Link <Send size={22} />
                </button>
                
                <div className="flex items-center justify-center gap-2 text-white/50 text-[11px] font-black uppercase tracking-widest pt-6 border-t border-white/5">
                  <ShieldCheck size={14} className="text-teal-accent" />
                  <span>🔒 Secure & HIPAA-Compliant Encryption Active</span>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
