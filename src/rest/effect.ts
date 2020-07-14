import { defineCensusType } from './Base';

export type effectData = {
    effect_id: string,
    effect_type_id: string,
    ability_id: string,
    target_type_id: string,
    resist_type_id: string,
    param1: string,
    param2: string,
    param5: string,
    param6: string,
    param7: string,
    param8: string,
    param9: string,
};

export type effectQuery = Partial<effectData>

export default defineCensusType<effectQuery, effectData[]>('effect');
