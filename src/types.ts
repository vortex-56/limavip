export interface BookingFormData {
  fullName: string;
  countryCode: string;
  countryName: string;
  whatsappNumber: string;
  preferredDate: string;
  tourShift?: 'morning' | 'afternoon' | 'flexible';
  travelersCount: string;
  comments: string;
}

export interface CountryOption {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}

export interface TourStop {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  image: string;
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ReviewItem {
  name: string;
  origin: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
  verified: boolean;
}
