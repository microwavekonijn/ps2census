import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    armor_facing_id: string,
    description: string,
};

export type query = {
    armor_facing_id: string,
    description: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('armorFacing');
