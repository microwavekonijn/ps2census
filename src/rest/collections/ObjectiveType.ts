export type ObjectiveType = {
  collection: 'objective_type';
  format: {
    objective_type_id: string;
    description: string;
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
    | 'objective_type_id'
    | 'description'
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
    | 'objective_type_id'
    | 'description'
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
    description?: string;
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
