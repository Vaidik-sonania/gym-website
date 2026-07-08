import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative text */}
      <div className="absolute -bottom-10 right-0 text-[10rem] font-display text-white/5 whitespace-nowrap pointer-events-none select-none z-0">
        JOIN US
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase mb-4 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-primary"></span>
              Get Started
            </h2>
            <h3 className="text-4xl md:text-5xl font-display uppercase text-white mb-6">
              Claim Your Free Trial
            </h3>
            <p className="text-gray-400 font-light mb-10 max-w-md">
              Drop us a message to schedule your trial or ask any questions. Our team will get back to you within 2 hours.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Location</h4>
                  <p className="text-gray-400 text-sm">42 Fitness Plaza, BKC<br/>Mumbai 400051</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Phone</h4>
                  <p className="text-gray-400 text-sm">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-gray-400 text-sm">hello@ironedgefitness.com</p>
                </div>
              </div>
            </div>
            
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary p-8 border border-white/5 relative"
          >
            {formStatus === 'success' ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary z-20">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-display text-white mb-2">Request Sent</h4>
                <p className="text-gray-400">We'll see you in the gym soon.</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input type="text" required placeholder="First Name" className="w-full bg-background border border-white/10 p-4 text-white focus:border-primary outline-none transition-colors" />
                </div>
                <div>
                  <input type="text" required placeholder="Last Name" className="w-full bg-background border border-white/10 p-4 text-white focus:border-primary outline-none transition-colors" />
                </div>
              </div>
              <div>
                <input type="email" required placeholder="Email Address" className="w-full bg-background border border-white/10 p-4 text-white focus:border-primary outline-none transition-colors" />
              </div>
              <div>
                <input type="tel" required placeholder="Phone Number" className="w-full bg-background border border-white/10 p-4 text-white focus:border-primary outline-none transition-colors" />
              </div>
              <div>
                <select className="w-full bg-background border border-white/10 p-4 text-white focus:border-primary outline-none transition-colors appearance-none">
                  <option value="trial">Book Free Trial</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="pt">Personal Training</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <textarea rows={4} placeholder="Your Message (Optional)" className="w-full bg-background border border-white/10 p-4 text-white focus:border-primary outline-none transition-colors resize-none"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="w-full bg-primary text-white py-4 font-bold uppercase tracking-widest hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                {formStatus === 'submitting' ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : 'Submit Request'}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
