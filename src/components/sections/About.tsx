import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  const features = [
    "State-of-the-Art Equipment",
    "Certified Pro Trainers",
    "Personalised Nutrition Plans",
    "Proven Transformation Results"
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15rem] font-display text-white/5 whitespace-nowrap pointer-events-none select-none -z-10">
        IRON EDGE
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src={`${import.meta.env.BASE_URL}images/about-athlete.jpg`} 
                alt="Athlete Training" 
                className="w-full h-[600px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Red overlay box */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 backdrop-blur-sm border border-primary p-6 flex flex-col justify-center">
                <span className="text-5xl font-display text-white mb-2">10+</span>
                <span className="text-sm uppercase tracking-widest text-gray-300">Years of<br/>Excellence</span>
              </div>
            </div>
            
            {/* Background decorative square */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-white/10 z-0"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase mb-4 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-primary"></span>
              About Us
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase text-white mb-6">
              We Are Not Just A Gym.<br />We Are A <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Cult</span>.
            </h3>
            
            <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
              IronEdge was born out of a desire to create a sanctuary for those who refuse to settle. We don't cater to the masses; we cater to the committed. Every square foot of our facility is engineered to extract your absolute best.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <a href="#programs" className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest group">
              Discover Our Programs
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <ArrowRight className="w-5 h-5" />
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
