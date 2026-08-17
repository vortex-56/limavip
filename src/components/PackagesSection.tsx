import React from 'react';
import { Clock, Users, Languages, Star, ChevronRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/tourData';
import { openWhatsAppDirect } from '../utils/whatsapp';

interface TourStopThumbnail {
  name: string;
  image: string;
}

interface TourPackage {
  id: string;
  title: string;
  description: string;
  priceUSD: number;
  duration: string;
  type: string;
  languages: string;
  isPopular?: boolean;
  coverImage: string;
  stops: TourStopThumbnail[];
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'city-tour-plus',
    title: 'City Tour Plus',
    description: 'El tour más completo por la ciudad de Lima con historia, cultura, gastronomía, cata de pisco y vino, y video con drone.',
    priceUSD: 38,
    duration: '4 Horas',
    type: 'Tour Compartido',
    languages: 'Español e Inglés',
    isPopular: true,
    coverImage: 'https://images.unsplash.com/photo-1577971132992-0b81db87bf4c?auto=format&fit=crop&w=800&q=80',
    stops: [
      {
        name: 'Parque del Amor',
        image: 'https://images.unsplash.com/photo-1577971132992-0b81db87bf4c?auto=format&fit=crop&w=300&q=80',
      },
      {
        name: 'Huaca Pucllana',
        image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=300&q=80',
      },
      {
        name: 'Snacks Peruanos',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=300&q=80',
      },
      {
        name: 'Pisco & Vino',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=300&q=80',
      },
      {
        name: 'Video con Drone',
        image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=300&q=80',
      },
    ],
  },
  {
    id: 'city-tour-clasico-catacumbas',
    title: 'City Tour Clásico + Catacumbas',
    description: 'Explora la historia virreinal de Lima y desciende a las misteriosas catacumbas subterráneas de San Francisco.',
    priceUSD: 45,
    duration: '4 Horas',
    type: 'Tour Compartido',
    languages: 'Español e Inglés',
    isPopular: false,
    coverImage: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=800&q=80',
    stops: [
      {
        name: 'Centro Histórico',
        image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=300&q=80',
      },
      {
        name: 'Catacumbas San Francisco',
        image: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=300&q=80',
      },
      {
        name: 'Plaza Mayor',
        image: 'https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?auto=format&fit=crop&w=300&q=80',
      },
      {
        name: 'Casonas Coloniales',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=300&q=80',
      },
    ],
  },
  {
    id: 'city-tour-circuito-magico',
    title: 'City Tour Plus + Circuito Mágico del Agua',
    description: 'Vive Lima de día y maravíllate con el show de luces y fuentes ornamentales en el Parque de la Reserva de noche.',
    priceUSD: 65,
    duration: '6 Horas',
    type: 'Tour Compartido',
    languages: 'Español e Inglés',
    isPopular: false,
    coverImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
    stops: [
      {
        name: 'City Tour Plus',
        image: 'https://images.unsplash.com/photo-1577971132992-0b81db87bf4c?auto=format&fit=crop&w=300&q=80',
      },
      {
        name: 'Circuito Mágico',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=300&q=80',
      },
      {
        name: 'Fuentes Iluminadas',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=300&q=80',
      },
      {
        name: 'Show Nocturno',
        image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=300&q=80',
      },
    ],
  },
];

export const PackagesSection: React.FC = () => {
  const handleRequestDetails = (pkg: TourPackage) => {
    const message = `¡Hola ${COMPANY_INFO.name}! 👋 Deseo pedir más detalles e información sobre el paquete *${pkg.title}* de US$ ${pkg.priceUSD} por persona. ¿Tienen disponibilidad?`;
    openWhatsAppDirect(message);
  };

  return (
    <section id="paquetes" className="w-full bg-white text-neutral-900 py-16 sm:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wider text-neutral-950 font-sans">
            ELIGE TU EXPERIENCIA EN LIMA
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3.5 rounded-full" />
          <p className="text-neutral-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Selecciona el paquete ideal para ti y tus acompañantes. Todos incluyen recojo en hotel y guías certificados.
          </p>
        </div>

        {/* 3 Package Cards Grid matching the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {TOUR_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-neutral-950 text-white rounded-3xl overflow-hidden border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl shadow-xl ${
                pkg.isPopular 
                  ? 'border-amber-500 shadow-amber-500/15' 
                  : 'border-neutral-800 hover:border-neutral-700 shadow-neutral-950/20'
              }`}
            >
              <div>
                {/* Cover Image */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden">
                  <img
                    src={pkg.coverImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-black/40 to-transparent" />

                  {/* Popular Badge */}
                  {pkg.isPopular && (
                    <div className="absolute top-3 left-3 bg-amber-500 text-neutral-950 font-black text-xs px-3 py-1 rounded-md uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-neutral-950 text-neutral-950" />
                      <span>MÁS POPULAR</span>
                    </div>
                  )}
                </div>

                {/* Card Main Info */}
                <div className="p-5 sm:p-6 -mt-6 relative z-10">
                  {/* Title & Price Header */}
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                      {pkg.title}
                    </h3>
                    <div className="text-right shrink-0">
                      <div className="text-2xl sm:text-3xl font-black text-amber-400 leading-none">
                        US$ {pkg.priceUSD}
                      </div>
                      <div className="text-[11px] text-neutral-400 font-medium mt-0.5">
                        por persona
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4 min-h-[48px]">
                    {pkg.description}
                  </p>

                  {/* Tour Attributes Pills */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-300 py-3 border-y border-neutral-800/80 mb-5">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{pkg.type}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Languages className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{pkg.languages}</span>
                    </div>
                  </div>

                  {/* Places & Stops Grid Thumbnails */}
                  <div>
                    <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2.5">
                      Lugares del recorrido:
                    </div>
                    <div className={`grid gap-2 ${pkg.stops.length === 5 ? 'grid-cols-5' : 'grid-cols-4'}`}>
                      {pkg.stops.map((stop, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group/stop">
                          <div className="w-full aspect-square rounded-xl overflow-hidden border border-neutral-700/80 bg-neutral-900 mb-1.5 shadow-sm">
                            <img
                              src={stop.image}
                              alt={stop.name}
                              className="w-full h-full object-cover group-hover/stop:scale-110 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                          <span className="text-[10px] text-neutral-300 font-medium leading-tight line-clamp-2">
                            {stop.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom CTA Button: Ask for more details via WhatsApp */}
              <div className="p-5 sm:p-6 pt-0">
                <button
                  onClick={() => handleRequestDetails(pkg)}
                  className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-neutral-950 font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-300 active:scale-[0.98] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-neutral-950" />
                  <span>PEDIR MÁS DETALLES</span>
                  <ChevronRight className="w-4 h-4 text-neutral-950" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
