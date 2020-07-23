import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

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

export type query = {
    ability_id: string,
    param1: string,
    param10: string,
    param11: string,
    param12: string,
    param13: string,
    param14: string,
    param2: string,
    param3: string,
    param4: string,
    param5: string,
    param6: string,
    param7: string,
    param8: string,
    param9: string,
    string1: string,
    string2: string,
    string3: string,
    string4: string,
    zone_effect_id: string,
    zone_effect_type_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('zoneEffect');
