import { defineCensusType } from './Base';

export type armorFacingData = {
    armor_facing_id: string,
    description: string
};

export default defineCensusType<Partial<armorFacingData>, armorFacingData[]>('armor_facing');
