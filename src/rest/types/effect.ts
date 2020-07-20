import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
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

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('effect');

