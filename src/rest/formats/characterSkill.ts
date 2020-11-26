export interface characterSkill  {
    character_id: string;
    skill_id: string;
    last_save: string;
    last_save_date: string;
    [prop: string]: unknown;
}
