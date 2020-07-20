import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';

export type typeData = {
    ability_id: string,
    ability_type_id: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('ability');

