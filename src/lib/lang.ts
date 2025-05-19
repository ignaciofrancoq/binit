import type { Lang } from './i18n';
import { routes } from './routes';
const isDev = import.meta.env.DEV;

const contentFiles = import.meta.glob<Record<string, any>>(
  '../content/*/*.json',
  { eager: true }
);

export async function getContent(
  lang: Lang,
  slug: string
): Promise<Record<string, any>> {
  // 1) Intento directo: ../content/{slug}/{lang}.json
  let key = `../content/${slug}/${lang}.json`;
  let mod = (contentFiles as Record<string, { default: any }>)[key];
  if (mod) {
    return mod.default;
  }

  // 2) Si no existe, busco el “internalSlug” comparando en routes
  //    (encuentra la clave interna que para este lang produce ese slug)
  const internalSlug = Object.keys(routes).find(
    (routeKey) => routes[routeKey][lang] === slug
  );

  if (internalSlug) {
    key = `../content/${internalSlug}/${lang}.json`;
    mod = (contentFiles as Record<string, { default: any }>)[key];
    if (mod) {
      return mod.default;
    }
  }

  // 3) Fallback suave en dev, excepción en prod
  if (isDev) {
    console.warn(`No content for ${lang}/${slug}, falling back to empty object.`);
    return {};
  } else {
    throw new Error(`No content for ${lang}/${slug}`);
  }
}


export async function getKeySlug(
  lang: Lang,
  slug: string
): Promise<string | undefined> {


  return Object.keys(routes).find(
    (routeKey) => routes[routeKey][lang] === slug
  );
}