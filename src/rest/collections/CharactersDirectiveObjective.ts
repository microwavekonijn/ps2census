export type CharactersDirectiveObjective = {
  collection: 'characters_directive_objective';
  format: {
    character_id: string;
    directive_id: string;
    objective_id: string;
    objective_group_id: string;
    status: string;
    state_data: string;
  };
  paths:
    | 'character_id'
    | 'directive_id'
    | 'objective_id'
    | 'objective_group_id'
    | 'status'
    | 'state_data';
  partialPaths:
    | 'character_id'
    | 'directive_id'
    | 'objective_id'
    | 'objective_group_id'
    | 'status'
    | 'state_data';
  conditions: {
    character_id?: string;
    directive_id?: string;
    objective_group_id?: string;
    objective_id?: string;
    state_data?: string;
    status?: string;
  };
};
