export type Title = {
  collection: 'title';
  format: {
    title_id: string;
    name: {
      de: string;
      en: string;
      es: string;
      fr: string;
      it: string;
      tr: string;
    };
  };
  paths:
    | 'title_id'
    | 'name.de'
    | 'name.en'
    | 'name.es'
    | 'name.fr'
    | 'name.it'
    | 'name.tr';
  partialPaths:
    | 'title_id'
    | 'name'
    | 'name.de'
    | 'name.en'
    | 'name.es'
    | 'name.fr'
    | 'name.it'
    | 'name.tr';
  conditions: {
    name?: string;
    'name.de'?: string;
    'name.en'?: string;
    'name.es'?: string;
    'name.fr'?: string;
    'name.it'?: string;
    'name.tr'?: string;
    title_id?: string;
  };
};
