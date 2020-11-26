import { DefaultCollection } from '../types/collection';
import { marketingBundleItem } from '../formats/marketingBundleItem';

export interface MarketingBundleItem extends DefaultCollection {
    collection: 'marketing_bundle_item';

    format: marketingBundleItem;

    conditions: Partial<{
        item_id: string,
        marketing_bundle_id: string,
        quantity: string,
        release_time: string
    }>;
}
