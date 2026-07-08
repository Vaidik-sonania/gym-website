import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Flame } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Membership', href: '#membership' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Gallery', href: '#gallery' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.name.toLowerCase());
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <Flame className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
          <span className="font-display text-3xl tracking-wider text-white">IRON<span className="text-primary">EDGE</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary ${
                activeSection === link.name.toLowerCase() ? 'text-primary' : 'text-gray-300'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <a href="#contact" className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-2.5 rounded-full font-medium tracking-wide uppercase text-sm hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all">
            Book Trial
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-b border-border py-6 lg:hidden"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium uppercase tracking-wider text-gray-300 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary text-white px-8 py-3 rounded-full font-medium tracking-wide uppercase mt-4"
              >
                Book Trial
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
