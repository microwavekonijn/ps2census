import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import marketingBundleItem from '../types/marketingBundleItem';

export type typeData = marketingBundleItem

export type query = Partial<{
    item_id: string,
    marketing_bundle_id: string,
    quantity: string,
    release_time: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('marketing_bundle_item');
