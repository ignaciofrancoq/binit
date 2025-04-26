import { routes } from './routes';
export type Lang = 'es' | 'en';

const content: Record<string, Record<Lang, { title: string; description: string }>> = {
  'about-us': {
    en: { title: 'About Us', description: 'This is the About Us page in English.' },
    es: { title: 'Nosotros', description: 'Esta es la página de Nosotros en Español.' },
  },
  career: {
    en: { title: 'Career', description: 'Career opportunities at Binit.' },
    es: { title: 'Carrera', description: 'Oportunidades laborales en Binit.' },
  },
  // agregá más
};

export async function getContent(lang: Lang, slug: string) {

  const internalSlug = Object.keys(routes).find((key) => routes[key][lang] === slug);

  // Si no encuentra la clave interna => página no encontrada
  if (!internalSlug) {
    throw new Error(`Slug not found for: ${lang}/${slug}`);
  }

  return content[internalSlug]?.[lang] ?? { title: 'Not Found', description: '' };
}