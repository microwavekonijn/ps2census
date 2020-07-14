import { defineCensusType } from './Base';

export type abilityData = {
    ability_id: string,
    ability_type_id: string
};

export default defineCensusType<Partial<abilityData>, abilityData[]>('ability');
