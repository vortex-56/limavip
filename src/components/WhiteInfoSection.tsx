import React, { useState } from 'react';
import { 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  MessageCircle, 
  Award, 
  CheckCircle2
} from 'lucide-react';
import { ExperienceTimeline } from './ExperienceTimeline';
import { REVIEWS, FAQS, COMPANY_INFO } from '../data/tourData';
import { openWhatsAppDirect } from '../utils/whatsapp';

export const WhiteInfoSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToReserva = () => {
    const el = document.getElementById('inicio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white text-neutral-900 overflow-hidden">
      
      {/* 1. YOUR CITY TOUR EXPERIENCE (CITY TOUR PLUS) TIMELINE SECTION */}
      <ExperienceTimeline />

      {/* 2. REVIEWS & TESTIMONIALS SECTION */}
      <section id="opiniones" className="py-16 sm:py-24 bg-neutral-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>TESTIMONIOS DE VIAJEROS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
              Lo que Dicen Quienes Ya Recorrieron Lima Con Nosotros
            </h2>
            <p className="text-neutral-300 mt-3 text-sm sm:text-base">
              Calificación 4.9/5 estrellas en plataformas de viaje por nuestro servicio y puntualidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {REVIEWS.map((review, idx) => (
              <div 
                key={idx}
                className="bg-neutral-800/80 border border-neutral-700 rounded-2xl p-6 flex flex-col justify-between shadow-lg relative"
              >
                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-neutral-300 text-sm italic leading-relaxed mb-6">
                    "{review.comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-700/80">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-11 h-11 rounded-full object-cover border-2 border-amber-400/60"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm text-white">{review.name}</span>
                      {review.verified && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" title="Viajero Verificado" />
                      )}
                    </div>
                    <span className="text-xs text-neutral-400">{review.origin}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => openWhatsAppDirect('¡Hola! Leí las opiniones y me gustaría reservar mi tour.')}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm tracking-wider uppercase shadow-lg shadow-amber-500/20 transition cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chatear y Reservar con Lima VIP</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. FAQ ACCORDION SECTION */}
      <section id="faq" className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>RESOLVEMOS TUS DUDAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-serif">
            Preguntas Frecuentes
          </h2>
          <p className="text-neutral-600 mt-2 text-sm">
            Todo lo que necesitas saber antes de tu City Tour en Lima.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index}
                className="border border-neutral-200 rounded-xl overflow-hidden transition-all duration-200 bg-neutral-50 hover:border-neutral-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-neutral-900 hover:text-amber-700 transition"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-200/60 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question helper */}
        <div className="mt-10 p-6 rounded-2xl bg-amber-50/60 border border-amber-200 text-center">
          <h4 className="font-bold text-neutral-900 text-base">
            ¿Tienes alguna consulta especial o requieres tour privado?
          </h4>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 mb-4">
            Escríbenos directamente a WhatsApp y te respondemos en minutos.
          </p>
          <button
            onClick={() => openWhatsAppDirect('¡Hola! Tengo una consulta sobre el City Tour de Lima VIP.')}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </button>
        </div>
      </section>

    </div>
  );
};
