import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
    objective_id: string,
    objective_type_id: string,
    objective_group_id: string,
    param1: string,
    param4: string,
    param5: string,
    param8: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('objective');

