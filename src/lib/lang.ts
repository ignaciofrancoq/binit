type Lang = 'es' | 'en';

export async function getContent(lang: Lang, page: string) {
  try {
    const module = await import(`../content/${lang}/${page}.json`);
    return module.default;
  } catch (e) {
    console.error(`No se pudo cargar el contenido de ${lang}/${page}.json`, e);
    return {};
  }
}

//genera las rutas posibles para 'lang'
export function getStaticPaths() {
  return [
    { params: { lang: 'es' } },
    { params: { lang: 'en' } },
  ];
}