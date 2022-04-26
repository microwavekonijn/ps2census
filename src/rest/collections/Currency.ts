export type Currency = {
  collection: 'currency';
  format: {
    currency_id: string;
    name: {
      de: string;
      en: string;
      es: string;
      fr: string;
      it: string;
      tr: string;
    };
    icon_id: string;
    inventory_cap: string;
  };
  paths:
    | 'currency_id'
    | 'name.de'
    | 'name.en'
    | 'name.es'
    | 'name.fr'
    | 'name.it'
    | 'name.tr'
    | 'icon_id'
    | 'inventory_cap';
  partialPaths:
    | 'currency_id'
    | 'name'
    | 'name.de'
    | 'name.en'
    | 'name.es'
    | 'name.fr'
    | 'name.it'
    | 'name.tr'
    | 'icon_id'
    | 'inventory_cap';
  conditions: {
    currency_id?: string;
    icon_id?: string;
    inventory_cap?: string;
    name?: string;
    'name.de'?: string;
    'name.en'?: string;
    'name.es'?: string;
    'name.fr'?: string;
    'name.it'?: string;
    'name.tr'?: string;
  };
};
