export type CharactersWeaponStat = {
  collection: 'characters_weapon_stat';
  format: {
    character_id: string;
    stat_name: string;
    item_id: string;
    vehicle_id: string;
    value: string;
    last_save: string;
    last_save_date: string;
  };
  paths:
    | 'character_id'
    | 'stat_name'
    | 'item_id'
    | 'vehicle_id'
    | 'value'
    | 'last_save'
    | 'last_save_date';
  partialPaths:
    | 'character_id'
    | 'stat_name'
    | 'item_id'
    | 'vehicle_id'
    | 'value'
    | 'last_save'
    | 'last_save_date';
  conditions: {
    character_id?: string;
    item_id?: string;
    last_save?: string;
    last_save_date?: string;
    stat_name?: string;
    value?: string;
    vehicle_id?: string;
  };
  resolve: 'item' | 'vehicle';
};
