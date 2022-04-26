export type Ability = {
  collection: 'ability';
  format: {
    ability_id: string;
    ability_type_id: string;
    distance_max: string;
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
    param6: string;
    param7: string;
    param8: string;
    param9: string;
    param10: string;
    param11: string;
    param12: string;
    param13: string;
    param14: string;
    string1: string;
    string2: string;
    string3: string;
    string4: string;
  };
  paths:
    | 'ability_id'
    | 'ability_type_id'
    | 'distance_max'
    | 'resource_type_id'
    | 'expire_msec'
    | 'first_use_delay_msec'
    | 'reuse_delay_msec'
    | 'flag_toggle'
    | 'next_use_delay_msec'
    | 'resource_first_cost'
    | 'resource_cost_per_msec'
    | 'radius_max'
    | 'param1'
    | 'param2'
    | 'param3'
    | 'param4'
    | 'param5'
    | 'param6'
    | 'param7'
    | 'param8'
    | 'param9'
    | 'param10'
    | 'param11'
    | 'param12'
    | 'param13'
    | 'param14'
    | 'string1'
    | 'string2'
    | 'string3'
    | 'string4';
  partialPaths:
    | 'ability_id'
    | 'ability_type_id'
    | 'distance_max'
    | 'resource_type_id'
    | 'expire_msec'
    | 'first_use_delay_msec'
    | 'reuse_delay_msec'
    | 'flag_toggle'
    | 'next_use_delay_msec'
    | 'resource_first_cost'
    | 'resource_cost_per_msec'
    | 'radius_max'
    | 'param1'
    | 'param2'
    | 'param3'
    | 'param4'
    | 'param5'
    | 'param6'
    | 'param7'
    | 'param8'
    | 'param9'
    | 'param10'
    | 'param11'
    | 'param12'
    | 'param13'
    | 'param14'
    | 'string1'
    | 'string2'
    | 'string3'
    | 'string4';
  conditions: {
    ability_id?: string;
    ability_type_id?: string;
    distance_max?: string;
    expire_msec?: string;
    first_use_delay_msec?: string;
    flag_toggle?: string;
    next_use_delay_msec?: string;
    param1?: string;
    param2?: string;
    param3?: string;
    param4?: string;
    param5?: string;
    param6?: string;
    param7?: string;
    param8?: string;
    param9?: string;
    param10?: string;
    param11?: string;
    param12?: string;
    param13?: string;
    param14?: string;
    radius_max?: string;
    resource_cost_per_msec?: string;
    resource_first_cost?: string;
    resource_type_id?: string;
    reuse_delay_msec?: string;
    string1?: string;
    string2?: string;
    string3?: string;
    string4?: string;
  };
};
