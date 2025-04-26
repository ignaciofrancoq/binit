import { routes } from './routes';

export function getStaticPaths() {
  const paths = [];

  for (const routeKey in routes) {
    if (routeKey === 'home') continue; // Salteamos home
    const langs = routes[routeKey];
    for (const lang in langs) {
      paths.push({ params: { lang, slug: langs[lang] } });
    }
  }

  return paths;
}