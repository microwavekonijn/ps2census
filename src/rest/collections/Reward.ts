export type Reward = {
  collection: 'reward';
  format: {
    reward_id: string;
    reward_type_id: string;
    count_min: string;
    count_max: string;
    param1: string;
    param2: string;
    param3: string;
    param4: string;
    param5: string;
  };
  paths:
    | 'reward_id'
    | 'reward_type_id'
    | 'count_min'
    | 'count_max'
    | 'param1'
    | 'param2'
    | 'param3'
    | 'param4'
    | 'param5';
  partialPaths:
    | 'reward_id'
    | 'reward_type_id'
    | 'count_min'
    | 'count_max'
    | 'param1'
    | 'param2'
    | 'param3'
    | 'param4'
    | 'param5';
  conditions: {
    count_max?: string;
    count_min?: string;
    param1?: string;
    param2?: string;
    param3?: string;
    param4?: string;
    param5?: string;
    reward_id?: string;
    reward_type_id?: string;
  };
};
