import { defineCensusType } from './Base';

export type effectTypeData = {
    effect_type_id: string,
    description: string,
    param1: string,
    param3: string
};

export default defineCensusType<Partial<effectTypeData>, effectTypeData[]>('effect_type');
