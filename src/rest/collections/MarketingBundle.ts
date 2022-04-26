export type MarketingBundle = {
  collection: 'marketing_bundle';
  format: {
    marketing_bundle_id: string;
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
    image_id: string;
    station_cash_price: string;
    cert_price: string;
    release_time: string;
  };
  paths:
    | 'marketing_bundle_id'
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
    | 'image_id'
    | 'station_cash_price'
    | 'cert_price'
    | 'release_time';
  partialPaths:
    | 'marketing_bundle_id'
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
    | 'image_id'
    | 'station_cash_price'
    | 'cert_price'
    | 'release_time';
  conditions: {
    cert_price?: string;
    description?: string;
    'description.de'?: string;
    'description.en'?: string;
    'description.es'?: string;
    'description.fr'?: string;
    'description.it'?: string;
    'description.tr'?: string;
    image_id?: string;
    marketing_bundle_id?: string;
    name?: string;
    'name.de'?: string;
    'name.en'?: string;
    'name.es'?: string;
    'name.fr'?: string;
    'name.it'?: string;
    'name.tr'?: string;
    release_time?: string;
    station_cash_price?: string;
  };
};
