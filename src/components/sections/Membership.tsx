import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "1,499",
    period: "month",
    features: ["Access to gym floor", "Basic equipment", "Locker room access", "Free WiFi", "Water station"],
    highlighted: false
  },
  {
    name: "Premium",
    price: "2,999",
    period: "month",
    features: ["Everything in Basic", "All group classes", "Sauna access", "1 PT session/month", "Nutritional app access"],
    highlighted: true
  },
  {
    name: "Elite",
    price: "4,999",
    period: "month",
    features: ["Everything in Premium", "Unlimited PT sessions", "Custom diet plan", "Recovery lounge access", "Guest pass (2/month)"],
    highlighted: false
  }
];

export default function Membership() {
  return (
    <section id="membership" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-4">Pricing</h2>
          <h3 className="text-4xl md:text-5xl font-display uppercase text-white">
            Invest in yourself
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-secondary border p-8 flex flex-col ${
                plan.highlighted 
                  ? 'border-primary shadow-[0_0_30px_rgba(220,38,38,0.2)] md:-translate-y-4' 
                  : 'border-white/10'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest py-1 px-4">
                  Most Popular
                </div>
              )}
              
              <h4 className="text-2xl font-display uppercase text-white mb-2">{plan.name}</h4>
              <div className="mb-6 pb-6 border-b border-white/10">
                <span className="text-4xl font-display text-white">₹{plan.price}</span>
                <span className="text-gray-400">/{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-300">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? 'text-primary' : 'text-gray-500'}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 font-bold uppercase tracking-widest transition-colors ${
                plan.highlighted 
                  ? 'bg-primary text-white hover:bg-red-700' 
                  : 'bg-white/5 text-white hover:bg-white/10'
              }`}>
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
