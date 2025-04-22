export type Fish = {
  collection: 'fish';
  format: {
    fish_id: string;
    name: {
      de: string;
      en: string;
      es: string;
      fr: string;
      it: string;
      tr: string;
    };
    rarity: string;
    size: string;
    average_size: string;
    size_deviation: string;
    scan_point_amount: string;
    cost: string;
    image_set_id: string;
    image_id: string;
  };
  paths:
    | 'fish_id'
    | 'name.de'
    | 'name.en'
    | 'name.es'
    | 'name.fr'
    | 'name.it'
    | 'name.tr'
    | 'rarity'
    | 'size'
    | 'average_size'
    | 'size_deviation'
    | 'scan_point_amount'
    | 'cost'
    | 'image_set_id'
    | 'image_id';
  partialPaths:
    | 'fish_id'
    | 'name'
    | 'name.de'
    | 'name.en'
    | 'name.es'
    | 'name.fr'
    | 'name.it'
    | 'name.tr'
    | 'rarity'
    | 'size'
    | 'average_size'
    | 'size_deviation'
    | 'scan_point_amount'
    | 'cost'
    | 'image_set_id'
    | 'image_id';
  conditions: {
    average_size?: string;
    cost?: string;
    fish_id?: string;
    image_id?: string;
    image_set_id?: string;
    name?: string;
    'name.de'?: string;
    'name.en'?: string;
    'name.es'?: string;
    'name.fr'?: string;
    'name.it'?: string;
    'name.tr'?: string;
    rarity?: string;
    scan_point_amount?: string;
    size?: string;
    size_deviation?: string;
  };
};
