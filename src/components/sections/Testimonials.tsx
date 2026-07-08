import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: "Michael R.", img: "testimonial-1.jpg", text: "I've been to many luxury gyms, but IronEdge hits different. The equipment is flawless, and the atmosphere forces you to push harder. Worth every penny." },
  { name: "Sarah K.", img: "testimonial-2.jpg", text: "The personal training here changed my life. They don't just count reps; they educate you on mechanics and nutrition. Down 15kg and never felt stronger." },
  { name: "James L.", img: "testimonial-3.jpg", text: "As a powerlifter, finding a gym with calibrated plates and elite platforms is rare. IronEdge provides a true professional environment." },
  { name: "Emma W.", img: "testimonial-1.jpg", text: "The community here is unmatched. Everyone is focused, respectful, and the facilities are kept spotlessly clean 24/7." },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-4">Wall of Fame</h2>
          <h3 className="text-4xl md:text-5xl font-display uppercase text-white">
            Client Stories
          </h3>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <div className="bg-background p-8 border border-white/5 h-full relative group">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-primary/10 transition-colors" />
                    
                    <div className="flex items-center gap-2 mb-6">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    
                    <p className="text-gray-300 mb-8 font-light italic leading-relaxed">
                      "{t.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <img 
                        src={`${import.meta.env.BASE_URL}images/${t.img}`} 
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/50"
                      />
                      <div>
                        <div className="text-white font-bold">{t.name}</div>
                        <div className="text-gray-500 text-xs uppercase tracking-widest">Member</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
