import { routes } from './routes'; // Importamos las rutas dinámicas

const pages = import.meta.glob('../layouts/pages/*.astro');

export async function loadPage(slug: string, lang: string) {
  // Si es la página de inicio, cargamos la página directamente
  if (slug === 'home') {
    const loader = pages[`../layouts/pages/HomePage.astro`];  // Cargar directamente la home

    if (!loader) {
      throw new Error('No existe componente para la página de inicio.');
    }

    const module = await loader() as { default: any };
    return module.default;
  }

  // En caso contrario, buscamos la ruta dinámica
  const internalSlug = Object.keys(routes).find((key) => routes[key][lang] === slug);

  if (!internalSlug) {
    throw new Error(`No existe ruta para el slug: ${slug} en el idioma: ${lang}`);
  }

  // Usamos el `internalSlug` para construir el nombre del archivo a cargar
  const filePath = `../layouts/pages/${internalSlug.charAt(0).toUpperCase() + internalSlug.slice(1)}Page.astro`;

  const loader = pages[filePath];

  //console.log("path", filePath);

  if (!loader) {
    throw new Error(`No existe componente para el identificador: ${internalSlug}`);
  }

  const module = await loader() as { default: any };
  return module.default;
}
