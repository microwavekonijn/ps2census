import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    character_id: string,
    directive_tree_id: string,
    directive_tier_id: string,
    completion_time: string,
    completion_time_date: string,
};

export type query = {
    character_id: string,
    completion_time: string,
    completion_time_date: string,
    directive_tier_id: string,
    directive_tree_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('characters_directive_tier');
