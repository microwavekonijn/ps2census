export type CharactersAchievement = {
  collection: 'characters_achievement';
  format: {
    character_id: string;
    achievement_id: string;
    earned_count: string;
    start: string;
    start_date: string;
    finish: string;
    finish_date: string;
    last_save: string;
    last_save_date: string;
  };
  paths:
    | 'character_id'
    | 'achievement_id'
    | 'earned_count'
    | 'start'
    | 'start_date'
    | 'finish'
    | 'finish_date'
    | 'last_save'
    | 'last_save_date';
  partialPaths:
    | 'character_id'
    | 'achievement_id'
    | 'earned_count'
    | 'start'
    | 'start_date'
    | 'finish'
    | 'finish_date'
    | 'last_save'
    | 'last_save_date';
  conditions: {
    achievement_id?: string;
    character_id?: string;
    earned_count?: string;
    finish?: string;
    finish_date?: string;
    last_save?: string;
    last_save_date?: string;
    start?: string;
    start_date?: string;
  };
};
