import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
    profile_id: string,
    armor_info_id: string,
    rank: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<operations, query, typeData[], commands, resolve>('profileArmorMap');

