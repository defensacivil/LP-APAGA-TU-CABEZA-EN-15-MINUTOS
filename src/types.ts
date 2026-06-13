export interface Module {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  bullets: string[];
  iconName: string;
  deepDescription: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  age: number;
  avatarText: string;
  rating: number;
  text: string;
  verified: boolean;
  highlightText?: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface Bonus {
  id: number;
  title: string;
  originalPrice: string;
  valueText: string;
  description: string;
  emoji: string;
}
