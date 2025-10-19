export interface Stat {
  number: string;
  description: string;
  icon: string;
  bg: string;
}

export interface CTA {
  action: string;
  desc: string;
}

export interface Page {
  title: string;
  CTA: CTA;
  description: string;
  banner: string;
  formImage: string;
  FAQ: any[]; // Replace with real FAQ type later
  stats: Stat[];
}

export interface SiteData {
  pages: Record<string, Page>;
}
