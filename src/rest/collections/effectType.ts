import { requestFactory } from '../utils/requestHelpers';
import { effectType } from '../types/effectType';

export type typeData = effectType;

export type query = Partial<{
    description: string,
    effect_type_id: string,
    param1: string,
    param2: string,
    param3: string,
    param4: string,
    param5: string,
    param6: string,
    param7: string,
    param8: string,
    param9: string,
    param10: string,
    param11: string,
    param12: string,
    param13: string,
}>;

export const effectType = requestFactory<'effect_type'>('effect_type');
