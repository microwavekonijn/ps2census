import { defineCensusType } from '../Base';

export type armorFacingData = {
    armor_facing_id: string,
    description: string,
};

export type armorFacingQuery = Partial<armorFacingData>

export default defineCensusType<armorFacingQuery, armorFacingData[]>('armor_facing');
