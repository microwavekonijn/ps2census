export type ObjectiveSetToObjective = {
  collection: 'objective_set_to_objective';
  format: { objective_set_id: string; objective_group_id: string };
  paths: 'objective_set_id' | 'objective_group_id';
  partialPaths: 'objective_set_id' | 'objective_group_id';
  conditions: { objective_group_id?: string; objective_set_id?: string };
};
