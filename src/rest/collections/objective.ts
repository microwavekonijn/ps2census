import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    objective_id: string,
    objective_type_id: string,
    objective_group_id: string,
    param1: string,
    param4: string,
    param5: string,
    param8: string,
};

export type query = {
    objective_group_id: string,
    objective_id: string,
    objective_type_id: string,
    param1: string,
    param2: string,
    param3: string,
    param4: string,
    param5: string,
    param6: string,
    param7: string,
    param8: string,
    param9: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('objective');
