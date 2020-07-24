import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import effect from '../types/effect';

export type typeData = effect;

export type query = Partial<{
    ability_id: string,
    duration_seconds: string,
    effect_id: string,
    effect_type_id: string,
    is_drain: string,
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
    param9: string,
    resist_type_id: string,
    target_type_id: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('effect');
