import { requestFactory } from '../utils/requestHelpers';

export { characterDirective as charactersDirectiveFormat } from '../formats/characterDirective';

export type charactersDirectiveQuery = Partial<{
    character_id: string,
    completion_time: string,
    completion_time_date: string,
    directive_id: string,
    directive_tree_id: string
}>;

export const charactersDirective = requestFactory('characters_directive');
