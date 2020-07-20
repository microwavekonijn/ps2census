import { defineCensusType } from '../get';

export type charactersDirectiveTierData = {
    character_id: string,
    directive_tree_id: string,
    directive_tier_id: string,
    completion_time: string,
    completion_time_date: string,
};

export type charactersDirectiveTierQuery = Partial<charactersDirectiveTierData>

export default defineCensusType<charactersDirectiveTierQuery, charactersDirectiveTierData[]>('characters_directive_tier');
