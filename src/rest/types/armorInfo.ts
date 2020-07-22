import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    armor_info_id: string,
    armor_facing_id: string,
    armor_percent: string,
    description: string,
};

export type query = {
    armor_amount: string,
    armor_facing_id: string,
    armor_info_id: string,
    armor_percent: string,
    description: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('armorInfo');
