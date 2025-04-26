export type Lang = 'es' | 'en';

export const routes = {
  home: {
    en: '', // ⚡ Vacío porque `/en/`
    es: '', // ⚡ Vacío porque `/es/`
  },
  binit_ai_strategy: {
    es: 'binit-ai-estrategia',
    en: 'binit-ai-strategy',
  },
  services: {
    es: '#servicios', //??
    en: '#services', //??
  },
  case_studies: {
    es: 'casos-de-exito',
    en: 'case-studies',
  },
  'about-us': {
    es: 'nosotros',
    en: 'about-us',
  },
  career: {
    es: 'carrera',
    en: 'career',
  },
  contact: {
    es: '#contacto', /**??? */
    en: '#contact', //???
  },
};

export function getRouteKeyFromSlug(slug: string, lang: Lang): string | undefined {
  return Object.entries(routes).find(([, langs]) => langs[lang] === slug)?.[0];
}