import { requestFactory } from '../utils/requestHelpers';

export { armorInfo as armorInfoFormat } from '../formats/armorInfo';

export type armorInfoQuery = Partial<{
    armor_amount: string,
    armor_facing_id: string,
    armor_info_id: string,
    armor_percent: string,
    description: string
}>;

export const armorInfo = requestFactory<'armor_info'>('armor_info');
