import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import profileArmorMap from '../types/profileArmorMap';

export type typeData = profileArmorMap;

export type query = Partial<{
    armor_info_id: string,
    profile_id: string,
    rank: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('profile_armor_map');
