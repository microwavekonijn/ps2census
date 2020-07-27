import { requestFactory } from '../utils/Helpers';
import profileArmorMap from '../types/profileArmorMap';

export type typeData = profileArmorMap;

export type query = Partial<{
    armor_info_id: string,
    profile_id: string,
    rank: string
}>;

export default requestFactory<'profile_armor_map'>('profile_armor_map');
