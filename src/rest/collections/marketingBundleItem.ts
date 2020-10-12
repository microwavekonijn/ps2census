import { requestFactory } from '../utils/requestHelpers';
import { marketingBundleItem } from '../formats/marketingBundleItem';

export type typeData = marketingBundleItem

export type marketingBundleItemQuery = Partial<{
    item_id: string,
    marketing_bundle_id: string,
    quantity: string,
    release_time: string
}>;

export const marketingBundleItem = requestFactory<'marketing_bundle_item'>('marketing_bundle_item');
