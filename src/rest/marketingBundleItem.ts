import { defineCensusType } from './Base';

export type marketingBundleItemData = {
    marketing_bundle_id: string,
    item_id: string,
    quantity: string,
    release_time: string,
};

export type marketingBundleItemQuery = Partial<marketingBundleItemData>

export default defineCensusType<marketingBundleItemQuery, marketingBundleItemData[]>('marketing_bundle_item');
