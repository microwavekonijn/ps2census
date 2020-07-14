import { defineCensusType } from '../Base';

export type charactersDirectiveTreeData = {
    character_id: string,
    directive_tree_id: string,
    current_directive_tier_id: string,
    current_level: string,
    completion_time: string,
    completion_time_date: string,
};

export type charactersDirectiveTreeQuery = Partial<charactersDirectiveTreeData>

export default defineCensusType<charactersDirectiveTreeQuery, charactersDirectiveTreeData[]>('characters_directive_tree');
