import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    character_id: string,
    directive_id: string,
    objective_id: string,
    objective_group_id: string,
    status: string,
    state_data: string,
};

export type query = {
    character_id: string,
    directive_id: string,
    objective_group_id: string,
    objective_id: string,
    state_data: string,
    status: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('characters_directive_objective');
