import { routes } from './routes';

export function getStaticPaths() {
  const paths = [];

  for (const slug in routes) {
    const langs = routes[slug];
    for (const lang in langs) {
      paths.push({ params: { lang, slug: langs[lang] } }); // Ojo que slug es el *slug traducido* que irá en URL
    }
  }

  return paths;
}