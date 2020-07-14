import { defineCensusType } from './Base';

export type abilityData = {
    ability_id: string,
    ability_type_id: string,
};

export type abilityQuery = Partial<abilityData>

export default defineCensusType<abilityQuery, abilityData[]>('ability');
