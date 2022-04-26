export type Zone = {
  collection: 'zone';
  format: {
    zone_id: string;
    code: string;
    hex_size: string;
    name: {
      de: string;
      en: string;
      es: string;
      fr: string;
      it: string;
      tr: string;
    };
    description: {
      de: string;
      en: string;
      es: string;
      fr: string;
      it: string;
      tr: string;
    };
  };
  paths:
    | 'zone_id'
    | 'code'
    | 'hex_size'
    | 'name.de'
    | 'name.en'
    | 'name.es'
    | 'name.fr'
    | 'name.it'
    | 'name.tr'
    | 'description.de'
    | 'description.en'
    | 'description.es'
    | 'description.fr'
    | 'description.it'
    | 'description.tr';
  partialPaths:
    | 'zone_id'
    | 'code'
    | 'hex_size'
    | 'name'
    | 'name.de'
    | 'name.en'
    | 'name.es'
    | 'name.fr'
    | 'name.it'
    | 'name.tr'
    | 'description'
    | 'description.de'
    | 'description.en'
    | 'description.es'
    | 'description.fr'
    | 'description.it'
    | 'description.tr';
  conditions: {
    code?: string;
    description?: string;
    'description.de'?: string;
    'description.en'?: string;
    'description.es'?: string;
    'description.fr'?: string;
    'description.it'?: string;
    'description.tr'?: string;
    hex_size?: string;
    name?: string;
    'name.de'?: string;
    'name.en'?: string;
    'name.es'?: string;
    'name.fr'?: string;
    'name.it'?: string;
    'name.tr'?: string;
    zone_id?: string;
  };
};
