import type { Lang } from './i18n';

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
    es: '#servicios', //probar??
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

// Esta función te da la URL (el slug) correspondiente a un routeKey y un idioma
export function getPathForLang(routeKey: string, lang: Lang): string | undefined {
  return routes[routeKey]?.[lang] ? `/${lang}/${routes[routeKey][lang]}` : undefined;
}

// Esta función busca la *clave interna* (routeKey) a partir de un slug y un idioma
export function findRouteKeyByPath(path: string, lang: Lang): string | undefined {
  const slug = path.replace(`/${lang}/`, '').replace(/\/$/, ''); // limpio el path
  return Object.keys(routes).find((key) => routes[key][lang] === slug);
}