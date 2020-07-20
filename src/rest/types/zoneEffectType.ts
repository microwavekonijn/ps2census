import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
    zone_effect_type_id: string,
    description: string,
    param1: string,
    param2: string,
    param3: string,
    param4: string,
    param5: string,
    param6: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('zoneEffectType');

