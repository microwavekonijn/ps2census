import { requestFactory } from '../utils/Helpers';
import characterDirective from '../types/characterDirective';

export type typeData = characterDirective;

export type query = Partial<{
    character_id: string,
    completion_time: string,
    completion_time_date: string,
    directive_id: string,
    directive_tree_id: string
}>;

export type resolve = never;

export default requestFactory<'characters_directive'>('characters_directive');
