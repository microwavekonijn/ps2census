export type MetagameEvent = {
  collection: 'metagame_event';
  format: {
    metagame_event_id: string;
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
    type: string;
    experience_bonus: string;
  };
  paths:
    | 'metagame_event_id'
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
    | 'description.tr'
    | 'type'
    | 'experience_bonus';
  partialPaths:
    | 'metagame_event_id'
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
    | 'description.tr'
    | 'type'
    | 'experience_bonus';
  conditions: {
    description?: string;
    'description.de'?: string;
    'description.en'?: string;
    'description.es'?: string;
    'description.fr'?: string;
    'description.it'?: string;
    'description.tr'?: string;
    experience_bonus?: string;
    metagame_event_id?: string;
    name?: string;
    'name.de'?: string;
    'name.en'?: string;
    'name.es'?: string;
    'name.fr'?: string;
    'name.it'?: string;
    'name.tr'?: string;
    type?: string;
  };
};
