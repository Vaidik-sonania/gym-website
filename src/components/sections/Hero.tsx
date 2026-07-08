import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Dumbbell, Timer, Trophy } from 'lucide-react';

const words = ["Forge Your Body", "Dominate Your Limits", "Redefine Excellence"];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const word = words[currentWord];

    const timer = setTimeout(() => {
      if (!isDeleting && text === word) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
      } else {
        setText(prev => isDeleting 
          ? word.substring(0, prev.length - 1) 
          : word.substring(0, prev.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWord]);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-background z-10"></div>
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.jpg`} 
          alt="Gym Interior" 
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mt-12 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight text-white mb-6 min-h-[120px] md:min-h-[160px] text-glow">
              {text}
              <span className="animate-pulse text-primary">|</span>
            </h1>
            
            <motion.p 
              initial={{ filter: 'blur(10px)', opacity: 0 }}
              animate={{ filter: 'blur(0px)', opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light"
            >
              Step into the arena of champions. Elite equipment, world-class coaching, and an unapologetic atmosphere of progress.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="#membership" className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-none font-bold uppercase tracking-widest hover:bg-red-700 transition-colors flex items-center justify-center gap-2 relative overflow-hidden group">
              <span className="relative z-10">Join Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </a>
            
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white rounded-none font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-colors flex items-center justify-center">
              Book Free Trial
            </a>
            
            <button className="w-full sm:w-auto px-6 py-4 flex items-center justify-center gap-3 text-white uppercase font-bold tracking-wider hover:text-primary transition-colors group">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all">
                <Play className="w-5 h-5 ml-1" />
              </div>
              Watch Video
            </button>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-5xl mx-auto border-t border-white/10 pt-10"
        >
          {[
            { label: 'Members', value: '5000+', icon: Trophy },
            { label: 'Expert Trainers', value: '25+', icon: Dumbbell },
            { label: 'Years Exp', value: '10+', icon: Timer },
            { label: 'Satisfaction', value: '100%', icon: Trophy },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-display text-white mb-2">{stat.value}</div>
              <div className="text-xs md:text-sm text-primary uppercase tracking-widest font-semibold">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute hidden md:flex top-1/4 left-10 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl items-center gap-4 z-20"
      >
        <Dumbbell className="w-8 h-8 text-primary" />
        <div>
          <div className="text-white font-bold">Premium</div>
          <div className="text-gray-400 text-sm">Equipment</div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute hidden md:flex bottom-1/4 right-10 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl items-center gap-4 z-20"
      >
        <Timer className="w-8 h-8 text-primary" />
        <div>
          <div className="text-white font-bold">24/7 Access</div>
          <div className="text-gray-400 text-sm">Train anytime</div>
        </div>
      </motion.div>
    </section>
  );
}
