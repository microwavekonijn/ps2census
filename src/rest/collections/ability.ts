import { requestFactory } from '../utils/requestHelpers';
import ability from '../types/ability';

export type typeData = ability;

export type query = Partial<{
    ability_id: string,
    ability_type_id: string,
    distance_max: string,
    expire_msec: string,
    first_use_delay_msec: string,
    flag_toggle: string,
    next_use_delay_msec: string,
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
    radius_max: string,
    resource_cost_per_msec: string,
    resource_first_cost: string,
    resource_type_id: string,
    reuse_delay_msec: string,
    string1: string,
    string2: string,
    string3: string,
    string4: string
}>;

export default requestFactory<'ability'>('ability');
