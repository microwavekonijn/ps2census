export type VehicleSkillSet = {
  collection: 'vehicle_skill_set';
  format: {
    vehicle_id: string;
    skill_set_id: string;
    faction_id: string;
    display_index: string;
  };
  paths: 'vehicle_id' | 'skill_set_id' | 'faction_id' | 'display_index';
  partialPaths: 'vehicle_id' | 'skill_set_id' | 'faction_id' | 'display_index';
  conditions: {
    display_index?: string;
    faction_id?: string;
    skill_set_id?: string;
    vehicle_id?: string;
  };
};
