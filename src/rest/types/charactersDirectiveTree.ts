import { commands, operations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    character_id: string,
    directive_tree_id: string,
    current_directive_tier_id: string,
    current_level: string,
    completion_time: string,
    completion_time_date: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<operations, query, typeData[], commands, resolve>('charactersDirectiveTree');

