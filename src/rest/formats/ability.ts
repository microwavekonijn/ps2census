// TODO: Analyze all 4530 entries and improve this type
export interface ability  {
    ability_id: string; // Guaranteed
    ability_type_id: string; // Guaranteed
    resource_type_id: string;
    expire_msec: string;
    first_use_delay_msec: string;
    reuse_delay_msec: string;
    flag_toggle: string;
    next_use_delay_msec: string;
    resource_first_cost: string;
    resource_cost_per_msec: string;
    radius_max: string;
    param1: string;
    param2: string;
    param3: string;
    param4: string;
    param5: string;
    param7: string;
    param8: string;
    param9: string;
    param11: string;
    param12: string;
    param13: string;
    param14: string;
    string1: string;
    string2: string;
    string3: string;
    string4: string;
    [prop: string]: unknown;
}
