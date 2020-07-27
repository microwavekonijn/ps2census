import { requestFactory } from '../utils/Helpers';
import armorInfo from '../types/armorInfo';

export type typeData = armorInfo;

export type query = Partial<{
    armor_amount: string,
    armor_facing_id: string,
    armor_info_id: string,
    armor_percent: string,
    description: string
}>;

export default requestFactory<'armor_info'>('armor_info');
