import { defineCensusType } from './Base';

export type abilityTypeData = {
    ability_type_id: string
};

export default defineCensusType<Partial<abilityTypeData>, abilityTypeData[]>('ability_type');
