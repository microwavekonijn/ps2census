export type CharactersWeaponStatByFaction = {
  collection: 'characters_weapon_stat_by_faction';
  format: {
    character_id: string;
    stat_name: string;
    item_id: string;
    vehicle_id: string;
    value_vs: string;
    value_nc: string;
    value_tr: string;
    last_save: string;
    last_save_date: string;
  };
  paths:
    | 'character_id'
    | 'stat_name'
    | 'item_id'
    | 'vehicle_id'
    | 'value_vs'
    | 'value_nc'
    | 'value_tr'
    | 'last_save'
    | 'last_save_date';
  partialPaths:
    | 'character_id'
    | 'stat_name'
    | 'item_id'
    | 'vehicle_id'
    | 'value_vs'
    | 'value_nc'
    | 'value_tr'
    | 'last_save'
    | 'last_save_date';
  conditions: {
    character_id?: string;
    item_id?: string;
    last_save?: string;
    last_save_date?: string;
    stat_name?: string;
    value_nc?: string;
    value_tr?: string;
    value_vs?: string;
    vehicle_id?: string;
  };
  resolve: 'item' | 'vehicle';
};
