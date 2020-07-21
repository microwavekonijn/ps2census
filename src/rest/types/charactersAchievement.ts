import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    character_id: string,
    achievement_id: string,
    earned_count: string,
    start: string,
    start_date: string,
    finish: string,
    finish_date: string,
    last_save: string,
    last_save_date: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<operations, query, typeData[], commands, resolve>('charactersAchievement');

