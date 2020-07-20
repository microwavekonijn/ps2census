import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
    marketing_bundle_id: string,
    item_id: string,
    quantity: string,
    release_time: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('marketingBundleItem');

