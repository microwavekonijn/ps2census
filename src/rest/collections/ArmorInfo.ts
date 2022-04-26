export type ArmorInfo = {
  collection: 'armor_info';
  format: {
    armor_amount: string;
    armor_info_id: string;
    armor_facing_id: string;
    armor_percent: string;
    description: string;
  };
  paths:
    | 'armor_amount'
    | 'armor_info_id'
    | 'armor_facing_id'
    | 'armor_percent'
    | 'description';
  partialPaths:
    | 'armor_amount'
    | 'armor_info_id'
    | 'armor_facing_id'
    | 'armor_percent'
    | 'description';
  conditions: {
    armor_amount?: string;
    armor_facing_id?: string;
    armor_info_id?: string;
    armor_percent?: string;
    description?: string;
  };
};
