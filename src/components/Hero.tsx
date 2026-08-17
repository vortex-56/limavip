import React from 'react';
import { Clock, Users, Languages, Calendar, MessageCircle, Sparkles, Award, Shield, Hotel, BusFront, Compass } from 'lucide-react';
import { BookingForm } from './BookingForm';
import { COMPANY_INFO } from '../data/tourData';
import { openWhatsAppDirect } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  const scrollToForm = () => {
    const el = document.getElementById('reserva-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Background Image: Parque del Amor & Costa Verde Sunset in Miraflores, Lima */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1577971132992-0b81db87bf4c?auto=format&fit=crop&w=2000&q=85')`,
        }}
      >
        {/* Dark gradient overlay: Stronger on the left for maximum readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/40 sm:to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/60" />
      </div>

      {/* Decorative Warm Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Main Hero Text & Highlights */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>EXPERIENCIA PRÉMIUM EN LA CIUDAD DE LIMA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-serif tracking-tight">
              Descubre el <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">City Tour Más Completo</span> de Lima
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed font-normal">
              Vive Lima a través de su historia virreinal, sabores criollos y vistas inolvidables del Pacífico — todo en un exclusivo tour prémium por la ciudad con recojo en tu hotel.
            </p>

            {/* Price Badge */}
            <div className="inline-flex items-center gap-3 bg-neutral-900/90 border border-neutral-700/80 p-2 pr-5 rounded-2xl shadow-xl backdrop-blur-md">
              <div className="bg-gradient-to-r from-amber-500 to-amber-400 text-neutral-950 font-black text-2xl sm:text-3xl px-4 py-2 rounded-xl shadow-md">
                US$ 38
              </div>
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider text-amber-400 font-bold">Tarifa Promocional</div>
                <div className="text-sm font-semibold text-neutral-200">por persona • Todo incluido</div>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-neutral-200 font-medium pt-1">
              <div className="flex items-center gap-1.5 bg-neutral-900/80 border border-neutral-800 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>4 Horas</span>
              </div>
              <div className="flex items-center gap-1.5 bg-neutral-900/80 border border-neutral-800 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <Users className="w-4 h-4 text-amber-400" />
                <span>Tour Compartido</span>
              </div>
              <div className="flex items-center gap-1.5 bg-neutral-900/80 border border-neutral-800 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <Languages className="w-4 h-4 text-amber-400" />
                <span>Español & English</span>
              </div>
              <div className="flex items-center gap-1.5 bg-neutral-900/80 border border-neutral-800 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Todos los Días</span>
              </div>
            </div>

            {/* Quick Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={scrollToForm}
                className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-neutral-950" />
                <span>RESERVAR AHORA</span>
              </button>

              <button
                onClick={() => openWhatsAppDirect('¡Hola Lima VIP Travel! Quiero consultar por el City Tour de US$ 38.')}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-neutral-700 bg-neutral-900/90 hover:bg-neutral-800 text-neutral-100 hover:text-amber-400 font-bold text-sm uppercase tracking-wider transition-all duration-300 backdrop-blur-md active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>CHATEAR POR WHATSAPP</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Glass Translucent Booking Form matching Image 2 */}
          <div id="reserva-form" className="lg:col-span-5 w-full">
            <BookingForm />
          </div>

        </div>
      </div>
    </section>
  );
};
