export type Objective = {
  collection: 'objective';
  format: {
    objective_id: string;
    objective_type_id: string;
    objective_group_id: string;
    param1: string;
    param2: string;
    param3: string;
    param4: string;
    param5: string;
    param6: string;
    param7: string;
    param8: string;
    param9: string;
  };
  paths:
    | 'objective_id'
    | 'objective_type_id'
    | 'objective_group_id'
    | 'param1'
    | 'param2'
    | 'param3'
    | 'param4'
    | 'param5'
    | 'param6'
    | 'param7'
    | 'param8'
    | 'param9';
  partialPaths:
    | 'objective_id'
    | 'objective_type_id'
    | 'objective_group_id'
    | 'param1'
    | 'param2'
    | 'param3'
    | 'param4'
    | 'param5'
    | 'param6'
    | 'param7'
    | 'param8'
    | 'param9';
  conditions: {
    objective_group_id?: string;
    objective_id?: string;
    objective_type_id?: string;
    param1?: string;
    param2?: string;
    param3?: string;
    param4?: string;
    param5?: string;
    param6?: string;
    param7?: string;
    param8?: string;
    param9?: string;
  };
};
