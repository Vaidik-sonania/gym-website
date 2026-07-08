import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Flame } from 'lucide-react';

import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Programs from '@/components/sections/Programs';
import Calculators from '@/components/sections/Calculators';
import Membership from '@/components/sections/Membership';
import Trainers from '@/components/sections/Trainers';
import Transformations from '@/components/sections/Transformations';
import Testimonials from '@/components/sections/Testimonials';
import Gallery from '@/components/sections/Gallery';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

function Loader() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
    >
      <div className="relative">
        <Flame className="w-16 h-16 text-primary animate-pulse" />
        <div className="absolute inset-0 border-2 border-primary rounded-full animate-ping opacity-20"></div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 font-display text-4xl tracking-widest text-white"
      >
        IRON<span className="text-primary">EDGE</span>
      </motion.div>
    </motion.div>
  );
}

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="cursor-glow hidden md:block" 
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <CursorGlow />

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <main>
              <Hero />
              <About />
              <WhyChooseUs />
              <Programs />
              <Calculators />
              <Membership />
              <Trainers />
              <Transformations />
              <Testimonials />
              <Gallery />
              <FAQ />
              <Contact />
            </main>
            <Footer />
            
            {/* Floating sticky button */}
            <a 
              href="#contact" 
              className="fixed bottom-6 right-6 md:bottom-10 md:right-auto md:left-10 z-40 bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:scale-105 transition-transform"
            >
              Free Trial
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
