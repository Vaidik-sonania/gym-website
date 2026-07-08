import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const trainers = [
  { name: "Marcus Thorne", spec: "Head Coach / Powerlifting", exp: "12 Years", img: "trainer-1.jpg" },
  { name: "Sarah Jenkins", spec: "HIIT & Conditioning", exp: "8 Years", img: "trainer-2.jpg" },
  { name: "David Chen", spec: "CrossFit / Mobility", exp: "10 Years", img: "trainer-3.jpg" },
  { name: "Elena Rostova", spec: "Strength & Nutrition", exp: "7 Years", img: "trainer-4.jpg" }
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-widest uppercase mb-4 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-primary"></span>
              The Masters
            </h2>
            <h3 className="text-4xl md:text-5xl font-display uppercase text-white">
              Meet Your Mentors
            </h3>
          </div>
          <p className="text-gray-400 max-w-sm font-light">
            Our trainers are certified athletes who have walked the path. They demand greatness, and they will forge it in you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-background border border-white/5 overflow-hidden"
            >
              <div className="h-[400px] overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}images/${trainer.img}`} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              
              {/* Overlay Socials */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a href="#" className="w-10 h-10 bg-primary flex items-center justify-center rounded-full text-white hover:scale-110 transition-transform translate-y-10 group-hover:translate-y-0 duration-300 delay-100"><Instagram className="w-5 h-5"/></a>
                <a href="#" className="w-10 h-10 bg-primary flex items-center justify-center rounded-full text-white hover:scale-110 transition-transform translate-y-10 group-hover:translate-y-0 duration-300 delay-150"><Twitter className="w-5 h-5"/></a>
                <a href="#" className="w-10 h-10 bg-primary flex items-center justify-center rounded-full text-white hover:scale-110 transition-transform translate-y-10 group-hover:translate-y-0 duration-300 delay-200"><Linkedin className="w-5 h-5"/></a>
              </div>

              <div className="p-6 relative z-10 bg-background group-hover:-translate-y-2 transition-transform duration-300">
                <h4 className="text-xl font-display uppercase text-white mb-1">{trainer.name}</h4>
                <div className="text-primary text-sm font-bold uppercase tracking-widest mb-2">{trainer.spec}</div>
                <div className="text-gray-400 text-sm">Experience: {trainer.exp}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
