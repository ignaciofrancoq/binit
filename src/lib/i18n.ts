export type Lang = 'en' | 'es' /*| 'pt'*/; // Aca se agregan los idiomas

export const languages: { [key in Lang]: { label: string; icon: string } } = {
  en: {
    label: 'EN',
    icon: '/img/flags/en.svg', 
  },
  es: {
    label: 'ES',
    icon: '/img/flags/es.svg',
  },
  /*pt: {
    label: 'PT',
    icon: '/img/flags/br.svg',
  },*/
};
