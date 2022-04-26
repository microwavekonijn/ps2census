export type MarketingBundleItem = {
  collection: 'marketing_bundle_item';
  format: {
    marketing_bundle_id: string;
    item_id: string;
    quantity: string;
    release_time: string;
  };
  paths: 'marketing_bundle_id' | 'item_id' | 'quantity' | 'release_time';
  partialPaths: 'marketing_bundle_id' | 'item_id' | 'quantity' | 'release_time';
  conditions: {
    item_id?: string;
    marketing_bundle_id?: string;
    quantity?: string;
    release_time?: string;
  };
};
