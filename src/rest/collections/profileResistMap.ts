import { requestFactory } from '../utils/Helpers';
import profileResistMap from '../types/profileResistMap';

export type typeData = profileResistMap;

export type query = Partial<{
    profile_id: string,
    rank: string,
    resist_info_id: string
}>;

export type resolve = never;

export default requestFactory<'profile_resist_map'>('profile_resist_map');
