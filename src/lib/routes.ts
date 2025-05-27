import type { Lang } from './i18n';
import { anchors } from './anchors';

export const routes = {
  home: {
    en: '',
    es: '',
    pt: '',
  },
  binit_ai_strategy: {
    en: 'binit-ai-strategy',
    es: 'binit-ai-estrategia',
    pt: 'binit-estrategia-ia',
  },
  case_studies: {
    en: 'case-studies',
    es: 'casos-de-exito',
    pt: 'estudos-de-caso',
  },
  career: {
    en: 'career',
    es: 'carrera',
    pt: 'carreira',
  },
  contact: {
    en: 'contact',
    es: 'contacto',
    pt: 'contato',
  }
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

export function getUrl(routeKey: string, lang: Lang): string {
  if (routeKey in routes) {
    const slug = routes[routeKey][lang];
    return `/${lang}/${slug}`; // Normal, página
  }
  if (routeKey in anchors) {
    const anchor = anchors[routeKey][lang];
    return `/${lang}/#${anchor}`; // Home + ancla
  }
  return '/'; // fallback
}

export function getAnchor(routeKey: string, lang: Lang): string {
  if (routeKey in anchors) {
    const anchor = anchors[routeKey][lang];
    return `${anchor}`;
  }
  return '/'; // fallback
}