import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Dumbbell, UserCheck, Apple, Clock, SprayCan, Activity, HeadphonesIcon } from 'lucide-react';

const benefits = [
  { icon: UserCheck, title: "Certified Trainers", desc: "Elite coaching from industry veterans." },
  { icon: Dumbbell, title: "Modern Equipment", desc: "Top-tier machinery by Rogue & Eleiko." },
  { icon: Activity, title: "Personal Coaching", desc: "1-on-1 guidance tailored to your goals." },
  { icon: Apple, title: "Nutrition Plans", desc: "Science-backed macros and meal prep." },
  { icon: Clock, title: "Flexible Timings", desc: "Open 24/7. Train on your schedule." },
  { icon: SprayCan, title: "Clean Environment", desc: "Hospital-grade sanitation protocols." },
  { icon: ShieldCheck, title: "Recovery Programs", desc: "Ice baths, sauna, and physio on site." },
  { icon: HeadphonesIcon, title: "24/7 Support", desc: "Always here to spot you, literally." }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-secondary relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-4">Why IronEdge</h2>
          <h3 className="text-4xl md:text-5xl font-display uppercase text-white mb-6">
            The Advantage You Need
          </h3>
          <p className="text-gray-400 text-lg font-light">
            We don't cut corners. From our equipment to our amenities, everything is designed to remove friction between you and your goals.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              variants={item}
              className="bg-background p-8 rounded-sm border border-white/5 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(220,38,38,0.15)]"
            >
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-white group-hover:text-primary transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
