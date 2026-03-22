import React from 'react'
import { motion } from 'framer-motion'
import { UserPlus, ShieldPlus, Award, CheckCircle2 } from 'lucide-react'

const TrustBar = () => {
  const trusts = [
    { icon: <UserPlus />, text: "Accepting New Patients" },
    { icon: <ShieldPlus />, text: "Emergency Care" },
    { icon: <Award />, text: "Top-Rated in PA" },
    { icon: <CheckCircle2 />, text: "Advanced Technology" }
  ]

  return (
    <div className="bg-white py-14 border-y border-slate-100 relative z-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {trusts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-center gap-5 group py-4 px-6 rounded-3xl hover:bg-slate-50 transition-colors"
            >
              <div className="w-16 h-16 bg-deep-navy/5 rounded-[22px] flex items-center justify-center text-deep-navy group-hover:bg-deep-navy group-hover:text-white transition-all duration-500 shadow-sm">
                {React.cloneElement(item.icon, { size: 32, strokeWidth: 1.5 })}
              </div>
              <div className="text-center md:text-left">
                <span className="text-xl font-extrabold text-deep-navy tracking-tight leading-tight block">{item.text}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
