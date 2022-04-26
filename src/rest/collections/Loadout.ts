export type Loadout = {
  collection: 'loadout';
  format: {
    loadout_id: string;
    profile_id: string;
    faction_id: string;
    code_name: string;
  };
  paths: 'loadout_id' | 'profile_id' | 'faction_id' | 'code_name';
  partialPaths: 'loadout_id' | 'profile_id' | 'faction_id' | 'code_name';
  conditions: {
    code_name?: string;
    faction_id?: string;
    loadout_id?: string;
    profile_id?: string;
  };
};
