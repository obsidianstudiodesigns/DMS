export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  imageUrl?: string;
  badge?: string;
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
  idealFor: string;
  warranty: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: 'residential' | 'commercial' | 'downpipes' | 'waterproofing' | 'cleaning';
  categoryLabel: string;
  description: string;
  location: string;
  material: string;
  color: string;
  highlights: string[];
  imageUrl?: string;
}

export interface ColorSwatch {
  id: string;
  name: string;
  hex: string;
  ralCode: string;
  description: string;
  popular: boolean;
}

export interface QuoteCalculation {
  gutterLengthMeters: number;
  downpipesCount: number;
  storeyType: 'single' | 'double' | 'triple' | 'commercial';
  gutterType: 'domestic_125' | 'industrial_150';
  includeWaterproofing: boolean;
  waterproofingAreaM2: number;
  includeHighPressureWash: boolean;
  includeFasciaRepair: boolean;
  estimatedTotalMin: number;
  estimatedTotalMax: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  projectType: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'gutters' | 'waterproofing' | 'pricing' | 'installation';
}
