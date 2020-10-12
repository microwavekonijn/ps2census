import { requestFactory } from '../utils/requestHelpers';
import { itemProfile } from '../types/itemProfile';

export type typeData = itemProfile;

export type query = Partial<{
    item_id: string,
    profile_id: string
}>;

export const itemProfile = requestFactory<'item_profile'>('item_profile');
