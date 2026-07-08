import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';

const transformations = [
  { before: "before-1.jpg", after: "after-1.jpg", name: "Alex M.", lost: "25kg", time: "6 Months" },
  { before: "before-2.jpg", after: "after-2.jpg", name: "Jessica T.", lost: "15kg", time: "4 Months" }
];

export default function Transformations() {
  const [sliderPositions, setSliderPositions] = useState([50, 50]);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleDrag = (e: React.MouseEvent | React.TouchEvent, index: number) => {
    const container = containerRefs.current[index];
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    let clientX = 0;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = (e as React.MouseEvent).clientX;
    }
    
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    setSliderPositions(prev => {
      const newPos = [...prev];
      newPos[index] = percent;
      return newPos;
    });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-4">Results</h2>
          <h3 className="text-4xl md:text-5xl font-display uppercase text-white">
            Real Transformations
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {transformations.map((trans, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div 
                ref={el => { containerRefs.current[i] = el; }}
                className="relative h-[400px] md:h-[500px] w-full overflow-hidden select-none cursor-ew-resize"
                onMouseMove={(e) => {
                  if (e.buttons === 1) handleDrag(e, i); // Only drag when mouse pressed
                }}
                onTouchMove={(e) => handleDrag(e, i)}
                onClick={(e) => handleDrag(e, i)}
              >
                {/* Before Image (Background) */}
                <img 
                  src={`${import.meta.env.BASE_URL}images/${trans.before}`} 
                  alt="Before" 
                  className="absolute inset-0 w-full h-full object-cover grayscale"
                  draggable={false}
                />
                
                {/* After Image (Clipped) */}
                <div 
                  className="absolute inset-0" 
                  style={{ clipPath: `inset(0 ${100 - sliderPositions[i]}% 0 0)` }}
                >
                  <img 
                    src={`${import.meta.env.BASE_URL}images/${trans.after}`} 
                    alt="After" 
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                  />
                </div>

                {/* Slider Handle */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-10"
                  style={{ left: `${sliderPositions[i]}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-black pointer-events-none">
                    <MoveHorizontal className="w-5 h-5" />
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 text-white text-sm uppercase tracking-widest font-bold">
                  Before
                </div>
                <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur px-3 py-1 text-white text-sm uppercase tracking-widest font-bold">
                  After
                </div>
              </div>
              
              <div className="mt-4 flex justify-between items-center bg-secondary p-4 border border-white/5">
                <div>
                  <h4 className="text-white font-display text-xl">{trans.name}</h4>
                  <p className="text-gray-400 text-sm">Duration: {trans.time}</p>
                </div>
                <div className="text-right">
                  <div className="text-primary font-display text-2xl">-{trans.lost}</div>
                  <div className="text-gray-400 text-xs uppercase tracking-widest">Lost</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
