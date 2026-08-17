import React from 'react';
import { MessageCircle } from 'lucide-react';
import { openWhatsAppDirect } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Button Circle */}
      <button
        onClick={() => openWhatsAppDirect('¡Hola Lima VIP Travel! 👋 Deseo información sobre los tours en Lima.')}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label="Abrir chat de WhatsApp"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-white drop-shadow-md z-10" />

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-amber-400 border-2 border-white rounded-full z-20" />
      </button>
    </div>
  );
};

