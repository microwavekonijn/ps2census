import { defineCensusType } from './Base';

export type charactersDirectiveData = {
    character_id: string,
    directive_tree_id: string,
    directive_id: string,
    completion_time: string,
    completion_time_date: string
};

export default defineCensusType<Partial<charactersDirectiveData>, charactersDirectiveData[]>('characters_directive');
