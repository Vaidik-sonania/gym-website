import React from 'react';
import { motion } from 'framer-motion';

const programs = [
  { name: "Strength Training", img: "program-strength.jpg", desc: "Build raw power and muscle mass with heavy compound movements." },
  { name: "Cardio & Endurance", img: "program-cardio.jpg", desc: "Push your cardiovascular limits and build unstoppable stamina." },
  { name: "CrossFit", img: "program-crossfit.jpg", desc: "High-intensity functional movements for ultimate conditioning." },
  { name: "Yoga & Mobility", img: "program-yoga.jpg", desc: "Improve flexibility, core strength, and mental focus." },
  { name: "Powerlifting", img: "program-powerlifting.jpg", desc: "Master the squat, bench, and deadlift with expert coaching." },
  { name: "HIIT", img: "program-hiit.jpg", desc: "Burn fat fast with intense interval training sessions." },
  { name: "Functional Training", img: "program-functional.jpg", desc: "Train for real-world strength using kettlebells and sleds." },
  { name: "Personal Training", img: "program-personal.jpg", desc: "1-on-1 elite coaching tailored completely to your goals." }
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-widest uppercase mb-4 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-primary"></span>
              Our Disciplines
            </h2>
            <h3 className="text-4xl md:text-5xl font-display uppercase text-white">
              Choose Your Weapon
            </h3>
          </div>
          <p className="text-gray-400 max-w-sm font-light">
            Whether you want to move heavy weight or move with grace, we have the specialized zones and coaching to get you there.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {programs.map((program, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-[400px] overflow-hidden cursor-pointer"
            >
              <img 
                src={`${import.meta.env.BASE_URL}images/${program.img}`} 
                alt={program.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h4 className="text-2xl font-display uppercase text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform">{program.name}</h4>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100 mb-4 h-0 group-hover:h-auto overflow-hidden">
                  {program.desc}
                </p>
                <div className="text-primary text-sm font-bold uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                  Learn More <span className="text-lg">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
