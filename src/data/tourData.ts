import { TourStop, FAQItem, ReviewItem } from '../types';

export const COMPANY_INFO = {
  name: 'LIMA VIP TRAVEL',
  tagline: 'Experiencia Prémium en Lima',
  phone: '+51 987 654 321',
  phoneClean: '51987654321',
  email: 'info@limaviptravel.com',
  location: 'Miraflores, Lima - Perú',
  priceUSD: 38,
  durationHours: 4,
  departures: {
    morning: '8:30 AM',
    afternoon: '1:30 PM',
  },
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    tripadvisor: 'https://tripadvisor.com',
    youtube: 'https://youtube.com',
  },
};

export const TOUR_HIGHLIGHTS = [
  {
    icon: 'Crown',
    title: 'Experiencia Prémium',
    desc: 'Grupos reducidos y atención personalizada de primer nivel.',
  },
  {
    icon: 'GraduationCap',
    title: 'Guías Profesionales',
    desc: 'Guías oficiales bilingües certificados (Español & English).',
  },
  {
    icon: 'Bus',
    title: 'Transporte Cómodo & Climatizado',
    desc: 'Vehículos turísticos modernos con aire acondicionado y chofer profesional.',
  },
  {
    icon: 'Hotel',
    title: 'Recojo de Hotel Incluido',
    desc: 'Desde tu hotel o Airbnb en Miraflores y San Isidro.',
  },
  {
    icon: 'Languages',
    title: 'Guiado en Español e Inglés',
    desc: 'Narración histórica inmersiva, anécdotas y leyendas limeñas.',
  },
  {
    icon: 'CalendarDays',
    title: 'Salidas Diarias (Mañana & Tarde)',
    desc: 'Horarios flexibles de lunes a domingo: 8:30 AM y 1:30 PM.',
  },
];

export const TOUR_STOPS: TourStop[] = [
  {
    id: 'miraflores',
    title: 'Miraflores & Parque del Amor',
    subtitle: 'El icónico Malecón con vista al Océano Pacífico',
    description: 'Comenzamos en el moderno distrito de Miraflores con espectaculares acantilados de la Costa Verde, mosaicos al estilo Gaudí y la célebre escultura "El Beso" del artista peruano Víctor Delfín.',
    duration: '45 mins',
    image: 'https://images.unsplash.com/photo-1577971132992-0b81db87bf4c?auto=format&fit=crop&w=800&q=80',
    tags: ['Vistas Panorámicas', 'Foto Spot', 'Costa Verde'],
  },
  {
    id: 'pucllana',
    title: 'Huaca Pucllana (Vista Panorámica)',
    subtitle: 'Gran pirámide ceremonial de la cultura Lima',
    description: 'Apreciaremos el imponente complejo arqueológico de adobe y barro edificado en el siglo V d.C., admirando el impactante contraste entre la arquitectura prehispánica y los edificios modernos de Miraflores.',
    duration: '20 mins',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80',
    tags: ['Cultura Prehispánica', 'Arqueología', 'Historia'],
  },
  {
    id: 'olivar',
    title: 'Bosque El Olivar de San Isidro',
    subtitle: 'Oasis colonial con árboles centenarios plantados en 1560',
    description: 'Paseo tranquilo por este monumento nacional habitado por más de 30 especies de aves y cientos de olivos coloniales traídos por San Martín de Porres en el siglo XVI.',
    duration: '30 mins',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    tags: ['Naturaleza', 'Historia Colonial', 'San Isidro'],
  },
  {
    id: 'centro-historico',
    title: 'Centro Histórico de Lima (UNESCO)',
    subtitle: 'La "Ciudad de los Reyes", capital del Virreinato',
    description: 'Caminata guiada por la Plaza Mayor de Lima, Plaza San Martín, Palacio de Gobierno, el Palacio Arzobispal, la Catedral de Lima y los elegantes balcones de madera tallada de la época colonial.',
    duration: '60 mins',
    image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=800&q=80',
    tags: ['Patrimonio UNESCO', 'Plaza Mayor', 'Arquitectura'],
  },
  {
    id: 'san-francisco',
    title: 'Convento de San Francisco & Catacumbas',
    subtitle: 'El misterio subterráneo y la joya barroca de América',
    description: 'Ingreso guiado a la Basílica y Convento de San Francisco, su famosa biblioteca colonial con lienzos de Zurbarán y las criptas subterráneas ("Catacumbas") que albergan más de 25,000 restos óseos.',
    duration: '45 mins',
    image: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=800&q=80',
    tags: ['Entrada Incluida', 'Catacumbas', 'Arte Religioso'],
  },
  {
    id: 'degustacion',
    title: 'Degustación de Pisco Sour Tradicional',
    subtitle: 'El brindis con la bebida bandera del Perú',
    description: 'Finalizamos en una taberna tradicional del centro histórico con una demostración y degustación del auténtico Pisco Sour peruano preparado con pisco quebranta y secretos de coctelería criolla.',
    duration: '30 mins',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    tags: ['Gastronomía', 'Pisco Sour', 'Cultura'],
  },
];

