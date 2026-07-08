import React from 'react';
import { Flame, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6 group inline-flex">
              <Flame className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
              <span className="font-display text-3xl tracking-wider text-white">IRON<span className="text-primary">EDGE</span></span>
            </a>
            <p className="text-gray-400 text-sm font-light mb-6">
              Elite fitness facility for those who refuse to settle. State-of-the-art equipment, professional coaching, and a community of driven individuals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">FB</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">IG</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">TW</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-primary transition-colors text-sm">Programs</a></li>
              <li><a href="#membership" className="text-gray-400 hover:text-primary transition-colors text-sm">Membership</a></li>
              <li><a href="#trainers" className="text-gray-400 hover:text-primary transition-colors text-sm">Trainers</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-primary transition-colors text-sm">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Programs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Strength Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">CrossFit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Powerlifting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Cardio & HIIT</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Personal Coaching</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for workout tips, nutrition advice, and gym updates.</p>
            <form className="flex">
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 px-4 py-2 w-full text-white text-sm focus:outline-none focus:border-primary" />
              <button className="bg-primary text-white px-4 py-2 font-bold uppercase text-sm hover:bg-red-700 transition-colors">Join</button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} IronEdge Fitness. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>

      {/* Back to top */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-10 right-4 md:right-10 w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all group"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
}
