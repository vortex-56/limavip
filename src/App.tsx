import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseCarousel } from './components/WhyChooseCarousel';
import { PackagesSection } from './components/PackagesSection';
import { WhiteInfoSection } from './components/WhiteInfoSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-500 selection:text-neutral-950">
      {/* Top Main Navigation (Stays at the top when scrolling) */}
      <Navbar />

      {/* Hero with Lima Scenery, Left Information and Right Translucent Booking Form */}
      <main className="flex-1">
        <Hero />

        {/* Carousel of Why Choose Lima VIP directly below hero */}
        <WhyChooseCarousel />

        {/* 3 Tour Packages matching screenshot (Choose Your Lima Experience) */}
        <PackagesSection />

        {/* White Section with Company Information, Itinerary, Inclusions, Reviews and FAQs */}
        <WhiteInfoSection />
      </main>

      {/* Footer matching Image 3 with Lima Night View & WhatsApp 24/7 */}
      <Footer />

      {/* Floating Green WhatsApp Button in bottom-right corner */}
      <FloatingWhatsApp />
    </div>
  );
}
