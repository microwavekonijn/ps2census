export type CharactersItem = {
  collection: 'characters_item';
  format: {
    character_id: string;
    item_id: string;
    'account_level?': string;
    'stack_count?': string;
  };
  paths: 'character_id' | 'item_id' | 'account_level?' | 'stack_count?';
  partialPaths: 'character_id' | 'item_id' | 'account_level?' | 'stack_count?';
  conditions: { character_id: string };
};
