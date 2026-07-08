import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

const images = [
  "gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg",
  "gallery-4.jpg", "gallery-5.jpg", "gallery-6.jpg",
  "gallery-7.jpg", "gallery-8.jpg", "gallery-9.jpg"
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-widest uppercase mb-4 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-primary"></span>
              Facility
            </h2>
            <h3 className="text-4xl md:text-5xl font-display uppercase text-white">
              The Forge
            </h3>
          </div>
          <p className="text-gray-400 max-w-sm font-light">
            Take a look inside our premium facilities. Every detail crafted for peak performance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative overflow-hidden group cursor-pointer ${
                i === 0 || i === 4 ? 'row-span-2' : ''
              } ${i === 3 ? 'col-span-2 md:col-span-1' : ''}`}
              onClick={() => setSelectedImg(img)}
            >
              <img 
                src={`${import.meta.env.BASE_URL}images/${img}`}
                alt="Gym Gallery"
                className="w-full h-full object-cover min-h-[200px] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 className="w-8 h-8 text-white scale-50 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={`${import.meta.env.BASE_URL}images/${selectedImg}`} 
              alt="Enlarged gallery view" 
              className="max-w-full max-h-[90vh] object-contain border border-white/10"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
