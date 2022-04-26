export type CharacterName = {
  collection: 'character_name';
  format: {
    character_id: string;
    name: { first: string; first_lower: string };
  };
  paths: 'character_id' | 'name.first' | 'name.first_lower';
  partialPaths: 'character_id' | 'name' | 'name.first' | 'name.first_lower';
  conditions: {
    character_id?: string;
    name?: string;
    'name.first'?: string;
    'name.first_lower'?: string;
  };
};
