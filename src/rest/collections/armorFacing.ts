import { requestFactory } from '../utils/Helpers';
import armorFacing from '../types/armorFacing';

export type typeData = armorFacing;

export type query = Partial<{
    armor_facing_id: string,
    description: string
}>;

export default requestFactory<'armor_facing'>('armor_facing');
