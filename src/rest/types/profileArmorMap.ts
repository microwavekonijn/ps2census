import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    profile_id: string,
    armor_info_id: string,
    rank: string,
};

export type query = {
    armor_info_id: string,
    profile_id: string,
    rank: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('profileArmorMap');
