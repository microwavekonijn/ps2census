export type World = {
  collection: 'world';
  format: {
    world_id: string;
    state: string;
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
    | 'world_id'
    | 'state'
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
    | 'world_id'
    | 'state'
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
    description_t4id: number;
    name_t4id: number;
    state: string;
    world_id: string;
  };
};