export const INCLUSIONS = {
  included: [
    'Recojo de ida y vuelta en hoteles de Miraflores y San Isidro',
    'Transporte turístico prémium con aire acondicionado',
    'Guía oficial de turismo bilingüe certificado (Español / Inglés)',
    'Entradas a la Basílica y Catacumbas del Convento de San Francisco',
    'Degustación de Pisco Sour tradicional (o bebida sin alcohol)',
    'Botella de agua mineral de cortesía para cada viajero',
    'Asistencia personalizada y fotos del recuerdo',
  ],
  notIncluded: [
    'Almuerzo o comidas no especificadas en el itinerario',
    'Propinas voluntarias para el guía y conductor',
    'Recojos fuera de las zonas turísticas de Miraflores/San Isidro (disponible con suplemento)',
  ],
};

export const REVIEWS: ReviewItem[] = [
  {
    name: 'Carlos Mendoza',
    origin: 'Santiago, Chile 🇨🇱',
    rating: 5,
    date: 'Hace 3 días',
    comment: '¡Una experiencia 10/10! El recojo fue puntual en nuestro hotel de Miraflores. Nuestro guía Juan fue súper amable y nos explicó la historia con mucha pasión. Las catacumbas impresionantes y el pisco sour al final fue el toque perfecto.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    verified: true,
  },
  {
    name: 'Sarah & Michael Jenkins',
    origin: 'California, EE.UU. 🇺🇸',
    rating: 5,
    date: 'Hace 1 semana',
    comment: 'Best city tour in South America! The minivan was super clean and cool. Being able to see both modern Miraflores and the historic cathedrals made us fall in love with Lima. Booking via WhatsApp was seamless!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    verified: true,
  },
  {
    name: 'Lucía Fernández',
    origin: 'Madrid, España 🇪🇸',
    rating: 5,
    date: 'Hace 2 semanas',
    comment: 'Viajé sola y me sentí completamente segura y cuidada. El grupo era pequeño, el guía resolvía todas las dudas y la visita al convento de San Francisco no tiene precio. Totalmente recomendado Lima VIP.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    verified: true,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: '¿A qué hora y desde dónde nos recogen?',
    answer: 'Recogemos directamente en la puerta de tu hotel o alojamiento en Miraflores y San Isidro. Para el turno mañana el recojo es entre 8:00 AM y 8:30 AM, y para el turno tarde entre 1:00 PM y 1:30 PM. Te confirmamos la hora exacta por WhatsApp.',
  },
  {
    question: '¿Cómo realizo el pago del tour?',
    answer: 'Puedes pagar en efectivo el mismo día del tour (Dólares US$ o Soles peruanos al cambio del día), o previamente mediante tarjeta de crédito/débito, PayPal o transferencia bancaria coordinada por WhatsApp.',
  },
  {
    question: '¿Qué sucede si necesito cancelar o cambiar de fecha?',
    answer: 'En Lima VIP Travel entendemos los imprevistos de los viajes. Puedes reprogramar tu fecha sin costo o cancelar con hasta 24 horas de anticipación con total flexibilidad.',
  },
  {
    question: '¿El tour se realiza en español o inglés?',
    answer: 'Nuestros guías son 100% bilingües. Las explicaciones se brindan de manera fluida y dinámica en español e inglés, adaptándose al idioma preferido de los integrantes del grupo.',
  },
  {
    question: '¿Qué debo llevar para el City Tour?',
    answer: 'Te recomendamos llevar ropa y calzado cómodo para caminar en el centro histórico, lentes de sol, bloqueador solar, cámara o celular con batería cargada y un documento de identidad.',
  },
];
