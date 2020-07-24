import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import armorFacing from '../types/armorFacing';

export type typeData = armorFacing;

export type query = Partial<{
    armor_facing_id: string,
    description: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('armor_facing');
