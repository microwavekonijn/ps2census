import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
    zone_effect_id: string,
    zone_effect_type_id: string,
    ability_id: string,
    param1: string,
    param2: string,
    param3: string,
    param4: string,
    param5: string,
    param6: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<operations, query, typeData[], commands, resolve>('zoneEffect');

