import { requestFactory } from '../utils/requestHelpers';

export { characterDirectiveTree as characterDirectiveTreeFormat } from '../formats/characterDirectiveTree';

export type charactersDirectiveTreeQuery = Partial<{
    character_id: string,
    completion_time: string,
    completion_time_date: string,
    current_directive_tier_id: string,
    current_level: string,
    directive_tree_id: string
}>;

export const charactersDirectiveTree = requestFactory<'characters_directive_tree'>('characters_directive_tree');
