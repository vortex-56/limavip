import React from 'react';
import { 
  Calendar, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react';
import { COMPANY_INFO } from '../data/tourData';
import { openWhatsAppDirect } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    const el = document.getElementById('inicio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contacto" className="w-full bg-black text-white overflow-hidden border-t border-neutral-800">
      
      {/* 1. TOP BANNER (Matching Image 3) */}
      <div className="relative py-12 px-4 sm:px-6 lg:px-8 border-b border-neutral-800 overflow-hidden">
        {/* Background Image of Lima Historic Plaza / Fountains illuminated at night */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=1800&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Text */}
          <div className="text-center lg:text-left max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif tracking-tight text-white">
              ¿Listo para Descubrir lo Mejor de Lima?
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mt-2">
              Reserva tu City Tour Prémium ahora y vive una experiencia inolvidable.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <button
              onClick={scrollToTop}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/20 active:scale-95 cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-neutral-950" />
              <span>RESERVAR AHORA</span>
            </button>

            <button
              onClick={() => openWhatsAppDirect('¡Hola Lima VIP Travel! Deseo reservar el City Tour.')}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl border border-neutral-600 bg-neutral-900/90 hover:bg-neutral-800 text-neutral-100 hover:text-amber-400 font-bold text-sm uppercase tracking-wider transition-all duration-300 backdrop-blur-md active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>CHATEAR POR WHATSAPP</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT (Matching Image 3) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Col 1: Brand Logo */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
                <circle cx="12" cy="4" r="1.5" fill="currentColor" />
                <circle cx="2" cy="4" r="1.5" fill="currentColor" />
                <circle cx="22" cy="4" r="1.5" fill="currentColor" />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-xl tracking-wider text-white">
                  LIMA <span className="text-amber-400">VIP</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-[0.35em] text-neutral-400 mt-0.5">
                  TRAVEL
                </span>
              </div>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed pt-2">
              Agencia de turismo receptivo especializada en experiencias prémium, históricas y culturales en la ciudad de Lima, Perú.
            </p>
          </div>

          {/* Col 2: Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-neutral-200 uppercase tracking-wider mb-4">
              Contáctanos
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <button 
                  onClick={() => openWhatsAppDirect()}
                  className="hover:text-amber-400 transition"
                >
                  {COMPANY_INFO.phone}
                </button>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-400 transition">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.location}</span>
              </li>
            </ul>
          </div>

          {/* Col 3: WhatsApp 24/7 Box matching screenshot */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4">
            <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2.5">
              WhatsApp Oficial
            </h4>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <button
                  onClick={() => openWhatsAppDirect()}
                  className="font-bold text-sm text-white hover:text-amber-400 transition text-left block"
                >
                  {COMPANY_INFO.phone}
                </button>
                <span className="text-[11px] text-emerald-400 font-medium block">
                  (Disponible 24/7)
                </span>
              </div>
            </div>
            <button
              onClick={() => openWhatsAppDirect('¡Hola! Quiero consultar disponibilidad.')}
              className="mt-3 w-full py-2 bg-emerald-600/20 hover:bg-emerald-600 border border-emerald-500/40 text-emerald-300 hover:text-white rounded-lg text-xs font-semibold transition"
            >
              Iniciar Chat Directo
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
