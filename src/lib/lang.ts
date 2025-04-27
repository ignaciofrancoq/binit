import type { Lang } from './i18n';
import { routes } from './routes';
const isDev = import.meta.env.DEV;

const content: Record<string, Record<Lang, { title: string; description: string }>> = {
  'home': {
    en: { title: 'Welcome to Binit', description: 'Technology to achieve your business vision.' },
    es: { title: 'Bienvenidos a Binit', description: 'Tecnología para lograr tu visión de negocio.' },
  },
  binit_ai_strategy: {
    en: { title: 'Binit ai strategy', description: 'Career opportunities at Binit.' },
    es: { title: 'Binit ai strategy', description: 'Oportunidades laborales en Binit.' },
  },
  case_studies: {
    en: { title: 'case studies', description: 'Career opportunities at Binit.' },
    es: { title: 'caso estudio', description: 'Oportunidades laborales en Binit.' },
  },
  'about-us': {
    en: { title: 'About Us', description: 'This is the About Us page in English.' },
    es: { title: 'Nosotros', description: 'Esta es la página de Nosotros en Español.' },
  },
  career: {
    en: { title: 'Career', description: 'Career opportunities at Binit.' },
    es: { title: 'Carrera', description: 'Oportunidades laborales en Binit.' },
  },
};

export async function getContent(lang: Lang, slug: string) {
  // Buscamos si el slug existe tal cual
  if (content[slug]?.[lang]) {
    return content[slug][lang];
  }

  // Si no, tratamos de encontrar el internalSlug por ruta
  const internalSlug = Object.keys(routes).find((key) => routes[key][lang] === slug);

  if (internalSlug && content[internalSlug]?.[lang]) {
    return content[internalSlug][lang];
  }

  // Fallback suave en prod, error en dev
  if (isDev) {
    console.warn(`Slug not found for: ${lang}/${slug}`);
    return { title: 'Not Found', description: '' };
  } else {
    throw new Error(`Slug not found for: ${lang}/${slug}`);
  }
}
