import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    effect_type_id: string,
    description: string,
    param1: string,
    param3: string,
};

export type query = {
    description: string,
    effect_type_id: string,
    param1: string,
    param10: string,
    param11: string,
    param12: string,
    param13: string,
    param2: string,
    param3: string,
    param4: string,
    param5: string,
    param6: string,
    param7: string,
    param8: string,
    param9: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('effectType');
