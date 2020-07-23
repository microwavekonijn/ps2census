import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    character_id: string,
    achievement_id: string,
    start: string,
    start_date: string,
    finish: string,
    finish_date: string,
    last_save: string,
    last_save_date: string,
};

export type query = {
    achievement_id: string,
    character_id: string,
    earned_count: string,
    finish: string,
    finish_date: string,
    last_save: string,
    last_save_date: string,
    start: string,
    start_date: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('characters_achievement');
