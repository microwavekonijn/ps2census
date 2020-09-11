import { requestFactory } from '../utils/requestHelpers';
import profileResistMap from '../types/profileResistMap';

export type typeData = profileResistMap;

export type query = Partial<{
    profile_id: string,
    rank: string,
    resist_info_id: string
}>;

export default requestFactory<'profile_resist_map'>('profile_resist_map');
