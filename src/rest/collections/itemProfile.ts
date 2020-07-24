import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import itemProfile from '../types/itemProfile';

export type typeData = itemProfile;

export type query = {
    item_id: string,
    profile_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('item_profile');
