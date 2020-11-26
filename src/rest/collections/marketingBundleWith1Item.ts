import { DefaultCollection } from '../types/collection';
import { marketingBundleWith1Item } from '../formats/marketingBundleWith1Item';

export interface MarketingBundleWith1Item extends DefaultCollection {
    collection: 'marketing_bundle_with_1_item';

    format: marketingBundleWith1Item;

    conditions: Partial<{
        cert_price: string,
        item_id: string,
        item_quantity: string,
        marketing_bundle_id: string,
        release_time: string,
        station_cash_price: string
    }>;
}
