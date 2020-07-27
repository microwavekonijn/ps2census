import { requestFactory } from '../utils/Helpers';
import characterDirectiveObjective from '../types/characterDirectiveObjective';

export type typeData = characterDirectiveObjective;

export type query = Partial<{
    character_id: string,
    directive_id: string,
    objective_group_id: string,
    objective_id: string,
    state_data: string,
    status: string
}>;

export type resolve = never;

export default requestFactory<'characters_directive_objective'>('characters_directive_objective');
