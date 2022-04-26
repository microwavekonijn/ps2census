export type CharactersSkill = {
  collection: 'characters_skill';
  format: {
    character_id: string;
    skill_id: string;
    last_save: string;
    last_save_date: string;
  };
  paths: 'character_id' | 'skill_id' | 'last_save' | 'last_save_date';
  partialPaths: 'character_id' | 'skill_id' | 'last_save' | 'last_save_date';
  conditions: {
    character_id?: string;
    last_save?: string;
    last_save_date?: string;
    skill_id?: string;
  };
};
