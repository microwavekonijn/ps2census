export type MarketingBundleWith1Item = {
  collection: 'marketing_bundle_with_1_item';
  format: {
    marketing_bundle_id: string;
    item_id: string;
    item_quantity: string;
    station_cash_price: string;
    cert_price: string;
    release_time: string;
  };
  paths:
    | 'marketing_bundle_id'
    | 'item_id'
    | 'item_quantity'
    | 'station_cash_price'
    | 'cert_price'
    | 'release_time';
  partialPaths:
    | 'marketing_bundle_id'
    | 'item_id'
    | 'item_quantity'
    | 'station_cash_price'
    | 'cert_price'
    | 'release_time';
  conditions: {
    cert_price?: string;
    item_id?: string;
    item_quantity?: string;
    marketing_bundle_id?: string;
    release_time?: string;
    station_cash_price?: string;
  };
};
