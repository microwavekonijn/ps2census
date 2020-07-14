import { defineCensusType } from './Base';

export type armorInfoData = {
    armor_info_id: string,
    armor_facing_id: string,
    armor_percent: string,
    description: string
};

export default defineCensusType<Partial<armorInfoData>, armorInfoData[]>('armor_info');
