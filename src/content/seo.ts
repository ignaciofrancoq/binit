// src/content/seo.ts
import type { Lang } from '../lib/lang';

type SeoData = {
  [routeKey: string]: {
    [lang in Lang]: {
      title: string;
      description: string;
      keywords: string;
      image?: string;
    };
  };
};

export const seoContent: SeoData = {
  career: {
    en: {
      title: 'Career | Binit',
      description:
        'Technology to achieve your business vision. We provide and co-create innovative technological platforms.',
      keywords:
        'Innovation, Technology, Business Vision, Technological platforms, Innovative, Co-Create, Start ups, Technological partner, Digital Scale, Development teams, Logistics, Smart retail, Digital Service Platforms, Agrotech, Healthcare, Shared economies, Community networks, Challenge, Digital transformation, Methodology, Great Place To Work, Revenue Streams, Technological ecosystems',
      image: '/home.jpg',
    },
    es: {
      title: 'Carrera | Binit',
      description:
        'Tecnología para lograr tu visión de negocio. Co-creamos plataformas tecnológicas innovadoras.',
      keywords:
        'Innovación, Tecnología, Visión de negocio, Plataformas tecnológicas, Startups, Socio tecnológico, Logística, Retail inteligente, Agrotech, Salud, Economías compartidas',
      image: '/home.jpg',
    },
  },
  // Otros routeKey...
};
