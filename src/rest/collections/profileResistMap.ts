import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import profileResistMap from '../types/profileResistMap';

export type typeData = profileResistMap;

export type query = Partial<{
    profile_id: string,
    rank: string,
    resist_info_id: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('profile_resist_map');
