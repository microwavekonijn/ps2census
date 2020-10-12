import { requestFactory } from '../utils/requestHelpers';
import { marketingBundleItem } from '../types/marketingBundleItem';

export type typeData = marketingBundleItem

export type query = Partial<{
    item_id: string,
    marketing_bundle_id: string,
    quantity: string,
    release_time: string
}>;

export const marketingBundleItem = requestFactory<'marketing_bundle_item'>('marketing_bundle_item');
