import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface ExperienceStep {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
}

const EXPERIENCE_STEPS: ExperienceStep[] = [
  {
    id: 1,
    title: 'Parque del Amor',
    subtitle: 'Miraflores',
    description: 'Impresionantes vistas al océano Pacífico y la icónica escultura de El Beso.',
    image: 'https://images.unsplash.com/photo-1577971132992-0b81db87bf4c?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'Huaca Pucllana',
    subtitle: 'Sitio Arqueológico',
    description: 'Antigua pirámide preinca construida con adobes en el corazón de Lima.',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: 'Snacks Peruanos',
    subtitle: 'Degustación',
    description: 'Prueba papas nativas crujientes y auténticos sabores tradicionales peruanos.',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    title: 'Parque El Olivar',
    subtitle: 'San Isidro',
    description: 'Camina por el bosque de olivos centenarios más hermoso y tranquilo de Lima.',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    title: 'Centro Histórico',
    subtitle: 'de Lima',
    description: 'Descubre los monumentos, conventos virreinales y plazas más importantes.',
    image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    title: 'Pisco & Vino',
    subtitle: 'Experiencia',
    description: 'Disfruta de una selecta degustación de pisco peruano y vinos finos.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 7,
    title: 'Video con Drone',
    subtitle: 'Recuerdo Aéreo',
    description: 'Llévate a casa un recuerdo aéreo profesional e inolvidable de tu viaje.',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=400&q=80',
  },
];

export const ExperienceTimeline: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="el-tour" className="w-full bg-white text-neutral-900 py-16 sm:py-20 border-b border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header matching the screenshot */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide text-neutral-950 font-sans">
            TU EXPERIENCIA CITY TOUR <span className="font-normal text-neutral-600">(City Tour Plus)</span>
          </h2>
          {/* Orange bar */}
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3.5 rounded-full" />
        </div>

        {/* Timeline Path Container */}
        <div className="relative">
          
          {/* Horizontal scrollable track for all screens with elegant desktop presentation */}
          <div 
            ref={scrollContainerRef}
            className="flex items-start gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-transparent no-scrollbar relative"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {EXPERIENCE_STEPS.map((step, index) => {
              const isLast = index === EXPERIENCE_STEPS.length - 1;

              return (
                <React.Fragment key={step.id}>
                  {/* Step Card */}
                  <div 
                    className="flex-shrink-0 w-[170px] sm:w-[190px] xl:w-[165px] flex flex-col items-center text-center group cursor-pointer"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    {/* Rounded Image with Border */}
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-md border-2 border-neutral-200/80 bg-neutral-100 mb-4 group-hover:scale-105 group-hover:border-amber-500 group-hover:shadow-lg transition-all duration-300 relative">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Step Title */}
                    <h3 className="font-bold text-sm sm:text-base text-neutral-950 leading-snug mb-1.5 group-hover:text-amber-600 transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-neutral-500 leading-relaxed max-w-[170px]">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting Line + Orange Dot (only if not the last item) */}
                  {!isLast && (
                    <div className="hidden sm:flex items-center justify-center flex-shrink-0 w-8 sm:w-10 xl:w-8 pt-14 -mx-1">
                      <div className="relative w-full flex items-center justify-center">
                        {/* Gray line */}
                        <div className="absolute w-full h-[2px] bg-neutral-300" />
                        {/* Orange dot in middle */}
                        <div className="relative w-3.5 h-3.5 rounded-full bg-amber-500 border-2 border-white shadow-sm z-10" />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Left / Right mobile navigation buttons */}
          <div className="flex xl:hidden items-center justify-center gap-4 mt-4">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full border border-neutral-300 bg-white text-neutral-700 hover:bg-amber-500 hover:text-white hover:border-amber-500 flex items-center justify-center shadow-sm transition active:scale-95 cursor-pointer"
              aria-label="Anterior parada"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-neutral-400 font-medium">
              Desliza para ver el recorrido completo
            </span>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full border border-neutral-300 bg-white text-neutral-700 hover:bg-amber-500 hover:text-white hover:border-amber-500 flex items-center justify-center shadow-sm transition active:scale-95 cursor-pointer"
              aria-label="Siguiente parada"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
