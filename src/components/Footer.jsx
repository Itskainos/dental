import React from 'react'
import { motion } from 'framer-motion'
import { Lock, Send } from 'lucide-react'

const Footer = () => {
  return (
    <footer id="contact" className="bg-soft-pearl pt-24 pb-8 relative border-t border-sage-green/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          
          {/* Map and Info */}
          <div className="flex flex-col h-full">
            <h2 className="text-3xl font-bold text-deep-charcoal mb-4">Visit Our Sanctuary.</h2>
            <p className="text-deep-charcoal/60 font-light mb-10 max-w-md leading-relaxed">
              Conveniently located in West Chester, PA. Experience dentistry in a calm, curated space designed for your comfort.
            </p>
            
            <div className="flex-1 w-full bg-sage-green/10 rounded-[30px] overflow-hidden min-h-[300px] border border-sage-green/20 p-2">
              {/* Map Placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.24131589139!2d-75.6027376!3d39.9583151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6f6880daabaf5%3A0xff3cbf841eb1bbf1!2sWest%20Chester%2C%20PA!5e0!3m2!1sen!2sus!4v1711200000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '22px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 contrast-125 mix-blend-multiply"
              ></iframe>
            </div>
          </div>

          {/* HIPAA Form Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-14 rounded-[40px] shadow-2xl shadow-deep-charcoal/5 border border-sage-green/10"
          >
            <h3 className="text-2xl font-bold text-deep-charcoal mb-8">Request an Appointment</h3>
            
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-semibold tracking-widest uppercase text-deep-charcoal/50 block mb-2 px-1">First Name</label>
                  <input type="text" className="w-full bg-soft-pearl border border-sage-green/20 rounded-2xl px-5 py-4 text-deep-charcoal focus:outline-none focus:border-sage-green transition-colors font-medium outline-none" />
                </div>
                <div>
                  <label className="text-xs font-semibold tracking-widest uppercase text-deep-charcoal/50 block mb-2 px-1">Last Name</label>
                  <input type="text" className="w-full bg-soft-pearl border border-sage-green/20 rounded-2xl px-5 py-4 text-deep-charcoal focus:outline-none focus:border-sage-green transition-colors font-medium outline-none" />
                </div>
              </div>
              
              <div>
                <label className="text-xs font-semibold tracking-widest uppercase text-deep-charcoal/50 block mb-2 px-1">Email or Phone</label>
                <input type="text" className="w-full bg-soft-pearl border border-sage-green/20 rounded-2xl px-5 py-4 text-deep-charcoal focus:outline-none focus:border-sage-green transition-colors font-medium outline-none" />
              </div>

              <div className="pt-4">
                <button className="w-full bg-deep-charcoal text-soft-pearl px-8 py-5 rounded-2xl font-medium tracking-wide flex items-center justify-center gap-3 hover:bg-sage-green transition-colors">
                  Submit Request <Send size={18} />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-deep-charcoal/40 text-xs font-semibold tracking-wide uppercase pt-4 mt-4 border-t border-sage-green/10">
                <Lock size={14} className="text-sage-green" />
                <span>Protected by HIPAA-Compliant Encryption</span>
              </div>
            </form>
          </motion.div>

        </div>

        {/* Deep Simple Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-sage-green/20 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tighter text-deep-charcoal">
              XYZ <span className="font-light text-sage-green">Dental</span>
            </span>
          </div>
          <p className="text-sm font-light text-deep-charcoal/60">
            © {new Date().getFullYear()} XYZ Dental. West Chester, PA.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
