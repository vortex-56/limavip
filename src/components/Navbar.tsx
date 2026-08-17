import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { openWhatsAppDirect } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Paquetes', href: '#paquetes' },
    { label: 'El Tour', href: '#el-tour' },
    { label: 'Reseñas', href: '#opiniones' },
    { label: 'Preguntas Frecuentes', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-[#0a0a0a] border-b border-neutral-800 text-white z-40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo matching the screenshot */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="flex flex-col items-center justify-center">
              {/* Crown / Palace Gold Emblem */}
              <svg className="w-7 h-7 text-amber-400 group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
                <circle cx="12" cy="4" r="1.5" fill="currentColor" />
                <circle cx="2" cy="4" r="1.5" fill="currentColor" />
                <circle cx="22" cy="4" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-xl tracking-wider text-white flex items-center gap-1.5">
                LIMA <span className="text-amber-400 font-black">VIP</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.35em] text-neutral-400 mt-0.5">
                TRAVEL
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors py-1 relative hover:text-amber-400 ${
                  idx === 0 ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-neutral-300'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA button in Header */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => openWhatsAppDirect('¡Hola Lima VIP Travel! Quiero consultar por el City Tour.')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-amber-400/80 bg-neutral-900/80 text-amber-300 hover:bg-amber-400 hover:text-black font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-amber-400/20 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:text-black" />
              <span>Chatear por WhatsApp</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-900 border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-md text-base font-medium text-neutral-200 hover:bg-neutral-800 hover:text-amber-400 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsAppDirect();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm transition shadow-lg"
            >
              <MessageCircle className="w-5 h-5 text-neutral-950" />
              <span>Chatear por WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
