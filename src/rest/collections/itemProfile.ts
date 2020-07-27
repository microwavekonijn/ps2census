import { requestFactory } from '../utils/Helpers';
import itemProfile from '../types/itemProfile';

export type typeData = itemProfile;

export type query = Partial<{
    item_id: string,
    profile_id: string
}>;

export default requestFactory<'item_profile'>('item_profile');
