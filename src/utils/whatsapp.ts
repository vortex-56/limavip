import { BookingFormData } from '../types';
import { COMPANY_INFO } from '../data/tourData';

export function buildWhatsAppUrl(data: Partial<BookingFormData>): string {
  const parts: string[] = [];

  parts.push(`¡Hola ${COMPANY_INFO.name}! 👋 Deseo consultar disponibilidad y reservar el *City Tour Prémium por Lima*.`);
  parts.push('');
  
  if (data.fullName?.trim()) {
    parts.push(`👤 *Nombre:* ${data.fullName.trim()}`);
  }
  
  if (data.whatsappNumber?.trim()) {
    const fullPhone = `${data.countryCode || '+51'} ${data.whatsappNumber.trim()}`;
    parts.push(`📱 *WhatsApp:* ${fullPhone}`);
  }

  if (data.countryName && data.countryName !== 'Selecciona tu país') {
    parts.push(`🌎 *País de procedencia:* ${data.countryName}`);
  }

  if (data.preferredDate) {
    parts.push(`📅 *Fecha preferida:* ${data.preferredDate}`);
  }

  if (data.tourShift) {
    const shiftLabel = 
      data.tourShift === 'morning' ? 'Mañana (8:30 AM)' :
      data.tourShift === 'afternoon' ? 'Tarde (1:30 PM)' : 'Flexible / Cualquiera';
    parts.push(`⏰ *Horario:* ${shiftLabel}`);
  }

  if (data.travelersCount) {
    const countNum = parseInt(data.travelersCount, 10);
    const label = !isNaN(countNum) ? `${countNum} ${countNum === 1 ? 'persona' : 'personas'}` : data.travelersCount;
    parts.push(`👥 *Cantidad de Personas:* ${label}`);
  }

  if (data.comments?.trim()) {
    parts.push(`💬 *Comentarios / Requerimientos:* ${data.comments.trim()}`);
  }

  parts.push('');
  parts.push('📍 *Precio:* US$ 38 por persona');
  parts.push('Por favor confírmenme disponibilidad para completar la reserva. ¡Muchas gracias!');

  const text = encodeURIComponent(parts.join('\n'));
  return `https://wa.me/${COMPANY_INFO.phoneClean}?text=${text}`;
}

export function openWhatsAppDirect(message?: string): void {
  const defaultText = encodeURIComponent(
    message || `¡Hola ${COMPANY_INFO.name}! 👋 Deseo información sobre el City Tour Prémium por Lima de US$ 38 por persona.`
  );
  window.open(`https://wa.me/${COMPANY_INFO.phoneClean}?text=${defaultText}`, '_blank', 'noopener,noreferrer');
}
