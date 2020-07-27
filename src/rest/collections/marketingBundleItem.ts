import { requestFactory } from '../utils/Helpers';
import marketingBundleItem from '../types/marketingBundleItem';

export type typeData = marketingBundleItem

export type query = Partial<{
    item_id: string,
    marketing_bundle_id: string,
    quantity: string,
    release_time: string
}>;

export type resolve = never;

export default requestFactory<'marketing_bundle_item'>('marketing_bundle_item');
