import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    marketing_bundle_id: string,
    item_id: string,
    quantity: string,
    release_time: string,
};

export type query = {
    item_id: string,
    marketing_bundle_id: string,
    quantity: string,
    release_time: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('marketingBundleItem');
