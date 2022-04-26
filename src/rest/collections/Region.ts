export type Region = {
  collection: 'region';
  format: {
    region_id: string;
    zone_id: string;
    initial_faction_id: string;
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
    | 'region_id'
    | 'zone_id'
    | 'initial_faction_id'
    | 'name.de'
    | 'name.en'
    | 'name.es'
    | 'name.fr'
    | 'name.it'
    | 'name.tr';
  partialPaths:
    | 'region_id'
    | 'zone_id'
    | 'initial_faction_id'
    | 'name'
    | 'name.de'
    | 'name.en'
    | 'name.es'
    | 'name.fr'
    | 'name.it'
    | 'name.tr';
  conditions: {
    initial_faction_id?: string;
    name?: string;
    'name.de'?: string;
    'name.en'?: string;
    'name.es'?: string;
    'name.fr'?: string;
    'name.it'?: string;
    'name.tr'?: string;
    region_id?: string;
    zone_id?: string;
  };
};
