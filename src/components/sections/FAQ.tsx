import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { 
    q: "Do you offer a free trial?", 
    a: "Yes, we offer a complimentary 1-day pass for local residents. You can book it through the form below or at the front desk." 
  },
  { 
    q: "What are your opening hours?", 
    a: "We are open 24/7 for all members. Staffed hours are from 6:00 AM to 10:00 PM daily." 
  },
  { 
    q: "Is personal training included in the membership?", 
    a: "Our Premium plan includes 1 session per month, and Elite includes unlimited sessions. Basic members can purchase PT packages separately." 
  },
  { 
    q: "Are the group classes suitable for beginners?", 
    a: "Absolutely. Our coaches provide scaleable variations for every movement, ensuring you can participate safely regardless of your current fitness level." 
  },
  { 
    q: "Do you have locker and shower facilities?", 
    a: "Yes, we provide luxury locker rooms with digital locks, high-pressure hot showers, fresh towels, and premium grooming products." 
  },
  { 
    q: "What is your cancellation policy?", 
    a: "You can cancel your month-to-month membership at any time with a 30-day notice. Annual plans have specific terms outlined in the contract." 
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-4">Answers</h2>
          <h3 className="text-4xl md:text-5xl font-display uppercase text-white">
            Frequently Asked
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-white/5"
            >
              <button 
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-bold text-white pr-8">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-400 font-light border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
