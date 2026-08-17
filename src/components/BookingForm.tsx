import React, { useState } from 'react';
import { Calendar, User, ShieldCheck, Zap, Lock, ChevronDown, CheckCircle2 } from 'lucide-react';
import { COUNTRIES } from '../data/countries';
import { BookingFormData } from '../types';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface BookingFormProps {
  compact?: boolean;
  className?: string;
  onSuccess?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ className = '', onSuccess }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    countryCode: '+51',
    countryName: 'Perú',
    whatsappNumber: '',
    preferredDate: '',
    travelersCount: '2',
    comments: '',
  });

  const [errors, setErrors] = useState<{ fullName?: string; whatsappNumber?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = COUNTRIES.find((c) => c.name === e.target.value);
    if (selected) {
      setFormData((prev) => ({
        ...prev,
        countryName: selected.name,
        countryCode: selected.dialCode,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        countryName: e.target.value,
      }));
    }
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = COUNTRIES.find((c) => c.dialCode === e.target.value);
    setFormData((prev) => ({
      ...prev,
      countryCode: e.target.value,
      countryName: selected ? selected.name : prev.countryName,
    }));
  };

  const validate = () => {
    const newErrors: { fullName?: string; whatsappNumber?: string } = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Por favor ingresa tu nombre completo';
    }
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'Por favor ingresa tu número de WhatsApp';
    } else if (formData.whatsappNumber.trim().length < 6) {
      newErrors.whatsappNumber = 'Por favor ingresa un número válido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const whatsappUrl = buildWhatsAppUrl(formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      if (onSuccess) onSuccess();

      // Open WhatsApp
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      // Auto reset success notice after 5 seconds
      setTimeout(() => setSubmittedSuccess(false), 6000);
    }, 400);
  };

  // Get current date string for min date in picker
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className={`bg-neutral-950/85 backdrop-blur-md border border-neutral-700/60 rounded-2xl p-5 sm:p-6 shadow-2xl text-white ${className}`}>
      {/* Header */}
      <div className="mb-5 text-center sm:text-left border-b border-neutral-800 pb-3.5">
        <h3 className="text-base sm:text-lg font-bold tracking-wide uppercase text-neutral-100 flex items-center justify-center sm:justify-start gap-2">
          <span>CONSULTAR DISPONIBILIDAD Y RESERVAR</span>
        </h3>
        <p className="text-xs text-neutral-400 mt-1">
          Completa los datos para coordinar al instante tu City Tour por WhatsApp.
        </p>
      </div>

      {submittedSuccess && (
        <div className="mb-5 p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs sm:text-sm flex items-start gap-3 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-emerald-300">¡Conectando con WhatsApp de Lima VIP Travel!</p>
            <p className="text-neutral-300 text-xs mt-0.5">Si no se abrió la ventana automáticamente, puedes hacer clic en el botón de WhatsApp abajo.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1: Full Name & WhatsApp Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Full Name (Required) */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
              Nombre Completo <span className="text-amber-400 font-bold">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => {
                  setFormData({ ...formData, fullName: e.target.value });
                  if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                }}
                placeholder="Tu nombre y apellido"
                className={`w-full bg-white text-neutral-900 placeholder:text-neutral-500 rounded-lg px-3.5 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 transition ${
                  errors.fullName ? 'border-2 border-red-500 bg-red-50' : 'border border-neutral-300'
                }`}
              />
            </div>
            {errors.fullName && (
              <span className="text-[11px] text-red-400 font-medium mt-1 block">{errors.fullName}</span>
            )}
          </div>

          {/* WhatsApp Number (Required) with compact code display (+51) */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
              Número de WhatsApp <span className="text-amber-400 font-bold">*</span>
            </label>
            <div className="flex rounded-lg overflow-hidden border border-neutral-300 bg-white focus-within:ring-2 focus-within:ring-amber-400 transition">
              {/* Country Dial Code Selector - Compact display showing strictly code like +51 */}
              <div className="relative bg-neutral-100 border-r border-neutral-300 flex items-center justify-center min-w-[70px] max-w-[85px] px-2">
                <span className="text-xs font-bold text-neutral-800 select-none pr-3">
                  {formData.countryCode}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-500 absolute right-1.5 pointer-events-none" />
                <select
                  value={formData.countryCode}
                  onChange={handleCodeChange}
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer text-neutral-900"
                  title="Seleccionar código de país"
                >
                  {COUNTRIES.map((c) => (
                    <option key={`${c.code}-${c.dialCode}`} value={c.dialCode} className="text-neutral-900 font-medium">
                      {c.flag} {c.dialCode} ({c.name})
                    </option>
                  ))}
                </select>
              </div>

              {/* Number Input */}
              <input
                type="tel"
                value={formData.whatsappNumber}
                onChange={(e) => {
                  setFormData({ ...formData, whatsappNumber: e.target.value });
                  if (errors.whatsappNumber) setErrors({ ...errors, whatsappNumber: undefined });
                }}
                placeholder="987 654 321"
                className={`w-full bg-white text-neutral-900 placeholder:text-neutral-500 px-3.5 py-2.5 text-sm font-medium focus:outline-none ${
                  errors.whatsappNumber ? 'bg-red-50 text-red-900' : ''
                }`}
              />
            </div>
            {errors.whatsappNumber && (
              <span className="text-[11px] text-red-400 font-medium mt-1 block">{errors.whatsappNumber}</span>
            )}
          </div>
        </div>

        {/* Row 2: Country of Origin & Tour Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Country (Optional) */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
              País de Origen <span className="text-neutral-400 font-normal text-[10px]">(Opcional)</span>
            </label>
            <div className="relative">
              <select
                value={formData.countryName}
                onChange={handleCountryChange}
                className="w-full bg-white text-neutral-900 rounded-lg px-3.5 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 border border-neutral-300 appearance-none cursor-pointer"
              >
                <option value="">Selecciona tu país</option>
                {COUNTRIES.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.flag} {c.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-neutral-500 absolute right-3 top-3 pointer-events-none" />
            </div>
          </div>

          {/* Preferred Tour Date (Optional) */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
              Fecha del Viaje <span className="text-neutral-400 font-normal text-[10px]">(Opcional)</span>
            </label>
            <div className="relative">
              <input
                type="date"
                min={today}
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full bg-white text-neutral-900 rounded-lg px-3.5 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 border border-neutral-300 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Row 3: Number of Travelers (1 to 40 - Direct number or selection) & Comments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Number of Travelers (1 to 40) */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
              Cantidad de Personas <span className="text-neutral-400 font-normal text-[10px]">(1 a 40)</span>
            </label>
            <div className="relative flex rounded-lg overflow-hidden border border-neutral-300 bg-white focus-within:ring-2 focus-within:ring-amber-400">
              <div className="pl-3 py-2.5 flex items-center pointer-events-none text-neutral-500">
                <User className="w-4 h-4" />
              </div>
              <input
                type="number"
                min={1}
                max={40}
                value={formData.travelersCount}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '') {
                    setFormData({ ...formData, travelersCount: '' });
                  } else {
                    const num = parseInt(val, 10);
                    if (!isNaN(num)) {
                      setFormData({ ...formData, travelersCount: String(Math.max(1, Math.min(40, num))) });
                    }
                  }
                }}
                placeholder="2"
                className="w-full bg-white text-neutral-900 px-2.5 py-2.5 text-sm font-semibold focus:outline-none"
              />
              {/* Quick Dropdown select for convenience */}
              <div className="relative flex items-center border-l border-neutral-200 bg-neutral-50 px-2 cursor-pointer">
                <select
                  value={formData.travelersCount}
                  onChange={(e) => setFormData({ ...formData, travelersCount: e.target.value })}
                  className="bg-transparent text-xs font-semibold text-neutral-700 pr-4 py-2 focus:outline-none cursor-pointer appearance-none"
                  title="Elegir cantidad"
                >
                  <option value="">Elegir</option>
                  {Array.from({ length: 40 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={String(n)} className="text-neutral-900">
                      {n} {n === 1 ? 'Persona' : 'Personas'}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-500 absolute right-1 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Comments (Optional) */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
              Comentarios <span className="text-neutral-400 font-normal text-[10px]">(Opcional)</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.comments}
                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                placeholder="Hotel, horario de preferencia u otra solicitud"
                className="w-full bg-white text-neutral-900 placeholder:text-neutral-500 rounded-lg px-3.5 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 border border-neutral-300"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-neutral-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 transform active:scale-[0.98] cursor-pointer disabled:opacity-75"
          >
            <Calendar className="w-5 h-5 text-neutral-950" />
            <span>{isSubmitting ? 'Enviando a WhatsApp...' : 'CONSULTAR DISPONIBILIDAD'}</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="pt-2 grid grid-cols-3 gap-2 text-center border-t border-neutral-800/80">
          <div className="flex items-center justify-center gap-1 text-[11px] text-neutral-300 font-medium">
            <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Pagos Seguros</span>
          </div>
          <div className="flex items-center justify-center gap-1 text-[11px] text-neutral-300 font-medium">
            <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Confirmación Rápida</span>
          </div>
          <div className="flex items-center justify-center gap-1 text-[11px] text-neutral-300 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Sin Cargos Ocultos</span>
          </div>
        </div>
      </form>
    </div>
  );
};
