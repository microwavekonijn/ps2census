import { defineCensusType } from './Base';

export type effectTypeData = {
    effect_type_id: string,
    description: string,
    param1: string,
    param3: string,
};

export type effectTypeQuery = Partial<effectTypeData>

export default defineCensusType<effectTypeQuery, effectTypeData[]>('effect_type');
