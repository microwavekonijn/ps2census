export type Faction = {
  collection: 'faction';
  format: {
    faction_id: string;
    name: {
      de: string;
      en: string;
      es: string;
      fr: string;
      it: string;
      tr: string;
    };
    image_set_id: string;
    image_id: string;
    image_path: string;
    code_tag: string;
    user_selectable: string;
  };
  paths:
    | 'faction_id'
    | 'name.de'
    | 'name.en'
    | 'name.es'
    | 'name.fr'
    | 'name.it'
    | 'name.tr'
    | 'image_set_id'
    | 'image_id'
    | 'image_path'
    | 'code_tag'
    | 'user_selectable';
  partialPaths:
    | 'faction_id'
    | 'name'
    | 'name.de'
    | 'name.en'
    | 'name.es'
    | 'name.fr'
    | 'name.it'
    | 'name.tr'
    | 'image_set_id'
    | 'image_id'
    | 'image_path'
    | 'code_tag'
    | 'user_selectable';
  conditions: {
    code_tag?: string;
    faction_id?: string;
    image_id?: string;
    image_path?: string;
    image_set_id?: string;
    name?: string;
    'name.de'?: string;
    'name.en'?: string;
    'name.es'?: string;
    'name.fr'?: string;
    'name.it'?: string;
    'name.tr'?: string;
    user_selectable?: string;
  };
};
