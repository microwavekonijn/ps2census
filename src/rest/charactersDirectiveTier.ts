import { defineCensusType } from './Base';

export type charactersDirectiveTierData = {
    character_id: string,
    directive_tree_id: string,
    directive_tier_id: string,
    completion_time: string,
    completion_time_date: string
};

export default defineCensusType<Partial<charactersDirectiveTierData>, charactersDirectiveTierData[]>('characters_directive_tier');
