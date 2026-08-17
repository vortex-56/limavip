import React, { useState, useEffect, useRef } from 'react';
import { 
  Gem, 
  CalendarDays, 
  Users, 
  Bus, 
  ShieldCheck, 
  Languages, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: 'Experiencia Prémium',
    description: 'Cuidadosamente diseñado para ofrecer lo mejor de Lima en un solo tour.',
    icon: (
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-amber-500 mb-3 group-hover:scale-110 transition-transform duration-300">
        <Gem className="w-10 h-10 stroke-[1.75]" />
      </div>
    ),
  },
  {
    id: 2,
    title: 'Salidas Diarias',
    description: 'Operamos todos los días con salidas en la mañana y en la tarde.',
    icon: (
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-amber-500 mb-3 group-hover:scale-110 transition-transform duration-300">
        <CalendarDays className="w-10 h-10 stroke-[1.75]" />
      </div>
    ),
  },
  {
    id: 3,
    title: 'Guías Profesionales',
    description: 'Guías bilingües expertos y apasionados por su cultura e historia.',
    icon: (
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-amber-500 mb-3 group-hover:scale-110 transition-transform duration-300">
        <Users className="w-10 h-10 stroke-[1.75]" />
      </div>
    ),
  },
  {
    id: 4,
    title: 'Transporte Cómodo',
    description: 'Transporte turístico moderno, seguro, con aire acondicionado y confort.',
    icon: (
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-amber-500 mb-3 group-hover:scale-110 transition-transform duration-300">
        <Bus className="w-10 h-10 stroke-[1.75]" />
      </div>
    ),
  },
  {
    id: 5,
    title: 'Recojo en Hotel Incluido',
    description: 'Te recogemos y te dejamos directamente en la puerta de tu hotel.',
    icon: (
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-amber-500 mb-3 group-hover:scale-110 transition-transform duration-300">
        <ShieldCheck className="w-10 h-10 stroke-[1.75]" />
      </div>
    ),
  },
  {
    id: 6,
    title: 'Guiado en Español e Inglés',
    description: 'Disfruta del tour en el idioma con el que te sientas más cómodo.',
    icon: (
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-amber-500 mb-3 group-hover:scale-110 transition-transform duration-300">
        <Languages className="w-10 h-10 stroke-[1.75]" />
      </div>
    ),
  },
];

export const WhyChooseCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isHoveredRef = useRef(false);

  // Auto slide on mobile/tablets
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHoveredRef.current) {
        setCurrentIndex((prev) => (prev + 1) % FEATURES.length);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? FEATURES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % FEATURES.length);
  };

  return (
    <section 
      id="por-que-elegirnos" 
      className="w-full bg-white text-neutral-900 border-b border-neutral-200 py-12 lg:py-16 overflow-hidden relative shadow-sm"
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Matching Image */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide text-neutral-950 font-sans">
            ¿POR QUÉ ELEGIR LIMA VIP TRAVEL?
          </h2>
          {/* Orange underline bar */}
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3.5 rounded-full" />
        </div>

        {/* Desktop View: Exact Replica of reference image with vertical divider lines */}
        <div className="hidden lg:grid grid-cols-6 divide-x divide-neutral-200">
          {FEATURES.map((item) => (
            <div 
              key={item.id}
              className="px-4 xl:px-5 text-center flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1"
            >
              {item.icon}
              <h3 className="font-extrabold text-[15px] text-neutral-900 mb-2 leading-tight group-hover:text-amber-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-[13px] text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Interactive Carousel Slider */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden rounded-2xl bg-neutral-50/90 border border-neutral-200 p-6 sm:p-8 shadow-inner">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {FEATURES.map((item) => (
                <div 
                  key={item.id}
                  className="w-full flex-shrink-0 flex flex-col items-center text-center px-4"
                >
                  <div className="flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-black text-lg text-neutral-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed max-w-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-5 px-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-neutral-300 bg-white text-neutral-700 hover:bg-amber-500 hover:text-white hover:border-amber-500 flex items-center justify-center shadow transition active:scale-95 cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {FEATURES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx 
                      ? 'w-7 bg-amber-500' 
                      : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`Aspecto ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-neutral-300 bg-white text-neutral-700 hover:bg-amber-500 hover:text-white hover:border-amber-500 flex items-center justify-center shadow transition active:scale-95 cursor-pointer"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
