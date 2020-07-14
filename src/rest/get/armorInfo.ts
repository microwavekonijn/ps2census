import { defineCensusType } from '../Base';

export type armorInfoData = {
    armor_info_id: string,
    armor_facing_id: string,
    armor_percent: string,
    description: string,
};

export type armorInfoQuery = Partial<armorInfoData>

export default defineCensusType<armorInfoQuery, armorInfoData[]>('armor_info');
